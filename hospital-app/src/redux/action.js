
var token="6acb4f92-01f6-4b86-8893-e0d32cb5418e";

export const reports = (user) => {
    return {
        type: "POST_REPORTS",
        payload:user,
        token:token

    }
}

export const login = (user) =>{
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