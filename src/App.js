import React, { Component } from 'react';
import OrangeButton from './components/orange_button';
import GreySymbols from './components/grey_symbols';
import GreyNumber from './components/grey_nums';
import './App.css';

class App extends Component {
  state = {
    display: '0',
    preVal: null,
    op: null,
    newDisplay: true,
  }

  // high level flow control based on type of button pressed
  handleClick = e =>{
    const val = e.target.innerText;
    const name = e.target.getAttribute('name');
    if(name === 'num'){
      this.clickedNum(val)
    } else if (name === 'op'){
      this.clickedOp(val)
    } else if (name === 'symbol'){
      this.clickedSymbol(val)
    }
  }

  // Type 1: nums including decimal pt
  clickedNum = val =>{
    const {display, newDisplay} = this.state;
    if(newDisplay){ // refresh display
      this.setState({preVal:display, display:val, newDisplay:false})
    } else { // add to current display
      const str = (display === '0')? val : display+val;
      this.setState({display: str});
    }
  }

  // Type 2: operations aka +, -, x, /, =
  clickedOp = val =>{
    const {display, preVal, op, newDisplay} = this.state;
    if(preVal && op && display && newDisplay===false){
      // Calculate!
      this.calculate([preVal,display], [op,val])
    } else {
      this.setState({op:val,newDisplay:true})
    }
  }

  calculate = ([preVal,currVal], [op,newOp]) =>{
    let result;
    const a = parseFloat(preVal)
    const b = parseFloat(currVal)
    switch(op){
      case '+': result = `${a + b}`; break;
      case '-': result = `${a - b}`; break;
      case 'x': result = `${a * b}`; break;
      case '÷': result = `${a / b}`; break;
      default: result = null;
    }

    if(newOp === '='){
      this.setState({display:result, preVal:null, op:null, newDisplay:true})
    } else {
      this.setState({display:result, preVal:null, op:newOp, newDisplay:true})
    }
  }

  // Type 3: misc symbols AC, %, +/-
  clickedSymbol = val =>{
    console.log('clicked', val)
  }

  

  render() {
    const {display} = this.state;
    const ops = ['÷','x','-','+','=']
    const symbols = ['AC', '%', '±']
    const nums = [7,8,9,4,5,6,1,2,3,0,'.']

    return (
      <div className='container'>
        <div className='row display'>{display}</div>
        
        <div className='col-3'>
          <div className='row'>
            {symbols.map( (e,i) =>{
                return <GreySymbols symbol={e} update={this.handleClick} key={i} />
              })}
          </div>
          <div className='row'>
            {nums.map( (e,i) =>{
                return <GreyNumber num={e} update={this.handleClick} key={i} />
              })}
          </div>
        </div>

        <div className='col-1'>
          {ops.map( (e,i) =>{
              return <OrangeButton op={e} update={this.handleClick} key={i} />
            })}
        </div>

      </div>

    )
  }
}

export default App;

  //   }

  //   if (this.state.operation === 'x') {
  //     result = parseInt(this.state.previousValue) * parseInt(this.state.displayValue);
  //   }
  //   if (this.state.operation === '/') {
  //     result = parseInt(this.state.previousValue) / parseInt(this.state.displayValue);
  //   }

  //   this.setState({ displayValue: result}, ()=>console.log(this.state));
  // }

  // handleMultiplyClick = (e) => {
  //   const currentVal = typeof this.state.displayValue === 'string'
  //     ? parseFloat(this.state.displayValue)
  //     : this.state.displayValue;

  //   this.setState({
  //     operation: 'x',
  //     previousValue: currentVal,
  //     waitingForNewValue: true,
  //   }, () => {
  //     console.log(this.state)
  //   });
  // }

  // handleNumClick = (e) => {
  //   const numPressed = e.target.innerText;
  //   const numDisplayed = this.state.displayValue;
  //   const waiting = this.state.waitingForNewValue;
  //   if (numDisplayed === 0 && waiting === false){
  //     this.setState({displayValue: numPressed}, ()=>console.log(this.state));
  //   } else if (waiting === true) {
  //     this.setState({
  //       waitingForNewValue: false,
  //       displayValue: numPressed,
  //     }, ()=>console.log(this.state));
  //   } else {
  //     const newNum = numDisplayed + numPressed;
  //     this.setState({displayValue: newNum}, ()=>console.log(this.state));
  //   }
  // }

  // handlePercentClick = (e) => {
  //   const newNum = typeof this.state.displayValue === 'string'
  //   ? parseFloat(this.state.displayValue)/100
  //   : this.state.displayValue/100;

  //   this.setState({ displayValue: newNum }, () => {
  //     console.log(this.state)
  //   });
  // }

  // handleSignClick = (e) => {
  //   const currentVal = this.state.displayValue;
  //   if (currentVal > 0) {
  //     this.setState({ displayValue: -(currentVal) }, () => {
  //       console.log(this.state)
  //     })
  //   }
  //   if (currentVal < 0) {
  //     this.setState({ displayValue: Math.abs(currentVal) }, () => {
  //       console.log(this.state)
  //     })
  //   }
  // }

  // handleSubtractClick = (e) => {
  //   const currentVal = typeof this.state.displayValue === 'string'
  //   ? parseFloat(this.state.displayValue)
  //   : this.state.displayValue;

  //   this.setState({
  //     operation: '-',
  //     previousValue: currentVal,
  //     waitingForNewValue: true,
  //   }, ()=>{
  //     console.log(this.state)
  //   });
  // }