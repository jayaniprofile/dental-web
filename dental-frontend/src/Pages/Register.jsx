import React from "react";
import Container from "../Components/Container";
import "../Style/Regist.css";
import ResponsiveAppBar from "../Components/NavBar";
import RegistrationForm from "./RegistrationForm";

export default function Register() {
  return (
    <div>
      <ResponsiveAppBar />
      <Container size="reg">
        <div className="inline-container">
          <Container size="reg1">
            <p>4to</p>
          </Container>

          <Container size="reg2">
            <RegistrationForm />
          </Container>
        </div>
      </Container>
    </div>
  );
}
