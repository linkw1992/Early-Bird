import React from 'react';
import StudentHeader from './StudentHeader.jsx';
import ItemPanel from './ItemPanel.jsx';
import Student from './Student.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Management.css';

class Rank extends React.Component{
	constructor(){
		super();
		this.state={
			student:new student;
		};
	}
	//searchStudent, from StutentHeader
	searchStudent(word){
		this.setState(
			student: this.state.student.searchStudent(word);
			);
	}
	//rankStudent, from StutentHeader
	rankStudent(sortType){
		this.setState(
			student: this.state.student.rankStudent(sortType);
			);
	}

	render(){
		return(
			<div>
				<StudentHeader searchStudent={this.searchStudent.bind(this)} rankStudent={this.rankStudent.bind(this)}/>
				<ItemPanel items={this.state.student.student}/>
			</div>
			);
	}
}
React.render(<Rank/>, document.getElementById('Rank'));