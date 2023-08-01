import React, { useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { useQuery } from "@apollo/client";
import { Card, Table, Button } from "react-bootstrap";
import { GET_PORTFOLIO } from "../../../../utils/queries";

const EducationTable = () => {
  const { loading, data, refetch } = useQuery(GET_PORTFOLIO);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const education =
    data && data.getPortfolio.education
      ? data.getPortfolio.education
      : [];

  return (
    <Card className="h-100">
      <Card.Header>
        <h3 className="subheading">Education</h3>
      </Card.Header>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Field of Study</th>
            <th>Start Year</th>
            <th>End Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {education.map((edu, index) => (
            <tr key={index}>
              <td>{edu.school}</td>
              <td>{edu.degree}</td>
              <td>{edu.fieldOfStudy}</td>
              <td>{edu.startYear}</td>
              <td>{edu.endYear}</td>
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

export default EducationTable;
