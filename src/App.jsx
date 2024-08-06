import "./App.css";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Main from './Layout/Main'
import Hero from "./component/Hero";
import Features from "./component/Features";
import ExtentionsDisplay from "./component/ExtentionsDisplay";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Main/>} >

  </Route>))
  return (
    <>
   
    <RouterProvider router={router}/>
    <Hero/>
    <Features/>
    <ExtentionsDisplay/>
    
    </>
  );
}
export default App;
