import logo from './logo.svg';
import './App.css';
import PhotoAppBar from './components/photoheader';
import headerPhoto from './resources/images/headerphoto1.jpg'
import ButtonBox from './components/buttonbox';

function App() {
  return (
    <div className="App">
      
      <PhotoAppBar testing="pls?"/>
      <ButtonBox/>
      
    </div>
    
  );
}

export default App;
