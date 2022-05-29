import React, { useState } from 'react';
import Table from '@mui/material/Table';
import { Paper, TableContainer, TableHead, TableBody, TableRow , Button, Collapse } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      // backgroundColor: "#1174D7",
      color: "black",
      fontSize:20,
      fontFamily: 'serif',
      textAlign:'center'     
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 17,
      fontFamily: 'serif',
      textAlign:'center'
    },
  }));
  
const SubReport = () => {
  const [open, setOpen] = useState(false)
  const handleToggle= () =>{
      setOpen(!open)
  }  
  return (
    <div>
      <div>
          <Button onClick={ handleToggle }>Reports</Button>
      </div>
    </div>
  )
}

export default SubReport