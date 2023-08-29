import React from "react";
import portfolio from "../images/portfolio2.png";
import amazon from "../images/amazon.png";
import cityGuide from "../images/city-guide-app.png";
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
  
   
     //CityGuideProject
     const openPopupboxCityGuide = () => {
      const content=(
          <>
          <img className="portfolio-image-popupbox" src={cityGuide}  alt="CityGuide project"/> 
          <p>Persnol Portfolio Project created using Bootstarp & ReactJs, Which has different components which showcase my persnol details , skills and contact information.</p>
          <b>GitHub:</b><a className="hyper-link" onClick={() => window.open("https://github.com/parthbhargav25/personal-portfolio")}>https://github.com/parthbhargav25/personal-portfolio</a>
        </> 
      )
     PopupboxManager.open({content})
  }
  const popupboxConfigCityGuide = {
      titleBar: {
          enable: true,
          text: " Project."
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
             <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
                 <img className="portfolio-image" src={cityGuide} alt="City Guid project..."/>
                 <div className="overflow"></div>
                 <FontAwesomeIcon className ="portfolio-icon" icon={faSearchPlus}/>
              </div>

           </div>

        </div>
        <PopupboxContainer {...popupboxConfigAmazon} />
        <PopupboxContainer {...popupboxConfigPortfolio}/>
        <PopupboxContainer {...popupboxConfigCityGuide}/>

     </div>
  )
}

export default Portfolio;
