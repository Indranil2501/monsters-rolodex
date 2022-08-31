import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Indranil", lastName: "Das" },
      company: "Tech Mahindra"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi, I am {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}.</p>
          <button onClick={() => {
            this.setState(()=>{
              return (
                { name: { firstName: "Sayan", lastName: "Pal" }, company: "Uber" }
              );
            },
            ()=>{
              console.log(this.state);
            })
          }}>Change Names</button>
        </header>
      </div>
    );
  }
}

export default App;
