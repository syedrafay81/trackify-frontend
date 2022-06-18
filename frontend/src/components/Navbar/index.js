import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../Navbar/Header.css';

import { createFromIconfontCN } from '@ant-design/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Btn } from '../Button'
import { Link } from 'react-router-dom';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
  Dropmanu,
  Mobmanubox
} from './NavbarElements';
import { SdCard } from '@material-ui/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});





const Navbar = () => {
  const [Mobmanu, setMobmanu] = useState(false);
  const [email, setemail] = useState(localStorage.getItem('email'));
  const [name, setname] = useState(localStorage.getItem('name'));
  //  const email = localStorage.getItem('email')

  const Dropmmanu = (e) => {

    setTimeout(() => {
      setMobmanu(current => !current);
    }, 200);
  };

  const onClickkk =()=>{

    localStorage.removeItem('email')
     localStorage.removeItem('name')

  }


  return (
    <div >


      <Nav style={{backgroundColor: "lightblue"}}>
        <Link to='/home'>
          {/* <div>logo</div> */}
          <h1>Trackify</h1>
        </Link>
        <Bars onClick={(Dropmmanu)} />
        <NavMenu>


        {email != 'null' &&  <>{name != 'driver' &&  <NavLink to='/home' activeStyle >
            Home
          </NavLink>
          
  }
         </> }


          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/bookingform' activeStyle>
            contact
          </NavLink>


   

         
          {email != 'null' && <>{name === 'driver' &&  <NavLink to='/services' activeStyle>
            Student
          </NavLink>  }
         </> }


          <NavLink to='/fee' activeStyle>
          Fee Schedule
          </NavLink>

        {email != 'null' &&  <>{name != 'driver' &&  <NavLink to='/profile' activeStyle>
            Profile
          </NavLink>  }
         </> }

         {email === 'null' && <NavLink to='/login'  > Sign In</NavLink>}

         {email != 'null' && <NavLink to='/login' onClick={()=>{ 
           localStorage.setItem('email' , "null")
           localStorage.removeItem('name')  
            }}>Log out</NavLink> }

{email == 'aliahmed.samoo.1@gmail.com' && <NavLink to='/admin' onClick={()=>{ 
          
            }}>Admin</NavLink> }

        
      
        </NavMenu>


      </Nav>

      
    </div>
  );
};

export default Navbar;
