import React, { Component } from 'react'

export default class Index extends Component {
  render(props) {
    return (
      <div>
       <h1> {this.props.name} </h1>
       <h3> Age: {this.props.age}  </h3>
       <h4> Hair Color: {this.props.hair} </h4>
       
      </div>
    )
  }
}
