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
				  "id": "1",
				  "keyword": "Example Keyword",
				  "product": {
					"name": "Red Shoe",
					"description": "This is a red shoe",
					"productList": [
					  {
						"id": "25",
						"listpp": "tes5"
					  },
					  {
						"id": "15",
						"listpp": "tes15"
					  }
					]
				  },
				  "firstLevel": [
					{
					  "id": "99",
					  "listpp": "tes5"
					},
					{
					  "id": "15",
					  "listpp": "tes15"
					}
				  ]
				},
				{
				  "id": "1",
				  "keyword": "Example Keyword",
				  "product": {
					"name": "Red Shoe",
					"description": "This is a red shoe",
					"productList": [
					  {
						"id": "25",
						"listpp": "tes5"
					  },
					  {
						"id": "15",
						"listpp": "tes15"
					  }
					]
				  },
				  "firstLevel": [
					{
					  "id": "99",
					  "listpp": "tes5"
					},
					{
					  "id": "15",
					  "listpp": "tes15"
					}
				  ]
				}
			  ]

			
		}

		var Url="https://wks-notes-lookup.app.dev.dal.pcf.syfbank.com/api/v1_0/loststolen/noteslookup";
		var Data ={
			"accountNumber":"6018595008816387",
			"transientSequence":"1"
		};
	
		fetch(Url, {
			method: 'POST',
			body: JSON.stringify(Data),
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then(res => res.json())	
		//.then(res=>{console.log(res)})
		.then(res =>{this.setState({notes:res.notes}); }) ;
		//this.setState({ dis : 'this.state.notes[0].taskList[0].displayReason '});
		

		
	}
   


	render(){

		//const { data } = this.state;
		console.log(this.state.notes);
		 

		const columns2 = [
			{
				Header:"User ID",
				accessor: "interactionId",
				style:{textAlign:"right"},
				width:100,
				maxWidth: 100,
				minWidth: 100
			},
			
			{ 
				Header:"Title",
				accessor: "displayReason",
				Cell: row => {
					debugger;
				
					var data = row.original ? row.original.taskList[0].displayReason : "";
					return (
					   
						<div>
							<span className="class-for-name">{data}</span>
						</div>
					)
				},
				sortable:false,
				filterable: false
				}
			]
			const tableContent2 = (
				<ReactTable
			columns={columns2} 
			data={this.state.notes} 
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