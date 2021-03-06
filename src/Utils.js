import {shuffle} from 'lodash'

export function getImageUrlList(size=4){
    let list = [];
    for(let i=0; i<10; ++i){
        list.push(`./pic/${i}.webp`);
    }
    list = shuffle(list).slice(0,size);
    return list;
}

export class Card{
    constructor(url, isChosen){
        this.url = url;
        this.isChosen = isChosen;
    }
}

export function createCardList(urlList){
    let cardList = [];
    urlList.forEach(url => {
        cardList.push(new Card(url, false));
    });
    return cardList;
}

export function shuffleCards(cardList){
    return shuffle(cardList);
}