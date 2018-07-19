import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class StudentItem extends React.Component{
	render(){
		return(
			<tr style={{'cursor':'pointer'}}>
			<td className='Rankingitem'>{this.props.item.info.ranking}</td>
			<td className='Rankingitem'>{this.props.item.info.name}</td>
			<td className='Rankingitem'>{this.props.item.info.gradeWeek}</td>
			<td className='Rankingitem'>{this.props.item.info.gradeMonth}</td>
			</tr>
			);
	}
}