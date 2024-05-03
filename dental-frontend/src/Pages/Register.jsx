import React from "react";
import Container from "../Components/Container";
import "../Style/Register.css";
import ResponsiveAppBar from "../Components/NavBar";

export default function Register() {
  return (
    <div>
      <ResponsiveAppBar />
      <Container size="reg">
        <Container size="reg1"></Container>
        <Container size="reg2"></Container>
      </Container>
    </div>
  );
}
