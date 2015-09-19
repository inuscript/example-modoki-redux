import React, { Component } from "react"
import Counter from '../components/Counter.jsx';

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      counter: 0
    }
  }
  get actions(){
    return {
      increment : () => {
        this.setState({
          counter: this.state.counter + 1
        })
      }, 
      decrement : () => {
        this.setState({
          counter: this.state.counter - 1
        })
      }
    }
  }
  render(){
    let props = {
      counter: this.state.counter,
      ...this.actions
    }
    return <Counter { ...props }/>
  }
}