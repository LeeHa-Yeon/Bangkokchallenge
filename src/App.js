import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <Container >
      <LoginPage />
      {/*추가해야지 <MainPage /> */}
      <GlobalStyle />
    </Container>
  );
}

export default App;

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width:100%;
    height:100%;
    margin:0;
  }
`
const Container = styled.div`
  height:100%;
  width:100%;
`