import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    }
  }
  
  render() {
    return (
      <div className='wrapper'>
        <div className='container'>
          <div className='row display'>
            0
          </div>
          <div className='row'>
            <div className='col button'>
              AC
            </div>
            <div className='col button'>
              %
            </div>
            <div className='col button'>
              ±
            </div>
            <div className='col orange'>
              ÷
            </div>
          </div>
          <div className='row'>
            <div className='col button'>
              7
          </div>
            <div className='col button'>
              8
          </div>
            <div className='col button'>
              9
          </div>
            <div className='col orange'>
              x
          </div>
          </div>
          <div className='row'>
            <div className='col button'>
              4
            </div>
            <div className='col button'>
              5
            </div>
            <div className='col button'>
              6
            </div>
            <div className='col orange'>
              -
            </div>
          </div>
          <div className='row'>
            <div className='col button'>
              1
            </div>
            <div className='col button'>
              2
            </div>
            <div className='col button'>
              3
            </div>
            <div className='col orange'>
              +
            </div>
          </div>
          <div className='row'>
            <div className='col-2 button'>
              0
            </div>
            <div className='col button'>
              .
            </div>
            <div className='col orange'>
              =
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
