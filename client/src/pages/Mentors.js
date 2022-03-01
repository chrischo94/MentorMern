import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Mentors() {
  const [mentors, setMentors] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadMentors()
  }, [])

  function loadMentors() {
    API.getMentors()
      .then(res => 
        setMentors(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteMentor(id) {
    API.deleteMentor(id)
      .then(res => loadMentors())
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.nameM && formObject.location) {
      API.saveMentor({
        nameM: formObject.nameM,
        location: formObject.location,
        
      })
        .then(res => loadMentors())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Kind of Mentor Would You Like</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="nameM"
                placeholder="nameM (required)"
              />
              <Input
                onChange={handleInputChange}
                name="location"
                placeholder="Location (required)"
              />
              <FormBtn
                disabled={!(formObject.nameM && formObject.location)}
                onClick={handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Chosen Mentors</h1>
            </Jumbotron>
            {mentors.length ? (
              <List>
                {mentors.map(mentor => (
                  <ListItem key={mentor._id}>
                    <Link to={"/mentors/" + mentor._id}>
                      <strong>
                        {mentor.nameM} by {mentor.location}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteMentor(mentor._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Mentors;
