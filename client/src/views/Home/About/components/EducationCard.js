import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import { useQuery } from "@apollo/client";

const EducationCard = () => {
  const { loading, data, refetch } = useQuery(GET_PORTFOLIO);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const education = data && data.getPortfolio.about ? data.getPortfolio.about.education : "education";

  return (
    <Card className="h-100">
      <Card.Header>
        <h3 className="subheading">Education</h3>
      </Card.Header>
      <Card.Body>
        <Card.Text>{education}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EducationCard;
