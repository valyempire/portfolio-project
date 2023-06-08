import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { MyWork } from "./components/MyWork";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutMe} />
        <Route path="/work" component={MyWork} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};
