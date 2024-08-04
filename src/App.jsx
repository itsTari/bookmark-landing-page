import "./App.css";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Main from './Layout/Main'
import Hero from "./component/Hero";
import Features from "./component/Features";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Main/>} >

  </Route>))
  return (
    <>
   
    <RouterProvider router={router}/>
    <Hero/>
    <Features/>
    
    </>
  );
}
export default App;
