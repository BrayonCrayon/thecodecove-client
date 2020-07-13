import * as React      from 'react';
import {Route, Switch} from 'react-router-dom';
import Login           from './views/auth/Login';
import Register        from './views/auth/Register';
import Blog            from './views/Blog/Blog';
import ViewPost        from './views/Blog/Posts/View';
import Dashboard       from './views/Dashboard/Index';
import Create          from "./views/Blog/Posts/Create";
import EditPost        from "./views/Blog/Posts/Edit";
// import NotFound from './views/NotFound/NotFound'// User is LoggedIn
// import PrivateRoute from './PrivateRoute'
// import Dashboard from './views/user/Dashboard/Dashboard';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Blog}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/blog' component={Blog}/>
        <Route exact path='/post/view/:id' component={ViewPost}/>
        <Route exact path='/post/edit/:id' component={EditPost}/>
        <Route exact path='/post/create' component={Create}/>
        <Route exact path='/dashboard' component={Dashboard}/>  {/*Page Not Found*/}
        {/*<Route component={NotFound}/>*/}
    </Switch>
);

export default Router;
