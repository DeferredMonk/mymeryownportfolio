import React from "react";
import "./Skills.sass";

const Skills = () => {
  return (
    <div id="skills">
      <div className="wrapper">
        <div className="meContainer">
          <img className="me" src="/img_2784.jpg" alt="picture of Marco" />
        </div>
        <div className="speech">
          <h2 className="smallHeader">Who am I?</h2>
          <p className="speechAboutMe">
            I am a student at XAMK, studying full-stack programming online. I
            got into coding in 2021 while studying in Haaga-Helia open UAS. I
            enjoyed it so much that I decided to continue and embrace it! At the
            moment I work full time as an ICT specialist and study web
            developement during evenings.
          </p>
            <h4 style={{ marginTop: "1rem", marginBottom: "1rem" }}>I am</h4>
            <ul>
              <li>A team player</li>
              <p style={{ fontSize: "small" }}>
                I am not afraid to ask for help and I love helping others.
              </p>
              <li>Proactive</li>
              <p style={{ fontSize: "small" }}>
                I do my best to complete my tasks. Even the hardest tasks I try
                to figure out the best why to solve tasks
              </p>
              <li>Customer service</li>
              <p style={{ fontSize: "small" }}>
                I've been working with customers daily for over 4 years. I
                understand and know how to communicate with them.
              </p>
              <li>Problem solving</li>
              <p style={{ fontSize: "small" }}>
                Problem solving has become a day to day routine for me.
              </p>
            </ul>
        </div>
      </div>
      <div className="wrapper">
        <div>
          <h2 className="smallHeader">Areas of expertise</h2>
          <p>During my journey I learned multiple prohramming</p>
        </div>
        <div className="skillIcons">
          <img
            className="icon"
            src="/icons8-javascript-96.png"
            width="96px"
            height="96px"
          />
          <img
            className="icon"
            src="/icons8-css3-96.png"
            width="96px"
            height="96px"
          />
          <img
            className="icon"
            src="/icons8-git-96.png"
            width="96px"
            height="96px"
          />
          <img
            className="icon"
            src="/icons8-html-5-96.png"
            width="96px"
            height="96px"
          />
          <img
            className="icon"
            src="/icons8-nodejs-96.png"
            width="96px"
            height="96px"
          />
          <img
            className="icon"
            src="/icons8-react-native-96.png"
            width="96px"
            height="96px"
          />
          <img
            className="icon"
            src="/icons8-sass-96.png"
            width="96px"
            height="96px"
          />
          <img
            className="icon"
            src="/icons8-sql-96.png"
            width="96px"
            height="96px"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
