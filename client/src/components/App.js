import React, { Component } from 'react';
import '../assets/images/css/App.css';
import AddStudentForm from './add_student_form';
import Footer from './footer';
import Header from './header';
import StudentList from './student_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddStudentForm />
        <StudentList />
        <Footer />
      </div>
    );
  }
}

export default App;
