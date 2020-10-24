
import React, { useRef } from 'react';
import {useSpring, animated} from "react-spring";
import styled from "styled-components";
import {MdClose} from "react-icons/md";
import myImg from "../assets/2.jpg";



const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(10, 15, 25, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #F2F4F3;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #001;
  color:white;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #3E7CB1;
  p {
    margin-bottom: 1.1rem;
  }
  button {
    padding: 12px 26px;
    background: #4C6663;
    color: #fff;
    border:none;
    font-size:1.4rem;
    border-radius:10px;
    box-shadow:3px -5px 5px lightblue;
    cursor:pointer;

  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  color:navy;
  padding: 0;
  z-index: 10;
`;




export const Modal = ({showModal,setShowModal}) => {

  const modalRef=useRef();

  const animation=useSpring({
    config:{
      duration:500
    },
    opacity:showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  })


  const closeModal=e=>{
    if(modalRef.current===e.target){
      setShowModal(false);
    }
  };




    return (
        <>  
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                  <animated.div style={animation}>
                    <ModalWrapper showModal={showModal}>

                       <ModalImg alt='cam' src={myImg} />

                        <ModalContent>
                            <h1>Are you ready?</h1>
                            <p>Get exclusive access to our next launch</p>
                            <button>Join Now</button>
                        </ModalContent>

                        <CloseModalButton aria-label="Close Modal" onClick={()=>setShowModal(prev=>!prev)} />

                    </ModalWrapper>
                  </animated.div>
                </Background>
                
            ):null}
        </>
    )
    
}
