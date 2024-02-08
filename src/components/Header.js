import React from "react";
import Typed from "react-typed";


const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1> Passionate web developer and coding enthusiast</h1>
        <Typed
          className="typed-text"
          strings={["C / C++ / JAVA", "Data Structure And Algorithm","Web Development",  "BlockChain"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        
        <a href="https://drive.google.com/file/d/105wrBYTh_XffwOxhigkCt0bcacGIyV0d/view?usp=drive_link" target="_blank" className="btn-main-offer">Resume</a>
      </div>
    </div>
  )
}

export default Header;
