import React from "react";
import { CountPartDiv, HowToCardDiv, HowToDiv } from "./howto.styled";

import howto1 from "assets/howto/1.png";
import howto2 from "assets/howto/2.png";
import howto3 from "assets/howto/3.png";
import howto4 from "assets/howto/4.png";

import playBtn from "assets/buttons/Play.png";
import mintBtn from "assets/buttons/mint NFT.png";
import buyBtn from "assets/buttons/buy-coin.png";

import arrow from "assets/p-arrow1.png";

const HowToPart = () => {
  return (
    <HowToDiv className="relative">
      <div className="flex justify-around pb-[100px]">
        <CountPart count={1050} title="Burned" />
        <CountPart count={7000} title="holder" />
        <CountPart count={1500} title="NFT solde" />
        <CountPart count={825349} title="Tokens distributed" />
      </div>
      <div className="mb-[100px]">
        <h6 className="text-[#0EC6FF] metasnail-h6 text-sm font-bold uppercase relative flex items-center pl-5 mb-[15px]">
          METASNAIL
        </h6>
        <h2 className="text-white font-black text-[36px]">
          How To start Playing Metasnalis ?
        </h2>
      </div>
      <div className="howto-card-div bg-[#FFFFFF1C] flex">
        <HowToCard
          arrow={true}
          no="01"
          bgColor="bg-[#61CE70]"
          img={howto1}
          title="Get MS coin"
          desc="Buy MS coin"
        />
        <HowToCard
          no="02"
          arrow={true}
          bgColor="bg-[#FF5600]"
          img={howto2}
          title="choose NFT"
          desc="choose NFT pack suitable for you and mint for MS coin Tokens"
        />
        <HowToCard
          arrow={true}
          no="03"
          bgColor="bg-[#00D7FF]"
          img={howto3}
          title="Connect to the game"
          desc="connect same wallet to metasnail game"
        />
        <HowToCard
          no="04"
          bgColor="bg-[#BECE61]"
          img={howto4}
          title="Play and earn !"
          desc="the snails will appear and start playing auto or manual mode !"
        />
        <div className="howto-button-group !w-max p-[15px] ">
          <img src={playBtn} alt="play" className="min-w-[157px]" />
          <img src={mintBtn} alt="mintBtn" className="min-w-[157px]" />
          <img src={buyBtn} alt="buyBtn" className="min-w-[157px]" />
        </div>
      </div>
    </HowToDiv>
  );
};

export default HowToPart;

export const CountPart = (props: any) => {
  return (
    <CountPartDiv>
      <span className="text-white font-black text-5xl pl-5">{props.count}</span>
      <h6 className="text-[#FF9900] text-sm font-bold uppercase relative flex items-center pl-5 mb-[15px]">
        {props.title}
      </h6>
    </CountPartDiv>
  );
};

export const HowToCard = (props: any) => {
  return (
    <HowToCardDiv className="px-[15px] relative flex justify-center">
      {props.arrow && (
        <img
          src={arrow}
          className="absolute -right-[20%] -top-3"
          alt={"arrow"}
        />
      )}
      <div className="absolute w-[70px] h-[70px] flex justify-center items-center rounded-full card-no-mark -top-[35px] text-white text-2xl font-black">
        {props.no}
      </div>

      <div
        className={`rounded-full ${props.bgColor} text-center p-[50px] h-max`}
      >
        <img src={props.img} alt="howto1" />
        <h5 className="text-[22px] font-bold my-[15px] text-[#1a1b1e]">
          {props.title}
        </h5>
        <p className="text-[#606060] text-base">{props.desc}</p>
      </div>
    </HowToCardDiv>
  );
};
