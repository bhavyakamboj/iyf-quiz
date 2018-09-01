import { NUMBER_OF_QUESTIONS } from '../constants';
import questions from '../data/data';
import _ from 'lodash';
import React, { Component } from 'react';
import Question from '../components/Question';
import Score from '../components/score';

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {
            score:0
        }
        this.updateScore = this.updateScore.bind(this);
    }


    updateScore(result){
        this.setState({score : this.state.score + result})
    }

    render(){
        return(
            <div>
                <ul>
                {
                 (!questions)
                 ? <li>Loading...</li>
                 : questions.map(function(question) {
                    return (
                        <li className="list-group-item" key={question.id}>
                            <Question question={question} onAnswer={ (result) => {
                                console.log(result);
                            }}/>
                        </li>
                        );
                    })
                }
                </ul>
            </div>
        )
    }
}
export default Quiz;