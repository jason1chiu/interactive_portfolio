import React, { useState, useEffect } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { MdEdit, MdAddCircle } from "react-icons/md";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import AddInterestForm from "./AddInterestForm";
import EditInterestForm from "./EditInterestForm";
import Auth from "../../../../utils/auth";
import { useQuery } from "@apollo/client";

const InterestsCard = () => {
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

  const interests =
    data && data.getPortfolio ? data.getPortfolio.interests : [];

  return (
    <Card className="h-100 shadow">
      <Card.Body>
        <ListGroup variant="flush">
          {interests.map((interest) => (
            <ListGroupItem
              key={interest._id}
              className="d-flex justify-content-between align-items-center"
            >
              {interest.interest}
              {Auth.loggedIn() && (
                <div>
                  <Button
                    className="customButton"
                    variant="outline-primary"
                    size="md"
                    onClick={() => {
                      setShowEdit(true);
                      setEditId(interest._id); // set the editId when MdEdit is clicked
                    }}
                  >
                    <MdEdit />
                  </Button>
                  {showEdit &&
                    interest._id === editId && ( // only show EditInterestForm if the _id matches
                      <EditInterestForm
                        show={showEdit}
                        setShow={setShowEdit}
                        id={interest._id}
                      />
                    )}
                </div>
              )}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card.Body>
      {Auth.loggedIn() && (
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <div>
            <Button
              className="customButton mr-2"
              variant="primary"
              onClick={() => setShowAdd(true)}
            >
              <MdAddCircle />
            </Button>
            <AddInterestForm show={showAdd} setShow={setShowAdd} />
          </div>
        </Card.Footer>
      )}
    </Card>
  );
};

export default InterestsCard;
