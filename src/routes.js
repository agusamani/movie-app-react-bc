import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Details from './pages/Details';
import SavedMovies from './pages/SavedMovies';



const Routes = () => (
     <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/movies/:id" component={Details} />
         <Route path="/saved" component={SavedMovies} />
         <Route />
     </Switch>
)

export default Routes;