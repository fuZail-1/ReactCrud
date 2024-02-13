import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import EditStudent from "./EditStudent";
const StudentList = ({ getStudentList, studentList }) => {
  const deleteDetails = async (id) => {
    console.log(id);
    console.log("delete");
    try {
      const res = await axios.delete(`http://localhost:3333/students/${id}`);
      console.log(res);
      getStudentList();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStudentList();
  }, []);
  const handleEditClick = async (id) => {
    console.log(id);

    // try {
    //   const res = await axios.put(`http://localhost:3333/students/${id}`);
    //   console.log(res.data);
    //   setUpdateStudent(res.data);
    //   console.log(updateStudent);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      {/* <EditStudent /> */}
      <Container>
        <Row className="mx-auto">
          <h3
            style={{
              textAlign: "center",
              padding: "10px 0px",
            }}
            className="bg-primary"
          >
            Student Details
          </h3>

          <Table striped bordered hover variant="dark" className="mx-auto">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <Nav.Link href={`/editstudent/${item.id}`}>
                        <FaEdit />
                      </Nav.Link>
                      <MdDelete onClick={() => deleteDetails(item.id)} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default StudentList;
