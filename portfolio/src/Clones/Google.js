import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

import GoogleClone from '../img/GoogleClone.png';

const GoogleCloneSite = (props) => {
  return (
    <div>
      <Card className="single-project-card">
        <CardBody>
          <CardTitle>__oogle (Cloned Search Site)</CardTitle>
          <CardSubtitle>React, Reactstrap</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src={GoogleClone} alt="Google Clone cap" />
        <CardBody>
          <CardText>Clone of Google's search page. Really works! </CardText>
          <div className="card-links">
          <CardLink target="_blank" href="#">Google Clone</CardLink>
          <CardLink target="_blank" href="#">Github</CardLink>
          </div>
          
        </CardBody>
      </Card>
    </div>
  );
};

export default GoogleCloneSite;