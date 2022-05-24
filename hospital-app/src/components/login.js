import React from 'react'
import Card from '@mui/material/Card';
import { CardContent , Button , Typography} from '@mui/material';
import { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/action'
import { useNavigate } from 'react-router';
import { InputTextField } from './inputTextField';
import Header from './header';

export const Login = (props) => {

  let navigate = useNavigate()
  const [user,setUser]=useState({
    name:"",
    password:"",
    office_id:"4",      
    mobile_number: "1211121222"
  })

  const handleChange = (e) =>{
    const name = e.target.name
    setUser({
              ...user,
              [name]: e.target.value
          })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.login(user)
    // console.log("userlogin res: ", props.userRes)
    navigate("/home",{ state:{user:user}})
  }
  return (
    <div>
    <Header/>
    <div style={{ padding:50, backgroundColor:"#800000"}}>
        <form onSubmit={handleSubmit}>
            <div style={{display:"grid",justifyItems:"flex-end"}}>
                <Card sx={{ width:500 , dispaly:"flex", padding:5}}>
                    <Typography variant="h5" component="div">Patient Login</Typography>
                  <CardContent sx={{ display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
                        <InputTextField type="text" label="User name" value={user.name} name="name" onChange={handleChange}/>
                        <InputTextField type="password" label="Password" value={user.password} name="password" onChange={handleChange}/>
                  </CardContent>
                  <Button variant="contained" sx={{width:200, backgroundColor:"#800000"}} type="submit">Log in</Button>
                  </Card>
            </div>
        </form>
    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    // console.log("res: ",state.user)
    return {
      userRes:state.user
    }
  }

const mapDispatchToProps = dispatch => {    
    return{
        login: (user) => dispatch(login(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
