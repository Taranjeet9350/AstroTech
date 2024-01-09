import React from "react";
import './WhyAstro.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AstrologerCard() {
  return (
    <div className="DivCard">
      <div className="AboveCard">
        <Card className="Card">
          <Card.Img variant="top" className="img" src="https://astrologerpnrao.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-02-18-at-10.15.48-AM-576x576-1.webp" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

      </div>
    </div>
  );
}

export default AstrologerCard;