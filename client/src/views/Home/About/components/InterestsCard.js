import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import { useQuery } from "@apollo/client";

const InterestsCard = () => {
  const { loading, data, refetch } = useQuery(GET_PORTFOLIO);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const interests = data && data.getPortfolio.about && data.getPortfolio.about.length > 0 ? data.getPortfolio.about[0].interests : "interests";

  return (
    <Card className="h-100">
      <Card.Header>
        <h3 className="subheading">Interests</h3>
      </Card.Header>
      <Card.Body>
        <Card.Text>{interests}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InterestsCard;
