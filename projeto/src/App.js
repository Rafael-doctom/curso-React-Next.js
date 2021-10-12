import React, { Component } from "react";


export class App extends Component{

    state = {
      contador: 0
    }

    handleClick = () => {
      this.setState({contador: this.state.contador + 1})
    }
    render(){
      return(
        <>
        <div>
          <p>total: {this.state.contador}</p>
          <button onClick={this.handleClick}>add mais 1</button>
        </div>
        </>
      )
    }
}

export default App