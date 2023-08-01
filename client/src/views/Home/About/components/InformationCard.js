import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Card, Button } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { GET_PORTFOLIO } from "../../../../utils/queries";

const InformationCard = () => {
  const { loading, data, refetch } = useQuery(GET_PORTFOLIO);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const name =
    data && data.getPortfolio 
      ? data.getPortfolio.information.name
      : "name";

  const title =
    data && data.getPortfolio
      ? data.getPortfolio.information.title
      : "title";

  const location = 
    data && data.getPortfolio
      ? data.getPortfolio.information.location
      : "location";
  

  return (
    <Card className="h-100">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3 className="subheading">Information</h3>
        <Button className="customButton" variant="outline-primary" size="md">
          <MdEdit />
        </Button>
      </Card.Header>
      <Card.Body>
        <Card.Text>Name: {name}</Card.Text>
        <Card.Text>Title: {title}</Card.Text>
        <Card.Text>Location: {location}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InformationCard;
