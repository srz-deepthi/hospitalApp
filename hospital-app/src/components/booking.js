import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Navigator from './navigator'
import Paper from '@mui/material/Paper'
import { InputTextField } from './inputTextField'
import InputSelectField from './inputSelectField'
import { InputDateField } from './inputDateField'
import { Timer } from './timer';
import { getBranches, getSpeciality, getSpecialist } from '../redux/action'
import ButtonComp from './buttonComp'
import '../App.css'

export const Booking = (props) => {

  const [book,setBook] = useState({
      name:"",
      mobile_number:"",
      email:"",
      office_id:"",
      department_id:"",
      doctors_id:"",
      appointment_date:"",
      slot_time: "",
  })

  useEffect(() => { 
      props.getBranches();
  },[]) 

  const handleChangeDate = (itemK,value) =>{
    setBook({
      ...book,
      [itemK]: value
    })
  }

  const handleChange = (event) =>{
    const name = event.target.name
    setBook({
              ...book,
              [name]: event.target.value
        })
  }

  const handleSelectChange = (event, itemK) =>{
      if(itemK === "office_name"){
          setBook({
            ...book,
            [itemK]: event.target.value.office_id
          })
            props.getSpeciality(event.target.value.office_id)
      }
      if(itemK === "department_name"){
          setBook({
            ...book,
            [itemK]: event.target.value.department_id
          })
        props.getSpecialist(event.target.value.office_id,event.target.value.department_id)
      }
      if(itemK === "doctors_id"){
          setBook({
            ...book,
            [itemK]: event.target.value.doctors_id
          })
      }
  }
 
  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log("in submit",book);
  }

  return (
    <div>
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
                      label="Mobile No" 
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
                      itemId="office_id"
                      items={props.branchesList?.officeList}
                      onChange={handleSelectChange}
                      />
            <InputSelectField
                      label="Select Speciality"
                      itemKey="department_name"
                      itemId="department_id"
                      items={props.specialityList?.departmentsList}
                      onChange={handleSelectChange}
                      />
            <InputSelectField
                      label="Select Specialist"
                      itemKey="doctors_name"
                      itemId="doctors_id"
                      items={props.specialistList?.doctorsList}
                      onChange={handleSelectChange}
                      />
            <div style={{ display:"flex", paddingLeft:7}}>
              <InputDateField
                        label="Preferred Appointment Date & Time"
                        itemKey="appointment_date"
                        onChange={handleChangeDate}
                        />
              <Timer itemK="slot_time"
                     onChange={handleChangeDate}
              />
            </div>
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