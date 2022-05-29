import React from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const InputSelectField = (props) => {

    const itemKey = props.itemKey
    const [temp, setTemp] = React.useState('');

    const handleChange = (event) => {
        setTemp(event.target.value);
        if( event.target.value !== "" && props.itemKey !== 'gender' && props.itemId !== "1" )
            { props.onChange(event,itemKey) }
        else{ props.onChange(event) }
      };

    return (
        <div className='classFields'>
            <div className='classDivLab'>
                <label className="classLabel">
                    {props.label}
                </label>
            </div>
            <Select
                size="small"
                id="demo-simple-select-outlined"
                displayEmpty
                name={props.name}
                value={temp}
                onChange={handleChange}
                sx={{ width:( itemKey === 'gender' )? 170: 500 , marginTop:( itemKey === 'gender' )?1.2:0}}
            >    
                <MenuItem value="">--Select--</MenuItem>
                    { props.itemKey === 'gender' ? 
                        props.items.map( (item) => 
                            <MenuItem value={ item }>{ item }</MenuItem> ) :                      
                        props.items?.map( (item) => 
                            <MenuItem value={ item }>{ item[itemKey] }</MenuItem> 
                    )}
            </Select>
    </div>
)
}

export default InputSelectField