import React, { useState, useEffect } from 'react';
import { storage } from "../firebase";
import '../components/Carregisterform/Form.css';
import styled from "styled-components";
import { Select, Input, Upload, message, Image, Button } from 'antd';
import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';
import { Marginer } from "../components/marginer";
import Navbar from '../components/Navbar/index';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useHistory } from 'react-router-dom'

import { Btn } from "../components/Button"

const AppContainer = styled.div`
  
 //background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
   background-Size: 20%;
   width:100%;
    height: 800px;
  display: flex;
  // flex-direction: column;
  // align-items: center;
  justify-content: center;
   //background: rgb(50,142,65);
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
  @media screen and (max-width: 768px) {
    display: none;
  
  }

  `;


const AppContainer1 = styled.div`
  
 //background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
   background-Size: 20%;
   width:100%;
    height: 87vh;
  display: flex;
  flex-direction: column;
   align-items: center;
  justify-content: center;
   //background: rgb(50,142,65);
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
  

  `;


const AppContainermob = styled.div`
  
  display: none;
  @media screen and (max-width: 768px) {
  
    // background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
    // background-Size: 20%;
    width:100%;
    height: 100%;
     min-height: 60vh;
   display: flex;
  //  flex-direction: column;
  //  align-items: center;
   justify-content: left;
    //background: rgb(50,142,65);
   // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
  }

  `;

const FormContainer = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
 
`;

const List = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  //justify-content: center;
  box-shadow: 0 0 0 1px;
  flex-direction: column;
`;

const Carchart = styled.div`
  
box-shadow: 0px 0px 2px 5px;
    width: 100%;
    height: 100%;
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
    height: 250px;
    display: flex;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
  font-size: 15px;
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

const CarrequestsContainer = styled.div`
  
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
   box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
   @media screen and (max-width: 768px) {
     grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
   align-items: center;
   justify-content: center;
      
`;

const Form = styled.div`
  
  
  
   
    width:90%;
    height: 100%;
  

  `;


const Buses = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  box-shadow: 0 0 0 1px;
   background: #999;
`;

const Buses1 = styled.div`
  width: 100%;
  height: 6%;
  display: flex;
  box-shadow: 0 0 0 1px;
   
`;


const Busesinfo = styled.div`
width: 28%;
height: fitcontent;
display: flex;
align-items: center;
   justify-content: center;
box-shadow: 0 0 0 1px ;

`;



const Bg = styled.div`
width: 100%;
position: fixed;
height: 100vh;
background: #000;
z-index: 3;
// display: flex;
opacity:0.5;
// align-items: center;
//    justify-content: center;
`;

const Popup = styled.div`
width: 80%;
margin: 100px;
position: fixed;
height: 70%;
background: #fff;
z-index: 10;
// opacity:0.5;
display: flex;
align-items: center;
   justify-content: center;
`;










function Addcarform() {


  const emaillll = localStorage.getItem('email')
  if (emaillll === null) { localStorage.setItem('email', 'null') }
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formsubmitted = () => {

    setIsSubmitted(true);

  };


  const [Activebtn, setActivebtn] = useState("true");


  const [Img, setImg] = useState(false)


  const handleChangeimage = (e) => {
    console.log(e.target.files[0])
    setImg(e.target.files[0]);

  }


  const [drivername, setdrivername] = useState("");
  const [driveremail, setdriveremail] = useState("");
  const [drivernumber, setdrivernumber] = useState("");
  const [Trackerid, setTrackerid] = useState("");
  const [busnumberplate, setbusnumberplate] = useState("");
  const [buspick, setbuspick] = useState("");
  const [busdrop, setbusdrop] = useState("");
  const [fathername, setfathername] = useState(localStorage.getItem("name"));
  const [email, setdriverbus] = useState(localStorage.getItem("email"));
  const [Studentname, setStudentname] = useState("");
  const [schoolname, setschoolname] = useState("");
  const [fathermobile, setfathermobile] = useState("");
  const [Studentnumber, setStudentnumber] = useState("");
  const [drop, setdrop] = useState("");
  const [pickup, setpickup] = useState("");
  const [imgurl, setimgurl] = useState("");
  const [Popupsub, setPopupsub] = useState(false);

  const [driverlist, setdriverlist] = useState([""])

  const PostData = async (event) => {

    await setActivebtn("false");
    event.preventDefault();
    const hide = message.loading('Action in progress..', 0);



    const image = uuid();
    await storage.ref(`images/${image}`).put(Img);
    const Url = await storage.ref(`images`).child(image).getDownloadURL();

    await setimgurl(Url);






    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({

      "driverschool": schoolname
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const res = await fetch("http://localhost:5000/registerstudent", requestOptions)

    if (res.status === 200) {

      res.json().then(result => setdriverlist(result))
    }

    // const ras2 = res.json()
    // // .then(result => setdriverlist(result));
    // console.log(ras2)
    await setTimeout(hide, 1);

    await console.log(driverlist);


    await formsubmitted();



  }





  return (<>

    <Navbar />
    <div style={({ display: 'flex', justifyContent: 'center', })}>
      {Popupsub === true && <>  <Bg onClick={() => { setPopupsub(false) }} >




      </Bg>
        <Popup>


          <Carchart><Cardetails>
            <div>
              <h2>Student Name : {Studentname}</h2>
              <h5>School Name : {schoolname}</h5>
              <h5>Father Name : {fathername}</h5>
              <h5>Father Email : {email}</h5>
              <h5>Father Mobile : {fathermobile} </h5>
              <h5>Student Roll Number : {Studentnumber} </h5>
              <h5>DRIO : {drop} </h5>
              <h5>Pick-up : {pickup}</h5>
              <h5>Driver name : {drivername}</h5>
              <h5>Driver number : {drivernumber}</h5>
              <h5>Bus plate number : {busnumberplate}</h5>
              <h5>Bus Pickup point : {buspick} </h5>
              <h5>Bus Dropoff point: {busdrop}</h5>


              <Btn onClick={async () => {

                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({

                  "fathername": fathername,
                  "driveremail": driveremail,
                  "email": email,
                  "studentname": Studentname,
                  "fathermobile": fathermobile,
                  "studentnumber": Studentnumber,
                  "schoolname": schoolname,
                  "drivername": drivername,
                  "busnumberplate": busnumberplate,
                  "Trackerid": Trackerid,
                  "drivernumber": drivernumber,
                  "pick": buspick,
                  "drop": busdrop,
                  "studentimage": imgurl
                });

                var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
                };

                const res = await fetch("http://localhost:5000/registerstudentdata", requestOptions)

                if (res.status === 200) {

                  window.location.reload(false);
                }




              }

              } >confirm</Btn>
              <Btn onClick={() => { setPopupsub(false) }}>cancle</Btn>













            </div> </Cardetails>
            <Image src={imgurl} alt="Hondacivic" width='50%' height='96%' />


          </Carchart>



        </Popup></>} </div>

    <div style={({ height: `80px` })}> </div>





    <AppContainer>

      <div className='form-container'>
        <div className='form-content-left'>
          <h1 style={{ color: `#000` }}>New Student Admission</h1>
          <img className='form-img' src='trackify log.png' alt='Car' />
        </div>
        {!isSubmitted ? (
          <FormContainer className='form' onSubmit={PostData}  >

            <h1 style={{ color: `#000` }}>
              Get started with us today! Add detail of your child by filling out the
              information below.
            </h1>
            <Input onChange={(e) => setStudentname(e.target.value)} type='text' name='username' required='true' placeholder='Enter your child' /> <Marginer direction="vertical" margin={20} />
            <Input onChange={(e) => setfathermobile(e.target.value)} type='text' name='Model' required='true' placeholder='your phone number' /><Marginer direction="vertical" margin={20} />
            <Input onChange={(e) => setStudentnumber(e.target.value)} type='text' name='number' required='true' placeholder='Enter Roll Number of your Child ' /><Marginer direction="vertical" margin={20} />


            <Select
              onChange={(value) => { setschoolname(value) }}
              showSearch
              style={{
                width: 490,
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
            </Select><Marginer direction="vertical" margin={20} />


            <Select
              onChange={(value) => { setpickup(value) }}
              showSearch
              style={{
                width: 490,
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
            </Select><Marginer direction="vertical" margin={20} />


            <Select
              onChange={(value) => { setdrop(value) }}
              showSearch
              style={{
                width: 490,
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
            </Select><Marginer direction="vertical" margin={20} />

            <p>upload picture of your child</p>  <input type="file"
              required='true'
              name='photo' id="photo" accept="image/*" onChange={handleChangeimage} />

            {Activebtn === "true" && <>    <Btn type="submit" >available  buses</Btn></>}
            {Activebtn === "false" && <>    <Btn type="button" onClick={() => { message.info("please wait ") }} >available  buses</Btn></>}



          </FormContainer>



        ) : (
          <div className='form-content-right'>
            <List>

              <h1>select bus</h1>

              <Buses>

                <Busesinfo><h2>Driver Name</h2></Busesinfo>
                <Busesinfo><h2>Driver contact</h2></Busesinfo>
                <Busesinfo><h2>Bus ID</h2></Busesinfo>
              </Buses>



              {driverlist.map((Driver) => (<>
                <Buses1>

                  <Busesinfo>{Driver.drivername}</Busesinfo>
                  <Busesinfo>{Driver.drivermobile}</Busesinfo>
                  <Busesinfo>{Driver.driverbus}</Busesinfo>
                  <Btn onClick={() => {
                    setdrivername(Driver.drivername)
                    setdrivernumber(Driver.drivermobile)
                    setTrackerid(Driver.drivertracker)
                    setbusnumberplate(Driver.driverbus)
                    setbuspick(Driver.driverpickup)
                    setbusdrop(Driver.driverdropoff)
                    setdriveremail(Driver.driveemail)
                    setPopupsub(true)

                  }} >select</Btn>
                </Buses1>

              </>))}

            </List>
          </div>
        )}
      </div>
    </AppContainer>
















  </>)
}

export default Addcarform
