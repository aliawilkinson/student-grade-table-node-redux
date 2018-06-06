import React, { Component } from 'react';
import SingleStudent from './single_student';
import { connect } from 'react-redux';
import { getStudentList } from '../actions';
import '../assets/css/student_list.css';

class StudentList extends Component {
    render() {
        console.log(this.props.getStudentList());
        return (
            <div className="student-list">
                <table className="">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Student Course</th>
                            <th>Student Grade</th>
                            <th>Operations</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        studentList: state.studentListReducer.studentList
    });
};

export default connect(mapStateToProps, { getStudentList })(StudentList);