import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import './App.css';

class App extends Component{
  constructor(){
  	super()
  	this.state = {
  		/*robots: robots,*/
  		robots: [],
	    searchfield: ''
  	}
  }

  onSearchChanged = (event) => {
  	  this.setState({ searchfield: event.target.value })
      
  }

  render(){
  	const filterRobots = this.state.robots.filter(robots =>{
         return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })
  	return (
		<div className='tc'>
		  <h1 className='f1'>Robofriends</h1>
		  <SearchBox searchChange= {this.onSearchChanged}/>
          <CardList robots={filterRobots}/>
        </div>
	);
  }
}
export default App;