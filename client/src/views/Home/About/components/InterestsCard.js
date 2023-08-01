import React, { useEffect } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
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

  const interests = data && data.getPortfolio ? data.getPortfolio.interests : [];

  return (
    <Card className="h-100 shadow">
      <Card.Header className="text-white">
        <h3 className="subheading">Interests</h3>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          {interests.map((interest) => (
            <ListGroupItem key={interest._id} className="d-flex justify-content-between align-items-center">
              {interest.interest}
              <Button className="customButton" variant="outline-primary" size="md">
                <MdEdit />
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default InterestsCard;

