import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Btn } from '../components/Button'
import { Carbox } from '../components/Carbox'
import { Select, Form, Input, Button, Image, message } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/index';
import { storage } from "../firebase";
import { useHistory } from 'react-router-dom'
const { Option } = Select;
const AppContainer = styled.div`
  
//background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
background-Size: 20%;
//  width: 2200px;
 height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
//background: rgb(50,142,65);
// background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
`;

const CarrequestsContainer = styled.div`
max-height: 500px;
   // background: #000;
   width: 80%;
   height: auto;
   overflow-y: scroll;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
   align-items: center;
   justify-content: center;
   margin: 30px;
   border-radius: 5px;
   box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
   @media screen and (max-width: 768px) {
     grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
   align-items: center;
   justify-content: center;
      
`;

const MessagesContainer = styled.div`
  
//background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArkhS4-u2dvj2xcdwtzI8xjR9pZisnIQdZQ&usqp=CAU);
    width: 80%;
    height: 400px;
    display: flex;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
  overflow-y: hidden;
    flex-direction: colunm;
    // align-items: center;
     justify-content: center;
   
  border-radius: 10px;
    box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
 
`;

const SubMessagesContainer = styled.div`

//background: #000;
margin: 10px;
    width: 90%;
    height: 290px;
    //display: grid;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
//   display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;

   
  
   
 
`;





const MessagesBox = styled.div`
overflow-y: hidden;
overflow-x: none;
background: #fff;
    width: 100%;
    height: 50px;
    display: grid;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
    flex-direction: row;
     align-items: center;
    // justify-content: center;
    margin-top: 30px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
 
`;


const UserinfoContainer = styled.div`
  
// background: #000;
width: 80%;
height: auto;
max-height: 300px;
overflow-y: scroll;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
align-items: center;
justify-content: center;
margin: 30px;
border-radius: 5px;
box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
@media screen and (max-width: 768px) {
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
align-items: center;
justify-content: center;
`;



const UserinfoContainer1 = styled.div`
  
// background: #000;
width: 80%;
height: auto;
max-height: 300px;
overflow-y: scroll;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
// align-items: center;
// justify-content: center;
margin: 30px;
border-radius: 5px;
box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
@media screen and (max-width: 768px) {
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
align-items: center;
justify-content: center;
`;




const Carchart = styled.div`
  
box-shadow: 0px 0px 2px 5px;
    width: 520px;
    height: auto;
    min-height : 200px;
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
const Cardetails = styled.p`
  
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



const Cardetails1 = styled.p`
  
  // background: #000;
    width: 45%;
    height: 100%;
    display: flex;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
    // flex-direction: row;
     align-items: center;
    justify-content: center;
   
    @media screen and (max-width: 768px) {
      width: 80%;
      font-size: 7px;
      height: 100px;
      // margin-top: 2px;
      // margin-left: 10px;
    
    }
  
 
`;






function Admin() {

  const emaillll = localStorage.getItem('email')
  if (emaillll === null) { localStorage.setItem('email', 'null') }
  const [Totalcars, setTotalcars] = useState([])
  const [Totaluser, setTotaluser] = useState([])
  const [Totaluserdriver, setTotaluserdriver] = useState([])
  const [Totaluserstudent, setTotaluserstudent] = useState([])
  const [Messegee, setMessegee] = useState([])
  const history = useHistory();
  const [Car, setCar] = useState([])


  const [drivername, setdrivername] = useState("");
  const [drivercnic, setdrivercnic] = useState("");
  const [drivermobile, setdrivermobile] = useState("");
  const [driveemail, setdriveremail] = useState("");
  const [driverpassword, setdriverpassword] = useState("");
  const [driverbus, setdriverbus] = useState("");
  const [drivertracker, setdrivertracker] = useState("");
  const [driverschool, setdriverschool] = useState("");
  const [driverpickup, setdriverpickup] = useState("");
  const [driverdropoff, setdriverdropoff] = useState("");



  useEffect(async () => {




    var requestOptions1 = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:5000/getalluserdataa", requestOptions1)
      .then(response => response.json())
      .then(result => setTotaluser(result))
      .catch(error => console.log('error', error));

      fetch("http://localhost:5000/getalluserdatadrivers", requestOptions1)
      .then(response => response.json())
      .then(result => setTotaluserdriver(result))
      .catch(error => console.log('error', error));

      fetch("http://localhost:5000/getalluserdatastudent", requestOptions1)
      .then(response => response.json())
      .then(result => setTotaluserstudent(result))
      .catch(error => console.log('error', error));





  }, 10000000)



  console.log("Car data ", Car);
  console.log("Messege", Messegee);
  console.log("Messege", Totaluser);

  const [email, setemail] = useState(localStorage.getItem('email'));

  const Path = "Carimages/"
  const [Btnactive, setBtnactive] = useState("true");




  const PostData = async () => {






    const res = await fetch("http://localhost:5000/registerdriver", {


      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        drivername,
        drivercnic,
        drivermobile,
        driveemail,
        driverpassword,
        driverbus,
        drivertracker,
        driverschool,
        driverpickup,
        driverdropoff,


      })

    });
    await window.location.reload(false);
  }



  return (
    <>  {email === "aliahmed.samoo.1@gmail.com" && <> <Navbar /><div style={({ height: `80px` })}> </div>
      <AppContainer >




        <h1>Driver details</h1>        <MessagesContainer>

          <SubMessagesContainer >
            <Form onFinish={PostData}> <Form.Item  >

              <Input required="true" onChange={(e) => { setdrivername(e.target.value) }} type="text" placeholder="Driver name" />
              <Input required="true" onChange={(e) => { setdriveremail(e.target.value) }} type="email" placeholder="Driver Email" />
              <Input required="true" onChange={(e) => { setdriverpassword(e.target.value) }} type="password" placeholder="Password for Driver " />
              <Input required="true" onChange={(e) => { setdrivercnic(e.target.value) }} type="text" placeholder="CNIC Number" />
              <Input required="true" onChange={(e) => { setdrivermobile(e.target.value) }} type="text" placeholder="Mobile Number" />
              <Input required="true" onChange={(e) => { setdriverbus(e.target.value) }} type="text" placeholder="Bus Plate Number" />
              <Input required="true" onChange={(e) => { setdrivertracker(e.target.value) }} type="text" placeholder="Tracker ID" />



              <Select onChange={(value) => { setdriverschool(value) }}
                showSearch
                style={{
                  width: 600,
                }}
                placeholder="School name"
                optionFilterProp="children"
                filterOption={(input, option) => option.children.includes(input)}
                filterSort={(optionA, optionB) =>
                  optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
              >
                <Option value="BeaconHouse School System">BeaconHouse School System</Option>
                <Option value="Karachi Grammar School">Karachi Grammar School</Option>
                <Option value="The City School">The City School</Option>
                <Option value="Lahore Grammar School">Lahore Grammar School</Option>
                <Option value="Foundation Public School">Foundation Public School</Option>
                <Option value="Haque Academy School">Haque Academy School</Option>
              </Select>


              <Select onChange={(value) => { setdriverpickup(value) }}
                showSearch
                style={{
                  width: 600,
                }}
                placeholder="Pick-Up Point"
                optionFilterProp="children"
                filterOption={(input, option) => option.children.includes(input)}
                filterSort={(optionA, optionB) =>
                  optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
              >
                <Option value="II Talwar">II Talwar</Option>
                <Option value="DHA Phase 2">DHA Phase 2</Option>
                <Option value="North Nazimabad">North Nazimabad</Option>
                <Option value="Gulistan-E- Johor">Gulistan-E- Johor</Option>
                <Option value="University Road<">University Road</Option>
                <Option value="Bilawal Chowrangi">Bilawal Chowrangi</Option>
              </Select>


              <Select onChange={(value) => { setdriverdropoff(value) }}
                showSearch
                style={{
                  width: 600,
                }}
                placeholder="Drop-off Point"
                optionFilterProp="children"
                filterOption={(input, option) => option.children.includes(input)}
                filterSort={(optionA, optionB) =>
                  optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
              >
                <Option value="DHA Phase 8">DHA Phase 8</Option>
                <Option value="Gulshan-E-Iqbal">Gulshan-E-Iqbal</Option>
                <Option value="Hyderi">Hyderi</Option>
                <Option value="New Karachi">New Karachi</Option>
                <Option value="P.E.C.H.S Society">P.E.C.H.S Society</Option>
                <Option value="Malir Cantt">Malir Cantt</Option>
              </Select>



            </Form.Item>





              <Button type="primary" htmlType="submit" > Create account </Button>

            </Form>
          </SubMessagesContainer>




        </MessagesContainer>












        <UserinfoContainer>

          {Totaluser.map((Userr) => (<>

            <Carchart><Cardetails1>
              <div>
                <h1> {Userr.name}</h1>
                <h2> {Userr.email}</h2>
                <Btn onClick={async () => {

                  var myHeaders1 = new Headers();
                  myHeaders1.append("Content-Type", "application/json");

                  var raw1 = JSON.stringify({
                    "_id": Userr._id,

                  });

                  var requestOptions1 = {
                    method: 'POST',
                    headers: myHeaders1,
                    body: raw1,
                    redirect: 'follow'
                  };

                  await fetch("https://rent-a-car-pakistan.herokuapp.com/deleteUserrdattaaa", requestOptions1)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));






                  message.info("User removed");
                  console.log("User removed");

                  const Options = {
                    method: 'GET',

                    redirect: 'follow'
                  };

                  fetch("https://rent-a-car-pakistan.herokuapp.com/getalluserdata", Options)
                    .then(response => response.json())
                    .then(result => setTotaluser(result))
                    .catch(error => console.log('error', error));









                }}> Remove user</Btn>
              </div>
            </Cardetails1>   </Carchart> </>))}

        </UserinfoContainer>

        <UserinfoContainer>

          {Totaluserdriver.map((Userr) => (<>

            <Carchart><Cardetails1>
              <div>
                <h1> {Userr.drivername}</h1>
                <h2> {Userr.driverbus}</h2>
                <h2> {Userr.drivermobile}</h2>
                <h2> {Userr.driverschool}</h2>
                <h2> {Userr.driveemail}</h2>
                <Btn onClick={async () => {

                  var myHeaders1 = new Headers();
                  myHeaders1.append("Content-Type", "application/json");

                  var raw1 = JSON.stringify({
                    "_id": Userr._id,

                  });

                  var requestOptions1 = {
                    method: 'POST',
                    headers: myHeaders1,
                    body: raw1,
                    redirect: 'follow'
                  };

                  await fetch("https://rent-a-car-pakistan.herokuapp.com/deleteUserrdattaaa", requestOptions1)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));






                  message.info("User removed");
                  console.log("User removed");

                  const Options = {
                    method: 'GET',

                    redirect: 'follow'
                  };

                  fetch("https://rent-a-car-pakistan.herokuapp.com/getalluserdata", Options)
                    .then(response => response.json())
                    .then(result => setTotaluser(result))
                    .catch(error => console.log('error', error));









                }}> Remove user</Btn>
              </div>
            </Cardetails1>   </Carchart> </>))}

        </UserinfoContainer>

        <UserinfoContainer>

          {Totaluserstudent.map((student) => (<>

            <Carchart><Cardetails1>
              <div>
              <h2>{student.studentname}</h2>
                  <h5>School Name : {student.schoolname}</h5>
                  <h5>School Location : {student.drop}</h5>
                  <h5>Bus Driver : {student.drivername}</h5>
                  <h5>Bus Driver ID : {student.busnumberplate}</h5>
                  <h5>Father name : {student.fathername}</h5>
                  <h5>Father contact : {student.fathermobile}</h5>
                <Btn onClick={async () => {

                  var myHeaders1 = new Headers();
                  myHeaders1.append("Content-Type", "application/json");

                  var raw1 = JSON.stringify({
                    "_id": Userr._id,

                  });

                  var requestOptions1 = {
                    method: 'POST',
                    headers: myHeaders1,
                    body: raw1,
                    redirect: 'follow'
                  };

                  await fetch("https://rent-a-car-pakistan.herokuapp.com/deleteUserrdattaaa", requestOptions1)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));






                  message.info("User removed");
                  console.log("User removed");

                  const Options = {
                    method: 'GET',

                    redirect: 'follow'
                  };

                  fetch("https://rent-a-car-pakistan.herokuapp.com/getalluserdata", Options)
                    .then(response => response.json())
                    .then(result => setTotaluser(result))
                    .catch(error => console.log('error', error));









                }}> Remove user</Btn>
              </div>
            </Cardetails1>  
            <Image src={student.studentimage} alt="Hondacivic" width='50%' height='200px' />


             </Carchart> </>))}

        </UserinfoContainer>


      </AppContainer>

    </>}
      {email === "null" && <AppContainer> <div width='100px' >  Page Not found Please Sign in to continue <Link to="/signin"> Sign in here</Link> </div>  </AppContainer>
      }

      {email !== "aliahmed.samoo.1@gmail.com" && <AppContainer> <div width='100px' >  Page Not found  <Link to="/home"> home</Link> </div>  </AppContainer>
      }
    </>

  )
}

export default Admin
