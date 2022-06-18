import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar/index';
import styled from "styled-components";
import { Select, Form, Input, Button, Image, message } from 'antd';
import { Btn } from '../components/Button'
import { Link } from 'react-router-dom';


const AppContainer = styled.div`
  
 background-Size: 20%;
  width: 100%;
    height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   
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
 
   
    //border-radius: 5px;
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


export default function Fee() {
  const emaillll = localStorage.getItem('email')
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


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const res = await fetch("http://localhost:5000/getstudent", requestOptions)

    if (res.status === 200) {

      res.json().then(result => setstudent(result))
    }

  }, [])



  return (
    <> <Navbar /><div style={({ height: `80px` })}> </div>< AppContainer>



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
              <h2>total Fees: Rs.5000/-</h2>
              <h5> {student.studentname}</h5>
              <h5>School Name : {student.schoolname}</h5>
              <h5>School Location : {student.drop}</h5>
              <h5>Bus Driver : {student.drivername}</h5>


              <Link to="/bookingform"> <Btn



              >pay now</Btn> </Link>


            </div> </Studentdetails>
            <Image src={student.studentimage} alt="student" width='50%' height='96%' />


          </Studentchart>

        </>))}


      </Studentlist>






    </AppContainer>
      <h1>Trackify Fee Schedule</h1>
      <table>
        <tr>
          <th>Areas</th>
          <th>Fee</th>
          <th>City</th>
          <th> </th>
        </tr>
        <tr>
          <td>DHA</td>
          <td>5000</td>
          <td>Karachi</td>
          <td> </td>
        </tr>

        <tr>
          <td>P.E.C.H.S</td>
          <td>5500</td>
          <td>Karachi</td>
          <td> </td>
        </tr>

        <tr>
          <td>Gulshan-E-Iqbal</td>
          <td>6000</td>
          <td>Karachi</td>
          <td> </td>
        </tr>

        <tr>
          <td>Malir Cantt</td>
          <td>6500</td>
          <td>Karachi</td>
          <td> </td>
        </tr>

        <tr>
          <td>Gulshan-E-Memaar</td>
          <td>8000</td>
          <td>Karachi</td>
          <td>  </td>
        </tr>

        <tr>
          <td>Gulistan-e-Jauhar</td>
          <td>7000</td>
          <td>Karachi</td>
          <td>  </td>
        </tr>

        <tr>
          <td>Korongi</td>
          <td>6500</td>
          <td>Karachi</td>
          <td> </td>
        </tr>

      </table>
    </>)
}
