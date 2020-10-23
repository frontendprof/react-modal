
import React from "react";
import styled from "styled-components";

import './App.css';



const Container=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
`

const Button=styled.button`
  min-width:100px;
  padding:16px 32px;
  border-radius:5px;
  border:none;
  background:#141414;
  color:#fff;
  font-size:24px;
  cursor:pointer; 
`




function App() {
  return (
    <div className="App">
      <h1>Peace</h1>
      <Container>
        <Button>I am a Modal</Button>
      </Container>
    </div>
  );
}

export default App;
