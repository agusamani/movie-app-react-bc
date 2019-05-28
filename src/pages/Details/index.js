import React from 'react';
import Header from '../../components/Header';
import MovieDetailConteiner from '../../containers/MovieDetailContainer';

const Details = (props) => {
    return (
        <div className="movie-detail-page">
          <Header />
          <div>
              <MovieDetailConteiner {...props} /> 
          </div>
        </div>
    )
}


export default Details;