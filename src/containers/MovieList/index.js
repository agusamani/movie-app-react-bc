import React from 'react';
import Movie from '../../components/Movie'
import axios from 'axios';
import './styles.scss';
// import movieService from './../../service/MovieApiService.js'


class MovieList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }

    // componentDidMount() {
    //     const list = movieService.getAllMovies();
    //     this.setState({list});
    // }

    componentDidMount() {
        axios.get('https://yts.am/api/v2/list_movies.json')
        .then( res => {
           const list = res.data.data.movies;
           this.setState({list})
        })
        .catch( error => {
            console.log(error);
        })

    } 

    render() {
        const { list } = this.state;
        return (
          <div>
              <h1>Movies of the Month</h1>
                <div className="list">               
                  {
                    list.map( (movie) => <Movie 
                                           key={movie.id} 
                                           {...movie}
                                          />)
                  }
                </div>
           </div>
        )
    }
} 

export default MovieList;