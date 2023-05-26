import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Drvoice from "./voicedr.jpg";
import crop from "./cropdisease.jpg"
import chat from "./chatapplication.jpg";
import Faceswap from "./Faceswap.png"


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
              imgPath={crop}
              isBlog={false}
              title="Soyabean Leaf Disease Prediction"
              description="In this project, prediction of soyabean leaf diseased plant is done using deep learning techniques. CNN is used for classification of diseased leaf."
              ghLink="https://github.com/vaendole/crop-disease-prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat Application"
              description="In My Chat application user can create his group, can accept request , remove user, transfer adminship etc"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Drvoice}
              isBlog={false}
              title="Voice Prescription System"
              description="Desktop Application created for Doctor so they can diagnose the patient  and send Prescription to Patient through Mail"
              ghLink="https://github.com/vaendole/VoicePrescription_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Faceswap}
              isBlog={false}
              title="FaceSwapping"
              description="In this project face swapping is done using OpenCV in Computer Vision and Deep Learning."
              ghLink="https://github.com/vaendole/FaceSwappingProject"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
