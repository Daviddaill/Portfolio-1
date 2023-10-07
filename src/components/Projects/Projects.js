import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import reddit from "../../Assets/Projects/reddit.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Gérer Mon Gîte"
              description="A simple desktop app to help short-term rental home owners manage their business.
              Record reservations, Create contracts, invoices, e-mails and customer logbook automatically, Access statistics and turnover."
              ghLink="https://github.com/Daviddaill/Booking-Management-System"
              demoLink="https://www.gerer-mon-gite.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reddit}
              isBlog={false}
              title="Reddit Lite"
              description="Search, explore, and read articles effortlessly. Discover content by keywords or categories, preview results, and enjoy a responsive experience with React and Redux. Simplify your reading journey today! 📚📰🚀"
              ghLink="https://github.com/Daviddaill/Reddit-Lite"
              demoLink="https://lite-reddit.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Full-Stack Engineer Course"
              description="Get quick access to all the information you need with this comprehensive course. Each important topic is separated by card and each card as chapter and sub-chapter links to help you get the job done."
              ghLink="https://github.com/Daviddaill/Daviddaill-fullstack-course"
              demoLink="https://daviddaill.github.io/Daviddaill-fullstack-course/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Converting PDF into HTMl"
              description="Conversion of over 300 pdf templates to html.
              Use of Html and CSS, with great attention to detail, quick analysis of html structure and effective CSS styling. Creation of a model and components reusable in all files."
              ghLink="https://github.com/Daviddaill/Pdf_to_html_template"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
