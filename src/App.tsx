import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { MyWork } from "./components/MyWork";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";

export const App: React.FC = () => {
  return (
    <div>
      <AboutMe />
      <Contact />
      <Home />
      <MyWork />
      <Navbar />
      <Skills />
    </div>
  );
};
