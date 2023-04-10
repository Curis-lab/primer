// import {shopData as phData} from './placeholderData';
import { ActionTypes } from './Types';
import { shopData as sh } from './placeholderData';



export const Action = (dataType) =>({
    type:ActionTypes.DATA_LOAD,
    payload:{
      data_type: dataType,
      data_flow: sh[dataType] 
    }
  })