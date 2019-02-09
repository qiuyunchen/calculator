import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: 0,
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    }
  }

  handleAddClick = (e) => {
    const currentVal = typeof this.state.displayValue === 'string'
    ? parseFloat(this.state.displayValue)
    : this.state.displayValue;

    this.setState({
      operation: '+',
      previousValue: currentVal,
      waitingForNewValue: true,
    }, ()=>{
      console.log(this.state)
    });
  }

  handleClearClick = (e) => {
    this.setState({
      displayValue: 0,
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
    }, () => {
      console.log(this.state)
    });
  }

  handleDecimalClick = () => {
    const wait = this.state.waitingForNewValue;
    const currentVal = this.state.displayValue.toString().includes('.')
      ? this.state.displayValue
      : this.state.displayValue + '.'

    wait
    ? this.setState({displayValue: '0.', waitingForNewValue: false})
    : this.setState({displayValue: currentVal});
  }

  handleDivideClick = (e) => {
    const currentVal = typeof this.state.displayValue === 'string'
      ? parseFloat(this.state.displayValue)
      : this.state.displayValue;
    this.setState({
      operation: '/',
      previousValue: currentVal,
      waitingForNewValue: true,
    }, () => {
      console.log(this.state)
    });
  }

  handleEqualClick = (e) => {
    const previousValue = (typeof this.state.previousValue === 'string')
      ? parseFloat(this.state.previousValue)
      : this.state.previousValue;
  
    const displayValue = (typeof this.state.displayValue === 'string')
      ? parseFloat(this.state.displayValue)
      : this.state.displayValue;

    let result = this.state.displayValue;

    if (this.state.operation === '+') {
      result = previousValue + displayValue;
    }
    if (this.state.operation === '-') {
      (this.state.waitingForNewValue)
      ? result = displayValue - previousValue
      : result = previousValue - displayValue
    }

    if (this.state.operation === 'x') {
      result = parseInt(this.state.previousValue) * parseInt(this.state.displayValue);
    }
    if (this.state.operation === '/') {
      result = parseInt(this.state.previousValue) / parseInt(this.state.displayValue);
    }

    this.setState({ displayValue: result}, ()=>console.log(this.state));
  }

  handleMultiplyClick = (e) => {
    const currentVal = typeof this.state.displayValue === 'string'
      ? parseFloat(this.state.displayValue)
      : this.state.displayValue;

    this.setState({
      operation: 'x',
      previousValue: currentVal,
      waitingForNewValue: true,
    }, () => {
      console.log(this.state)
    });
  }

  handleNumClick = (e) => {
    const numPressed = e.target.innerText;
    const numDisplayed = this.state.displayValue;
    const waiting = this.state.waitingForNewValue;

    if (numDisplayed === 0 && waiting === false){
      this.setState({displayValue: numPressed});
    } else if (waiting === true) {
      this.setState({
        waitingForNewValue: false,
        displayValue: numPressed,
      });
    } else {
      const newNum = numDisplayed + numPressed;
      this.setState({displayValue: newNum});
    }
  }

  handlePercentClick = (e) => {
    const newNum = typeof this.state.displayValue === 'string'
    ? parseFloat(this.state.displayValue)/100
    : this.state.displayValue/100;

    this.setState({ displayValue: newNum }, () => {
      console.log(this.state)
    });
  }

  handleSignClick = (e) => {
    const currentVal = this.state.displayValue;
    if (currentVal > 0) {
      this.setState({ displayValue: -(currentVal) }, () => {
        console.log(this.state)
      })
    }
    if (currentVal < 0) {
      this.setState({ displayValue: Math.abs(currentVal) }, () => {
        console.log(this.state)
      })
    }
  }

  handleSubtractClick = (e) => {
    const currentVal = typeof this.state.displayValue === 'string'
    ? parseFloat(this.state.displayValue)
    : this.state.displayValue;

    this.setState({
      operation: '-',
      previousValue: currentVal,
      waitingForNewValue: true,
    }, ()=>{
      console.log(this.state)
    });
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
