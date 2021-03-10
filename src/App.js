import React, { PureComponent } from 'react';
import "./App.css";


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeObject : null,
      objects : [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
      ]
    };
  }

  handleClick(index) {
    this.setState({
      activeObject: this.state.objects[index]
    });
  }

  handleStyle(index) {
    // console.log("index" + index)
    if(this.state.objects[index] === this.state.activeObject){
      return "box active"
    }
    else{
      return "box inactive"
    }
  }

  render(){
    return (
      <div className="App">
        {this.state.objects.map((elements, index)=> (
          <div
            key={index}
            className={this.handleStyle(index)}
            onClick={() => this.handleClick(index)}
          >
          </div>
        )) }
      </div>
    )
  }


}
export default App;