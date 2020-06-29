import React from "react"
import { Container, Row, Col } from "../Components/Grid"

const Contact = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="lg-12">
                    <p className="h3">Contact Information</p>
                    <p>Email: allan.binayao@gmail.com</p>
                    <p>Phone #: (832) 725-0041</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;