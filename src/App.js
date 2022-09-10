import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }

    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }, () => {
        console.log(this.state);
      }))
  }

  onSearchChange = (event) => {
    console.log(event);
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    console.log("render");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((m) => {
      return m.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <input 
          className="search-box" 
          type="search" 
          placeholder="Search monsters" 
          onChange={onSearchChange} />
        {
          filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
