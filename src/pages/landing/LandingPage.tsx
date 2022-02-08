import React from "react";

import IntroPart from "layouts/landing/intropart";
import SliderPart from "layouts/landing/sliderpart";

const LandingPage = () => {
  return (
    <div className="w-full">
      <IntroPart />
      <SliderPart />
    </div>
  );
};

export default LandingPage;
