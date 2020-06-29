import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import About from "./Pages/About/About"
import Portfolio from "./Pages/Portfolio"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import Contact from "./Pages/Contact"

function App() {
  return (
   <Router>
     <Nav />
     <Switch>
       <Route exact path={["/", "/about"]}>
         <About />
       </Route>
       <Route exact path={"/portfolio"}>
         <Portfolio />
       </Route>
       <Route exact pathe={"/contact"}>
         <Contact />
       </Route>
     </Switch>
     <Footer />
   </Router>
  );
}

export default App;
