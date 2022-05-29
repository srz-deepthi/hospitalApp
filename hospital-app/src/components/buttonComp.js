import React from 'react';
import Button from '@mui/material/Button';
import '../App.css';

const ButtonComp = (props) => {
  return (
      <div>
          <Button className="classButton" 
                  variant="contained" 
                  sx={{ fontWeight:700, fontSize:14,backgroundColor:(props.bId === 'logIn')? "#800000" :"#04c35c", width:300}}
                  type="submit"
                  >
                {props.label}
          </Button>
      </div>    
    )
}

export default ButtonComp