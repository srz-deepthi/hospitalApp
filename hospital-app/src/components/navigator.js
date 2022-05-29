import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
import Avatar from '@mui/material/Avatar'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../App.css';

const Navigator = (props) => {
  return (
    <div className="classNav">
        <Header/>
        <Link className="classLink"  to="/home">Home</Link>
        <Link className="classLink" to="/booking">Online Booking</Link>
        <Link className="classLink" to="/register">Pre-Register</Link>
        <Link className="classLink" to="/survey">Patient Survey</Link>
        <div style={{ display:"flex", flexDirection:"row"}}>
          <div className="classAvatar">          
            <Avatar src="/broken-image.jpg" />
          </div>
          <h3 className="classH3">
            User1
            {props.userDet.name}
          </h3>
          <ArrowDropDownIcon className="classArrow"/>
        </div>
    </div>
  )
}

export default Navigator