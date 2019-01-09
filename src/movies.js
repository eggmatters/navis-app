import React from 'react';
import { connect } from 'react-redux';

class MoviesTable extends React.Component {
  componentDidMount() {
    //this.props.dispatch(fetchMoviesBegin());
  }

  renderRow(rowData) {
    return <MovieRow
      key = {rowData.id}
      title = {rowData.title}
      release_date = {rowData.release_date}
      overview = {rowData.overview}
    />;
  }

  render() {
    const { error, loading, movies } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    const rawTableData = (typeof movies.movies.results === 'undefined') ? [] : movies.movies.results;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th><th>Release Date</th><th>Description</th>
            </tr>
          </thead>
          <tbody>
            {rawTableData.map( rowData => {
              return this.renderRow(rowData);
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

const MovieRow = (props) => {
  console.log(props);
  return (
    <tr>
      <td>{props.title || ""}</td>
      <td>{props.release_date || ""}</td>
      <td>{props.overview || ""}</td>
     </tr>
  );
}


const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    loading: state.movies.loading,
    error: state.movies.error,
  }
};

export default connect(mapStateToProps)(MoviesTable);
