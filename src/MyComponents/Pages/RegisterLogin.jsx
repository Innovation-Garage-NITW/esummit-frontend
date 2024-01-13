import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../../context/userAuthContext";
import "./RegisterLogin.css";
export const RegisterLogin = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [Username, setUsername] = useState("");
  const [mail, setmail] = useState("");
  const [college,setcollege]=useState("")
  const [flag, setFlag] = useState(false);
  const [showVerified, setShowVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
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

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      setShowVerified(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <><div className="newbody">
      <div className="p-4_box">
        <h2 className="mb-3">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className='input-box'>
  <input type='text' value={Username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' required />
  <img className="icon" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/person-male.png" alt="person-male"/>
</div>

<div className='input-box'>
  <input type='text' value={college} onChange={(e) => setcollege(e.target.value)} placeholder='College' required />
  <img className='icon' width="30" height="30" src="https://img.icons8.com/ios-filled/50/university.png" alt="university"/>
</div>

<div className='input-box'>
  <input type='email' value={mail} onChange={(e) => setmail(e.target.value)} placeholder='Mail' required />
  <img className='icon' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/new-post.png" alt="new-post"/>
  
</div>
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Button type="submit" variant="primary">
              Send Otp
            </Button>
            &nbsp;
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
          </div>
        </Form>

        <Form  onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          {showVerified && <div>Verified!</div>}
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Verify
            </Button>
          </div>
        </Form>
      </div>
      </div>
    </>
  );
};