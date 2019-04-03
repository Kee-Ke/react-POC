import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';


const getCurrentDate = () => {
	const date = new Date();
	return date.toDateString();
}

const Greeting = <h1>Hello World! Current Date:{getCurrentDate()}</h1> ; 




export default Greeting;