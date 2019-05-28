import React from 'react';
import { Link } from 'react-router-dom';


const SavedMovie = ({id, year, title, medium_cover_image}) => {
    return (
        <div className="container">
       <div className="ui card">
          <div className="content">
            <Link to={`/movies/${id}`}> 
              <div className="header">{title}</div>  
            </Link>
            <div className="meta"><span className="date">{year}</span></div>
          </div>            
            <img alt={title} src={medium_cover_image} />
          <div className="extra content">
          </div>
        </div>
        </div>
    )
}


export default SavedMovie;