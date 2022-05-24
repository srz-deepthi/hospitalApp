import React from 'react'
import { connect } from 'react-redux'
import { reports } from '../redux/action';
import { useLocation } from 'react-router-dom';
import TabList from './tabList'
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

  return (
    <div>
      <Navigator userDet={props.userRes}/>
      <TabList reportList={props.reportList}/>
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

