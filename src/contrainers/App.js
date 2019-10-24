import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {robots} from "./Robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css'
import Scroll from "../components/Scroll";
import {setSearchField} from "../actions";


const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],

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


    render() {
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });

        if (!robots.length) {
            return <h1 className='tc f1'>LOADING</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f2'>Robofriends</h1>
                    <SearchBox searchChange={onSearchChange}/>

                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </div>

            )
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
