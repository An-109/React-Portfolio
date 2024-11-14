import React, { useState, useEffect } from "react";
import './index.css'
export default function AboutMe(){
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const header1: React.CSSProperties = {
        fontSize: isMobile ? "18px" : "20px",
        color: "black",
        paddingLeft: isMobile ? "10px" : "20px",
        paddingTop: isMobile?'120px': '150px',
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        position: "absolute",
        top: isMobile ? '10px' : '20px',
        left: isMobile ? '10px' : '20px',
       
    };

    const paragraphStyle: React.CSSProperties = {
        position: "absolute",
        top: isMobile ? "180px" : "120px",
        left: "30px",
        paddingTop: '150px',
        textAlign: isMobile ? "left" : "center",
        fontSize: isMobile ? "18px" : "20px",
    };
    return(
        <div className="backGround">
        <header>
            
            <h1 style={header1}>
                About Me
            </h1 >
            <p style={paragraphStyle}>My name is An Le, I am currently a student learning programming and is planning to enter college for computer science. I currently am learning to code in a programming bootcamp.</p>
           
        </header>
        </div>
    );
}