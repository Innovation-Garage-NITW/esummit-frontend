import React, { useState } from 'react'
import "./whyus.css"

function Whyus() {
    const [activeSection, setActiveSection] = useState('section1');

    const toggleSection = (sectionId) => {
        setActiveSection(sectionId);
        console.log('button was clicked')
    };
    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (buttonId) => {
        setActiveButton(buttonId);
        toggleSection(`section${buttonId}`);
    };
    return (
        				
				<div className="switch-container">
				<div className="EventHeading ">
						<h1>WHY US</h1>
					</div>
					<div className="buttons">
					<button
        className={`button ${activeButton === 1 ? 'active' : ''}`}
        onClick={() => handleClick(1)}
      >
        ENTERPRENEURS
      </button>
      <button
        className={`button ${activeButton === 2 ? 'active' : ''}`}
        onClick={() => handleClick(2)}
      >
        BUSINESS LEADERS
      </button>
      <button
        className={`button ${activeButton === 3 ? 'active' : ''}`}
        onClick={() => handleClick(3)}
      >
     INVESTERS
      </button>
      <button
        className={`button ${activeButton === 4 ? 'active' : ''}`}
        onClick={() => handleClick(4)}
      >
       TECHIES
      </button>
	  </div>
	  <div className="sectionContainer">
      <div id="section1" className={`section ${activeSection === 'section1' ? 'active' : ''}`}>
        <h2 style={{textAlign:"center",color:"white"}}>ENTERPRENEURS</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit assumenda deleniti quas quasi libero error maxime facilis dolorum a laudantium aperiam vel consectetur animi eligendi nulla sit sint, natus sapiente?</p>
      </div>

      <div id="section2" className={`section ${activeSection === 'section2' ? 'active' : ''}`}>
        <h2 style={{textAlign:"center",color:"white"}}>BUSINESS LEADERS</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat nostrum repellat quis non, fugit id repudiandae totam illo! Iure, aspernatur sequi cupiditate fugiat dolorem molestias placeat sint facere assumenda maiores.</p>
      </div>

      <div id="section3" className={`section ${activeSection === 'section3' ? 'active' : ''}`}>
        <h2 style={{textAlign:"center",color:"white"}}>INVESTERS</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aspernatur voluptate neque! Adipisci quaerat harum incidunt, quibusdam nisi eius autem quidem fugiat est aperiam numquam architecto placeat molestiae laudantium minima?</p>
      </div>

      <div id="section4" className={`section ${activeSection === 'section4' ? 'active' : ''}`}>
        <h2 style={{textAlign:"center",color:"white"}}>TECHIES</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minus impedit, fuga dicta similique repellendus suscipit aliquam excepturi a cum dolore quis aut facere iure, voluptatem enim, dolores obcaecati reprehenderit?</p>
		</div>
      </div>
    </div>


    )
}

export default Whyus
