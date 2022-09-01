import { UP_ACTION,DOWN_ACTION,RESET_ACTION,UPDATE_COUNTER} from "../actions/counter-types";

export default function counterReducer(state, action){
    switch (action.type) {
      case UP_ACTION:
        return state+ 1;
      case DOWN_ACTION:
        return state - 1;
      case RESET_ACTION:
        return 0;
        case UPDATE_COUNTER:
          return action.payload;
      default:
        return state;
    }
  };