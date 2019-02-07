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
    this.setState({
      displayValue: 0,
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
    }, ()=>{
      console.log(this.state)
    });
  }
  handlePercentClick = (e) =>{
    const newNum = this.state.displayValue/100;
    this.setState({displayValue: newNum}, ()=>{
      console.log(this.state)
    });
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
      this.setState({displayValue: numPressed}, ()=>{
        console.log(this.state)
      });
    } else if (op !== null && numDisplayed !== 0){
      this.setState({displayValue: numPressed}, ()=>{
        console.log(this.state)
      });
    } else {
      const newNum = numDisplayed + numPressed;
      this.setState({displayValue: newNum}, ()=>{
        console.log(this.state)
      });
    }
  }

  handleMultiplyClick = (e) =>{
    console.log(e);
  }
  handleSubtractClick = (e) =>{
    const currentVal = this.state.displayValue;
    this.setState({
      operation: '-',
      previousValue: currentVal,
    }, ()=>{
      console.log(this.state)
    });
    
  }
  handleAddClick = (e) =>{
    const currentVal = this.state.displayValue;
    this.setState({
      operation: '+',
      previousValue: currentVal,
    }, ()=>{
      console.log(this.state)
    });
  }
  handleDecimalClick = (e) =>{
    const numDisplayed = this.state.displayValue;
    if (!numDisplayed.toString().includes('.')){
      const newNum = numDisplayed + '.';
      this.setState({displayValue: newNum}, ()=>{
        console.log(this.state)
      });
    }
  }
  handleEqualClick = (e) =>{
    let result = this.state.displayValue;
    if (this.state.operation === '+'){
      result = parseInt(this.state.previousValue) + parseInt(this.state.displayValue);
    }
    if (this.state.operation === '-'){
      result = parseInt(this.state.previousValue) - parseInt(this.state.displayValue);
    }
    this.setState({displayValue: result});
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
