import React, { useState } from 'react'
import { connect } from 'react-redux'
import Navigator from './navigator'
import Paper from '@mui/material/Paper'
import { InputTextField } from './inputTextField'
import { InputDateField } from './inputDateField'
import InputSelectField from './inputSelectField'
import ButtonComp from './buttonComp'

export const Register = (props) => {

  const [reg,setReg] = useState({
    name:"",
    mobile_number:"",
    email:""
  })

  const handleChange = (event) =>{
    const name = event.target.name
    setReg({
              ...reg,
              [name]: event.target.value
        })
  }
  return (
    <div>
      <Navigator userDet={props.userRes}/>
      <h2 className="classH2">Pre-Register</h2>
      <form className="classForm">
        <Paper> 
          <div className="classBookFields">
            <InputTextField 
                      type="text" 
                      label="Name" 
                      value={reg.name} 
                      name="name" 
                      onChange={handleChange} 
            />
            <InputTextField 
                      type="email" 
                      label="Email ID" 
                      value={reg.email} 
                      name="email" 
                      onChange={handleChange} 
            />
            <InputTextField 
                      type="number" 
                      label="Mobile Number" 
                      value={reg.mobile_number} 
                      name="mobile_number" 
                      onChange={handleChange} 
            />     

          </div>
          <div className="classBookBtn">
              <ButtonComp label="submit"/>
          </div>
        </Paper>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log("state Reg: ",state.user)
  return{
    userRes:state.user
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Register)