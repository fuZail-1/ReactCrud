import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
const EditStudent = () => {
  const { id } = useParams();
  const [studentList, setstudentList] = useState({});
  const [editStudentList, setEditStudentList] = useState({});
  const getStudentListById = async () => {
    try {
      const res = await axios.get(`http://localhost:3333/students/${id}`);
      console.log(res.data);
      setstudentList(res.data);
      setEditStudentList(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStudentListById();
  }, []);
  console.log(studentList);

  const handleChange = (e) => {
    setEditStudentList({ ...editStudentList, [e.target.name]: e.target.value });
    console.log(editStudentList);
  };
  const editedStudentData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3333/students/${editStudentList.id}`,
        editStudentList
      );
      console.log(res.data);
      console.log("success");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container>
        <Row className="mx-auto d-flex align-items-center justify-content-center min-vh-100">
          <Col md={6}>
            <h3
              style={{
                textAlign: "center",
                padding: "10px 0px",
              }}
              className="bg-primary"
            >
              Edit Student
            </h3>
            <Form onSubmit={(e) => editedStudentData(e)}>
              <Row className="mb-3">
                <Col md={6}>
                  <input
                    type="id"
                    name="id"
                    className="form-control"
                    value={editStudentList.id}
                    disabled
                  />
                </Col>
                <Col md={6}>
                  <input
                    value={editStudentList.name}
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter name"
                    onChange={(e) => handleChange(e)}
                  />
                </Col>
              </Row>{" "}
              <Row className="mb-3">
                <Col md={12}>
                  <input
                    value={editStudentList.email}
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => handleChange(e)}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Button variant="primary" type="submit" className="w-100">
                    Submit
                  </Button>
                </Col>
                <Col md={6}>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mt-3"
                  >
                    <Nav.Link href="/">Back</Nav.Link>
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditStudent;
