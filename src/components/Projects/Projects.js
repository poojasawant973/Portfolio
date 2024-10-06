import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import homey from "../../Assets/Projects/homey.png";
import spotify from "../../Assets/Projects/spotify.png";
import todolist from "../../Assets/Projects/todolists.png";
import hotel from "../../Assets/Projects/hotel.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/image.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="StayEase Hotel Booking Platform"
              description="A collaborative project built with React, MongoDB, and Tailwind CSS. StayEase allows users to search hotels by city, view available rooms, and book their stay through a responsive and user-friendly interface."
              ghLink="https://github.com/poojasawant973/G-1-Hotel_Website.git"
              demoLink="https://stayease-hotel.netlify.app/"
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather Application"
              description="Real-time Weather Application built with React.js and Bootstrap, utilizing a live weather API to provide up-to-date weather information. Users can search for any city and receive instant weather details including temperature, humidity, and conditions."
              ghLink="https://github.com/poojasawant973/Weather-Application"
              demoLink="https://poojasawant-weather-application.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="To-Do List"
              description="Todo List application developed using React.js and Bootstrap for an intuitive user interface. Users can easily add, edit, and delete tasks, with updates reflecting in real-time. The application integrates local storage to save tasks, ensuring data persistence across sessions. Fully responsive, providing a seamless experience on both desktop and mobile devices"
              ghLink="https://github.com/poojasawant973/Todo_List_Project"
              demoLink="https://poojasawant-todolist.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homey}
              isBlog={false}
              title="Homey Food E-Commerce Website"
              description="A group project developed using HTML, CSS, JavaScript, and Bootstrap. Homey allows users to browse food categories, add items to their wishlist, write reviews, and use login/signup functionality for a personalized experience."
              ghLink="https://github.com/your-username/Homey-Food-Ecommerce"
              demoLink="https://your-demo-link.com"
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify Music Player"
              description="Created a Spotify Music Player using HTML, CSS, and JavaScript. Features include play, pause, and skip controls, along with dynamic song display. The player is fully responsive, offering a smooth user experience across devices."
              demoLink="https://spotify-music-player-techalpha.netlify.app/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
