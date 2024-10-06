import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from '../../Assets/pooja.jpg';




import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learned
              something, I think… 🤷‍♂️
              <br />
              <br />I have a deep passion for web development and have gained solid experience in various technologies.
              <i>
                <b className="purple"> I am fluent in web development technologies like HTML, CSS, JavaScript, and React, as well as backend technologies like Node.js, Express.js, and MongoDB.</b>
              </i>
              <br />
              <br />
              My field of interest includes building modern web applications and developing full-stack projects that focus on user experience and performance. &nbsp;
              <i>
                <b className="purple">I enjoy working on MERN stack projects, and I also apply my skills in Python and C when required for different problem-solving scenarios.</b>
                {" "}
                <b className="purple">
                  Whenever possible, I strive to enhance my knowledge in web technologies, learn new frameworks, and implement them in building real-world applications.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products with <b className="purple">Node.js</b> and
              <i>
                <b className="purple"> Modern JavaScript Libraries and Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Node.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
          <Tilt>
  <img
    src={myImg}
    className="img-fluid"
    style={{
      borderRadius: '50%',
      border: '3px solid #6C63FF',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    }}
    alt="avatar"
  />
</Tilt>

          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/poojasawant973"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/itz_pooja973"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pooja-sawant-0a80002a7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/poojasawant973/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
