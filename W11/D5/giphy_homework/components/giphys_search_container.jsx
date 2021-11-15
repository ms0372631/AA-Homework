import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../util/api_util';

const mapStateToProps = state => {
  return {
    giphys: state.giphys
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    fetchSearchGiphys: searchTerm => dispatch(fetchSearchGiphys(searchTerm))
  };
};

const GiphysSearchContainer = connect(mapStateToProps, mapDispatchtoProps)(GiphysSearch);

export default GiphysSearchContainer;
