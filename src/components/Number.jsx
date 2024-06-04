import React from 'react';

const Number = ({src, alt, heading, text}) => {
  return (
    <div className='flex items-center gap-x-8'>
      <div className='number mb-2'>
        <img src={src} href={alt}/>
      </div>
      <div className='text max-w-[190px]'>
        <h2 className='text-[#DCCA87] text-[23px] font-Cormorant font-bold'>{heading}</h2>
        <p className='text-base text-[#AAAAAA] font-Open  leading-7'>{text}</p>
      </div>
    </div>
  );
}

export default Number;
