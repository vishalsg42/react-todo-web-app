//Import Route Packages
import React from 'react';
import  { BrowserRouter as Router,Route } from 'react-router-dom';

// Components
import TodoContainer from '../Component/TodoContainer';

const createRoute = (path,component) => <Route path={path} component={component} />

const Routes = ()=>{
    return <Router>
              {
                  createRoute('/',TodoContainer)
              }
          </Router>
}

export default Routes; 