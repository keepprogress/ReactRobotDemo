import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    // this.handleChange = this.handleChange.bind(this);
    // use arrow function to write method in class so we wouldn't need to use this bind method
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( { monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
{/* this.setState is asynchronous function so it will active after console.log(this.state) 
    we can write second argument funtion to run after setState*/}
      <h1> Monster Rolodex </h1>
      <SearchBox
        placeholder = 'search monster'
        handleChange = {this.handleChange}
      />
      <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
