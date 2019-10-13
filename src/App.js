import React, { Component } from 'react'
import './App.scss';
import Input from './Input/Input';
import Button from './Button/Button';
import ClearButton from './ClearButton/ClearButton';
import {evaluate} from 'mathjs'


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  };

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  }

  handelEqual = () => {
    this.setState({input: eval(this.state.input)});
  }

  clearInput = () => {
    this.setState({input: ""});
  }


  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input>{this.state.input}</Input>
          <div className="row">
            <Button handelClick={this.addToInput}>7</Button>
            <Button handelClick={this.addToInput}>8</Button>
            <Button handelClick={this.addToInput}>9</Button>
            <Button handelClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handelClick={this.addToInput}>4</Button>
            <Button handelClick={this.addToInput}>5</Button>
            <Button handelClick={this.addToInput}>6</Button>
            <Button handelClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handelClick={this.addToInput}>1</Button>
            <Button handelClick={this.addToInput}>2</Button>
            <Button handelClick={this.addToInput}>3</Button>
            <Button handelClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handelClick={this.addToInput}>.</Button>
            <Button handelClick={this.addToInput}>0</Button>
            <Button handelClick={()=> this.handelEqual()}>=</Button>
            <Button handelClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handelClick={this.clearInput}>
              clear
            </ClearButton>
            <div className="more-options">
              <div className="arrow"></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
