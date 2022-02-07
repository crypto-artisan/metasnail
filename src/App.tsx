// Import Modules
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import Pages
import LandingPage from "pages/landing/LandingPage";

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
    </Router>
  );
}

export default App;
