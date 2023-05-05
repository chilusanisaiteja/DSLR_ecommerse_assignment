import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import Productpage from './components/productpage/Productpage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productdetailspage/:id" element={<Productpage/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
