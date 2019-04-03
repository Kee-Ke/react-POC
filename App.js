import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Series from './Components/tv-series';
import Notes from './Components/notes';




class App extends Component {
	
	constructor(props){		
		super(props);
		this.state = {
			posts:[]				
		}	
	}
	
	componentDidMount(){
   
		
//.then(res=>{console.log(res.notes[0].taskList[0].displayReason)})
		
		


		const url = "https://jsonplaceholder.typicode.com/posts";
		fetch(url,{
			method:"GET"
		})
		.then(response => response.json())
		.then(posts => { this.setState({posts: posts}) 		}) 
		
		
	}
	deleteRow(id){
		const index = this.state.posts.findIndex(post =>{
			return post.id === id
		})
		console.log("index", index)
	}
  render() {
		

	  const columns = [
	  {
		  Header:"User ID",
		  accessor: "userId",
		  style:{textAlign:"right"},
		  width:100,
		  maxWidth: 100,
		  minWidth: 100
	  },
	  { 
		Header:"ID",
		accessor: "id",
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
	  const tableContent = (
	    <ReactTable
		columns={columns} 
		data={this.state.posts} 
		filterable 
		noDataText={"Please Wait..."}
		defaultPageSize={5}
		className="-striped -highlight"
		>
		</ReactTable>
	  );
	  const displayPosts = (
		<Tabs defaultIndex={0} onSelect={index => console.log(index)}>
		 <TabList>
		   <Tab>View By Request</Tab>
		   <Tab>View by Inquiry</Tab>
		 </TabList>
		 <TabPanel><Notes /></TabPanel>
		  <TabPanel>tEST FOR 2</TabPanel>
		</Tabs>   
		);
		
		


    return (
      <div className="App">
        <header>View Notes</header>
		<div className="wrapper">
		 {displayPosts}
		</div>
		<Series />
		
		<div></div>
      </div>
    );
  }
}

export default App;