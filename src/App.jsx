import "./App.css";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Main from './Layout/Main'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Main/>} >

  </Route>))
  return (
    <RouterProvider router={router}/>
  );
}
export default App;
