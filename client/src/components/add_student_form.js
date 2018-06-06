import React, { Component } from 'react';
import '../assets/css/add_student_form.css';

class AddStudentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    render() {
        return (
            <div className="student-add-form form-group col-lg-3 pull-right">
                <h4>Add Student</h4>
                <div className="input-group form-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-user"></span>
                    </span>
                    <input type="text" className="form-control" name="studentName" id="studentName" placeholder="Student Name" />
                </div>
                <div className="input-group form-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-list-alt"></span>
                    </span>
                    <input type="text" className="form-control" name="course" id="course" placeholder="Student Course" />
                </div>
                <div className="input-group form-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-education"></span>
                    </span>
                    <input type="text" className="form-control" name="studentGrade" id="studentGrade" placeholder="Student Grade" />
                </div>
                <button type="button" className="btn">Add</button>
                <button type="button" className="btn red lighten-2">Cancel</button>
                <button type="button" className="btn grey">Clear All</button>
                <button type="button" className="btn blue lighten-2">Get Students From Server</button>
            </div>
        )
    }
}

export default AddStudentForm;