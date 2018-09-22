import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

import Insta1 from '../img/Insta1.png';
import Insta2 from '../img/Insta2.png';

const InstaCloneSite = (props) => {
  return (
    <div>
      <Card className="single-project-card">
        <CardBody>
            <CardTitle>Insta-notgram (Cloned Design SNS)</CardTitle>
            <CardSubtitle>React</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src={Insta1} alt="Instagram Clone cap" />
        <CardImg width="100%" src={Insta2} alt="Instagram Clone cap" />
        <CardBody>
            <CardText>Design Clone of Instagram feed. Design Only </CardText>
            <div className="card-links">
            <CardLink target="_blank" href="#">Instagram Clone</CardLink>
            <CardLink target="_blank" href="#">Github</CardLink>
            </div>

        </CardBody>
        </Card>
    </div>
    );
};

export default InstaCloneSite;