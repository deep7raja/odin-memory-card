import { shuffle } from 'lodash';
import { useState } from 'react';
import './App.css';
import Grid from './Grid';
import {createCardList, getImageUrlList} from './Utils.js';
import Score from './Score';

function App() {
  const initialLevel = 2;
  const [level, setLevel] = useState(initialLevel);
  const [cardList, setCardList] = useState(createCardList(getImageUrlList(level)));
  const [score, setScore] = useState(0);
 
  
  const handleCardClick = (index)=>{
    console.log(cardList[index]);
    if(cardList[index].isChosen){
      setScore(0);
      setLevel(initialLevel);
      setCardList(createCardList(getImageUrlList(initialLevel)));
      return;
    }
    console.log(cardList.length)
    console.log(score+1);
    if(score+1 === cardList.length){
      console.log('I am here')
      setCardList(createCardList(getImageUrlList(level+1)));
      console.log(`level: ${level}`)
      setScore(0);
      setLevel(level+1);
      return;
    }
    let temp = [].concat(cardList);
    temp[index].isChosen = true;
    setCardList(shuffle(temp));
    setScore(score+1);
  }

  return (
    <div className="App">
      <Score 
        score={score}
        level={level}
      />
      <Grid
        cardList={cardList}
        handleCardClick={handleCardClick}
      />
    </div>
  );
}

export default App;
