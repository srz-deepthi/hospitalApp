import React, { useState } from 'react'
import Table from '@mui/material/Table'
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

  
const TabList = (props) => {

    const [open, setOpen] = useState(false)
  
    const handleClick = () => {
        setOpen(!open);
    };

  return (
    <div>
        {/* {console.log(props.reportList.patientAppointmentsList)} */}
        {/* { props.reportList?.message === 'success' && props.reportList?.patientAppointmentsList === null ? */}
        <div>
        <TableContainer component={Paper}>
        <Table  aria-label="customized table">
            <TableHead sx={{ fontSize:27}}>
                <TableRow sx={{ minWidth: 700}}>
                            <StyledTableCell align="right">Token</StyledTableCell>
                            <StyledTableCell align="right">Visit Date</StyledTableCell>
                            <StyledTableCell align="right">Specialist</StyledTableCell>
                            <StyledTableCell align="right">Speciality</StyledTableCell>
                            <StyledTableCell align="right">Reports</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                    <TableRow >
                            <StyledTableCell align="right">23012</StyledTableCell>
                            <StyledTableCell align="right">2022-02-12	</StyledTableCell>
                            <StyledTableCell align="right">Dr.Kurumthottical Mathew Rooney Mathew	</StyledTableCell>
                            <StyledTableCell align="right">General Surgery</StyledTableCell>
                            <StyledTableCell align="right"><Button onClick={handleClick}>Reports</Button></StyledTableCell>
                    </TableRow>
            </TableBody>
        </Table>
    </TableContainer> 

    <Collapse in={open}>
    <TableContainer component={Paper}>
            <Table  aria-label="customized table" sx={{backgroundColor:"#ADD8E6",border:'1px solid grey'}}>
                <TableBody>
                <TableRow>
                            <StyledTableCell align="right" >Lab Reports</StyledTableCell>
                            <StyledTableCell align="right">Medical Reports</StyledTableCell>
                            <StyledTableCell align="right">Radiology Reports</StyledTableCell>
                            <StyledTableCell align="right">Prescription</StyledTableCell>
                            <StyledTableCell align="right">Invoice</StyledTableCell>
                            <StyledTableCell align="right">Receipts</StyledTableCell>
                </TableRow>
                </TableBody>
                <TableBody>
                <TableRow >
                            <StyledTableCell align="right" >NA</StyledTableCell>
                            <StyledTableCell align="right" >NA</StyledTableCell>
                            <StyledTableCell align="right" >NA</StyledTableCell>
                            <StyledTableCell align="right" >NA</StyledTableCell>
                            <StyledTableCell align="right" >NA</StyledTableCell>
                            <StyledTableCell align="right" >NA</StyledTableCell>
                </TableRow>
                </TableBody>
            </Table>
    </TableContainer> 
    </Collapse>
    </div> 
    {/* : "No data" } */}
</div>
  )
}

export default TabList