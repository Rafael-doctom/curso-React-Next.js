import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Rafael...'
    }
  }

  render() {

    const nome = this.state.name

    return (
      <h1>
        {nome}
      </h1>
    )
  }
}

export default App