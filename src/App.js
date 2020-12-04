import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from './config/routes';
import Footer from 'componentes/ui/Footer';
import '../src/App.scss';
import Loader from './componentes/ui/Loader';

function App() {
  
  return (
    <Router>
     <Loader />
      <Switch>
        {routes.map((route, index) => (
          
          <RouterWithSubRoutes key={index} {...route} />
        ))}
            

      </Switch>
    </Router>
  );
}

function RouterWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props} />}
    />
  )
}

export default App;
