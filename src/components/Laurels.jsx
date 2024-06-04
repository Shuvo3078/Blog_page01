import React from 'react';
import Two from '../assets/Two.png'
import One from '../assets/One.png'
import Five from '../assets/Five.png'
import Three from '../assets/Three.png'
import Number from './Number';
import Spoon_headding from './Spoon_headding';
import Title from './Layer/Title';

const Laurels = () => {
  return (
    <div className=' mt-10'>
    <Spoon_headding/>
    <Title className='text-[64px] mb-16' text='Our Laurels'/>
    <div className='w-[634px] flex flex-wrap items-center gap-x-8 gap-y-16'>
        <Number src={Two} alt='../assets/Two.png' heading='Bib Gourmond' text='Lorem ipsum dolor sit amet, consectetur.'/>
        <Number src={One} alt='../assets/One.png' heading='Rising Star' text='Lorem ipsum dolor sit amet, consectetur.'/>
        <Number src={Five} alt='../assets/Five.png' heading='AA Hospitality ' text='Lorem ipsum dolor sit amet, consectetur.'/>
        <Number src={Three} alt='../assets/Three.png' heading='Outstanding Chef' text='Lorem ipsum dolor sit amet, consectetur.'/>
    </div>
    </div>
  );
}

export default Laurels;
