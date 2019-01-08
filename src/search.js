import React from 'react';
import { fetchMovies } from './actions';
import { connect } from 'react-redux';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
    };

    this.publish = this.publish.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({searchString: event.target.value});
  }

  publish(event) {
    this.props.dispatch(fetchMovies(this.state.searchString));
    event.preventDefault();
  }

  render() {
    return <div>
      <input
        type="text"
        name="searchString"
        placeholder="Enter search terms here..."
        value={ this.state.searchString }
        onChange={ this.handleChange }
      />

      <button value={ "" } onClick={ this.publish } >Search</button>
    </div>
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items,
  loading: state.movies.loading,
  error: state.movies.error,
});

export default connect(mapStateToProps)(Search);
//export default connect()(Search);
