const INITIAL_STATE = {
    data : "sign up reducer here",
    user : []
}



const reducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case "DataFromSignup" :
            return(
            action.user

            )
    
            // return state.SignUpreducer
           


            default :
            return state;

    }

    // return state
    
    
}

export default reducer