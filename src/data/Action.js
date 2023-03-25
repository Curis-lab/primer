import {shopData as phData} from './placeholderData';
import { ActionTypes } from './Types';

export const Action = (dataType) =>({
    type:ActionTypes.DATA_LOAD,
    payload:{
      data_type: dataType,
      data_flow: phData[dataType]
    }
  })