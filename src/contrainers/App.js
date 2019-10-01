import React, {Component} from 'react'
// import {robots} from "./Robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css'
import Scroll from "../components/Scroll";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            this.setState({
                robots: users
            })
        });

    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        });


    };

    render() {
        const {robots, searchfield} = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });

        if (!robots.length) {
            return <h1 className='tc f1'>LOADING</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f2'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>

                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </div>

            )
        }
    }
}


export default App;