import * as React      from 'react';
import {Route, Switch} from 'react-router-dom';
import Login           from './views/auth/Login';
import Register        from './views/auth/Register';
import Blog            from "./views/Blog/Blog";
// import NotFound from './views/NotFound/NotFound'// User is LoggedIn
// import PrivateRoute from './PrivateRoute'
// import Dashboard from './views/user/Dashboard/Dashboard';

const Router = () => (
    <Switch>
        {/*User might LogIn*/}
        <Route exact path='/' component={Blog}/>  {/*User will LogIn*/}
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>  {/* User is LoggedIn*/}
        <Route path='/blog' component={Blog}/>
        {/*<PrivateRoute path='/dashboard' component={Dashboard}/>  /!*Page Not Found*!/*/}
        {/*<Route component={NotFound}/>*/}
    </Switch>
);

export default Router;
