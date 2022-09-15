import './App.css';
import Header from './components/Header';
import Wrapper1 from './components/Wrapper1'

function App() {
  return (
    <div className="App">
      <Header/>
      <div container className='items_container'>
        <Wrapper1/>
      </div>
    </div>
  );
}

export default App;
