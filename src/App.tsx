// Import Modules
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import Pages
import LandingPage from "pages/landing/LandingPage";

// Import css
import "swiper/css";
import "swiper/css/pagination";
import Header from "layouts/header/Header";
import Footer from "layouts/footer/Footer";
import SocialButtonsGroup from "components/socialbuttongroup";
import ScrollTop from "components/scrolltop";

function App() {
  return (
    <Router>
      <SocialButtonsGroup />
      <ScrollTop />
      <Header />
      <Route exact path="/" component={LandingPage} />
      <Footer />
    </Router>
  );
}

export default App;
