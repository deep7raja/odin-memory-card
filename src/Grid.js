

const Grid = (props)=>{
    let images = [];
    props.cardList.forEach((element, index) => {
      images.push(
        <img 
            src={element.url} 
            onClick={ ()=>props.handleCardClick(index) }
            alt=""    
        ></img>
      )
    });
    return (
        <div className="Grid">
            {images}
        </div>
    )
}

export default Grid;