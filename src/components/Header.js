import React from "react";
import Typed from "react-typed";


const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>web development and websites promotions</h1>
        <Typed
          className="typed-text"
          strings={["C / C++ / JAVA", "Data Structure And Algorithm","Web Development",  "BlockChain"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        
        <a href="https://docs.google.com/document/d/1H-GWxghyg3rs_Rc9jwnR9zPpUKC4Fq_S/edit?usp=drive_link&ouid=107300963580382753674&rtpof=true&sd=true" target="_blank" className="btn-main-offer">Resume</a>
      </div>
    </div>
  )
}

export default Header;
