import { UP_ACTION,DOWN_ACTION,RESET_ACTION,UPDATE_COUNTER} from './counter-types'

 export const upAction = () =>{
    return {type: UP_ACTION}
 }
 export const downAction = () =>{
    return {type: DOWN_ACTION}
 }
 export const resetAction = () =>{
    return {type: RESET_ACTION}
 }
 export const updateAction = (actionNumber) => {
    return {type: UPDATE_COUNTER, payload: actionNumber}
 }