import {
    Route,
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom';
import Home from './pages/Home'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route component={Home} path='/' exact />
            </Switch>
        </Router>
    );
}

export default Routes;