import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

import ReactNotes from '../img/ReactNotes.png';

const LambdaReactNotes = (props) => {
  return (
    <div>
      <Card className="single-project-card">
        <CardBody>
          <CardTitle>Full-Stack Notes Application</CardTitle>
          <CardSubtitle>MERN Stack</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src={ReactNotes} alt="SAI website cap" />
        <CardBody>
          <CardText>Concept CRUD application that was created to client specification using MongoDB, Express, React and Node</CardText>
          <div className="card-links">
          <CardLink target="_blank" href="#">Lambda Notes</CardLink>
          <CardLink target="_blank" href="#">Github</CardLink>
          </div>
          
        </CardBody>
      </Card>
    </div>
  );
};

export default LambdaReactNotes;