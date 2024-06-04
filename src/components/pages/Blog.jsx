import React from 'react';
import BreadCrumb from '../Layer/BreadCrumb';
import Container from '../Container';
import With_Sidebar from '../Layer/With_Sidebar';

const Blog = () => {
  return (
    <Container>
        <BreadCrumb text='Our Blogs'/>
        <With_Sidebar/>
    </Container>
  );
}

export default Blog;
