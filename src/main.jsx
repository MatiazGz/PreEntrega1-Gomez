import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import items from './data/items.js'
import ItemView from './views/ItemsView.jsx'
import  {NavBar}  from './components/NavBar.jsx'

const routes =[
  {
    path:"/",
    element: <App/>    
  }
];

items.forEach((item) => {
  routes.push({
    path: item.name,
    element: <ItemView item={item}/>
  });

});


const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);