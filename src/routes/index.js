import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignIn';

const Routes = () => {
    return ( 
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />

            {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
            <Route component={SignIn} />
        </Switch>
    );
}
export default Routes;