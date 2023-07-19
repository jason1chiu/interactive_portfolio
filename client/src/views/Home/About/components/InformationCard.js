import React from "react";
import { useQuery } from '@apollo/client';
import { Card } from "react-bootstrap";
import { GET_PORTFOLIO } from "../../../../utils/queries";

const InformationCard = () => {
  const { loading, data } = useQuery(GET_PORTFOLIO);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="h-100">
      <Card.Header>
        <h3 className="subheading">Information</h3>
      </Card.Header>
      <Card.Body>
      <Card.Text>Information</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InformationCard;
