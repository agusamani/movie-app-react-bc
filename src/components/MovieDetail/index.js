import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const MovieDetail = ({title, year, medium_cover_image, description_full, language, rating}) => {
    return (

       <div className="ui items">
         <div className="item">
           <div className="image"><img alt={title} src={medium_cover_image} /></div>
           <div className="content">
             <div className="header">{title}</div>
             <div className="meta">{year}</div>
             <div className="description">{description_full}</div>
             <div className="extra">Laguage: {language}</div>
             <div className="extra">IMDB: {rating}</div>
             <div className="link">
                <Link to="/">
                  Go back
                </Link>
             </div>
           </div>
         </div>
       </div>
)
}

export default MovieDetail;