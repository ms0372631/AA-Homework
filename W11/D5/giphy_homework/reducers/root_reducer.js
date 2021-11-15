import { combineReducers } from 'redux';

import {giphysReducer} from './giphys_reducer';

export const RootReducer = combineReducers({
  giphys: giphysReducer
});