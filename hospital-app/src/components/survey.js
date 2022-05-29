import React, { useState} from 'react'
import { connect } from 'react-redux'
import Navigator from './navigator'
import Paper from '@mui/material/Paper'
import { InputTextField } from './inputTextField'
import InputSelectField from './inputSelectField'
import ButtonComp from './buttonComp'

export const Survey = (props) => {

  const [months] = useState([
              {month_of_visit: 'January'}, 
              {month_of_visit: 'February'}, 
              {month_of_visit: 'March'}, 
              {month_of_visit: 'May'}, 
              {month_of_visit: 'June'}, 
              {month_of_visit: 'July'}, 
              {month_of_visit: 'August'}, 
              {month_of_visit: 'September'}, 
              {month_of_visit: 'October'}, 
              {month_of_visit: 'November'}, 
              {month_of_visit: 'December'}, 
            ])
  const [newPat]= useState([
                          {newPatient:"Yes"},
                          {newPatient:"No"}
                        ])
  const [rating]= useState([
                    {rate_us:"Very Satisfied"},
                    {rate_us:"Satisfied"},
                    {rate_us:"Somewhat Satisfied"},
                    {rate_us:"Not Very Satisfied"},
                    {rate_us:"Not Satisfied"},
                    {rate_us:"Disappointed"},
                  ])
  const [patient_recommend]= useState([
                  { recommend:"Very Likely"},
                  { recommend:"Likely" },
                  { recommend:"Somewhat Likely" },
                  { recommend:"Not Very Likely" },
                  { recommend:"Not Likely" },
                  { recommend:"Not at all" }
                ])
  const [known_from]=useState([
    {known_source:'friends'},
    {known_source:'Instagram'},
    {known_source:'Twitter'}
  ])
  const [question,setQuestion] = useState({
    "month_of_visit":""
  })

  const handleChange = (event) =>{
    const name = event.target.name;
    setQuestion({
              ...question,
              [name]:event.target.value
      })
  }
  const handleSelectChange = (event, itemK) =>{
    const name = event.target.name;
    if(itemK === "office_name"){
      setQuestion({
          ...question,
          [itemK]: event.target.value.office_id
        })
    }
    else{
      setQuestion({
            ...question,
            [name]:event.target.value[name]
    })
    }
  }

  const handleSubmit = (event) =>{
      event.preventDefault();
      console.log(question)
  }
  return (
    <div>
            <Navigator userDet={props.userRes}/>
            <h2 className="classH2">Customer Satisfaction Survey</h2>
            <form className="classForm" onSubmit={handleSubmit} method="post">
              <Paper sx={{paddingTop:6}}> 
                <div className='classSurvey'>
                  <div className="colLeft">
                    <InputSelectField
                              label="What month did you visit us?"
                              itemKey="month_of_visit"
                              name="month_of_visit"
                              itemId="1"
                              items={months}
                              onChange={handleSelectChange}
                      />
                  </div>
                  <div className="colRight">
                      <InputSelectField
                                label="Are you a new patient with us?"
                                itemKey="newPatient"
                                name="newPatient"
                                itemId="1"
                                items={newPat}
                                onChange={handleSelectChange}
                      />
                  </div>
                </div>

                <div className='classSurvey'>
                  <div className="colLeft">
                      <InputTextField 
                            type="number" 
                            label="Mobile No" 
                            value={question.mobile_number} 
                            name="mobile_number" 
                            onChange={handleChange} 
                      />
                  </div>                  
                  <div className="colRight">
                        <InputSelectField 
                              label="Which branch did you visit"
                              itemKey="office_name"
                              name="office_id"
                              itemId=""
                              items={props.branchesList?.officeList}
                              onChange={handleSelectChange}
                        />
                  </div>
                </div>

                <div className='classSurvey'>
                  <div className="colLeft">
                        <InputTextField 
                                  type="text" 
                                  label="Doctor's Name" 
                                  value={question.doctors_name} 
                                  name="doctors_name" 
                                  onChange={handleChange} 
                        />
                  </div>
                </div>
                
                <div className='classSurvey'>
                  <div className="colLeft">
                        <InputSelectField
                                  label="How satisfied are you with the overall treatment and care you received?"
                                  itemKey="rate_us"
                                  name="rate_us"
                                  itemId="1"
                                  items={rating}
                                  onChange={handleSelectChange}
                        />
                  </div>
                  <div className="colRight" style={{ paddingTop:23 }}>
                      <InputTextField 
                                type="text" 
                                label="Any suggestions for improvement?" 
                                itemId="long"
                                value={question.suggestion} 
                                name="suggestion" 
                                onChange={handleChange} 
                      />
                  </div>
                </div>

                <div className='classSurvey'>
                  <div className="colLeft">
                      <InputSelectField
                                label="How satisfied are you with your overall experience with our Facility?"
                                itemKey="rate_us"
                                name="rate_us_overall"
                                itemId="1"
                                items={rating}
                                onChange={handleSelectChange}
                      />
                  </div>
                  <div className="colRight">
                    <InputTextField 
                              type="text" 
                              label="If you are not satisfied with your overall experience with our facility what are your suggestions for improvement?"
                              itemId="long" 
                              value={question.suggestion_overall} 
                              name="suggestion_overall" 
                              onChange={handleChange} 
                        />
                  </div>
                </div>

                <div className='classSurvey'>
                  <div className="colLeft">
                      <InputSelectField
                                label="How likely are you to recommend us to a friend, relative or colleague?"
                                itemKey="recommend"
                                name="recommend"
                                itemId="1"
                                items={patient_recommend}
                                onChange={handleSelectChange}
                          />
                  </div>
                  <div className="colRight" >
                    {/* style={{ paddingTop:35}}> */}
                        <InputSelectField
                                  label="How did you hear about us?"
                                  itemKey="known_source"
                                  name="known_source"
                                  itemId="1"
                                  items={known_from}
                                  onChange={handleSelectChange}
                        />
                  </div>
                </div>

                <div className="classBookBtn">
                     <ButtonComp label="Submit"/>
                </div>
              </Paper>
            </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    userRes:state.user,
    branchesList: state.branchesList,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Survey)