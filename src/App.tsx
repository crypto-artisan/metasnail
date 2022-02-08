// Import Modules
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import Pages
import LandingPage from "pages/landing/LandingPage";

// Import css
import "swiper/css";
import "swiper/css/pagination";
import Footer from "layouts/footer/Footer";

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Footer />
    </Router>
  );
}

export default App;
