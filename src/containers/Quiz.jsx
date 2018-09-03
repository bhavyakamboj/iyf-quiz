import questions from '../data/data';
import _ from 'lodash';
import React, { Component } from 'react';
import Question from '../components/Question';
import { Card, CardText, CardBody} from 'reactstrap';
import NavBar from '../components/NavBar';
import {MAX_TIME, NUMBER_OF_QUESTIONS} from '../constants';

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = { score:0, timeLeft: MAX_TIME}
        this.restartQuiz = this.restartQuiz.bind(this);
        this.getScore = this.getScore.bind(this);
    }
    startCountDown(){
        let updatedScore = 0;
        let countdown = setInterval(()=>{
            console.log(this.state.timeLeft);
            this.setState({timeLeft: this.state.timeLeft - 1});
            if(this.state.timeLeft===-1){
                // console.log("stopQuiz called");
                updatedScore = this.getScore();
                this.setState({score:updatedScore})
                clearInterval(countdown);
                setTimeout(alert("Quiz completed. Your score is "+this.state.score+"/"+NUMBER_OF_QUESTIONS),2000);
            }
        },1000);
    }

    getScore(){
            return document.getElementsByClassName("correct").length;
    }
    componentDidMount(){
        this.startCountDown();
    }
    restartQuiz(){
        this.setState(this.state);
        console.log("Quiz restarted");
    }
    render(){
        
        return(
            <div>
                <NavBar onRestart={this.restartQuiz} score={this.state.score} timeLeft={this.state.timeLeft}/>
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
                <CardText><span id="credits">In the service of devotees, created by <a href="https://www.linkedin.com/in/bhavyakamboj/">Bhavya Kamboj</a></span></CardText>
                </CardBody>
            </Card>
        </div>
    </div>
        )
    }
}
export default Quiz;