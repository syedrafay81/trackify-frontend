import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar/index';
import { Form, Input, Button, Image, message } from 'antd';
import { Btn } from '../components/Button'
import { Link, useHistory } from 'react-router-dom';
import zIndex from '@material-ui/core/styles/zIndex';
import { Message } from '@material-ui/icons';


const AppContainer = styled.div`
  
 //background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
   background-Size: 20%;
  //  width: 2200px;
    height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //  background: #c2c2c2;
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
`;


const ProfileContainer = styled.div`
  
background: #e6e6fa; 
// change by haroon
    width: 80%;
    height: 100%;
    //display: grid;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
    // flex-direction: row;
     align-items: center;
    // justify-content: center;
    margin: 5%;
    border-radius: 50px;
    box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
 
`;

const ProfileContainerleft = styled.div`
  
color : #fff;
    width: 100%;
    height: 300px;
    //background: #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    border-radius: 10px;
 
`;

const ProfileContainerright = styled.div`
  
//background-Size: 100%;
    width: 100%;
    height: 500px;
   // background: #888;
     overflow-x: hidden;
     //display: flex;
     //flex-direction: row;
    //  align-items: top;
    //  justify-content: center;
   
    border-radius: 10px;
 
`;


const Carchart = styled.div`
  
box-shadow: 0px 0px 2px 5px;
    width: 98%;
    height: 220px;
    display: flex;
    //grid-template-columns: auto auto auto auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    margin-top: 40px;
    margin-left: 1%;
   
    border-radius: 20px 20px 0px 0px;

 
`;

const Request = styled.div`
  
box-shadow: 0px 0px 2px 5px;
    height: 200px;
    display: flex;
    //grid-template-columns: auto auto auto auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 1%;
    width: 98%;
   
    border-radius: 0px 0px 20px 20px;
  
 
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
   
    @media screen and (max-width: 500px) {
      width: 80%;
      font-size: 10px;
      height: 100px;
      // margin-top: 2px;
       margin-left: 10px;
    
    }
  
 
`;

const Btuns = styled(Link)`
 height: 100%;
 width: 50%;
  display: flex;
  justify-content: center;
   align-items: center ;

   @media screen and (max-width: 500px) {
     height: 100%;
     width: 50%;
     display: grid;
     justify-content: center;
     align-items: center ;
  
  }
`;


function Profile() {
  const emaillll = localStorage.getItem('email')
  if (emaillll === null) { localStorage.setItem('email', 'null') }
  const username = localStorage.getItem('name')
  const history = useHistory();
  const [Requesttt, setRequesttt] = useState([])
  const [RequestttAccepted, setRequestttAccepted] = useState([])
  const [RequestttRejected, setRequestttRejected] = useState([])
  const [Requeststatus, setRequeststatus] = useState("null")
  const [Requeststatusa, setRequeststatusa] = useState("null")
  const [bookingg, setbookingg] = useState([])
  const [bookinggAccepted, setbookinggAccepted] = useState([])
  const [bookinggRejected, setbookinggRejected] = useState([])
  const email = localStorage.getItem('email');
  const [Accountdelet, setAccountdelet] = useState("false")
  const [profileedit, setprofileedit] = useState("false")
  const [Newname, setNewname] = useState(localStorage.getItem('name'))
  const [Newemail, setNewemail] = useState(localStorage.getItem('email'))
  const [Oldpassword, setOldpassword] = useState("")
  const [Newpassword, setNewpassword] = useState("")
  const [Activebtn, setActivebtn] = useState("true")

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  localStorage.setItem('today', yyyy + '-' + mm + '-' + dd);





  useEffect(async () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": email
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    await fetch("https://rent-a-car-pakistan.herokuapp.com/bookinggetrequestdata", requestOptions)
      .then(response => response.json())
      .then(result => setbookingg(result))
      .catch(error => console.log('error', error))

    await fetch("https://rent-a-car-pakistan.herokuapp.com/bookinggetAcceptedrequestdata", requestOptions)
      .then(response => response.json())
      .then(result => setbookinggAccepted(result))
      .catch(error => console.log('error', error))

    await fetch("https://rent-a-car-pakistan.herokuapp.com/bookinggetRejectedrequestdata", requestOptions)
      .then(response => response.json())
      .then(result => setbookinggRejected(result))
      .catch(error => console.log('error', error))




  }, 5000)


  useEffect(async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "Useremail": email
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    await fetch("https://rent-a-car-pakistan.herokuapp.com/getrequestdata", requestOptions)
      .then(response => response.json())
      .then(result => setRequesttt(result))
      .catch(error => console.log('error', error))


    await fetch("https://rent-a-car-pakistan.herokuapp.com/getAcceptedrequestdata", requestOptions)
      .then(response => response.json())
      .then(result => setRequestttAccepted(result))
      .catch(error => console.log('error', error))


    await fetch("https://rent-a-car-pakistan.herokuapp.com/getRejectedrequestdata", requestOptions)
      .then(response => response.json())
      .then(result => setRequestttRejected(result))
      .catch(error => console.log('error', error))






  }, 5000)






  const Path = "Carimages/"

  console.log("today date is ", localStorage.getItem('today'))

  const OOnFinish = async () => {


    await setActivebtn("false")


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": email,
      "name": Newname,
      "Oldpassword": Oldpassword,
      "Newpassword": Newpassword
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const res = await fetch("http://localhost:5000/updateuserdata", requestOptions)

    if (res.status === 200) {
      res.json().then(result => message.info(result))
      await setActivebtn("true")
      await localStorage.setItem('name', Newname)
      Cancel()
    }

    if (res.status === 422) {
      res.json().then(result => message.error(result))
      await setActivebtn("true")
      setOldpassword("")
    }
  };


  const [student, setstudent] = useState([""])
 

  useEffect(async() => {


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({

      "emaillll": email
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










  const Deleteaccount = async () => {
    await setActivebtn("false")
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": email,
      "Oldpassword": Oldpassword

    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const res = await fetch("http://localhost:5000/deleteaccount", requestOptions)
    if (res.status === 200) {
      res.json().then(result => message.info(result))
      localStorage.removeItem('name')
      localStorage.removeItem('email')
      localStorage.removeItem('today')
      function myFunction() {
        history.push("/")
        setActivebtn("true")
      }
      setTimeout(myFunction, 1000)

    }

    if (res.status === 422) {
      res.json().then(result => message.error(result))
      await setActivebtn("true")
      setOldpassword("")
    }



  }


  const Cancel = async () => {
    setprofileedit("false")
    setNewemail(localStorage.getItem('email'))
    setNewname(localStorage.getItem('name'))
    setNewpassword("")
    setOldpassword("")
    setAccountdelet("false")



  }




  return (



    <>

      {email !== "null" && <>  <Navbar /><div style={({ height: `80px` })}> </div>
        <AppContainer>
          <ProfileContainer> <ProfileContainerleft>
            {profileedit === "false" && <>
              {/* <h1>Profile:</h1> by haroon */}
              <h3>{username}</h3>
              {/* changing by haroon by haroon */}
              {/* <h1>Email:</h1> */}
              <h4>{email}</h4> </>}





            {profileedit === "true" && <>
              {Accountdelet === "false" && <>
                <Form

                  onFinish={OOnFinish}


                >
                  <Form.Item  >
                    <Input required="true" placeholder="New Name" type='text' value={Newname} onChange={(e) => { setNewname(e.target.value) }} />
                  </Form.Item>


                  <Input.Password required="true" onChange={(e) => { setOldpassword(e.target.value) }} type="password" value={Oldpassword} pattern="(?=.*[A-Z]).{6,}" title="Lenght should be 6 chracters and atleast one uppercase " name="password" placeholder="Old Password" />




                  <Input.Password type="password" onChange={(e) => { setNewpassword(e.target.value) }} value={Newpassword} pattern="(?=.*[A-Z]).{6,}" title="Lenght should be 6 chracters and atleast one uppercase " name="password" placeholder="New Password" />





                  <Button type="primary" htmlType="submit" >
                    Submit
                  </Button>

                  <Button danger onClick={() => { setAccountdelet("true") }}> Delete Account </Button>

                </Form>

              </>}
              {/* const [Accountdelet, setAccountdelet] = useState("false") */}

              {Accountdelet === "true" && <>



                <Form onFinish={Deleteaccount}> <Form.Item  >

                  <Input.Password required="true" onChange={(e) => { setOldpassword(e.target.value) }} type="password" value={Oldpassword} pattern="(?=.*[A-Z]).{6,}" title="Lenght should be 6 chracters and atleast one uppercase " name="password" placeholder="Old Password" />
                  <Input.Password required="true" type="password" pattern={Oldpassword} title="Old Password and Confirm password must match" name="password" placeholder="Confirm Password" />


                </Form.Item>
                  <Button danger htmlType="submit" > Delete Account </Button>

                </Form>
              </>}
            </>}







            <div style={{ display: `flex`, justifyContent: `center`, alignItems: `center` }} > 
                {profileedit === "false" && <> <Link style={{ marginLeft: `25px` }} onClick={() => { setprofileedit("true") }}> 
                 Edit profile</Link></>} 
              {profileedit === "true" && <>   <Link style={{ marginLeft: `25px` }} onClick={Cancel}> Cancel </Link> </>} </div>

          </ProfileContainerleft>
            <div style={{ height: `120%`, width: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }} >

            </div>

          







              <ProfileContainerright>
                <div>  




                  <>

                  {student.map((student) => (<>

                    <Carchart> <Cardetails>
                   <div>
                    <Form.Item  >

                  
                    <Input required="true" placeholder="New Name" type='text' value={student.studentname} onChange={(e) => { {student.studentname} }} />
                   <Input required="true" placeholder="New Name" type='text' value={student.schoolname} onChange={(e) => { setNewname(e.target.value) }} />
                   <Input required="true" placeholder="New Name" type='text' value="School Location" onChange={(e) => { setNewname(e.target.value) }} />
                   <Input required="true" placeholder="New Name" type='text' value={student.drivername} onChange={(e) => { setNewname(e.target.value) }} />
                   <Input required="true" placeholder="New Name" type='text' value={student.busnumberplate} onChange={(e) => { setNewname(e.target.value) }} />
                   <Button type="primary" htmlType="submit" >
                    Update
                  </Button>

                  <Button danger onClick={() => { setAccountdelet("true") }}> Delete Student </Button>

                  
                  </Form.Item>
                 
                      {/* <Input>Student Name</Input>
             <Input>School Name</Input>
             <Input>School Location </Input>
             <Input>Bus Driver</Input>
             <Input>Bus Driver ID</Input>*/}
           
             </div> 

                      </Cardetails>
                      <Image src={student.studentimage} alt="Hondacivic" width='30%' height='96%' />

                    </Carchart>
                    </>))}
           
                   
                  </>
           

                </div>










            </ProfileContainerright>






       









          </ProfileContainer>

      </AppContainer>




      </>
      }
{
  email === "null" && <AppContainer> <div width='100px' >  Page Not found Please Sign in to continue <Link to="/signin"> Sign in here</Link> </div>  </AppContainer>
}
    </>)
}




export default Profile


// https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29fee25b-bde5-448c-8405-4076545dcda4/d4atiy0-d0680677-cbe1-4a03-93e7-eef7c2ab7170.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5ZmVlMjViLWJkZTUtNDQ4Yy04NDA1LTQwNzY1NDVkY2RhNFwvZDRhdGl5MC1kMDY4MDY3Ny1jYmUxLTRhMDMtOTNlNy1lZWY3YzJhYjcxNzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.J0ux9pCzXx3hE_hxqZZYBenfeVWBB6djIc7pX18olaw
// https://www.onlygfx.com/wp-content/uploads/2016/09/red-rejected-stamp-4.png  rejected