import React, { useEffect, useRef, useState } from 'react'
import './OverViewSection2.css'
import overviewtext from "../Images/overviewtext2.png"
import overviewbox from "../Images/overviewbox2.png"
import { TypeAnimation } from 'react-type-animation'
// import { wrap } from 'gsap'


const data = [
  {
    'number': '30', 'duration': '5', 'name': "speaker"
  },
  {
    'number': '10', 'duration': '5', 'name': "events"
  },
  {
    'number': '10', 'duration': '5', 'name': "sponsors"
  }
]

function OverViewSection2() {


  useEffect(() => {
    let words = document.querySelectorAll(".count");
    words.forEach(word => {
      let letters = word.textContent.split("");
      word.textContent = "";
      letters.forEach(letter => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
      });
    });

    let word2 = document.querySelectorAll(".countword");
    word2.forEach(word => {
      let letters = word.textContent.split("");
      word.textContent = "";
      letters.forEach(letter => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
      });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    let currentWordIndex2 = 0;
    let maxWordIndex2 = word2.length - 1;
    word2[currentWordIndex2].style.opacity = "1";

    const rotateText = () => {
      let currentWord = words[currentWordIndex];
      let nextWord =
        currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.className = "letter out";
        }, i * 80);
      });
      nextWord.style.opacity = "1";
      Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
          letter.className = "letter in";
        }, 340 + i * 80);
      });
      currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    }

    const rotateCountWord = () => {
      let currentWord = word2[currentWordIndex2];
      let nextWord =
        currentWordIndex2 === maxWordIndex2 ? word2[0] : word2[currentWordIndex2 + 1];
      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.className = "letter out";
        }, i * 80);
      });
      nextWord.style.opacity = "1";
      Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
          letter.className = "letter in";
        }, 340 + i * 80);
      });
      currentWordIndex2 =
        currentWordIndex2 === maxWordIndex2 ? 0 : currentWordIndex2 + 1;
    }
    rotateText();
    rotateCountWord();
    setInterval(rotateText, 4000);
    setInterval(rotateCountWord, 4000);
  }, [])

  return (
    <div className="overview-body">
      <div className='overexplain'>
        <div className='overpara'>
          <p>Crafted for the seekers of inspiration: ESummit beckons. Dive into a realm where sparks of innovation meet the whispers of  change. Join us in shaping a future beyond boundaries at NITW premeier event. ESummit--where creativity takes flight in the uncharted</p>
        </div>
      </div>
      <div className='overview-container'>
        <div className='overviewheading'>
          <TypeAnimation
            sequence={[
              "NITW E-SUMMIT Presenting ...",
              () => {
                // console.log('Sequence completed');
              },
            ]}
            wrapper="h1"
            cursor={true}
            repeat={1}
            speed={1}
          />
        </div>
        <div className='statscontainer'>
          <div className='countcontainer'>
            <p className='countpara'>
              <span className='count speakc'>30+</span>
              <span className='count eventc'>10+</span>
              <span className='count sponserc'>10+</span>
            </p>
          </div>
          <div className='countfoot'>
            <p className='countfootpara'>
              <span className='countword speakword'>SPEAKERS</span>
              <span className='countword eventword'>&nbsp;&nbsp;EVENTS&nbsp;&nbsp;</span>
              <span className='countword sponserword'>SPONSORS</span>
            </p>
          </div>
        </div>
        {/* <div className='overcard-container'>
          {data.map((d, i) => {
            return (
              <div className='overcard'>
                <div key={i} className='diamond'>
                  <Count number={d.number} duration={d.duration} />
                </div>
                <div className='overdes'>
                  <p>{d.name}</p>
                </div>
              </div>
            )
          })}
        </div> */}
      </div>
    </div>
  )
}

export default OverViewSection2
