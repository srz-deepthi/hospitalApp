import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import { Paper, TableContainer, TableHead, TableBody, TableRow , Button, Collapse } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import SubReport from './subReportlist'

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

  
const Appointment = (props) => {
  var length = props.appointmentList.patientAppointmentsList.length;
  const [toggleArray,setToggle] = useState(new Array(length).fill(false))
  const [open,setOpen]= useState(false)
  const handleToggle = (idx,value) => {
    setOpen(!open)
    setToggle(
      toggleArray.fill(false),
      (value === false)? toggleArray[idx]=true: toggleArray[idx]=false
    );
    console.log(toggleArray)
  };

  return (
    <div>
        <TableContainer component={Paper}>
          <Table  aria-label="customized table">
            <TableHead sx={{ fontSize:27}}>
                <TableRow sx={{ minWidth: 700}}>
                  { props.appointmentList.headingLabel.map((itemHead) => 
                    <StyledTableCell align="right">{ itemHead }</StyledTableCell>
                  )}
                </TableRow>
            </TableHead>
          </Table>
        </TableContainer>    
              {props.appointmentList.patientAppointmentsList.map(( item, index) => <>
                  <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                    <TableBody>
                        <TableRow>
                              <StyledTableCell align="right">{item.token}</StyledTableCell>
                              <StyledTableCell align="right">{item.visit_date}</StyledTableCell>
                              <StyledTableCell align="right">{item.specialist}</StyledTableCell>
                              <StyledTableCell align="right">{item.speciality}</StyledTableCell>
                              <StyledTableCell align="right">
                                <Button onClick={() => handleToggle(index,toggleArray[index])}>REPORTS</Button>
                              </StyledTableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>    
                  {/* {console.log("dd",index, open, toggleArray[index])} */}
                  <Collapse in={toggleArray[index]}>
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
              </>               
              )}
    
    {/* : "No data" } */}
</div>
  )
}

export default Appointment