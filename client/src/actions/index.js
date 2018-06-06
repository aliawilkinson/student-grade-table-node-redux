import types from './types';
import dummyData from '../dummy_data/dummy_data.js'

export function incrementCount(count) {
    return {
        type: types.INCREMENT_COUNT,
        payload: ++count
    }
}

export /*async*/ function getStudentList() {
    //axios call goes here
    // const response = await axios.get('url', dataToSend);
    return {
        type: types.GET_STUDENT_LIST,
        payload: dummyData
    }
}