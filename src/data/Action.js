// import {shopData as phData} from './placeholderData';
import { ActionTypes } from './Types';
import { RestDataSource } from './RestDataSource';


const dataSource = new RestDataSource();

export const Action = (dataType) =>({
    type:ActionTypes.DATA_LOAD,
    payload:{
      data_type: dataType,
      data_flow: dataSource.GetData(dataType)
      .then(response =>({dataType, data: response.data}))  
    }
  })