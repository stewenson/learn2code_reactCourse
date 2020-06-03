import React from 'react';
import { Route, Switch } from "react-router-dom";

// styles & assets
import logo from './assets/logo.svg';
import './App.scss';

// components
import {TheNavigation} from "./components/TheNavigation";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Tunes} from "./components/Tunes";

function App() {
  return (
    <div className="App">
      <header className="App">
       <TheNavigation />
      </header>

        <main className="content">
            <Switch>
                <Route  path="/" component={Home} exact/>
                <Route path="/tunes" component={Tunes}/>
                <Route path="/about" component={About}/>
            </Switch>
        </main>

        <footer>
            <img src={logo} className='App-logo' alt="logo"/>
        </footer>
    </div>
  );
}

export default App;
