import React from "react";

import { FaFacebook, FaTwitter, FaTelegram, FaReddit } from "react-icons/fa";
import { SocialDiv } from "./social.styled";

const SocialButtonsGroup = () => {
  return (
    <SocialDiv className="fixed right-0 z-10 bottom-[20%]">
      <div className="w-[50px] h-[50px] rounded-full border-[3px] border-white bg-[#3b5998] text-white text-[25px] flex justify-center items-center cursor-pointer">
        <FaFacebook />
      </div>
      <div className="w-[50px] h-[50px] rounded-full border-[3px] border-white bg-[#1da1f2] text-white text-[25px] flex justify-center items-center cursor-pointer">
        <FaTwitter />
      </div>
      <div className="w-[50px] h-[50px] rounded-full border-[3px] border-white bg-[#1da1f2] text-white text-[25px] flex justify-center items-center cursor-pointer">
        <FaTelegram />
      </div>
      <div className="w-[50px] h-[50px] rounded-full border-[3px] border-white bg-[#ff4500] text-white text-[25px] flex justify-center items-center cursor-pointer">
        <FaReddit />
      </div>
    </SocialDiv>
  );
};

export default SocialButtonsGroup;
