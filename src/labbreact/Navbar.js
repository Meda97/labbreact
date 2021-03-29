import react from 'react';
import Skapatråd from './Skapatråd'
// import Navbar from './Navbar'
import Aktier from './Aktier'
import Fonder from './Fonder'
import Sparmål from './Sparmål'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Navbar() {
    return (
      <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="Startsida">AktieForum</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
            <a class="nav-link" href="Skapatråd">Skapa Tråd <span class="sr-only"></span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Kategorier
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="Aktier">Aktier</a>
                <a class="dropdown-item" href="Fonder">Fonder</a>
                <a class="dropdown-item" href="Sparmål">Sparmål</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {/* <h1 className = "Välkommen">Välkommen till Aktieforum Sverige</h1> */}
      <Switch>

      <Route path='/Skapatråd'>
      <Skapatråd />
      </Route>

      <Route path='/Aktier'>
      <Aktier />
      </Route>

      <Route path='/Fonder'>
      <Fonder />
      </Route>

      <Route path='/Sparmål'>
      <Sparmål />
      </Route>

      </Switch>
      
      </Router>
    )
}

export default Navbar;
