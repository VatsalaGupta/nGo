import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Home from './components/pages/home/Home';
import News from './components/pages/news/News';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './components/login-signup/Login';
import Contact from './components/pages/contact/Contact';
import Service from './components/pages/service/Service';
import About from './components/pages/about/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Header}>
        <Route index Component={Home} />
        <Route path='news' Component={News}/>
        <Route path='login' Component={Login}/>
        <Route path='contact' Component={Contact} />
        <Route path='service' Component={Service} />
        <Route path='about' Component={About} />
 
        </Route>
      {/* <Header />
      <Home />
      <News /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
