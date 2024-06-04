import React from 'react';
import { Link } from 'react-router-dom';

const Image = ({href, src, alt}) => {
  return (
    <picture>
        <Link to={href}>
            <img src={src} alt={alt}/>
        </Link>
    </picture>
  );
}

export default Image;
