import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 page</h1>
      {/* <button onClick={() => navigate("../")}>Go back</button> */}
      <button onClick={() => navigate(-1)}>Go back</button>
      {/* <button onClick={navigate(1)}>Go Forward</button> */}
    </div>
  );
};

export default ErrorPage;
