import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import About from "./pages/Aboutme"
import Resume from "./pages/Resume"

function App() {
  return (
    <Router>
    <Header />
    <Navbar />
    <Route exact path="/aboutme" component={About} />
    <Route exact path="/work" />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/contactme" />
    </ Router>
  )
}

export default App;
