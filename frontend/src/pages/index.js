import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Carousel as Carousel2, Image } from 'antd';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps";
import Happyclient from '@material-ui/icons/SentimentVerySatisfied';
import Carinstock from '@material-ui/icons/LocalTaxi';
import Offices from '@material-ui/icons/EmojiTransportation';
import { Btn } from '../components/Button'
import { Link } from 'react-router-dom';
import { PopularCars } from '../components/Carbox'
import Navbar from '../components/Navbar/index';
import Carousel from "react-elastic-carousel";






const AppContainer = styled.div`
  
// background-image: url(https://static.vecteezy.com/system/resources/previews/002/196/246/non_2x/abstract-hexagon-lines-pattern-on-dark-blue-background-technology-connection-and-digital-structure-concept-background-free-vector.jpg);
  // background: #e3e5e8;
  //  width: 2200px;
    height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  //  background: #fdd5b1;
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
`;




const ServicesContainer = styled.div`
  
background-image: src(src="gari.png");
//background-Size: 100%;
    width: 100%;
    height: auto;
    //background: #999;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: bottom;
    margin-bottom: 5%;
    margin-top: 5%;
    border-radius: 50px;
    color : #fff;

    @media screen and (max-width: 768px) {
      background-Size: 1100%;
      border-radius: 5px;
      margin-top: 2%;
       }
 
`;

const SubServicesContainer = styled.p`
color: #000;
position: absolute;
margin-top: 150px;
z-index: 2;   
width: 50%;
    height: 200px;
   // background: #999;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    margin: 5%;  
  //   display: grid;
  //   grid-template-columns: auto auto auto auto;
  //  grid-gap: 120px;
  @media screen and (max-width: 750px) {
     font-size: 11px;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // width: 80%;
    
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
   // flex-direction: column;
   // align-items: center;
   // justify-content: center;
   // width: 80%;
   
 }


 @media screen and (max-width: 520px) {
  font-size: 7px;
 // flex-direction: column;
 // align-items: center;
 // justify-content: center;
 // width: 80%;
 
}

@media screen and (max-width: 390px) {
  font-size: 7px;
 // flex-direction: column;
 // align-items: center;
 // justify-content: center;
 // width: 80%;
 
}
`;


const CountContainer = styled.div`
    width: 100%;
    height: 100%;
   // background: #999;
   display:flex;
  //  grid-template-columns: auto auto auto auto;
  //  grid-gap: 10%;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;  
   
    @media screen and (max-width: 700px) {
      
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80%;
      height: 100%;
    }
  
`;

// grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

const SubCountContainer = styled.p`
    width: 300px;
    height: 130px;
    //background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArkhS4-u2dvj2xcdwtzI8xjR9pZisnIQdZQ&usqp=CAU);
    display: flex;
  margin-left: 50px;
  margin-right: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size:60%;
    margin-top: 0.5%;
    border-radius: 50px;
    box-shadow: 0px 0px 10px 2px;
    text-color: #orange;
    @media screen and (max-width: 360px) {
      width: 240px;
    height: 100px;
      flex-direction: column;
     
    }
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




const PartnersContainer = styled.div`
  
 
    width: 90%;
    height: 300px;
   // background: #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: bottom;
    margin-bottom: 5%;
    
`;


const Imgwhyustop = styled.img`
  
 
     width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    margin-bottom: 5%;
    margin-top: 3%;
    border-radius: 20px;
    
 
`;


const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 90%;
  //background-color: #00008B;
  //color: #fff;
  margin: 1px;
  
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


const Studentchart = styled.div`
box-shadow: 0px 0px 2px 5px;
width: 500px;
height: 220px;
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



const breakPoints = [

  { width: 1, itemsToShow: 1 },
  { width: 350, itemsToShow: 2 },
  { width: 500, itemsToShow: 3 },
  { width: 600, itemsToShow: 4 },
  { width: 950, itemsToShow: 5 },
];
const contentStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};




const Home = () => {
  const emaillll = localStorage.getItem('email')
  if (emaillll === null) { localStorage.setItem('email', 'null') }

  const [active, setActive] = useState("pularCars");

  const [TotalUsers, setTotalUsers] = useState(0);
  const [student, setstudent] = useState([""])
  const [Totaloffices, seTotaloffices] = useState(1);
  const email = localStorage.getItem('email')

  const [longitude, setlongitude] = useState();
  const [latitude, setlatitude] = useState();

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


  return (
    <div> <Navbar /><div style={({ height: `80px` })}> </div>
      <div style={({ height: `10px` })}> </div>



      <AppContainer >

        {/* <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', height: '100%' }}>Why US</h1> */}


        <p>Add details of your child  <Link to="/addstudent">click here</Link></p>

        <PopcarandlocContainer>
          <Popcarandlocheader>
            <Popcarandlocheaderbtn to='/' onClick={switchTopularCars} activeStyle> Student</Popcarandlocheaderbtn>
            <Popcarandlocheaderbtn to='#loc' onClick={switchTolocation} activeStyle >Bus Location</Popcarandlocheaderbtn>
          </Popcarandlocheader>
          {active === "pularCars" && <PuplarCarContainer >


            <Studentlist>
              {student.map((student) => (<>
                <Studentchart><Studentdetails>
                  <div>
                    <h2>{student.studentname}</h2>
                    <h5>School Name : {student.schoolname}</h5>
                    <h5>School Location : {student.drop}</h5>
                    <h5>Bus Driver : {student.drivername}</h5>
                    <h5>Bus Driver ID : {student.busnumberplate}</h5>
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

                  </div> </Studentdetails>
                  <Image src={student.studentimage} alt="" width='50%' height='96%' />


                </Studentchart>
              </>))}

            </Studentlist>







          </PuplarCarContainer  >}



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
    </div>
  );
};

export default Home;
