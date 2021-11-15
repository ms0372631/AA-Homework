import React from 'react';

import {GiphysIndex} from './giphys_index';

//renders the search bar and handles all of the search logic (keeping track of the query and trigger the AJAX request on submit); renders the GiphysIndex.

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'gold retriever'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchSearchGiphys('golden+retriever');
  }

  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm.split(' ').join('+');
    this.props.fetchSearchGiphys(searchTerm);
  }

  render() {
    let {giphy} = this.props;
    return (
      <>
      <form>
        <input value={this.state.searchTerm} onChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}>Search Giphy</button>
      </form>
      <GiphysIndex giphys={giphys} />
      </>
    );
  }
}

export default GiphysSearch;