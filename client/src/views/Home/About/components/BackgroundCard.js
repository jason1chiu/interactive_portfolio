import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";
import { GET_PORTFOLIO } from "../../../../utils/queries";

const BackgroundCard = () => {
  const { loading, data, refetch } = useQuery(GET_PORTFOLIO);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const background = data && data.getPortfolio.about ? data.getPortfolio.about.background : "background";

  return (
    <Card className="h-100">
      <Card.Header>
        <h3 className="subheading">Background</h3>
      </Card.Header>
      <Card.Body>
        <Card.Text>{background}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BackgroundCard;
