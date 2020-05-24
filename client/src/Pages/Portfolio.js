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
                            <Project 
                            title="Dayplanner"
                            img="/assets/images/planner.png"
                            text="A simple app that allow you to plan out a workday. It uses Moment.js in order to tell you what tasks are upcoming and which have already passed"
                            deploy="https://cinnastar12.github.io/Day_Planner/"
                            repo="https://github.com/CinnaStar12/Day_Planner"/>
                        </Row>
                    </Col>
                </Row>
            </Container>
    )
}

export default Portfolio;