import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ProtectedComponent from './ProtectedComponent';
import BaseTask from '../containers/Task/BaseTask';
import NotFound from '../components/NotFound';

export default function ProtectedRoutes(){
    return (
        <Switch>
            <Redirect exact from="/" to="/task" />
            <ProtectedComponent path="/task" component={BaseTask} />
            <Route component={NotFound}/>
        </Switch>
    )
}
