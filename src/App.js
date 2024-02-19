import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Inventory from './Components/Inventory';
import Orders from './Components/Orders';
import Shipping from './Components/Shipping';
import Error from './Components/Error';
import './App.css';

function App() {
  return (
      <BrowserRouter>
      <div className='App'>
      <Header/>
      <Routes>
        <Route exact path='/' Component={Dashboard}/>
        <Route exact path='/inventory' Component={Inventory}/>
        <Route exact path='/orders' Component={Orders}/>
        <Route exact path='/shipping' Component={Shipping}/>
        <Route Component={Error}/>
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
