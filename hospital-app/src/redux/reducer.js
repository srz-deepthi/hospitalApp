const initialState = {
    user:[],
    reportList:[],
    branchesList:[],
    specialityList:[],
    specialistList:[]
}

const Reducer = (state = initialState, action) => {
    if(action.type === 'POST_REPORTS_INFO'){
        return{
            ...state,
            reportList : action.postInfo,
            type : action.type,
        }
    }

    if(action.type === 'LOGIN_USER_INFO'){
        return{
            user:action.postInfo,
            type : action.type
        } 
    }

    if( action.type === 'GET_BRANCHES_INFO'){
        // console.log("branches",action.getInfo)
        return{
            ...state,
            branchesList: action.getInfo
        }
    }

    if( action.type === 'GET_SPECIALITY_INFO'){
        // console.log("speciality",action.getInfo)
        return{
            ...state,
            specialityList: action.getInfo
        }
    }

    if( action.type === 'GET_SPECIALIST_INFO'){
        console.log("specialist",action.getInfo)
        return{
            ...state,
            specialistList: action.getInfo
        }
    }
    return state
}

export default Reducer