import React from 'react';
  import { Button } from 'reactstrap';

export default function option(props){
    return (
        <Button className="col-sm-3 option"
              id={id} 
              color={this.state.answered?this.getColor(props.optionNumber):"primary"} 
              size="lg"
              onClick={
                (event)=>{
                  event.preventDefault();
                  props.findAnswer(1);
                }
              }
              disabled={this.state.answered}ß>
              {props.options[props.optionNumber-1]}
            </Button>
    );
}