
import { NUMBER_OF_QUESTIONS } from '../constants';
import questions from '../data/data';
import _ from 'lodash';
import React, { Component } from 'react';
import Question from '../components/Question';
import { Link } from 'react-router-dom';
import Score from '../components/score';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class Quiz extends Component{
    constructor(props){
        super(props);
    }

    findScore(){
        return ;
    }

    componentDidMount(){
        setInterval(()=>{
            let score = document.getElementsByClassName("correct").length;
                            this.refs.score.innerHTML = score;
        },300);
    }

    render(){
        return(
            <div>
                <div id="header" style={{backgroundColor:"white"}}>
                    <div className="d-inline">
                    <img src="../iyf_logo.jpg" id="logo"></img> <span><strong style={{fontSize:"2.5em",verticalAlign: "center"}}>ISKCON Youth Forum, Dwarka</strong></span>
                    </div>
                    <div className="d-inline">
                        <Button href="/quiz" target="_self" color="primary" className="btn btn-primary" id="restartButton">Restart Quiz</Button>
                    </div>
                    <div className="d-inline">
                        <Button id="score">Score : <span ref="score">0</span>/{NUMBER_OF_QUESTIONS}</Button>
                    </div>
                </div>
                <ul id="questions">
                {
                 (!questions)
                 ? <li>Loading...</li>
                 : questions.map(function(question) {
                    return (
                        <li className="list-group-item" key={question.id}>
                            <Question question={question}/>
                        </li>
                        );
                    })
                }
                </ul>

        <div id="footer" style={{backgroundColor:"#ff9933"}}>
            <Card>
            <CardBody>
                <CardText><span id="credits">In the service of devotees, created by <a href="https://www.linkedin.com/in/bhavyakamboj/" target="_blank">Bhavya Kamboj</a></span></CardText>
                </CardBody>
            </Card>
        </div>
    </div>
        )
    }
}
export default Quiz;