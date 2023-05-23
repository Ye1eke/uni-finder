import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Universities from './components/Universities';
import Home from './components/Home';

import Unis from './components/Unis';

function App() {
 
  return (
    <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/universities" element={<Universities/>} />
            <Route path="/universities/uni1" element={<Unis/>}/>
          </Routes>
        </div>
        <Footer />
        
    </Router>
  );
}

export default App;
