import React from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { CardContent , Button , Typography} from '@mui/material';

export const Login = (props) => {
  return (
    <div >
              <Card sx={{ width:500 , dispaly:"flex",justifyContent:"center", padding:5}}>
                  <Typography variant="h5" component="div">Patient Login</Typography>
                <CardContent sx={{display:"flex-center",flexDirection:"column", justifyContent:"center"}}>   
                    <TextField id="outlined-basic" label="user name" variant="outlined" sx={{ m: 1, width:400 }}/>
                    <TextField id="outlined-basic" label="Password" type="password" variant="outlined" sx={{ m: 1, width:400 }}/>
                </CardContent>
                <Button variant="contained" sx={{width:200, backgroundColor:"#800000"}}>Log in</Button>
                </Card>
    </div>
  )
}

export default Login