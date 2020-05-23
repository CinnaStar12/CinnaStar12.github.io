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
                    <p className="h3">Lorem Ipsum</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit mauris, lacinia id est id, iaculis ultricies odio. Nullam a libero dolor. Aliquam auctor varius ornare. Pellentesque porta tortor ut dolor rutrum vulputate. Donec eget tempor tortor, in sodales leo. Duis ligula ipsum, vehicula sit amet faucibus sed, suscipit molestie mi. Praesent eleifend eu nisl quis mattis. Aenean imperdiet tincidunt libero a tempus. Nam diam diam, commodo et maximus in, dictum at nunc. Quisque tincidunt dignissim arcu, non vehicula lorem auctor egestas.</p>
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