import React from 'react'
import {Card, Button} from 'react-bootstrap'

const AboutPage = () => {
    return (
        <div style={{width: "30rem", margin: "auto", marginTop: "10rem",color:"navy"}}>
            <Card className="text-center">
                <Card.Header>Words from the developer</Card.Header>
                <Card.Body>
                    <Card.Title>Tv Schedule</Card.Title>
                    <Card.Text>
                        Made by Luntungan,Junior B.J
                        <br/>
                        <br/>
                        API Endpoint yang saya gunakan adalah data Tv Schedule dari Tvmaze
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">~dev</Card.Footer>
            </Card>
        </div>
    )
}

export default AboutPage