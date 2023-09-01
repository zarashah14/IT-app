
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Index from './home/Index';


//import Navigation from './Components/Navbar';
function App() {
  return (
    <>
   
    <Switch>
      <Route exact path="/" component={Index} />
      
    </Switch>

    {/* <Home/>*/}
   
    </>
  );
}

export default App;
