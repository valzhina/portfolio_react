import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();
    
    useEffect(() => {
        console.log(textRef.current);
        init(textRef.current, { 
            showCursor: false, 
            backDelay: 700,
            backSpeed: 20,
            // showCursor: true,
            strings: ["React Developer","Python Engineer","Full Stack Engineer","Designer"],
        }); 
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer"> 
                    <img src="assets/Bz_Olya_shot_color.jpg" alt="" />
                </div> 
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Looking for a right developer?</h2>
                    <h1>Let's see if I can help</h1>
                    <h3>I'm here for you <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/arrow-down-3101.png" alt="" />
                </a>
            </div>
        </div>
    );
}