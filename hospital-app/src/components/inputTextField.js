import TextField from '@mui/material/TextField';

export const InputTextField = (props) => {
    const handleChange = (event) => {
      if(props.onChange){
        props.onChange(event)
      }
    }

    return (
        <div className="classFields">
          <div className="classDivLab">
          <lable className="classLabel">{props.label}</lable>
          </div>
            <TextField 
                  sx={{ width:500}}
                  size="small"
                  variant="outlined" 
                  label={( props.itemId === "long" )? " " : props.label} 
                  name={props.name} 
                  type={props.type} 
                  value={props.value}   
                  onChange={handleChange}
                />
        </div> 
    )
}
