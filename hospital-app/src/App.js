import './App.css';
import Login from './components/login';
import Header from './components/header';
import Footer from './components/footer';
import {Provider} from 'react-redux';
import Store from './redux/store';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Home from './components/home';
import Booking from './components/booking';
import Register from './components/register';
import Survey from './components/survey';

function App() {
  return (
    <Provider store={Store}>     
      {/* <Header/> */}
          <div className="App" style={{ backgroundColor:"#F0F0F0"}}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Login/>}/>
                  <Route path="/home" element={ <Home/> } /> 
                  <Route path="/booking" element={ <Booking/>} />
                  <Route path="/register" element={ <Register/>}/>
                  <Route path="/survey" element={ <Survey/>} />
                </Routes>
              </BrowserRouter>
          </div> 
      <Footer/>
    </Provider>      
  );
}

export default App;
