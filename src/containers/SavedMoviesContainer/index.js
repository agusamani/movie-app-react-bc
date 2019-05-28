import React from 'react';
import SavedMovie from '../../components/SavedMovie';


class SavedMoviesContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movie:{}
        }
    }



    componentDidMount() {
        if(!localStorage.getItem('movie')) {
            return this.setState.movie;
        }

    }

    componentWillMount() {
        localStorage.getItem('movie') && this.setState({
        movie: JSON.parse(localStorage.getItem('movie'))
        })
            
    }

    render() {
       const movie = this.state.movie;
        //const { list } = this.state;
        return (
        //    <div>
        //        {list.map((movie) => <SavedMovie {...movie}/>)}
        //    </div>
        <div>
            <SavedMovie {...movie}/>
        </div>
        )
    }
}

export default SavedMoviesContainer;