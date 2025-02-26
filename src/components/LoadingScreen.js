import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import "../App.css";

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #ffdde1, #ee9ca7, #b5a4ff, #a0e7e5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  text-align: center;
`;

const LoadingTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-top: 20px;
  text-transform: uppercase;
  color: black;
  letter-spacing: 3px;
  text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.7);
`;

const LoadingSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
  color: black;
  opacity: 0.8;
`;

const LoadingScreen = () => {
    return (
        <LoadingContainer>
            <img src={logo} className="App-logo" alt="Pride Logo" />
            <LoadingTitle>Open Pride Map</LoadingTitle>
            <LoadingSubtitle>Your Map is Loading...</LoadingSubtitle>
        </LoadingContainer>
    );
};

export default LoadingScreen;