 import './App.scss'; 
 import Dashboard from "./Component/Dashboard/Dashboard"
 import Login from "./Component/Login/Login"
 import Register from "./Component/Register/Register"
 import{
  createBrowserRouter,
  RouterProvider,
 }from "react-router-dom"
 
 const router=createBrowserRouter([
  {
    path:'/',element:<Login/>
  },
  {
    path:'/Register',element:<Register/>
  },
  {
    path:'/Dashboard',element:<Dashboard/>
  }
 ])

function App() {
  return (
  <div>
   
  </div>
  )
}

export default App;
