import React from 'react'
import Navbar from '../components/Navbar/index';
import styled from "styled-components";
import { AccountBox } from "../components/accountBox";




const AppContainer = styled.div`
  
  // background-image: url(https://www.colleylaw.net/wp-content/uploads/2016/03/shutterstock_306053651.jpg);
   background-Size: 80%;
   width: 100%;
  // height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background: rgb(50,142,65);
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
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
