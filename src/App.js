import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( { monsters: users }));
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
      <SearchBox
        placeholder = 'search monster'
        handleChange = {e => {this.setState({ searchField: e.target.value }, () => console.log(this.state))}}
      />
      <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
