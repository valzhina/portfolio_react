import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Stack from "./components/stack/Stack";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import {useState} from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(false) //changes topbar state like a,b = usestate('x') where a->False b-> a function
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Stack/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
 