import * as TabActionsTypes from "./TabActions";

const initialState = {
    isTradeModalVisible:false
}
const tabReducer=(state=initialState,action)=>{
    switch(action.type){
        case TabActionsTypes.SET_TRADE_MODAL_VISIBILITY:
            return{
                ...state,
                isTradeModalVisible:action.payload.isVisible
            }
             default:
                 return state
    }
}
export default tabReducer;