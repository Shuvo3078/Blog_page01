import React from 'react';
import Button from './Button';
import Headding from './Headding';

const About_Us = () => {
  return (
    <div className='max-w-[523px] flex flex-col items-end'>
        <Headding text='About Us'/>
      <p className='text-base leading-7 font-Open text-[#AAAAAA] tracking-[0.64px] text-end  py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      <Button text='Know More'/>
    </div>
  );
}

export default About_Us;
