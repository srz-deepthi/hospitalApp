import React from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const InputSelectField = (props) => {

    const itemKey=props.itemKey
    const [temp, setTemp] = React.useState('');

    const handleChange = (event) => {
        setTemp(event.target.value);
        if(event.target.value !== "")
            { props.onChange(event,itemKey) }
      };

    return (
        <div>
            <div className="classDivLab">
                <label className="classLabel">
                    {props.label}
                </label>
            </div>
            <Select
                size="small"
                id="demo-simple-select-outlined"
                displayEmpty
                value={temp}
                onChange={handleChange}
                sx={{ m:2, width:500 }}
            >    
                <MenuItem value="">--Select--</MenuItem>
                { 
                    props.items?.map( (item) => 
                        <MenuItem value={ item }>{ item[itemKey] }</MenuItem> 
                    )
                }
            </Select>
    </div>
)
}

export default InputSelectField