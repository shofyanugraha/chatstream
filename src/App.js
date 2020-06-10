import React from "react";
import {Router} from "react-router-dom";
import history from "./services/history";
import Routes from './routes';


export const App: React.FunctionComponent = () => {
  return (
    <Router history={history}>
      <Routes/>
    </Router>
  );
}

export default App;