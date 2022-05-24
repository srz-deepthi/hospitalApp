import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

export const InputDateField = (props) => {
  // console.log("date",new Date())
  const [value, setValue] = React.useState(null);

  return (
    <div>
      <div className="classDivLab">
        <label className="classLabel">
            {props.label}
        </label>
      </div>
    <LocalizationProvider dateAdapter={AdapterDateFns}
    >
      <DatePicker
        sx={{paddingLeft:10}}
        label="Choose an appointment date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} sx={{ width:300, m:2}} size="small"/>}
      />
      <MobileTimePicker
          label="Time"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} sx={{ width:185, marginTop:2}} size="small" />}
      />
    </LocalizationProvider>
    </div>
  );
}
