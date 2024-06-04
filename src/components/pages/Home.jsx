import React from 'react';
import Container from '../Container';
import About_Us from '../About_Us';
import Laurels from '../Laurels';
import List from '../List';

const Home = () => {
  return (
    <div>
    <Container className='p-20'>
      <ul>
        <List text='Blog' href='/our/blogs-/with/sidebar'/>
      </ul>
    <About_Us/>
    <Laurels/>
    </Container>
    </div>
  );
}

export default Home;
