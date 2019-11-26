import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

// so it seems like the state is the parent, the objects in it are the children (props). 

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
        console.log('constructor')
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
            console.log(this.state.searchfield);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    };

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return  (!robots.length) ? //!robots.length is saying the same thing as robots.length === 0
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
                // calling robots from state, and state is calling robots from importing robots.js file. CarldList has a map function breaking down the objects for each index
            )        
        }
    }

export default App;