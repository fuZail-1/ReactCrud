import React, { useState, useEffect } from "react";
import { Container, Col, Button, Row, Form } from "react-bootstrap";
import StudentList from "./StudentList";
import axios from "axios";
// import StudentData from "./StudentData";
const AddStudent = () => {
  const [studentList, setstudentList] = useState([]);
  const getStudentList = async () => {
    try {
      const res = await axios.get("http://localhost:3333/students");
      console.log(res.data);
      setstudentList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [newStudent, setnewStudent] = useState({});
  const handleChange = (e) => {
    console.log("hel");
    setnewStudent({ ...newStudent, [e.target.name]: e.target.value });
    console.log(e.target.name);
    console.log(newStudent);
  };
  const AddStudentDetails = async (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(newStudent);
    if (!newStudent.name || !newStudent.email) {
      console.log("plss enter data");
    } else {
      try {
        const res = await axios.post(
          "http://localhost:3333/students",
          newStudent
        );
        console.log(res.data);
        getStudentList();
      } catch (error) {
        console.log(error);
      }
    }

    setnewStudent({ name: "", email: "" });
  };

  useEffect(() => {}, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h3
              style={{
                textAlign: "center",
                padding: "10px 0px",
              }}
              className="bg-primary"
            >
              Add Student
            </h3>
            <Form onSubmit={(e) => AddStudentDetails(e)}>
              <Row className="mb-3">
                <Col md={12}>
                  <input
                    value={newStudent.name || ""}
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
                    value={newStudent.email || ""}
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    onChange={(e) => handleChange(e)}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={12}>
                  <Button variant="primary" type="submit" className="w-100">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col md={6}>
            <StudentList
              studentList={studentList}
              getStudentList={getStudentList}
            />
            {/* <StudentData setstudentList={setstudentList} /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddStudent;
