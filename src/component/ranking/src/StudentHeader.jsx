// The ranking frame contains parts as:
// Frame
//     StudentHeader
//     StudentBody
//          Item1
//          Item2
//          ....
// tr:row
// td:col
// value="0":default
import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class StudentHeader extends React.Component{
	//search
	handlerSearch(){
		let bar=React.findDOMNode(this.refs.searchBar);
		let value=bar.value;
		this.props.searchStudent(value);
	}
	//ranking
	handlerRanking(){
		let num=React.findDOMNode(this.refs.numOrder);
		let numValue=num.option[num.selectIndex].value;
		this.props.rankStudent(numValue);
	}

	render(){
		return(
<div class="container-fluid">
<div className="header">
	<h1 style={{"text-align":"center"}} className="ranking">Ranking</h1>
	<table className="headerTable">
		<tbody>
			<tr className="searchBar">
				<td className="leftSide">
					<input ref='searchBar' onChange={this.handlerSearch.bind(this)} type="text" placeholder="Search..." />					
				</td>
				<td className="rightSide">
					<label for="selectMethod">Select by:</label>
					<select id="selectMethod" ref="numOrder" onChange={this.handlerRanking.bind(this)}>
						<option value="0">Solved Problems this Week</option>
						<option value="1">Solved Problems this Month</option>
						<option value="2">Name</option>
					</select>
				</td>
			</tr>
		</tbody>
	</table>
</div>
</div>
			)
	}
}