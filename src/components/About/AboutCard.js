import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pooja Sawant </span>
            from <span className="purple"> Amravati, Maharashtra, India.</span>
            <br />
            I am a fresher looking for a job. I have completed my <strong>Bachelor of Arts</strong> from <strong>Sant Gadge Baba Amravati University</strong>
            <br />
            I have a deep interest in coding, so I completed a <strong> 2-year Advanced Diploma In Software Programming</strong> at <strong>Navgurukul</strong>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling and exploring new things
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about different cultures and eating different types of food
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pooja</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
