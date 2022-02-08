import React from "react";

import IntroPart from "layouts/landing/intropart";
import SliderPart from "layouts/landing/sliderpart";
import PlayEarnPart from "layouts/landing/playearnpart";

const LandingPage = () => {
  return (
    <div className="w-full">
      <IntroPart />
      <SliderPart />
      <PlayEarnPart />
    </div>
  );
};

export default LandingPage;
