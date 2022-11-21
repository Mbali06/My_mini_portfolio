import React from "react";
import pfp from "../../assets/assets/images/mbali_hope_luthi06.jpg";

const About = () => (
    <section>
        <div className="row">
            <img src={pfp} id="pfp" className="mx-auto" alt="Mbali Luthi" />
        </div>

        <div className="about">
            <h1>Hi, I'm Mbali Hope Luthi</h1>
            <p>
            A creative hard worker, always eager to learn new things, flexible,
            Team Player and also manage well with Individual projects. 
            I am currently studying Software Development at WeThinkCode using
            Flutter and Dart. I have also worked with Python using google APIs,
            OOP on Java, JavaScript, HTML and CSS for web page development in my 
            individual and group projects. I have also used Git for Version Control,
            deployment and Validation of code. My interest is to work on projects that
            have direct impact to the user. My time at WeThinkCode has taught me how to 
            communicate better, resolve conflicts in a team, resilience, patience and that
            I can achieve everything I put my mind to with grit and determination.
            </p>
            <p>I believe SovTech is a great place for me to grow and explore my way as a developer, 
                as I have a niche for self development and the development of others  through me.</p>
        </div>
    </section>
)

export default About;