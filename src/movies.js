import React from 'react';
import { connect } from 'react-redux';

class MoviesTable extends React.Component {
  componentDidMount() {
    //this.props.dispatch(fetchMoviesBegin());
  }

  render() {
    const { error, loading, movies } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      // <ul>
      //   {movies.map(movie =>
      //     <li key={>movie</li>
      //   )}
      // </ul>
      <div>
        <pre>{movies}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    movies: state.movies.items,
    loading: state.movies.loading,
    error: state.movies.error,
  }
};

export default connect(mapStateToProps)(MoviesTable);
