import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import NotFound from './views/NotFound';
import Home from './views/Home';
import Contact from './views/Contact';
import Us from './views/Us';
import Products from './views/Products';
import Processes from './views/Processes';
import Search from './views/Search';
import Product from './views/Product';
import Steps from './views/Steps';
import Nav from './views/Nav';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/productos" component={Products}></Route>
          <Route exact path="/productos/:categoria/:producto" component={Product}></Route>
          <Route exact path="/procesos" component={Processes}></Route>
          <Route exact path="/procesos/etapas" component={Steps}></Route>
          <Route exact path="/nosotros" component={Us}></Route>
          <Route exact path="/contacto" component={Contact}></Route>
          <Route exact path="/busqueda" component={Search}></Route>
          <Route path="" component={NotFound}></Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
