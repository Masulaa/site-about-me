import React from "react";
import "./Home.css"; // Uvezivanje stila
import logo from "../../images/2.png";
import profile from "../../images/viber_image_2023-11-26_02-18-45-274.jpg";
import { Card } from "antd";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import signature from "../../images/signature (2).png"

const Home = () => {
  return (
    <div className="app">
      <div className="top-bar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="about-me-div">
          <span className="about-me">ABOUT ME</span>
        </div>
      </div>

      <div className="main-content">
        <div className="circle-image">
          <img src={profile} alt="Profilna slika" className="profile-image" />
        </div>

        <div className="proffession">WEB developer/Graphic Designer</div>

        <div className="greeting">
          <h1>Hi!</h1>
          <h1>I am Luka Masulovic!</h1>
        </div>

        <div className="dummy-text">
          <Card
            title="ABOUT ME"
            bordered={false}
            className="dark-card"
            style={{
              width: "auto",
              backgroundColor: "#0e0f11", // Boja pozadine u dark theme modu
            }}
          >
            <p>
              I am a front-end web developer and graphic designer.
              <br />
              At 17 years old, I hail from Montenegro and have a passion for
              both programming and design.
              <br />
              In terms of design, I specialize in sports design, particularly
              basketball, which I am passionate about.
              <br />
              I showcase my work on my Instagram page <a href="https://www.instagram.com/visualsbywh/">@visualsbywh</a>, where you
              can find a variety of projects.
              <br />
              Additionally, I work as a freelancer, and many of my works are
              featured on profiles such as AdmiralBET, Montenegrin Olympic
              Committee, dhika, and more.
              <br />
            </p>
            <p>
              Concerning programming, I am currently attending the <a href="https://academy.ictcortex.me/">Cortex
              Academy.</a>
              <br />
              I have recently completed a year-long cycle where I acquired all
              the skills necessary for a front-end developer.
              <br />
              I successfully completed courses in JavaScript, HTML, and CSS, and
              later advanced to a React course, mastering the skills needed for
              front-end development.
              <br />
              In a recent competition, my team and I developed the BiteBite
              application.
              <br />
              I served as the front-end team leader, and we secured second
              place.
              <br />
              The application's purpose is to provide meals to employees of a
              company.
              <br />
              Employees can choose their meals for the day or plan meals for the
              entire week, and the catering service then delivers the selected
              meals.
              <br />
            </p>
            <p>
              In addition to my technical pursuits, I continue to work on
              various design projects. Also, my future plans include learning
              backend development to become a full-stack developer.
              <br />
              If anyone is interested in collaboration or has any questions,
              feel free to reach out to me through the following social media
              platforms:
              <br />
            </p>
            <p>
              I am open to new opportunities and excited to connect with fellow
              enthusiasts in the field.
            </p>
          </Card>
        </div>

        {/* Društvene mreže */}
        <div className="social-media">
          <button
            className="button"
            onClick={() => {
              window.open("https://www.instagram.com/lmasulovic/", "_blank");
            }}
          >
            <FaInstagram className="contentbutton1" />
            <span className="contentbutton2">instagram</span>
          </button>
          <button
            className="button"
            onClick={() => {
              window.open(
                "https://www.tiktok.com/@lmasulovic?_t=8hffXZfvvOg&_r=1",
                "_blank"
              );
            }}
          >
            <FaTiktok className="contentbutton1" />
            <span className="contentbutton2">tiktok</span>
          </button>
        </div>
      </div>
      <div className="bottom">
        <p>Had a little fun while making this</p>
        <img className="signature" alt="sginature" src={signature}></img>
      </div>
    </div>
  );
};

export default Home;
