import React, { Component } from 'react'

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state={
      counter: this.props.age,
    }
  }
  fun1=()=>{
    this.setState({counter:this.state.counter+1})
  }
  fun2=()=>{
    this.setState({counter:this.props.age})
  }
  render() {
    return (
 
      <div>
        <h1> {this.props.name} </h1>
        <h3> Age: {this.state.counter}  </h3>
        <h4> Hair Color: {this.props.hair} </h4>
        <button onClick={this.fun1}>Birthday Button for {this.props.name} </button>
        <button onClick={this.fun2}>ResetAge Buton for {this.props.name} </button>
      </div>

    )
  }
}
