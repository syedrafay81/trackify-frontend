import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Btn } from '../components/Button'
import { Select, Form, Input, Button, Image, message } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/index';
import { storage } from "../firebase";
import { useHistory } from 'react-router-dom'
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps";
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




const Studentchart = styled.div`
  
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



const Studentdetails = styled.p`
  
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

const LoationContainer = styled.div`
  
box-shadow: 0px 0px 10px 5px;
width: 100%;
height: 400px;
//background: #235;
display: flex;
flex-direction: column;
align-items: center;
justify-content: bottom;

`;

const PuplarCarContainer = styled.div`
  
 
width: 100%;
height: 100%;
//background: #999;
box-shadow: 0px 0px 10px 5px;
// display: grid;
grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
    align-items: center;
    justify-content: center;
   // box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);

 @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    align-items: top;
    justify-content: center;
      
    
    }

    `;

const Popcarandlocheaderbtn = styled.button`
border-radius: 20px 20px 0px 00px;
//background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltOnWb8DwIGlyUE-k6WksPWBBWvcB0p-fNg&usqp=CAU);
padding: 10px 22px;
color: #fff;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
border-color: #000;
margin-left: 0px;
background: #333;
height: 20%
width: 100%;

&:active {
  transition: all ;
  background: #fff;
  color: #010606;
}
`;

const Popcarandlocheader = styled.div`
  
 
width: 100%;
height: 40px;
//background: #555;
grid-template-columns: auto auto auto auto;
flex-direction: column;
align-items: left;
justify-content: bottom;
//margin-bottom: 5%;
`;


const PopcarandlocContainer = styled.div`
  
 
width: 95%;
height: 100%;
//background: #999;
display: flex;
flex-direction: column;
align-items: center;
justify-content: bottom;
margin-bottom: 5%;
border-radius: 15px 15px 15px 15px;
`;

const Studentlist = styled.div`
//  background: #000;
width: 100%;
height: auto;
max-height: 500px;
overflow-y: scroll;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
align-items: center;
justify-content: center;
// margin: 30px;
border-radius: 5px;
// box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
@media screen and (max-width: 768px) {
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
align-items: center;
justify-content: center;
   
`;


function Admin() {

  const [longitude, setlongitude] = useState();
  const [latitude, setlatitude] = useState();
  const [active, setActive] = useState("location");

  const emaillll = localStorage.getItem('email')
  if (emaillll === null) { localStorage.setItem('email', 'null') }

  const [Totaluser, setTotaluser] = useState([])
  const [Totaluserdriver, setTotaluserdriver] = useState([])
  const [student, setstudent] = useState([""])
  const [Totaluserstudent, setTotaluserstudent] = useState([])



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

  function Map() {


    return (<>
      <GoogleMap defaultZoom={18} defaultCenter={{ lat: latitude, lng: longitude }} >

        <Marker
          key='student'
          position={{
            lat: latitude,
            lng: longitude
          }} />
      </GoogleMap></>
    );
  }

  const MapWrapped = withScriptjs(withGoogleMap(Map));

  const switchTopularCars = () => {

    setTimeout(() => {
      setActive("pularCars");
    }, 200);
  };

  const switchTolocation = () => {

    setTimeout(() => {
      setActive("location");
    }, 200);
  };





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



  const [email, setemail] = useState(localStorage.getItem('email'));

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
    <>  {email === "cs1812170@szabist.pk" && <> <Navbar /><div style={({ height: `80px` })}> </div>
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











        <h1 style={({ marginTop: "100px" })}>User Information</h1>
        <UserinfoContainer>

          {Totaluser.map((Userr) => (<>

            <Studentchart><Studentdetails>
              <div>
                <h1> {Userr.name}</h1>
                <h2> {Userr.email}</h2>
                <Button danger onClick={async () => {

                  var myHeaders = new Headers();
                  myHeaders.append("Content-Type", "application/json");

                  var raw = JSON.stringify({
                    "id": Userr._id,


                  });

                  var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                  };

                  const res = await fetch("http://localhost:5000/deleteUserrdattaaaaaaa1", requestOptions)

                  await window.location.reload(false);
                }}> Delete User </Button>
              </div>
            </Studentdetails>   </Studentchart> </>))}

        </UserinfoContainer>
        <h1 style={({ marginTop: "100px" })}>Driver Information</h1>
        <UserinfoContainer>

          {Totaluserdriver.map((Userr) => (<>

            <Studentchart><Studentdetails>
              <div>
                <h1> {Userr.drivername}</h1>
                <h2> {Userr.driverbus}</h2>
                <h2> {Userr.drivermobile}</h2>
                <h2> {Userr.driverschool}</h2>
                <h2> {Userr.driveemail}</h2>
                <Button danger onClick={async () => {

                  var myHeaders = new Headers();
                  myHeaders.append("Content-Type", "application/json");

                  var raw = JSON.stringify({
                    "id": Userr._id,


                  });

                  var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                  };

                  const res = await fetch("http://localhost:5000/deleteUserrdattaaaaaaa2", requestOptions)

                  await window.location.reload(false);
                }}> Delete Driver </Button>
              </div>
            </Studentdetails>   </Studentchart> </>))}

        </UserinfoContainer>
        <h1 style={({ marginTop: "100px" })}>Student Information</h1>
        <UserinfoContainer>

          {Totaluserstudent.map((student) => (<>

            <Studentchart><Studentdetails>
              <div>
                <h2>{student.studentname}</h2>
                <h5>School Name : {student.schoolname}</h5>
                <h5>School Location : {student.drop}</h5>
                <h5>Bus Driver : {student.drivername}</h5>
                <h5>Bus Driver ID : {student.busnumberplate}</h5>
                <h5>Father name : {student.fathername}</h5>
                <h5>Father contact : {student.fathermobile}</h5>
                <Button danger onClick={async () => {


                  var myHeaders = new Headers();
                  myHeaders.append("Content-Type", "application/json");

                  var raw = JSON.stringify({
                    "id": student._id,


                  });

                  var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                  };

                  await fetch("http://localhost:5000/deleteUserrdattaaaaaaa", requestOptions)

                  await window.location.reload(false);
                }}> Delete Student </Button>
                {student.studentstatus === "onboard" && <>
                  <Btn onClick={async () => {


                    setInterval(async () => {



                      var myHeaders = new Headers();
                      myHeaders.append("Content-Type", "application/json");

                      var raw = JSON.stringify({

                        "Trackerid": student.Trackerid
                      });

                      var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                      };



                      const res = await fetch("http://localhost:5000/getstudentocation", requestOptions)

                      // if (res.status === 200) {

                      await res.json().then(result => {
                        setlatitude(parseFloat(result.lat))
                        setlongitude(parseFloat(result.long))

                        // setlatitude(lattt)
                        // setlongitude(longg)
                      })
                      // }








                    }, 1000);
                    await setActive("location");
                  }}>Track Bus</Btn>
                </>
                }
              </div>
            </Studentdetails>
              <Image src={student.studentimage} alt="STUDENT" width='50%' height='200px' />


            </Studentchart> </>))}

        </UserinfoContainer>


        <PopcarandlocContainer>
          <Popcarandlocheader>
            <Popcarandlocheaderbtn to='/' onClick={switchTolocation} activeStyle >Bus Location</Popcarandlocheaderbtn>
          </Popcarandlocheader>



          {active === "location" && <LoationContainer>
            <div style={{ width: '100%', height: '100%' }}>

              <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,place&key=AIzaSyAwlpR_lmT3Cj4VW43ifDRpbQ17YqG4hO4`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </LoationContainer>}



        </PopcarandlocContainer>


      </AppContainer>

    </>}
      {email === "null" && <AppContainer> <div width='100px' >  Page Not found Please Sign in to continue <Link to="/signin"> Sign in here</Link> </div>  </AppContainer>
      }

      {email !== "cs1812170@szabist.pk" && <AppContainer> <div width='100px' >  Page Not found  <Link to="/home"> home</Link> </div>  </AppContainer>
      }
    </>

  )
}

export default Admin
