import React from 'react';

export default (props) =>{
    const {num,update} = props;
    const width = (num === 0)? '66.66%':'33.33%';

    return <div style={{width:width}}>
        <div className='button' onClick={update} name='num'>
            {num}
        </div>
    </div>
}
