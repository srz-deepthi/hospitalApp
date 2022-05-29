import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment'

export const InputDateField = (props) => {
  const [value, setValue] = React.useState(null);

  const handleChange = (value) =>{
    var dateVar=moment(value).format('DD-MM-YYYY')
    setValue(value)
    props.onChange(props.itemKey,dateVar)
  }

  return (
    <div className='classFields'>
      <div className='classDivLab'>
        <label className="classLabel">
            {props.label}
        </label>
      </div>
    <LocalizationProvider dateAdapter={AdapterDateFns}
    >
      <DatePicker
        label="Choose an appointment date"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} sx={{ width:300, marginRight:1.5, marginTop:0.8}} size="small"/>}
      />
    </LocalizationProvider>
    </div>
  );
}
