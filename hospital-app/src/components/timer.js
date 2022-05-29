import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import moment from 'moment'

export const Timer = (props) => {
  const [value, setValue] = React.useState(null);

  const handleChange = (value) =>{
    var dateVar=moment(value).format('HH:mm')
    setValue(value)
    props.onChange(props.itemK,dateVar)
  }

  return (
    <div>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileTimePicker
          label="Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} sx={{ width:185, marginTop:5.22}} size="small" />}
      />
    </LocalizationProvider>
    </div>
  );
}
