import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Carousel } from 'antd';
import { Select, Form, Input, Button, Image, message } from 'antd';
import { Btn } from '../components/Button'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/index';



const AppContainer = styled.div`
  
 //background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
   background-Size: 20%;
  width: 100%;
    height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   //background: rgb(50,142,65);
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
`;

const Offers = styled.div`
  
//background: #000;
    width: 100%;
    height: 200px;
    //display: grid;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
    flex-direction: row;
     align-items: center;
    // justify-content: center;
    margin: 30px;
    @media screen and (max-width: 768px) {
     display: none;
    }
  
 
`;


const Search = styled.div`
  
//background: #000;
width: 80%;
    height: auto;
    // display: flex;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
    flex-direction: colunm;
     align-items: center;
    justify-content: center;
    // margin: 30px;
   
    // border-radius: 5px;
    // box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
 
`;

const Studentlist = styled.div`
// background: #000;
width: 80%;
height: auto;
max-height: 500px;
overflow-y: scroll;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
align-items: center;
justify-content: center;
margin: 30px;
border-radius: 5px;
// box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
@media screen and (max-width: 768px) {
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
align-items: center;
justify-content: center;
   
`;


const Studentchart = styled.div`
box-shadow: 0px 0px 2px 5px;
width: 520px;
height: 200px;
display: flex;
grid-template-columns: auto auto auto auto;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 5px;
border-radius: 10px;

@media screen and (max-width: 768px) {
  width: 270px;
  height: 170px;

}



`;
const Studentdetails = styled.p`

// background: #000;
width: 45%;
height: 180px;
//display: grid;
// grid-template-columns: auto;
//  grid-gap: 10px;
flex-direction: row;
 align-items: center;
// justify-content: center;

@media screen and (max-width: 768px) {
  width: 80%;
  font-size: 7px;
  height: 100px;
  margin-top: 2px;
  margin-left: 10px;

}


`;

const Searchbarandbtn = styled.p`
  
  
    width: 100%;
    
    display: flex;
   
    flex-direction: row;
     
   
   
    
    
  
  
 
`;




const Services = () => {
  const emaillll = localStorage.getItem('email')
  if (emaillll === null) { localStorage.setItem('email', 'null') }

  const [student, setstudent] = useState([""])



  useEffect(async () => {


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({

      "emaillll": emaillll
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };



    const res = await fetch("http://localhost:5000/getstudentfordriver", requestOptions)

    if (res.status === 200) {

      res.json().then(result => setstudent(result))
    }

  }, [])


  return (
    <> <Navbar /><div style={({ height: `80px` })}> </div>

      <div style={({ height: `10px` })}> </div>



      <AppContainer>






        <Search>
          <Form >

            <Searchbarandbtn>  <Input type="text" name="search" required="true" placeholder="Search Student by name" />


              <Btn type="primary" htmlType="submit">Search</Btn></Searchbarandbtn>


          </Form>
        </Search>


        <Studentlist>
          {student.map((student) => (<>
            <Studentchart><Studentdetails>
              <div>
                <h2>{student.studentname}</h2>
                <h5>School Name : {student.schoolname}</h5>
                <h5>School Location : {student.drop}</h5>
                <h5>Bus Driver : {student.drivername}</h5>
                <h5>Bus Driver ID : {student.busnumberplate}</h5>


                <Btn onClick={async () => {
                  var myHeaders = new Headers();
                  myHeaders.append("Content-Type", "application/json");

                  var raw = JSON.stringify({

                    "id": student._id
                  });



                  var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                  };

                  const res = await fetch("http://localhost:5000/studentstatus", requestOptions)

                  if (res.status === 200) {

                    res.json().then(result => setstudent(result))
                  }
                }}



                >on board</Btn>   
                
                
                
                
                 <Btn onClick={async () => {
                  var myHeaders = new Headers();
                  myHeaders.append("Content-Type", "application/json");

                  var raw = JSON.stringify({

                    "id": student._id
                  });



                  var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                  };

                  const res = await fetch("http://localhost:5000/studentstatusreached", requestOptions)

                  if (res.status === 200) {

                    res.json().then(result => setstudent(result))
                  }
                }}



                >Reached</Btn>


              </div> </Studentdetails>
              <Image src={student.studentimage} alt="student" width='50%' height='96%' />


            </Studentchart>
          </>))}




        </Studentlist>

      </AppContainer>

    </>
  );
};

export default Services;
