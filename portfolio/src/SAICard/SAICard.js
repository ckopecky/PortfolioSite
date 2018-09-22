import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

import SAI2 from '../img/SAI2.png';

const SAICard = (props) => {
  return (
    <div>
      <Card className="single-project-card">
        <CardBody>
          <CardTitle>Single Page Application Design</CardTitle>
          <CardSubtitle>San Francisco-Peninsula Chapter of Sigma Alpha Iota</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src={SAI2} alt="SAI website cap" />
        <CardBody>
          <CardText>A quick one page application that was built using a template design but customized to fit the organization's needs.</CardText>
          <CardLink target="_blank" href="https://saisfalums.wixsite.com/sai-sf">Sigma Alpha Iota Website</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default SAICard;