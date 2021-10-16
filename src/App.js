import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AiOutlineCaretRight } from "react-icons/ai";

function App() {
  const showNavBar = () => {
    document.getElementById("navBar").classList.remove("navBarHide");
    document.getElementById("navBar").classList.add("navBarShow");
  }
  return (
    <div className="containr-fluid">
      <Router>
        <button onClick={showNavBar} className="navOpenButton"><AiOutlineCaretRight /></button>
        <div className="row m-0">
          <Navbar />

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 navBarContainer">

          </div>
          <div className="col-md-12 col-lg-9 col-xl-10 p-0 mainContainer">

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={Home} />
              <Route exact path="/resume" component={Home} />
              <Route exact path="/technologies" component={Home} />
              <Route exact path="/services" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Home} />
            </Switch>

          </div>
        </div>
      </Router>

    </div >
  );
}

export default App;
