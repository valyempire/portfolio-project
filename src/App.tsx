/**
 * Imports components from react router dom
 */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/**
 * Imports components
 */
import { ScrollToTop } from "./components/ScrollToTop";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

/**
 * Displays the component
 */
export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  );
};
