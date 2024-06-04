import React from 'react';
import Spoon from './Spoon';

const Headding = ({text, className}) => {
  return (
    <div className={`main flex flex-col items-end gap-y-2 ${className}`}>
      <h2 className='text text-[#DCCA87] text-[64px] font-Cormorant font-semibold'>{text}</h2>
      <Spoon className=' rotate-180 '/>
    </div>
  );
}

export default Headding;
