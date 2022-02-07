import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";

import {
  BtnGetMyDiscount,
  BtnHowItworks,
  IntroCard,
  IntroCardOverlay,
  IntroImg,
  IntroOverlay,
  IntroPartSection,
} from "./intropart.styled";

import IntroCharacter from "assets/characters/intro_1.png";
const IntroPart = () => {
  return (
    <IntroPartSection className="relative bg-center bg-no-repeat bg-cover">
      <IntroOverlay className="absolute w-full h-full top-0 bg-center bg-no-repeat bg-cover bg-fixed" />
      <div className="grid grid-cols-2">
        <div>
          <IntroImg
            src={IntroCharacter}
            alt="intro character"
            className="opacity-90 hover:opacity-100"
          />
        </div>
        <div>
          <IntroCard className="px-24 py-10 w-fit relative">
            <IntroCardOverlay className="absolute top-0 left-0 w-full h-full -z-[1] mix-blend-darken" />
            <h6 className="text-white uppercase font-bold">Metasnails !</h6>
            <h2 className="text-[#E17B00] text-[40px] font-black">
              New Generation OF P2E !
            </h2>
            <p className="text-white text-[22px] pt-16 pb-5">
              Get MS coin 1.5X cheaper than launch price !
            </p>
            <p className="text-white text-[22px] pb-16">
              and mint your Heros NFTs before launch !!
            </p>
            <div className="flex items-center">
              <BtnGetMyDiscount className="bg-[#fe4c1c] h-fit text-white uppercase rounded-full text-base relative font-bold flex items-center p-[5px] border-x border-[#fe4c1c] cursor-pointer">
                <span className="px-4">GET MY DISCOUNT</span>
                <div className="p-3 bg-white text-[#fe4c1c] rounded-full">
                  <HiArrowNarrowRight />
                </div>
              </BtnGetMyDiscount>
              <BtnHowItworks className="border-[10px] cursor-pointer rounded-full border-[#ffffff1a]">
                <div className="bg-white hover:bg-[#00c3ff] rounded-full p-4 text-[#00c3ff] hover:text-white">
                  <FaPlay />
                </div>
              </BtnHowItworks>
              <p className="pl-3 text-[#A2893A] text-base font-bold leading-7">
                How It
                <br />
                Works
              </p>
            </div>
          </IntroCard>
        </div>
      </div>
    </IntroPartSection>
  );
};

export default IntroPart;
