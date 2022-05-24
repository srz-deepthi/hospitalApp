
var token="794ef27b-3849-4634-88b3-89293f335313";

export const reports = (user) => {
    return {
        type: "POST_REPORTS",
        payload:user,
        token:token

    }
}

export const login = (user) =>{
    // console.log("user",user)
    return{
        type:"LOGIN_USER",
        payload:user
    }
}

export const getBranches = () => { 
    return {
        type: "GET_BRANCHES",
        token : token
    }
}

export const getSpeciality = (props) => {
    return {
        type: "GET_SPECIALITY",
        payload:props,
        token:token
    }
}

export const getSpecialist = (officeId,deptId) => {
    return {
        type: "GET_SPECIALIST",
        officeId:officeId,
        deptId:deptId,
        token:token
    }
}