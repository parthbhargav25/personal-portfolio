import React from "react";
import portfolio from "../images/portfolio2.png";
import amazon from "../images/amazon.png";
import tictactoe from "../images/tictactoe.png";
/*Fontawesome Imports*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
/* REACT POPUPBOX */
import { PopupboxManager,PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

    //Amazon 
    const openPopupboxAmazon = () => {
        const content=(
            <>
            <img className="portfolio-image-popupbox" src={amazon }  alt="Amazon Clone project"/> 
            <p>This is clone Landing page of Amazon.com website created using HTML & CSS </p>
            <b>GitHub:</b><a className="hyper-link" onClick={() => window.open("https://github.com/parthbhargav25/Amazon_Clone.git")}>https://github.com/parthbhargav25/Amazon_Clone.git</a>
          </> 
        )
       PopupboxManager.open({content})
    }
    const popupboxConfigAmazon = {
        titleBar: {
            enable: true,
            text: "Amazon Clone Project."
        },
        fadeIn: true,
        fadeInSpeed : 500
    }
     //PersnolPortfolioProject
     const openPopupboxPortfolio = () => {
      const content=(
          <>
          <img className="portfolio-image-popupbox" src={portfolio }  alt="Portfolio  project"/> 
          <p>Persnol Portfolio Project created using Bootstarp & ReactJs, Which has different components which showcase my persnol details , skills and contact information.</p>
          <b>GitHub:</b><a className="hyper-link" onClick={() => window.open("https://github.com/parthbhargav25/personal-portfolio")}>https://github.com/parthbhargav25/personal-portfolio</a>
        </> 
      )
     PopupboxManager.open({content})
  }

  const popupboxConfigPortfolio = {
      titleBar: {
          enable: true,
          text: " Persnol Portfolio Project."
      },
      fadeIn: true,
      fadeInSpeed : 500
  }
  
   
     //TicTacToeProject
     const openPopupboxtictactoe = () => {
      const content=(
          <>
          <img className="portfolio-image-popupbox" src={tictactoe}  alt="Tic-Tac-Toe project"/> 
          <p>Developed a classic Tic Tac Toe Game ,providing users with an interactive and enjoyable gaming experience.</p>
          <b>GitHub:</b><a className="hyper-link" onClick={() => window.open("https://parthbhargav25.github.io/Tic-Tac-Toe")}>https://parthbhargav25.github.io/Tic-Tac-Toe/</a>
        </> 
      )
     PopupboxManager.open({content})
  }
  const popupboxConfigtictactoe = {
      titleBar: {
          enable: true,
          text: "Tic-Tac-Toe Game"
      },
      fadeIn: true,
      fadeInSpeed : 500
  }
  
    return (
        <div id="portfolio" className="portfolio-wrapper">
          <div className="container">
            <h1 className="text-uppercase text-center py-5">portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">

              <div className="portfolio-image-box"onClick={openPopupboxAmazon}>
                 <img className="portfolio-image" src={amazon} alt="Amazon clone project..."/>
                 <div className="overflow"></div>
                 <FontAwesomeIcon className ="portfolio-icon" icon={faSearchPlus}/>
              </div>
             
            {/*-*/}
             <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                 <img className="portfolio-image" src={portfolio} alt="Persnol portfolio project..."/>
                 <div className="overflow"></div>    
                 <FontAwesomeIcon className ="portfolio-icon" icon={faSearchPlus}/>
                 </div>
            {/*-*/}
             <div className="portfolio-image-box" onClick={openPopupboxtictactoe}>
                 <img className="portfolio-image" src={tictactoe} alt="tictactoe..."/>
                 <div className="overflow"></div>
                 <FontAwesomeIcon className ="portfolio-icon" icon={faSearchPlus}/>
              </div>

           </div>

        </div>
        <PopupboxContainer {...popupboxConfigAmazon} />
        <PopupboxContainer {...popupboxConfigPortfolio}/>
        <PopupboxContainer {...popupboxConfigtictactoe}/>

     </div>
  )
}

export default Portfolio;
