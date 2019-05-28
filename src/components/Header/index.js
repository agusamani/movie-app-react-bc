import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = (props) => {
   return (
     <div className="ui clearing segment">
       <Link to="/saved">
         <h2 className="ui right floated header">My Movies</h2>
       </Link>
       <Link to="/">
         <h2 className="ui left floated header">MovieApp</h2>
       </Link>
     </div>
)
}


export default Header;