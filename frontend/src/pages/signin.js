import React from 'react'
import Navbar from '../components/Navbar/index';
import styled from "styled-components";
import { AccountBox } from "../components/accountBox";




const AppContainer = styled.div`
  
  background-Size: 80%;
   width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #AFD5EB;
   @media screen and (max-width: 768px) {
    background-Size: 180%;
  }
  `;


function signin() {
  const emaillll = localStorage.getItem('email')
  if (emaillll === null ){ localStorage.setItem('email','null')   }
    return (
    <>  <Navbar/><div style={({  height: `80px` })}> </div>
<div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      //  margin:'10px'
      }}
    >


      <AppContainer >
      <AccountBox />
    </AppContainer>
    </div>
  </>  
    )
}

export default signin
