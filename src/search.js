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
    return <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        name="searchString"
        placeholder="Enter search terms here..."
        value={ this.state.searchString }
        onChange={ this.handleChange }
      />
      <div className="input-group-append">
        <button value={ "" } onClick={this.publish} className="btn btn-outline-secondary" >Search</button>
      </div>
    </div>
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items,
  loading: state.movies.loading,
  error: state.movies.error,
});

export default connect(mapStateToProps)(Search);
