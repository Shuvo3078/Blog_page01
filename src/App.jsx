import React from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './components/RootLayout';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
      >
        <Route index element={<Home/>}/>
        <Route path="/our/blogs-/with/sidebar" element={<Blog/>}/>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
