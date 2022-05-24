import TextField from '@mui/material/TextField';
// import '../App.css'

export const InputTextField = (props) => {
    const handleChange = (event) => {
      if(props.onChange){
        props.onChange(event)
      }
    }
    return (
        <div>
          <div className="classDivLab">
          <lable className="classLabel">{props.label}</lable>
          </div>
            <TextField 
                  sx={{ m:2, width:500}}
                  size="small"
                  variant="outlined" 
                  label={props.label} 
                  name={props.name} 
                  type={props.type} 
                  value={props.value}   
                  onChange={handleChange}
                />
        </div> 
    )
}
