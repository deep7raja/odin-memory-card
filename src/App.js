import './App.css';
import {getImageUrlList} from './Utils.js';

function App() {
  let images = [];
  getImageUrlList().forEach(element => {
    images.push(<img src={element}></img>)
  });

  return (
    <div className="App">
     hello there
     {images}
    </div>
  );
}

export default App;
