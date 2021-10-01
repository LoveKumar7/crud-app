import './App.css';
import Home from './componants/pages/Home';
import About from './componants/pages/About';
import Contact from './componants/pages/Contact';
import Navbar from './componants/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './componants/pages/NotFound';
import AddUser from './componants/users/AddUser';
import EditUser from './componants/users/EditUser';
import Users from './componants/users/Users';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>Hello World</h1> */}
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/users/add' component={AddUser}></Route>
          <Route exact path='/users/edit/:id' component={EditUser}></Route>
          <Route exact path='/users/:id' component={Users}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
