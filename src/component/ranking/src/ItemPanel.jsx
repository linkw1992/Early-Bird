import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemPanel.css';
import StudentItem from './StudentItem.jsx';

export default class ItemPanel from React.Component{
	render(){
		let data=[];

		if(this.props.data.length==0){//no such result
			data.push(<tr><th colSpan="4" style={{"text-align":"center"}} className="noresult">No Such Result.</th></tr>);//combine 3 cols
		}
		else{
			this.props.data.forEach(item=>{
				data.push(<StudentItem key={item.key} item={item}/>);//StudentItem from StudentItem.jsx
			});
			}
			return(
				<table className="table table-striped">
				<thead>
					<th className="Rankingitem">Ranking</th>
					<th className="Rankingitem">Name</th>
					<th className="Rankingitem">Solved Problems this Week</th>
					<th className="Rankingitem">Solved Problems this Month</th>
				</thead>
				<tbody>{data}</tbody>
				</table>
				);
		}
	}