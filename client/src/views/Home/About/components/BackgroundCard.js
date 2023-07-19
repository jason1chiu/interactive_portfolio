import React from "react";
import { useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";
import { GET_PORTFOLIO } from "../../../../utils/queries";

const BackgroundCard = () => {
  const { loading, data } = useQuery(GET_PORTFOLIO);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="h-100">
      <Card.Header>
        <h3 className="subheading">Background</h3>
      </Card.Header>
      <Card.Body>
        <Card.Text>Background</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BackgroundCard;
