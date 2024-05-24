import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Popup = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 100%;
`;

const Title = styled.h1`
  margin: 0 0 20px;
  font-size: 24px;
  text-align: center;
`;
const T = styled.h1`
  margin: 0 0 20px;
  font-size: 20px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #0072ce;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #005bb5;
  }
`;

const Login = () => {
  return (
    <Overlay>
      <Popup>
        <form>
          <Title>¡Hola de nuevo!</Title>
          <T> Que bueno que estes acá, sigue subiendo más trabajos realizados</T>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">Login</Button>
        </form>
      </Popup>
    </Overlay>
  );
};

export default Login;
