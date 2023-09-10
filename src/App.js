import { Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./home/Index";
import About from "./about/index";
import Contact from "./contact/Index";
import Dashboard from "./dashboard/index"
import Index from "./admin/Index";
import Acc from "./admin/Acc";
import attend from "./admin/attend";
import Emp from "./admin/Emp"
//login
import Logindata from "./Logins/Logindata";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Login" component={Logindata} /> 
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/Index" component={Index} />
        <Route exact path="/account" component={Acc} />
        <Route exact path="/attendence" component={attend} />
        <Route exact path="/employe" component={Emp} /> 
      </Switch>

      {/* <Home/>*/}
    </>
  );
}

export default App;
