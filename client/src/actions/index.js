import types from './types';
import axios from 'axios';
import dummyData from '../dummy_data/dummy_data.js'

export function incrementCount(count) {
    return {
        type: types.INCREMENT_COUNT,
        payload: ++count
    }
}

export function getStudentList() {
    debugger;
    const response = axios.get('/api/get_student_data');

    return {
        type: types.GET_STUDENT_LIST,
        payload: response
    }
}