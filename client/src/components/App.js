import React, { Component } from 'react';
import AddStudentForm from './add_student_form';
import Footer from './footer';
import Header from './header';
import StudentList from './student_list';
import '../assets/css/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <AddStudentForm />
        <StudentList />
        <Footer />
      </div>
    );
  }
}

export default App;
