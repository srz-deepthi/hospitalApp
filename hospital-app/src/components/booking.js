import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Navigator from './navigator'
import Paper from '@mui/material/Paper'
import { InputTextField } from './inputTextField'
import InputSelectField from './inputSelectField'
import { InputDateField } from './inputDateField'
import { getBranches, getSpeciality, getSpecialist } from '../redux/action'
import ButtonComp from './buttonComp'
import '../App.css'

export const Booking = (props) => {

  const [book,setBook] = useState({
      name:"",
      mobile_number:"",
      email:""
    })

  useEffect(() => { 
      props.getBranches();
  },[]) 

  const handleChange = (event) =>{
    const name = event.target.name
    setBook({
              ...book,
              [name]: event.target.value
        })
  }

  const handleSelectChange = (event, itemK) =>{
      console.log("props",itemK)
      if(itemK === "office_name"){
          props.getSpeciality(event.target.value.office_id)
      }
      if(itemK === "department_name"){
        // console.log("o and d",event.target.value.office_id,event.target.value.department_id)
        props.getSpecialist(event.target.value.office_id,event.target.value.department_id)
      }
  }
 
  const handleSubmit = () =>{
    console.log("in submit");
  }

  return (
    <div>
         {/* {console.log("props",props.specialitylist)} */}
     {/* </div> */}
     {/* <div> */}
      <Navigator userDet={props.userRes}/>
      <h2 className="classH2">Booking Appointment</h2>
      <form className="classForm" onSubmit={handleSubmit}>
      <Paper> 
          <div className="classBookFields">
            <InputTextField 
                      type="text" 
                      label="Name" 
                      value={book.name} 
                      name="name" 
                      onChange={handleChange} 
            />
            <InputTextField 
                      type="number" 
                      label="Mobile Number" 
                      value={book.mobile_number} 
                      name="mobile_number" 
                      onChange={handleChange} 
            />
            <InputTextField 
                      type="email" 
                      label="Email ID" 
                      value={book.email} 
                      name="email" 
                      onChange={handleChange} 
            />
            <InputSelectField 
                      label="Select Branch"
                      itemKey="office_name"
                      items={props.branchesList?.officeList}
                      onChange={handleSelectChange}
                      />
            <InputSelectField
                      label="Select Speciality"
                      itemKey="department_name"
                      items={props.specialityList?.departmentsList}
                      onChange={handleSelectChange}
                      />
            <InputSelectField
                      label="Select Specialist"
                      itemKey="doctors_name"
                      items={props.specialistList?.doctorsList}
                      onChange={handleSelectChange}
                      />
            <InputDateField
                      label="Preferred Appointment Date & Time"
                      />
          </div>
          <div className="classBookBtn">
              <ButtonComp label="Book Appointment"/>
          </div>
      </Paper> 
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log("speee",state.specialistList)
  return{
    userRes: state.user,
    branchesList: state.branchesList,
    specialityList: state.specialityList,
    specialistList: state.specialistList
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    getBranches: () => dispatch(getBranches()),
    getSpeciality: (id) => dispatch(getSpeciality(id)),
    getSpecialist: (officeId,deptId) => dispatch(getSpecialist(officeId,deptId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking)