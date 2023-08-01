import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Card, Table, Button } from "react-bootstrap";
import { MdEdit, MdAddCircle } from "react-icons/md";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import AddBackgroundForm from "./AddBackgroundForm";
import EditBackgroundForm from "./EditBackgroundForm";
import Auth from "../../../../utils/auth";

const BackgroundTable = () => {
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

  const background =
    data && data.getPortfolio.background ? data.getPortfolio.background : [];

  return (
    <Card className="h-100">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3 className="subheading">Background</h3>
        {Auth.loggedIn() && (
          <div>
            <Button
              className="customButton mr-2"
              variant="primary"
              onClick={() => setShowAdd(true)}
            >
              <MdAddCircle />
            </Button>
            <AddBackgroundForm show={showAdd} setShow={setShowAdd} />
          </div>
        )}
      </Card.Header>
      <div className="table-responsive">
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Job</th>
              <th>Company</th>
              <th>Start</th>
              <th>End</th>
              <th>Description</th>
              {Auth.loggedIn() && <th></th>}
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
                {Auth.loggedIn() && (
                  <td>
                    <Button
                      className="customButton"
                      variant="outline-primary"
                      size="md"
                      onClick={() => {
                        setShowEdit(true);
                        setEditId(bg._id); // set the editId when MdEdit is clicked
                      }}
                    >
                      <MdEdit />
                    </Button>
                    {showEdit &&
                      bg._id === editId && ( // only show EditBackgroundForm if the _id matches
                        <EditBackgroundForm
                          show={showEdit}
                          setShow={setShowEdit}
                          id={bg._id}
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

export default BackgroundTable;
