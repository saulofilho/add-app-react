import React, { Component } from 'react';
import './App.css';
import Table from "./Components/Table/Table";
import Form from "./Components/Form/Form";

export default class App extends Component {
  state = {
    characters: []
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    const { characters } = this.state

    return (
      <div className="small-container">
        <Table 
          characterData={characters} 
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="container">
//       <Table />
//     </div>
//   );
// }

// export default App;