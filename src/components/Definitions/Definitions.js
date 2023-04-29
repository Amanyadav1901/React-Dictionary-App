import React from 'react';
import './Definitions.css';

const Definitions = (word, category, meanings) => {
  return (
    <div className='meanings'>
      {word === "" ? (meanings.map((mean)=>{
        console.log(mean);
      }))
         : (<span className="subTitle">Start by Typing a word in search Box</span>)
      }
    </div>
  )
}

export default Definitions