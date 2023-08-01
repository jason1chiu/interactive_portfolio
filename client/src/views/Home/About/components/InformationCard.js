import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Card, Button } from "react-bootstrap";
import { MdAddCircle, MdEdit } from "react-icons/md";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import AddInformationForm from "./AddInformationForm";
import EditInformationForm from "./EditInformationForm";
import Auth from "../../../../utils/auth";

const InformationCard = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const { loading, data, refetch } = useQuery(GET_PORTFOLIO);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const name =
    data && data.getPortfolio && data.getPortfolio.information
      ? data.getPortfolio.information.name
      : "";
  const title =
    data && data.getPortfolio && data.getPortfolio.information
      ? data.getPortfolio.information.title
      : "";
  const location =
    data && data.getPortfolio && data.getPortfolio.information
      ? data.getPortfolio.information.location
      : "";

  return (
    <Card className="h-100">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3 className="subheading">Information</h3>
        {Auth.loggedIn() && (
          <div>
            {name || title || location ? (
              <>
                <Button
                  className="customButton"
                  variant="outline-primary"
                  size="md"
                  onClick={() => setShowEdit(true)}
                >
                  <MdEdit />
                </Button>
                <EditInformationForm show={showEdit} setShow={setShowEdit} />
              </>
            ) : (
              <>
                <Button
                  className="customButton mr-2"
                  variant="primary"
                  onClick={() => setShowAdd(true)}
                >
                  <MdAddCircle />
                </Button>
                <AddInformationForm show={showAdd} setShow={setShowAdd} />
              </>
            )}
          </div>
        )}
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
