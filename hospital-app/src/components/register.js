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
    email:"",
    gender:"",
    address:"",
    ctry_name:"",
    m_status:""
  })
  const [gen]= useState(['Male','Female','Others'])
  const [nations]=useState([
                {ctry_name: 'Afghanistan', code: 'AF'}, 
                {ctry_name: 'Åland Islands', code: 'AX'}, 
                {ctry_name: 'Albania', code: 'AL'}, 
                {ctry_name: 'Algeria', code: 'DZ'}, 
                {ctry_name: 'American Samoa', code: 'AS'}
              ])
  const [marital]=useState([
        {m_status: 'Single'}, 
        {m_status: 'Widowed'}, 
        {m_status: 'Married'}, 
        {m_status: 'Divorced'}
      ])

  const handleChange = (event) =>{
    const name = event.target.name
    setReg({
              ...reg,
              [name]: event.target.value
        })
  }
  const handleSelectChange = (event,itemKey) =>{
    const name = itemKey
    setReg({
              ...reg,
              [name]: event.target.value[itemKey]
        })
  }

  const handleChangeDate = (itemK,value) =>{
    setReg({
      ...reg,
      [itemK]: value
    })
  }
  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log("in submit",reg);
  }
  return (
    <div>
      <Navigator userDet={props.userRes}/>
      <h2 className="classH2">Pre-Register</h2>
      <form className="classForm" onSubmit={handleSubmit}>
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
            <div style={{ display:"flex", paddingRight:30, marginTop:1}}>
              <InputDateField
                        label="Preferred Appointment Date & Time"
                        itemKey="appointment_date"
                        onChange={handleChangeDate}
                        />
              <InputSelectField
                      label="Gender"
                      itemKey="gender"
                      name="gender"
                      itemId=""
                      items={gen}
                      onChange={handleChange}
                      />
            </div>
            <InputSelectField
                      label="Nationality"
                      itemKey="ctry_name"
                      name="ctry_name"
                      itemId=""
                      items={nations}
                      onChange={handleSelectChange}
                      />
            <InputTextField 
                      type="text" 
                      label="Address" 
                      value={reg.address} 
                      name="address" 
                      onChange={handleChange} 
            /> 
            <InputTextField 
                      type="text" 
                      label="Emirates" 
                      value={reg.emirates} 
                      name="emirates" 
                      onChange={handleChange} 
            /> 
            <InputSelectField
                      label="Marital Status"
                      itemKey="m_status"
                      name="m_status"
                      itemId=""
                      items={marital}
                      onChange={handleSelectChange}
                      />   
            <InputTextField 
                      type="text" 
                      label="Occupation" 
                      value={reg.occupation} 
                      name="occupation" 
                      onChange={handleChange} 
            />
            <InputTextField 
                      type="text" 
                      label="ID/Passport No." 
                      value={reg.passport_no} 
                      name="passport_no" 
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
  return{
    userRes:state.user
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Register)