import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BrandContact from './components/BrandContact';
import CreatorContact from './components/CreatorContact';
import reportWebVitals from './reportWebVitals';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact-brands",
    element: <BrandContact />,
  },
  {
    path: "/contact-creators",
    element: <CreatorContact />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
