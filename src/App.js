import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayValue: 0,
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    }
  }
  
  handleClearClick = (e) =>{
    this.setState({displayValue: 0});
  }
  handlePercentClick = (e) =>{
    const newNum = this.state.displayValue/100;
    this.setState({displayValue: newNum});
  }
  handleSignClick = (e) =>{
    console.log(e);
  }
  handleDivideClick = (e) =>{
    console.log(e);
  }

  handleNumClick = (e) =>{
    const numDisplayed = this.state.displayValue;
    const numPressed = e.target.innerText;
    const op = this.state.operation;

    if (op === null && numDisplayed === 0){
      this.setState({displayValue: numPressed});
    } else if (op !== null && numDisplayed !== 0){
      this.setState({displayValue: numPressed});
    } else {
      const newNum = numDisplayed + numPressed;
      this.setState({displayValue: parseInt(newNum)});
    }
  }

  handleMultiplyClick = (e) =>{
    console.log(e);
  }
  handleSubtractClick = (e) =>{
    console.log(e);
  }
  handleAddClick = (e) =>{
    console.log(e);
  }
  handleDecimalClick = (e) =>{
    console.log(e);
  }
  handleEqualClick = (e) =>{
    console.log(e);
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='container'>
          <div className='row display'>{this.state.displayValue}</div>
          <div className='row'>
            <div className='col button' onClick={e => this.handleClearClick(e)}>AC</div>
            <div className='col button' onClick={e => this.handlePercentClick(e)}>%</div>
            <div className='col button' onClick={e => this.handleSignClick(e)}>±</div>
            <div className='col orange' onClick={e => this.handleDivideClick(e)}>÷</div>
          </div>
          <div className='row'>
            <div className='col button' onClick={e => this.handleNumClick(e)}>7</div>
            <div className='col button' onClick={e => this.handleNumClick(e)}>8</div>
            <div className='col button' onClick={e => this.handleNumClick(e)}>9</div>
            <div className='col orange' onClick={e => this.handleMultiplyClick(e)}>x</div>
          </div>
          <div className='row'>
            <div className='col button' onClick={e => this.handleNumClick(e)}>4</div>
            <div className='col button' onClick={e => this.handleNumClick(e)}>5</div>
            <div className='col button' onClick={e => this.handleNumClick(e)}>6</div>
            <div className='col orange' onClick={e => this.handleSubtractClick(e)}>-</div>
          </div>
          <div className='row'>
            <div className='col button' onClick={e => this.handleNumClick(e)}>1</div>
            <div className='col button' onClick={e => this.handleNumClick(e)}>2</div>
            <div className='col button' onClick={e => this.handleNumClick(e)}>3</div>
            <div className='col orange' onClick={e => this.handleAddClick(e)}>+</div>
          </div>
          <div className='row'>
            <div className='col-2 button' onClick={e => this.handleNumClick(e)}>0</div>
            <div className='col button' onClick={e => this.handleDecimalClick(e)}>.</div>
            <div className='col orange' onClick={e => this.handleEqualClick(e)}>=</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
