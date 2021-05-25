import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/Aboutme"
import Resume from "./pages/Resume"
import Work from "./pages/Work"
import Contactme from "./pages/Contactme" 
import TechSkills from "./pages/TechnicalSkills"



function App() {
  return (
    <Router>
    <Header />
    <Navbar />
    <Route exact path="/" component={About} />
    <Route exact path="/work" component={Work} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/contactme" component={Contactme} />
    <Route exact path="/techskills" component={TechSkills} />
    <Footer />
    </ Router>
  )
}

export default App;
