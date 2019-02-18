import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
/*import {robots} from './robots';*/
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{
  constructor(){
  	super()
  	this.state = {
  		/*robots: robots,*/
  		robots: [],
	    searchfield: ''
  	}
    console.log('constructor');
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({ robots: users })});
     
     console.log('componentDidMount');
  }

  onSearchChanged = (event) => {
  	  this.setState({ searchfield: event.target.value })
  }

  render()
  {
  	const filterRobots = this.state.robots.filter(robots =>{
         return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })
    console.log('render');

    if(this.state.robots.length ===0){
      return <h1>Loading</h1>
    }else
    {
      return (
       <div className='tc'>
         <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange= {this.onSearchChanged}/>
        <Scroll>
          <CardList robots={filterRobots}/>
        </Scroll>
      </div>
     );
   }
  }
}
export default App;