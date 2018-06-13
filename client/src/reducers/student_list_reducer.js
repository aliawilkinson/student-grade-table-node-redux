import types from '../actions/types';


const DEFAULT_STATE = {
    studentList: []
};

export default (state = DEFAULT_STATE, action) => {
    debugger;
    switch (action.type) {
        case types.GET_STUDENT_LIST:
            return {
                ...state,
                studentList: action.payload.data.data
            }
        default:
            return state;
    }
}