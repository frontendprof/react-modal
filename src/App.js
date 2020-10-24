
import React, {useState} from "react";
import styled from "styled-components";

import { Modal } from "./components/Modal";
import { GlobalStyle } from "./globalStyles";



const Container=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:90vh;
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

  const [showModal,setShowModal]=useState(false);

  const modalHandler=()=>{
    setShowModal(prev=>!prev);
  }

  return (
    <div className="App">
      {/* <h1 
      style={{color:"blue",textAlign:"center",fontSize:'3rem',backgroundColor:"yellow"}}
      >Welcome</h1> */}
      <Container>
        <Button onClick={modalHandler}>I am a Modal</Button>
        <Modal showModal={showModal} setShowModal={setShowModal}/>
        <GlobalStyle />
      </Container>
    </div>
  );
}

export default App;
