import { RECEIVE_SEARCH_GIPHYS, REQUEST_SEARCH_GIPHYS } from '../actions/giphy_actions';
import { fetchSearchGiphys } from '../util/api_util';

export const giphysReducer = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case RECEIVE_SEARCH_GIPHYS:
      return action.giphys;
    default:
      return state;
  }
};