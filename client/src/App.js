import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search"
import Saved from "./pages/Saved";
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <div>
          <Nav />
          <Header />
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/saved" component={Saved}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
