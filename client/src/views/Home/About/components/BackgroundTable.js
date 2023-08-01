import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Card, Table, Button } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { GET_PORTFOLIO } from "../../../../utils/queries";

const BackgroundTable = () => {
  const { loading, data, refetch } = useQuery(GET_PORTFOLIO);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const background =
    data && data.getPortfolio.background
      ? data.getPortfolio.background
      : [];

  return (
    <Card className="h-100">
      <Card.Header>
        <h3 className="subheading">Background</h3>
      </Card.Header>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Start Year</th>
            <th>End Year</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {background.map((bg, index) => (
            <tr key={index}>
              <td>{bg.jobTitle}</td>
              <td>{bg.company}</td>
              <td>{bg.startYear}</td>
              <td>{bg.endYear}</td>
              <td>{bg.description}</td>
              <td>
                <Button className="customButton" variant="outline-primary" size="md">
                  <MdEdit />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default BackgroundTable;
