import React, { Component } from 'react';

import CardList from './components/Card-List/Card-List';
import SearchBox from './components/SearchBox/SearchBox';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchText: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monster => this.setState({ monsters: monster }));
  }

  changeHandler = e => {
    this.setState({ searchText: e.target.value })
  }

  render() {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          changeHandler={this.changeHandler}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
