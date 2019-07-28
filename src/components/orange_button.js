import React from 'react';

export default (props) =>{
    const {op, update} = props;

    return <div className='orange button' onClick={update} name='op'>
        {op}
    </div>
}
