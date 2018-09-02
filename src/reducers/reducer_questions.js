import _ from "lodash";
import { FETCH_QUESTIONS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
      case FETCH_QUESTIONS:
        //console.log('reducer :',action.payload.data)
        return action.payload.data.map(x=>x);
    default: 
        return state;
  }
}
