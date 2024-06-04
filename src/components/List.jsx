import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const List = ({href, text}) => {
  return (
    <li>
          <Link to={href}>
          <Button text={text}/>
          </Link>
    </li>
  );
}

export default List;
