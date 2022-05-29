import React from 'react'
import { connect } from 'react-redux'
import { reports } from '../redux/action';
import { useLocation } from 'react-router-dom';
import Appointment from './appointmentList'
import Navigator from './navigator'

const Home = (props) => {
  
  const userLog = useLocation();
  
  const user={

    "office_id":props.userRes.office_id, 
    // userLog.state.user.office_id,      
    "mobile_number" : "1211121222"
    // userLog.state.user.mobile_number

  }

  React.useEffect( () => {
    props.reports(user)
  },[])

  const [appointmentList] = React.useState({
      headingLabel:['Token', 'Visit Date', 'Specialist', 'Speciality', 'Reports'],
      patientAppointmentsList:[
        {
          token:'23011',
          visit_date:'22-01-2021',
          specialist:'Dr.Andrew',
          speciality:'Cardiology',
          reports:'Reports'
        },
        {
          token:'23012',
          visit_date:'23-05-2022',
          specialist:'Dr.Pete',
          speciality:'Nuerology',
          reports:'Reports'
        },
        {
          token:'23011',
          visit_date:'24-05-2022',
          specialist:'Dr.Andrew',
          speciality:'Cardiology',
          reports:'Reports'
        },
        {
          token:'23011',
          visit_date:'24-05-2022',
          specialist:'Dr.Andrew',
          speciality:'Cardiology',
          reports:'Reports'
        },{
          token:'23011',
          visit_date:'24-05-2022',
          specialist:'Dr.Andrew',
          speciality:'Cardiology',
          reports:'Reports'
        }
      ]
  })
  return (
    <div>
      <Navigator userDet={props.userRes}/>
      <Appointment reportList={props.reportList} appointmentList={appointmentList} headKey='headingLabel' itemKey='patientAppointmentsList'/>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    reportList : state.reportList,
    userRes:state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    reports: (user) => dispatch(reports(user))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

