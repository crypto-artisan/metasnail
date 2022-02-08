import React from "react";

import IntroPart from "layouts/landing/intropart";
import SliderPart from "layouts/landing/sliderpart";
import PlayEarnPart from "layouts/landing/playearnpart";
import MeetTheHeroPart from "layouts/landing/meettheheropart";
import MetasnailsPart from "layouts/landing/metasnailspart";

const LandingPage = () => {
  return (
    <div className="w-full">
      <IntroPart />
      <SliderPart />
      <PlayEarnPart />
      <MeetTheHeroPart />
      <MetasnailsPart />
    </div>
  );
};

export default LandingPage;
