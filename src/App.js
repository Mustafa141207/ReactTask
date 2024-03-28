import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Master from "./component/Master/Master";
import Home from "./component/Home/Home";
import Detils from'./component/Details/Details'

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Master />,
      children: [
        {path:'',element:<Home/>},
        { path: "Home", element: <Home /> },
        { path: "Details/:ID", element: <Detils /> },
      ],
    },
  ]);
  return<RouterProvider router={router}></RouterProvider>;



}

export default App;
