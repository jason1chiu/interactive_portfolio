import React from "react";
import { Card } from "react-bootstrap";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import { useQuery } from "@apollo/client";

const InterestsCard = () => {
  const { loading, data } = useQuery(GET_PORTFOLIO);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="h-100">
      <Card.Header>
        <h3 className="subheading">Interests</h3>
      </Card.Header>
      <Card.Body>
        <Card.Text>{data.getPortfolio.about[0].interests}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InterestsCard;
