import React, { Component } from 'react';






class Series extends Component{
	
	render(){
		
		const getCurrentDate = () => {
	const date = new Date();
	return date.toDateString();
}

const Greeting = <h1>Hello World! Current Date:{getCurrentDate()}</h1> ;
		return(
		
		<div>{Greeting}</div>
		)
	}
}


export default Series;