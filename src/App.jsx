
import './App.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from './Pages/Home';
import List from './Pages/List';
import Layout from './Components/Layout/Layout';
import Slider from './Components/Slider';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/list',
          element: <List />
        },
       

      ]
         
    },
    {
      path: '/slider',
      element: <Slider />
    },
         
   
    
  ]);
  
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );



}

export default App
