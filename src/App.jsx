import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LeftSect from './components/left-sect/LeftSect';
import RightSect from './components/right-sect/RightSect';


function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <div className='contents'>
        <LeftSect/>
        <RightSect/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
