import React, { useEffect, useState } from "react";
import { MdEdit, MdAddCircle } from "react-icons/md";
import { useQuery } from "@apollo/client";
import { Card, Table, Button } from "react-bootstrap";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import AddEducationForm from "./AddEducationForm";
import EditEducationForm from "./EditEducationForm";
import Auth from "../../../../utils/auth";

const EducationTable = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const { loading, data, refetch } = useQuery(GET_PORTFOLIO);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const education =
    data && data.getPortfolio.education ? data.getPortfolio.education : [];

  return (
    <Card className="h-100">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3 className="subheading">Education</h3>
        {Auth.loggedIn() && (
          <div>
            <Button
              className="customButton mr-2"
              variant="primary"
              onClick={() => setShowAdd(true)}
            >
              <MdAddCircle />
            </Button>
            <AddEducationForm show={showAdd} setShow={setShowAdd} />
          </div>
        )}
      </Card.Header>
      <div className="table-responsive">
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Study</th>
              <th>Start</th>
              <th>End</th>
              {Auth.loggedIn() && <th></th>}
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
                {Auth.loggedIn() && (
                  <td>
                    <Button
                      className="customButton"
                      variant="outline-primary"
                      size="md"
                      onClick={() => {
                        setShowEdit(true);
                        setEditId(edu._id); // set the editId when MdEdit is clicked
                      }}
                    >
                      <MdEdit />
                    </Button>
                    {showEdit &&
                      edu._id === editId && ( // only show EditEducationForm if the _id matches
                        <EditEducationForm
                          show={showEdit}
                          setShow={setShowEdit}
                          id={edu._id}
                        />
                      )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default EducationTable;
