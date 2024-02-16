
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Mainpage from './Components/Mainpage/Mainpage';
import Unlock from './Components/Unlock/Unlock';
import Dashboard from './Components/Dashboard/Dashboard';
import Transactions from './Components/Transactions/Transactions';
import Journal from './Components/Journal/Journal';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/'element={<Mainpage/>}/>
      <Route path='/Unlock'element={<Unlock/>}/>
      <Route path='/Dashboard'element={<Dashboard/>}/>
      <Route path='/Products'element={<Products/>}/>
      <Route path='/Transactions'element={<Transactions/>}/>
      <Route path='/Journal'element={<Journal/>}/>
      </Routes>
    </div>
  );
}

export default App;
