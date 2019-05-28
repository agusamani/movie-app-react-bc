import React from 'react';
import axios from 'axios';
import MovieDetail from '../../components/MovieDetail';
import './styles.scss';


class MovieDetailConteiner extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
           movie: {},
           error: 'Ocurrio un error!!'
        }
    
    }

    componentDidMount() {
       const { match: { params } } = this.props;
       axios.get(`https://yts.am/api/v2/movie_details.json?movie_id=${params.id}`)
         .then( res => {
             const movie = res.data.data.movie;
             this.setState({movie});
         })
         .catch(
             error => this.setState({error})
         );
    }


    render() {
        const { movie, error } = this.state;
        return (
            <div className="movie-detail">
              { error ? <MovieDetail {...movie} /> : <h1>{error}</h1> }
            </div>
        )
    }
}

export default MovieDetailConteiner;