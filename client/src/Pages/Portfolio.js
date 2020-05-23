import React from "react"
import { Container, Row, Col } from "../Components/Grid"
import Card from "../Components/Card"

const Portfolio = () => {
    return (
            <Container>
                <Row>
                    <Col size="lg">
                        <p className="h3">Projects</p>
                        <Row>
                            <Card title="Vaendio" img="./assets/images/vaendio.png" href="https://github.com/CinnaStar12/Vaendio"/>
                            <Card title="kiloMaps" img="./assets/images/kilo.png" href="https://github.com/CinnaStar12/kiloMaps"/>
                            <Card title="Note-Taker" img="./assets/images/note-taker.png" href="https://github.com/CinnaStar12/Note-Taker"/>
                            <Card title="Day Planner" img="./assets/images/planner.png" href="https://github.com/CinnaStar12/Day_Planner"/>
                        </Row>
                    </Col>
                </Row>
            </Container>
    )
}

export default Portfolio;