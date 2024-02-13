import AddStudent from "./AddStudent";
import React from "react";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "green",
          padding: "10px 0px",
          margin: "20px 10px",
          textAlign: "center",
        }}
      >
        <h1>STUDENT CRUD</h1>
      </div>
      <AddStudent />
    </>
  );
};

export default Home;
