import "./App.css";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Main from './Layout/Main'
import Hero from "./component/Hero";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Main/>} >

  </Route>))
  return (
    <>
   
    <RouterProvider router={router}/>
    <Hero/>
    
    </>
  );
}
export default App;
