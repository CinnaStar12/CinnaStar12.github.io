import React from "react"
import { Container, Row, Col } from "../../Components/Grid"
import Card from "../../Components/Card"
import Jumbotron from "../../Components/Jumbotron"
import "./About.css"
const About = () => {
    return (
        <Container fluid>

            <Jumbotron>
            </Jumbotron>
            <Row>
                <Col size="md-10">
                    <p className="h3">A Little Bit About Me</p>
                    <p>Hello! I'm Allan. I'm a Jr. Web Developer based out of Houston, TX. I am capable of full-stack web development utilizing the MERN Stack. I've recently participated in a Web Development bootcamp run by University of Texas at Austin. I am currently looking for employment so please contact me in interested!</p>
                    <p>In my off time, I enjoy many hobbies, including video games, model building, and watching motorsports, primarily Formula 1 Racing.</p>
                </Col>
            </Row>
            <Row>
                <Col size="lg-12" id="front-end">
                    <p className="h3">Front-end Skills</p>
                    <Row>
                        <Col size="md">
                            <Card img="./assets/images/cssLogo.png"
                                title="CSS" />
                        </Col>
                        <Col size="md">
                            <Card img="./assets/images/htmlLogo.png"
                                title="HTML" />
                        </Col>
                        <Col size="md">
                            <Card img="./assets/images/javascriptLogo.png"
                                title="JavaScript" />

                        </Col>
                        <Col size="md">
                            <Card img="./assets/images/bootstrap-logo.png"
                                title="CSS Frameworks" />
                        </Col>
                        <Col size="md">
                            <Card img="./assets/images/react_logo.png"
                                title="React" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col size="lg-12" id="back-end">
                    <p className="h3">Back-end Skills</p>
                    <Row>
                        <Col size="md">
                            <Card img="./assets/images/node-logo.png"
                                title="Node.js" />
                        </Col>
                        <Col size="md">
                            <Card img="./assets/images/expressjslogo.png"
                                title="Express" />
                        </Col>
                        <Col size="md">
                            <Card img="./assets/images/mysql_logo.png"
                                title="MySQL" />

                        </Col>
                        <Col size="md">
                            <Card img="./assets/images/mongodb.png"
                                title="MongoDB" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col size="lg-12" id="project-management">
                    <p className="h3">Project Management Skills</p>
                    <Row>
                        <Col size="md">
                            <Card img="./assets/images/mern-stack-logo.png"
                                title="MERN Stack" />
                        </Col>
                        <Col size="md">
                            <Card img="./assets/images/git_logo.png"
                                title="Git" />
                        </Col>
                        <Col size="md">
                            <Card img="./assets/images/github-logo.png"
                                title="GitHub" />
                        </Col>
                        <Col size="md">
                            <Card img="./assets/images/jest-logo.png"
                                title="Jest" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default About