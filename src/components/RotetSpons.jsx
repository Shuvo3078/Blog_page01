import React from 'react';
import { Link } from 'react-router-dom';
import rotetSpon from '../assets/rotetSpon.png';

const RotetSpons = () => {
  return (
    <div className=''>
      <picture>
      <Link   to='#'>
        <img className=' animate-spin-slow'  src={rotetSpon}/>

      </Link>
      </picture>
    </div>
  );
}

export default RotetSpons;
