import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';


const DjangoNotes = (props) => {
  return (
    <div>
      <Card className="single-project-card">
        <CardBody>
          <CardTitle>Full-Stack Notes Application</CardTitle>
          <CardSubtitle>Django Stack</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Notes cap" />
        <CardBody>
          <CardText>Concept application that was created using Django, Python, and React</CardText>
          <div className="card-links">
          <CardLink target="_blank" href="#">Django Notes</CardLink>
          <CardLink target="_blank" href="#">Github</CardLink>
          </div>        
          </CardBody>
      </Card>
    </div>
  );
};

export default DjangoNotes;