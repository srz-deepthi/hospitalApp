import React from 'react'
import { connect } from 'react-redux'
import Navigator from './navigator'

export const Survey = (props) => {
  return (
    <div>
            <Navigator userDet={props.userRes}/>
            Survey
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    userRes:state.user

  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Survey)