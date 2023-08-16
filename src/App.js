import {createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';

function App() {

  // const router = createBrowserRouter(createRoutesFromElements(
  //   <Route>
  //     <Route index element = {<Dashboard/>}></Route>
  //     <Rote path="/cart" element={<Cart/>}></Rote>
  //   </Route>
  // ))

  return (
    <div className="App">
      <Products/>
    </div>
  );
}

export default App;
