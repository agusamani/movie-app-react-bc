import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';


class Movie extends React.Component {
  constructor(props) {
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  newId() {
    let newId = 0;
    newId++;
    return newId;
  }

  handleOnClick() {
    //const id = this.props.id;

    localStorage.setItem('movie', JSON.stringify(this.props));

  }

  render() {
    return (
      <div className="ui card">
      <div className="content">
        <Link to={`/movies/${this.props.id}`}> 
          <div className="header">{this.props.title}</div>  
        </Link>
        <div className="meta"><span className="date">{this.props.year}</span></div>
      </div>            
           <img alt={this.props.title} src={this.props.medium_cover_image} />
      <div className="extra content">
      <button onClick={this.handleOnClick} className="ui button">Save</button>
      </div>
    </div>
    )
  }
}

export default Movie;