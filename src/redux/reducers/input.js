import actionType from '../actionType'
const innitalState={
    id:-1,
    title:'',
    content:'',
}
export default (state=innitalState,action)=>{
    switch (action.type){
        case actionType.SET_INPUT_ID:{
            const {id}=action;
            return {
                ...state,
                id
            }
        }
        case actionType.SET_INPUT_CONTENT:{
            const { content }=action;
            return {
                ...state,
                content
            }
        }
        case actionType.SET_INPUT_TITLE:{
            const {title}=action;
            return {
                ...state,
                title
            }
        }
        case actionType.RESET_INPUT:{
            return innitalState
        }
        default : return state;
    }
}