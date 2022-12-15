const initialstate = {
    users :[],
    status : true
};

const userreducer = (state = initialstate, action) => {
    return {...state,users : action.payload} 
}

export default userreducer