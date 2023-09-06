
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './home/Index';
import About from './about/index';
import Contact from './contact/Index';
import Login from './Logins/Logindata';

//import Navigation from './Components/Navbar';
function App() {
  return (
    <>
   
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/Login" component={Login} />
    </Switch>

    {/* <Home/>*/}
   
    </>
  );
}

export default App;
