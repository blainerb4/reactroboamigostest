import React, {Component} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
//import { robots } from './robots';
import './App.css'
import Scroll from './Scroll'
//can create components in react

/*
const state = {
    robots: robots,
    searchfield: ''
}*/

//constructor declares the state
class App extends Component {
    constructor (){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({robots: users}))
}
//componentdidmount-lifecycle hooks comes after render (method of react)
// use arrow functions wwhen make own method
// anytime want to set state this.setState.
onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
}


render() {
    const { robots, searchfield} = this.state
    const filteredRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length ?
        <h1>Loading</h1> :
    (
            <div className='tc'>
            <h1 className= 'h2'>Robofriends</h1>
            <SearchBox searchChange= {this.onSearchChange}/>
            <Scroll>
            <CardList robots={filteredRobots}/>
            </Scroll>
            </div>
        )
    }
    
}

//added if statement 
// <CardList robots={this.state.robots}/>
    // <CardList robots={robots}/>
export default App;




//class App extends React.Component
//to class App extends Component { ....import React, {Component} from 'react'
/*class App extends React.Component{ 
    render(){
        return (
            <div class='tc'>
            <h1>Robofriends</h1>
            <SearchBox />
            <CardList robots={robots}/>
            </div>
        )
    }
}

componentDidMount (){
    fetch ('https://jsonplaceholder.typicode.com/users').then(response =>{
        return response.json();
    })
    .then(users=>{
    this.setState({robots: users})
    })
   
}
componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({robots: users}))
}

//ternary
    return (this.state.robots.length === 0) ?
        <h1>Loading</h1> :
    (
            <div className='tc'>
            <h1 className= 'h2'>Robofriends</h1>
            <SearchBox searchChange= {this.onSearchChange}/>
            <Scroll>
            <CardList robots={filteredRobots}/>
            </Scroll>
            </div>
        )
    }
    
}

render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0){
            return <h1>Loading</h1>
        } else{
            return (
                <div className='tc'>
                <h1 className= 'h2'>Robofriends</h1>
                <SearchBox searchChange= {this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots}/>
                </Scroll>
                </div>
            )
        }
        
    }
}

*/
