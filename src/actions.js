const apiKey = '057dfa32a18eed0f2dc23dc2e80ed8a0';
//const urlBase = 'https://api.themoviedb.org/3/search/movie/';
const urlBase = 'http://localhost:3001/'

let url = null;
let queryString = null;


export const FETCH_MOVIES_BEGIN   = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies }
});

export const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error }
});

export const fetchMovies = searchString => {
  queryString = '?page=1&include_adult=false&language=en-US&api_key=' + apiKey + '&query=' + searchString;
  url = urlBase + queryString;

  return dispatch => {
    dispatch(fetchMoviesBegin());
    return fetch(url)
      // .then(response => {
      //   console.log(response);
      //   return response;
      // })
      // .then((data) => {
      //   console.log(data);
      //   //handleErrors(data);
      //   //resolve(data ? JSON.parse(data) : {});
      //   dispatch(fetchMoviesSuccess(JSON.parse(data)));
      // })
      //.catch((error) => dispatch(fetchMoviesFailure(error)));
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchMoviesSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchMoviesFailure(error)));
  };
}

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
