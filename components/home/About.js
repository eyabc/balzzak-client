import React from "react";

const aboutUs = '../images/about_us.png';

const About = () => {
  return (
    <>
    <div
        style={{
            borderWidth: '2px',
            borderColor: '#ff6e6e',
            borderStyle: 'solid',
        }}
    >
        <h1>About</h1>
        <img
            src={aboutUs}
            alt="About us"
            style={{
            width: '100%',
            }}
        />
    </div>
    </>
  );
};

export default About;