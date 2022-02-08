import React from "react";
import { SalesPartDiv } from "./sales.styled";

const SalesStagePart = () => {
  return (
    <SalesPartDiv className="relative bg-[#0049b1] bg-no-repeat">
      <div className="sale-overlay bg-no-repeat w-full h-full top-0 left-0 absolute" />
      <div className="max-w-[1200px] m-auto relative">
        <div className="sale-card w-full h-full absolute" />
        <div className="relative">
          <div className="pt-2 text-center">
            <h6 className="text-[#0EC6FF] sale-title-h6 text-sm font-bold uppercase relative pl-5 mb-[15px] flex items-center w-max mx-auto">
              GET EARLY !!
            </h6>
            <h2 className="text-white font-black text-[36px] w-max mx-auto">
              Sales stages
            </h2>
            <p className="text-white leading pt-2 leading-8">
              We have experience working with large and small businesses and are
              ready to
              <br />
              {
                "develop a targeted strategy and plan that’s just right for you."
              }
            </p>
          </div>
          <div className="flex">
            <div className="w-[50%]"></div>
            <div className="w-[50%] text-white font-black text-4xl">
              For NFT presale and private sale to start !
            </div>
          </div>
          <div className="flex sale-card-group">
            <div className="relative mx-[15px] rounded-[15px] w-[-webkit-fill-available] bg-[#FF4B38] px-[30px] pt-[56px]">
              asdf
            </div>
            <div className="relative mx-[15px] rounded-[15px] w-[-webkit-fill-available] px-[30px] pt-[56px]">
              asdf
            </div>
            <div className="relative mx-[15px] rounded-[15px] w-[-webkit-fill-available] px-[30px] pt-[56px]">
              asdf
            </div>
          </div>
        </div>
      </div>
    </SalesPartDiv>
  );
};

export default SalesStagePart;
