import React from 'react';
import Header from '../../components/Header'
import SavedMoviesContainer from '../../containers/SavedMoviesContainer';


const SavedMovies = (props) => {
    return (
        <div>
          <Header />
          <div>
              <SavedMoviesContainer {...props} />
          </div>
        </div>
    )
}


export default SavedMovies;