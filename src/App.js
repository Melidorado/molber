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

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import { theme } from './styles/theme';

const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, h4, h5, h6, p, ul, li {
    margin: 0
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none
  }
  body {
    font-family: "Helvetica"
  }
`

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

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

      </ThemeProvider>
     
    </div>
  );
}

export default App;
