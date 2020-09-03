import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import "./style.scss"

export default function MainJumbotron() {
    return (
        <Jumbotron>
              <h1>Passion Is Life</h1>
              <p>May my passions also become yours...</p>
              <p>
                <Button variant="custom">Read more</Button>
              </p>
            </Jumbotron>
    )
}
