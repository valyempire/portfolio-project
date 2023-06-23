import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
};
