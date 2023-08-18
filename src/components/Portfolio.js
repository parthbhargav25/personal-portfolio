import React from "react";
import portfolio from "../images/portfolio.png";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
/*Fontawesome Imports*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
/* REACT POPUPBOX */
import { PopupboxManager,PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

    //Netflix 
    const openPopupboxNetflix = () => {
        const content=(
            <>
            <img className="portfolio-image-popupbox" src={netflix }  alt="Netflix Clone project"/> 
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, commodi officiis expedita quisquam at ullam dolor asperiores, cumque quas optio tempora. Non sint, est similique libero nesciunt molestias. Adipisci, soluta!</p>
            <b>GitHub:</b><a className="hyper-link" onClick={() => window.open("#")}>#</a>
          </> 
        )
       PopupboxManager.open({content})
    }
    const popupboxConfigNetflix = {
        titleBar: {
            enable: true,
            text: "Netflix Clone Project"
        },
        fadeIn: true,
        fadeInSpeed : 500
    }
    //PersnolPortfolioProject
    const openPopupboxPortfolio = () => {
        const content=(
            <>
            <img className="portfolio-image-popupbox" src={portfolio }  alt="Portfolio  project"/> 
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, commodi officiis expedita quisquam at ullam dolor asperiores, cumque quas optio tempora. Non sint, est similique libero nesciunt molestias. Adipisci, soluta!</p>
            <b>GitHub:</b><a className="hyper-link" onClick={() => window.open("https://github.com/parthbhargav25/personal-portfolio")}>https://github.com/parthbhargav25/personal-portfolio</a>
          </> 
        )
       PopupboxManager.open({content})
    }
    const popupboxConfigPortfolio = {
        titleBar: {
            enable: true,
            text: "Persnol Portfolio Project"
        },
        fadeIn: true,
        fadeInSpeed : 500
    }
    return (
        <div id="portfolio" className="portfolio-wrapper">
          <div className="container">
            <h1 className="text-uppercase text-center py-5">portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">

              <div className="portfolio-image-box"onClick={openPopupboxNetflix}>
                 <img className="portfolio-image" src={netflix} alt="Netflix clone project..."/>
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
             <div className="portfolio-image-box">
                 <img className="portfolio-image" src={cityGuide} alt="City Guid project..."/>
                 <div className="overflow"></div>
                 <FontAwesomeIcon className ="portfolio-icon" icon={faSearchPlus}/>
              </div>

           </div>

        </div>
        <PopupboxContainer {...popupboxConfigNetflix} />
        <PopupboxContainer {...popupboxConfigPortfolio} />

     </div>
  )
}

export default Portfolio;
