import { Component } from "react";


class App extends Component {


  componentDidMount() {
    setTimeout(() => {
      alert('5 segundos...')
    }, 5000)
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>

      </div>
    );
  }
}

export default App