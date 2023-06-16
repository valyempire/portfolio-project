import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { MyWork } from "./components/MyWork";
import { Navbar } from "./components/Navbar";

export const App: React.FC = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/work" component={MyWork} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};
