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
      newDisplay: false
  }

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

  clickedNum = val =>{
    const {display, newDisplay} = this.state;
    if(newDisplay){
      this.setState({display: val})
    } else {
      const str = display === '0'? val : display+val;
      this.setState({display: str});
    }
  }

  clickedOp = val =>{
    this.setState({newDisplay:true})
  }

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
            {
              symbols.map( (e,i) =>{
                return <GreySymbols symbol={e} update={this.handleClick} key={i} />
              })
            }
          </div>
          <div className='row'>
            {
              nums.map( (e,i) =>{
                return <GreyNumber num={e} update={this.handleClick} key={i} />
              })
            }
          </div>
        </div>

        <div className='col-1'>
          {
            ops.map( (e,i) =>{
              return <OrangeButton op={e} update={this.handleClick} key={i} />
            })
          }
        </div>

      </div>

    )
  }
}

export default App;

// setNum = (num) =>{
  //   if (typeof num === 'string') return parseFloat(num);
  //   return num;
  // }

  // operation = (num1, op, num2) =>{
  //   if (op === '+') return this.setNum(num1) + this.setNum(num2);
  //   if (op === '-') return this.setNum(num1) - this.setNum(num2);
  //   if (op === 'x') return this.setNum(num1) * this.setNum(num2);
  //   if (op === '/') return this.setNum(num1) / this.setNum(num2);
  // }
  
  // handleAddClick = (e) => {
  //   const op = this.state.operation;
  //   const currentVal = this.state.displayValue;
  //   let result = currentVal;

  //   if (this.state.operation !== null) { 
  //     // if (this.state.previousValue !== null){
  //       result = this.operation(this.state.previousValue, this.state.operation, currentVal);
  //       this.setState({
  //         displayValue: result,
  //         previousValue: result,
  //         operation: '+',
  //         waitingForNewValue: true,
  //       }, ()=> console.log(this.state))
  //     // } else {
  //     //   result = this.operation(this.state.displayValue, this.state.operation, currentVal);
  //     //   this.setState({
  //     //     displayValue: result,
  //     //     previousValue: null,
  //     //     operation: null,
  //     //     waitingForNewValue: false,
  //     //   }, ()=> console.log(this.state))
  //     }
  //     // setTimeout(()=> {
  //     //   console.log(this.state)
  //     // }, 3000)
  //   // }

  //   else {
  //     this.setState({
  //           operation: '+',
  //           previousValue: currentVal,
  //           waitingForNewValue: true,
  //         })
    
  //   // this.state.previousValue
  //   // ? this.setState({
  //   //     displayValue: result,
  //   //     previousValue: null,
  //   //     operation: '+',
  //   //     waitingForNewValue: true,
  //   //   }, ()=>{
  //   //     console.log(this.state);
  //   //   })
  //   // : this.setState({
  //   //     operation: '+',
  //   //     waitingForNewValue: true,
  //   //   }, ()=>{
  //   //     console.log(this.state);
  //   //   })   
  //   setTimeout(()=> {
  //     console.log(this.state)
  //   }, 3000)
  // }}

  // handleClearClick = (e) => {
  //   this.setState({
  //     displayValue: 0,
  //     previousValue: null,
  //     operation: null,
  //     waitingForNewValue: false,
  //   }, () => {
  //     console.log(this.state)
  //   });
  // }

  // handleDecimalClick = () => {
  //   const wait = this.state.waitingForNewValue;
  //   const currentVal = this.state.displayValue.toString().includes('.')
  //     ? this.state.displayValue
  //     : this.state.displayValue + '.'

  //   wait
  //   ? this.setState({displayValue: '0.', waitingForNewValue: false})
  //   : this.setState({displayValue: currentVal});
  // }

  // handleDivideClick = (e) => {
  //   const currentVal = typeof this.state.displayValue === 'string'
  //     ? parseFloat(this.state.displayValue)
  //     : this.state.displayValue;
  //   this.setState({
  //     operation: '/',
  //     previousValue: currentVal,
  //     waitingForNewValue: true,
  //   }, () => {
  //     console.log(this.state)
  //   });
  // }

  // handleEqualClick = (e) => {
  //   const previousValue = (typeof this.state.previousValue === 'string')
  //     ? parseFloat(this.state.previousValue)
  //     : this.state.previousValue;
  
  //   const displayValue = (typeof this.state.displayValue === 'string')
  //     ? parseFloat(this.state.displayValue)
  //     : this.state.displayValue;

  //   let result = this.state.displayValue;

  //   if (this.state.operation === '+') {
  //     result = previousValue + displayValue;
  //   }
  //   if (this.state.operation === '-') {
  //     (this.state.waitingForNewValue)
  //     ? result = displayValue - previousValue
  //     : result = previousValue - displayValue
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