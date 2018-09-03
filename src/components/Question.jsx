  import React,{ Component } from 'react';
  import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

  class Question extends Component{
    constructor(props){
      super(props);
      this.state = {
        answered: false,
        correct: -1
      }
      this.findAnswer = this.findAnswer.bind(this);
    }

    findAnswer(number){
      let { options, answer } = this.props.question.data;
        options[answer-1]==options[number-1]?this.setState({correct:1}):this.setState({correct:0});
        this.setState({answered:true});
        //console.log(this.state.answered,this.state.correct);  
        if(options[answer-1]===options[number-1]){
          return 1;
        }
        return 0;
    }

    getColor(number){
        if(this.props.question.data.answer!=number){
          return "danger";
        }
      return this.state.answered&&this.state.correct===1?"success":"success"
    }

    render(){
      let { id } = this.props.question;
      let {title, options, answer} = this.props.question.data;
      //console.log(id,title,options,answer);

    return (
      <div>
        <Card >
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>
            <Button className="option col-sm-6"
              id={id} 
              color={this.state.answered?this.getColor(1):"primary"} 
              size="lg"
              onClick={
                (event)=>{
                  event.preventDefault();
                  this.findAnswer(1);
                }
              }
              disabled={this.state.answered}
              block>
              {options[0]}
            </Button>
            
            <br/>
            
            <Button className="option col-sm-6"
              id={id} 
              color={this.state.answered?this.getColor(2):"primary"} 
              size="lg"
              onClick={
                (event)=>{
                  event.preventDefault();
                  this.findAnswer(2);
                }
              }
              disabled={this.state.answered}
              block>
              {options[1]}
            </Button>

            <br/>
            
            <Button className="option col-sm-6"
              id={id} 
              color={this.state.answered?this.getColor(3):"primary"} 
              size="lg"
              onClick={
                (event)=>{
                  event.preventDefault();
                  this.findAnswer(3);  
                }
              }
              disabled={this.state.answered}
              block>
                {options[2]}
            </Button>

            <br/>
            
            <Button className="option col-sm-6"
              id={id} 
              color={this.state.answered?this.getColor(4):"primary"} 
              size="lg"
              onClick={
                (event)=>{
                  event.preventDefault();
                  this.findAnswer(4);  
                }
              }
              disabled={this.state.answered}
              block>
              {options[3]}
            </Button>
            
            <br/>
            
            </CardText>
            <CardSubtitle>
              <p className="score">
                <strong>
                  {this.state.correct==1?<span className="correct" ref="correct" style={{fontSize: "1.5em"}}><img src="../correct.svg"  width="50px" height="50px"/>Correct answer</span>:this.state.correct===0?<span className="incorrect" ref="incorrect"  style={{fontSize: "1.5em"}}><img src="../incorrect.svg" width="50px" height="50px"/>Incorrect answer</span>:""}
                </strong>
              </p>
            </CardSubtitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

  export default Question;