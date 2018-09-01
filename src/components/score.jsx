import React,{ Component } from 'react';

function Score(props){
    return <React.Fragment>
        <h1>Score: {props.score}</h1>
    </React.Fragment>
}
export default Score;