import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import "react-tabs/style/react-tabs.css";

class Notes extends Component{
	constructor(props){
	
		super(props);
	  
		this.state = {
			
			notes:[],
			data: [
				{
				  id: 1,
				  keyword: 'Example Keyword',
				  product: {
					name: 'Red Shoe',
			  description: 'This is a red shoe.'
				  }
		  },{
			  id: 2,
				keyword: 'Second Example Keyword',
				product: {
				name: 'blue shirt',
				description: 'This is a blue shirt.'
				}
			}]

			
		}

		

		
	}
   


	render(){

		//const { data } = this.state;
		console.log(this.state.notes);
		 

		const columns2 = [
			{
				Header:"User ID",
				accessor: "id",
				style:{textAlign:"right"},
				width:100,
				maxWidth: 100,
				minWidth: 100
			},
			{ 
			Header:"Display Reason",
			accessor: "product",
			Cell: row => {
				return (
				  <div>
					<span className="class-for-name">{row.row.product.name}</span>
					<span className="class-for-description">{row.row.product.description}</span>
				  </div>
				)
			  },
			style:{
				textAlign:"right"
			},
			width:100,
			maxWidth: 100,
			minWidth: 100
			},
			{ 
			Header:"Title",
			accessor: "title",
			sortable:false,
			filterable: false
			},
			{ 
			Header:"Content",
			accessor: "body",
			sortable:false,
			filterable: false
			}
			]
			const tableContent2 = (
				<ReactTable
			columns={columns2} 
			data={this.state.data} 
			filterable 
			noDataText={"Please Wait..."}
			defaultPageSize={5}
			className="-striped -highlight"
			>
			</ReactTable>
			);
			
			
	return(
		
		<div>{tableContent2} 
		
		
   </div>
        
		)
	}
	
}


export default Notes;