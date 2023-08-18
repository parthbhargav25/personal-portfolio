import React from "react";
import author from "../ME.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
        <div className="row">
            <div className="col-lg-6 col-xm-12">
              <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt ="author...."/>
            </div>  
            </div>

            <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading">about me</h1>
            <p>
            Hello! I am Parth Bhargav, a dedicated individual currently pursuing an MCA degree with a passion for technology. Proficient in programming languages like C, C++, and Java, I excel in logical thinking and problem-solving. Alongside, I possess strong web development skills, mastering HTML, CSS, JavaScript, and React to build captivating user interfaces. I am committed to continuous learning, staying updated with the latest tech trends through online communities and events. As a team player with excellent communication skills, I collaborate effectively with others to bring innovative ideas to life. Beyond coding, I enjoy nature, reading, and sports like football and badminton, which provide a balanced and creative lifestyle. With an ever-growing thirst for knowledge and a determination to make a mark in the software development industry, I am poised to leave a positive impact and contribute significantly to the tech world.  After the website is finished and ready to deploy and sell a product or service. It is essential that your potential clients know about you. I will create an advertising campaign for you in  Google Adwords and Facebook!
          </p>
            </div>
            

        </div>
      
    </div>
  )
}

export default AboutMe
