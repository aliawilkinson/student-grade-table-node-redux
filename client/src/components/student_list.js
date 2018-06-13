import React, { Component } from 'react';
import SingleStudent from './single_student';
import { connect } from 'react-redux';
import { getStudentList } from '../actions';
import '../assets/css/student_list.css';

class StudentList extends Component {
    constructor(props) {
        super(props);
        debugger;
        this.getStudentData();
    };

    async getStudentData() {
        debugger;
        await this.props.getStudentList();
    }
    render() {

        const studentData = this.props.studentList.map((item, itemIndex) => {
            return (
                <tr key={itemIndex}>
                    <td>{item.student_name}</td>
                    <td>{item.grade_value}</td>
                    <td>{item.class_name}</td>
                    <td>Edit</td>
                    <td><button className>Delete</button></td>
                </tr>
            );
        });

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
                    </thead>
                    <tbody>
                        {studentData}
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