

const USER_DATA = {
    user: [],
};



function UPDATEUSER(state = USER_DATA, action) {


    switch (action.type) {
        case 'UPDATE_USER_DATA':
            state.user = action.user
            return { ...state }



        default:

            return state
    }

}


export default UPDATEUSER
