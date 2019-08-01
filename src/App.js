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
      default: //do nothing
    }

    if(newOp === '='){
      this.setState({display:result, preVal:null, op:null, newDisplay:true})
    } else {
      this.setState({display:result, preVal:null, op:newOp, newDisplay:true})
    }
  }

  // Type 3: misc symbols AC, %, +/-
  clickedSymbol = val =>{
    switch(val){
      case 'AC': this.clearAllOrLast('AC'); break;
      case 'C': this.clearAllOrLast('C'); break;
      case '%': this.divideBy100(); break;
      case '±': this.togglePosNegSign(); break;
      default: //do nothing
    }    
  }

  /////////////// FIGURE OUT HOW TO CLEAR ONLY LAST NUMBER
  clearAllOrLast = (type) =>{
    if(type === 'AC'){
      this.setState({
        display: '0', 
        preVal: null,
        op: null,
        newDisplay: true, 
      })
    } else {
      // this.setState({})
    }

  }

  /////////////// FIX this display bug
  divideBy100 = () =>{
    const {display} = this.state;
    const newDisplay = `${parseFloat(display) / 100}`;
    this.setState({display: newDisplay})
  }
  
  togglePosNegSign = () =>{
    const {display} = this.state;
    const newDisplay = `${parseFloat(display) * -1}`
    this.setState({display: newDisplay})
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