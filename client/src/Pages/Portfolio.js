import React from "react"
import { Container, Row, Col } from "../Components/Grid"
import Project from "../Components/Project"

const Portfolio = () => {
    return (
            <Container>
                <Row>
                    <Col size="lg">
                        <p className="h3">Projects</p>
                        <Row>
                            <Project 
                            title="LouVR3D"
                            img="/assets/images/pyramid.jpg"
                            text="A dynamically populated 3D museum exhibit using museum APIs and Amazon S3"
                            deploy="https://louvr3d.herokuapp.com/"
                            repo="https://github.com/kevans0625/LouVR3D"/>
                            <Project 
                            title="Vaendio"
                            img="/assets/images/vaendio.png"
                            text="An app created to help smaller vendors list their places of business (ie. food trucks, farmers markets, road side stands, etc.) and to help users find local goods and services"
                            deploy="https://vaendio-ajb.herokuapp.com/"
                            repo="https://github.com/CinnaStar12/Vaendio"/>
                            <Project 
                            title="kiloMaps"
                            img="/assets/images/kilo.png"
                            text="An app to help you plan out or redesign the layouts of your room. My very first project."
                            deploy="https://kilomaps.web.app/"
                            repo="https://github.com/CinnaStar12/kiloMaps"/>
                            <Project 
                            title="Note Taker"
                            img="/assets/images/note-taker.png"
                            text="My first express app. Allow you to take notes and save them to an express server"
                            deploy="https://ajb-note-taker.herokuapp.com/"
                            repo="https://github.com/CinnaStar12/Note-Taker"/>
                        </Row>
                    </Col>
                </Row>
            </Container>
    )
}

export default Portfolio;