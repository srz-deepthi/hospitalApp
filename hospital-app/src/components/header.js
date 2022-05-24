import React from 'react'

const Header = () => {
  return (
    <div style={{backgroundColor:"white", paddingLeft:50 , display:"flex", flexDirection:"row"}}>
        <h1 style={{color:"#686A6C"}}> ABC Hospital </h1>
        <h3 style={{color:"#2B547E", paddingTop:15, paddingLeft:20}}> Patient Portal </h3> 
    </div>
  )
}

export default Header