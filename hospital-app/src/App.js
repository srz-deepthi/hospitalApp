import './App.css';
import Login from './components/login';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>      
      <Header/>
      <div className="App" style={{ padding:50, backgroundColor:"#800000"}}>
        <div style={{display:"grid",justifyItems:"flex-end"}}>
            <Login/>
        </div>
      </div>
      <Footer/>
    </>

  );
}

export default App;
