import React from 'react';

export default (props) =>{
    const {symbol,update} = props;

    return <div style={{width:'33.33%'}}>
        <div className='button' onClick={update} name='symbol'>
            {symbol}
        </div>
    </div>
}
