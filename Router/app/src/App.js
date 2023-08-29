import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import About from './pages/about'
import Users from './pages/users'
import Home from './pages/home'
import Error404 from './pages/Error404'


function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink activeStyle={{backgroundColor:'red', color:'white'}} exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{backgroundColor:'red', color:'white'}} exact to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{backgroundColor:'red', color:'white'}} exact to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
