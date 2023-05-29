import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Unis from './components/Unis';
import UniAbout from './components/UniAbout';
// import { createBrowserRouter, BrowserRouter  as Router, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import ArticleItem from './components/ArticleItem';
import Article from './components/Article';

Auth.configure(awsconfig);

function App() {
  
  return (
    <div>
        <Router>
      <div>
        <Header />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/uni" element={<Unis />} />
          <Route path="/uni/:id" element={<UniAbout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/article/:id" element={<ArticleItem />}/> 
          <Route path="/article/" element={<Article />}/> 
        </Routes>
        <Footer />
      </div>
    </Router>
        
    </div>
  );
}

export default App;
