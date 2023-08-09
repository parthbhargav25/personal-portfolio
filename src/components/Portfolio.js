import React from "react";
import portfolio from "../images/portfolio.png";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
/*Fontawesome Imports*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">portfolio</h1>
            <div className="image-box-wrapper  row  justify-content-center">
              <div className="portfolio-image-box">
                 <img className="portfolio-image" src={portfolio} alt="Persnol portfolio project..."/>
                 <div className="overflow"></div>    
                 <FontAwesomeIcon className ="portfolio-icon" icon={faSearchPlus}/>
                 </div>
             
            {/*-*/}
             <div className="portfolio-image-box">
                 <img className="portfolio-image" src={netflix} alt="Netflix clone project..."/>
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
     </div>
  )
}

export default Portfolio;
