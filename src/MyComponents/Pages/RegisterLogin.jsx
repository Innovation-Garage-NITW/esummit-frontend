import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../../context/userAuthContext";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import "./RegisterLogin.css";
import { loginUser, registerUser } from "../../../backend_functions";
import { useNavigate } from "react-router-dom";
import esummitlogo from '../Images/logo1.png';
import Spinner from "../Spinner";
//import "./SignIn";
export const RegisterLogin = () => {
	const [error, setError] = useState("");
	const [number, setNumber] = useState("");
	const [Username, setUsername] = useState("");
	const [mail, setmail] = useState("");
	const [college, setcollege] = useState("")
	const [flag, setFlag] = useState(false);
	const [flag2, setFlag2] = useState(false);
	const [showVerified, setShowVerified] = useState(true);
	const [otp, setOtp] = useState("");
	const [otp2, setOtp2] = useState("");
	const [result, setResult] = useState("");
	const { setUpRecaptha, logOut } = useUserAuth();
	const [number2, setNumber2] = useState("");
	const [open, setOpen] = React.useState(false);
	const [showLoginForm, setShowLoginForm] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});
	// flag2 otp2 ( getotp2 and verify otp 2 have been) are for the otp received from the login section it has the same backend as the register make the changes according ly

	const handleRegisterLinkClick = () => {
		setShowLoginForm(!showLoginForm);
	};



	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const getOtp = async (e) => {
		e.preventDefault();
		// console.log(number);
		setError("");
		if (number === "" || number === undefined)
			return setError("Please enter a valid phone number!");
		try {
			const response = await setUpRecaptha(number);
			setResult(response);
			setFlag(true);
		} catch (err) {
			setError(err.message);
		}
	};
	const getOtp2 = async (e) => {
		e.preventDefault();
		// console.log(number2);
		setError("");
		if (number2 === "" || number2 === undefined)
			return setError("Please enter a valid phone number!");
		try {
			const response = await setUpRecaptha(number2);
			setResult(response);
			setFlag2(true);
		} catch (err) {
			setError(err.message);
		}
	};

	const verifyOtp = async (e) => {
		// console.log("otp", otp);
		e.preventDefault();
		setError("");
		setIsLoading(true);
		if (otp === "" || otp === null) return;
		try {
			await result.confirm(otp).then(async (result) => {
				const user = result.user;
				await registerUser(user, Username, mail, college);
			}).catch((err) => {
				setError(err.message);
			});
			setShowVerified(true);
			setOpen(true)
			setIsLoading(false);
			navigate('/')
		} catch (err) {
			setError(err.message);
		}
	};
	const verifyOtp2 = async (e) => {
		// console.log("otp", otp2);
		setIsLoading(true);
		e.preventDefault();
		setError("");
		if (otp2 === "" || otp2 === null) return;
		try {
			await result.confirm(otp2).then(async (result) => {
				// console.log('result', result);
				const user = result.user;
				const checkLogin = await loginUser(user);
				if (checkLogin.success) {
					setShowVerified(true);
					setOpen(true)
					setIsLoading(false);
					navigate('/')
				} else {
					setIsLoading(false);
					alert("User not registered");
					logOut();
				}
			}).catch((err) => {
				setIsLoading(false);
				alert("Invalid OTP");
				setError(err.message);
			});
		} catch (err) {
			setIsLoading(false);
			alert("Something went wrong");
			setError(err.message);
		}
	};

	return (
		<>{showLoginForm && <div className="newbody">
			<div className="image">
				<img src={esummitlogo}></img>
			</div>
			<div className="p-4_box">
				<h2 className="mb-3">Register</h2>
				<Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<div className='input-box'>
							<input type='text' value={Username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' required />

						</div>

						<div className='input-box'>
							<input type='text' value={college} onChange={(e) => setcollege(e.target.value)} placeholder='College' required />

						</div>

						<div className='input-box'>
							<input type='email' value={mail} onChange={(e) => setmail(e.target.value)} placeholder='Mail' required />


						</div>

						<PhoneInput
							className="input-box"
							defaultCountry="IN"
							value={number}
							onChange={setNumber}
							placeholder="Enter Phone Number"
							required
						/>
						<div id="recaptcha-container"></div>
					</Form.Group>
					<div className="button-right">
						<Button type="submit" variant="primary">
							Send Otp
						</Button>
						&nbsp;
					</div>
				</Form>

				<Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
					<Form.Group className="mb-3" controlId="formBasicOtp">
						<Form.Control className="otp_box"
							type="otp"
							placeholder="Enter OTP"
							onChange={(e) => setOtp(e.target.value)}

						/>{

						}
					</Form.Group>
					<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
						<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
							Congrats! Now Sit back and Relax
						</Alert>
					</Snackbar>
					{showVerified && <div className="toast">cool


					</div>}

					<div className="button-right">
						<Link to="/">
							<Button variant="secondary">Cancel</Button>
						</Link>
						&nbsp;
						<div style={{ display: "flex", justifyContent: "center" }}>
							{isLoading ? <Spinner className="loader" /> : <Button type="submit" variant="primary">
								Verify
							</Button>}
						</div>
					</div>
				</Form>
				<div className='Register-Link'>
					<p>Already registered?
						<Link onClick={handleRegisterLinkClick}>       Sign In</Link>
					</p>
				</div>
			</div>
		</div>}
			{!showLoginForm &&
				<div className='newbody'>
					<div className="image">
						<img src={esummitlogo}></img>
					</div>
					<div className='p5-box'>
						<h2 className="mb-3">Login</h2>

						<Form onSubmit={getOtp2} style={{ display: !flag2 ? "block" : "none" }}>
							<Form.Group className="mb-3" controlId="formBasicEmail">

								<PhoneInput
									className="input-box"
									defaultCountry="IN"
									value={number2}
									onChange={setNumber2}
									placeholder="Enter Phone Number"
									required
								/>
								<div id="recaptcha-container"></div>
							</Form.Group>
							<div className="button-right">
								<Button type="submit" variant="primary">
									Send Otp
								</Button>
								&nbsp;
							</div>
						</Form>

						<Form onSubmit={verifyOtp2} style={{ display: flag2 ? "block" : "none" }}>
							<Form.Group className="mb-3" controlId="formBasicOtp">
								<Form.Control className="otp_box2"
									type="otp"
									placeholder="Enter OTP"
									onChange={(e) => setOtp2(e.target.value)}

								/>
							</Form.Group>
							<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
								<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
									You are Signed In
								</Alert>
							</Snackbar>
							<div className="button-right" style={{ display: "flex", justifyContent: "center" }}>
								{isLoading ? <Spinner className="loader" /> : <Button type="submit" variant="primary">
									Login
								</Button>}
								&nbsp;
							</div>

						</Form>
						<div className='RegisterLink'>
							<p>Don't have an account?
								<Link onClick={handleRegisterLinkClick} > Register</Link>
							</p>
						</div>
					</div>
				</div>}
		</>
	);
};