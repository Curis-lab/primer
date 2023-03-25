import { ActionTypes } from "./Types"

export const ShopReducer = (storeData, action) =>{
    switch(action.type){
        case ActionTypes.DATA_LOAD:
            return action.payload.data_flow;
        default:
            return 'finder';
    }
}