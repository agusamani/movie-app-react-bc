import React from 'react';
import Header from '../../components/Header';
import './styles.scss';
import MovieList from '../../containers/MovieList';

const Home = () => {
    return (
        <div className="home">
          <Header />
          <div>
           <MovieList />
          </div>
        </div>
    )
}

export default Home;
