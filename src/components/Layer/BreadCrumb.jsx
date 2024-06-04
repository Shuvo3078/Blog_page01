import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const BreadCrumb = ({text}) => {
  return (
    <div className='font-Cormorant'>
      <h2 className='text-[#DCCA87] text-[90px] font-bold'>{text}</h2>
      <p className='flex items-center text text-2xl text-[#FFFFFF] font-bold capitalize tracking-[0.92px] mt-6'>Home <FaAngleRight className='text-[#DCCA87] px-2'/>
      <span className='mr-1'>{window.location.pathname.split("/")[1]}</span>
      <span className='mr-1'>{window.location.pathname.split("/")[2]}</span>
      <span className='mr-1'>{window.location.pathname.split("/")[3]}</span>
      <span className='mr-1'>{window.location.pathname.split("/")[4]}</span>
       </p>
    </div>
  );
}

export default BreadCrumb;
