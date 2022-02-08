import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  FaPlay,
  FaWindows,
  FaApple,
  FaAndroid,
  FaInternetExplorer,
} from "react-icons/fa";

import {
  ApplicationGrid,
  BtnGetMyDiscount,
  BtnHowItworks,
  IntroCard,
  IntroCardOverlay,
  IntroImg,
  IntroOverlay,
  IntroPartSection,
  IntroText,
} from "./intropart.styled";

import IntroCharacter from "assets/characters/intro_1.png";
import CardBtn1 from "assets/buttons/coinmarketcap-kiradoge.png";
import CardBtn2 from "assets/buttons/coingecko.png";
import ChartBtn from "assets/buttons/chart.png";
import PlayBtn from "assets/buttons/Play.png";
import BuyBtn from "assets/buttons/buy-coin.png";
import MintBtn from "assets/buttons/mint NFT.png";

const IntroPart = () => {
  return (
    <IntroPartSection className="pt-[265px] pb-[175px] relative bg-center bg-no-repeat bg-cover">
      <IntroOverlay className="absolute w-full h-full top-0 bg-center bg-no-repeat bg-cover bg-fixed" />
      <div className="grid grid-cols-2">
        <div>
          <IntroImg
            src={IntroCharacter}
            alt="intro character"
            className="opacity-90 hover:opacity-100"
          />
          <IntroText className="w-[60%] m-auto">
            <h6 className="text-xs font-bold relative pl-5 pb-3">
              METAS /NAIL CONTRACT ADDRESS :
            </h6>
            <h2 className="text-white text-base font-black relative mb-4">
              0x00e1656e45f18ec6747f5a8496fd39b50b38396d
            </h2>
            <div className="relative flex justify-between">
              <img src={ChartBtn} className="w-[47%]" alt="ChartBtn" />
              <img src={PlayBtn} className="w-[47%]" alt="PlayBtn" />
            </div>
            <div className="relative flex justify-between">
              <img src={BuyBtn} className="w-[47%]" alt="ChartBtn" />
              <img src={MintBtn} className="w-[47%]" alt="PlayBtn" />
            </div>
          </IntroText>
        </div>
        <div>
          <IntroCard className="px-24 py-14 w-fit relative">
            <IntroCardOverlay className="absolute top-0 left-0 w-full h-full -z-[1] mix-blend-darken" />
            <h6 className="text-white uppercase font-bold">Metasnails !</h6>
            <h2 className="text-[#E17B00] text-[40px] font-black">
              New Generation OF P2E !
            </h2>
            <p className="text-white text-[22px] pt-20 pb-5">
              Get MS coin 1.5X cheaper than launch price !
            </p>
            <p className="text-white text-[22px] pb-20">
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
            <ApplicationGrid className="flex pt-10 items-center">
              <div className="text-white hover:text-[#00A9FF]">
                <FaWindows />
              </div>
              <div className="text-white hover:text-[#CFCFCF]">
                <FaApple />
              </div>
              <div className="text-[#00C526] hover:text-[#60FF6A]">
                <FaAndroid />
              </div>
              <div className="text-[#3BD6FF] hover:text-[#00AFFF]">
                <FaInternetExplorer />
              </div>
            </ApplicationGrid>
            <div className="flex justify-between pt-20 pb-[70px]">
              <div className="w-[45%]">
                <img
                  src={CardBtn1}
                  alt="cardbutton1"
                  className="rounded-full"
                />
                <p className="text-white font-black text-center pt-1">
                  Super Fast listing !
                </p>
              </div>
              <div className="w-[45%]">
                <img
                  src={CardBtn2}
                  alt="cardbutton2"
                  className="rounded-full"
                />
              </div>
            </div>
          </IntroCard>
        </div>
      </div>
    </IntroPartSection>
  );
};

export default IntroPart;
