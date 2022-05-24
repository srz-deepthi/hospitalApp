import React from 'react';
import Button from '@mui/material/Button';
import '../App.css';

const ButtonComp = (props) => {
  return (
      <div>
          <Button className="classButton" 
                  variant="contained" 
                  sx={{ fontWeight:700, fontSize:14,backgroundColor:"#04c35c"}}
                  type="submit"
                  >
                {props.label}
          </Button>
      </div>    
    )
}

export default ButtonComp