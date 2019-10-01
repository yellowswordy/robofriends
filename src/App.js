import React, {Component} from 'react'
import {robots} from "./Robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css'


class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            robots: robots,
            searchfield: ''
        }

    }

    onSearchChange = (event)=> {
        this.setState({
            searchfield: event.target.value
        });


    };
    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
    return (
        <div className='tc'>
            <h1 className='f2'>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filterRobots}/>
        </div>

    )
}
}



export default App;