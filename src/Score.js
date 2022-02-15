const Score = (props)=>{
    return (
        <div>
            Level: {props.level-1} <br/>
            Matches: {props.score} <br/>
            {/* Score: {props.totalScore}  */}
        </div>
    );
}

export default Score;