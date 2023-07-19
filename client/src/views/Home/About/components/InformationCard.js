import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";
import { GET_PORTFOLIO } from "../../../../utils/queries";

const InformationCard = () => {
  const { loading, data, refetch } = useQuery(GET_PORTFOLIO);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const information =
    data && data.getPortfolio.about && data.getPortfolio.about.length > 0
      ? data.getPortfolio.about[0].information
      : "information";

  return (
    <Card className="h-100">
      <Card.Header>
        <h3 className="subheading">Information</h3>
      </Card.Header>
      <Card.Body>
        <Card.Text>{information}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InformationCard;
