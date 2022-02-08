import React from "react";

import { IoIosArrowDown } from "react-icons/io";

import logo from "assets/buttons/preloader.png";
import playbtn from "assets/buttons/Play.png";
import { HeaderDiv } from "./header.styled";

const Header = () => {
  return (
    <HeaderDiv className="fixed top-0 w-full border-b border-[#ffffff50] z-10">
      <div className="w-[92%] m-auto flex justify-between">
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-[124px] py-6 cursor-pointer"
          />
        </div>
        <div className="flex text-white font-black text-lg">
          <div>
            <div className="menu-item px-[15px] flex items-center h-full">
              HOME
            </div>
          </div>
          <div>
            <div className="menu-item px-[15px] flex items-center h-full">
              NFTS
              <IoIosArrowDown className="ml-1" />
            </div>
          </div>
          <div>
            <div className="menu-item px-[15px] flex items-center h-full">
              CHARTS
              <IoIosArrowDown className="ml-1" />
            </div>
          </div>
          <div>
            <div className="menu-item px-[15px] flex items-center h-full">
              DOCUMENTS
              <IoIosArrowDown className="ml-1" />
            </div>
          </div>
          <div>
            <div className="menu-item px-[15px] flex items-center h-full">
              MS ECO
              <IoIosArrowDown className="ml-1" />
            </div>
          </div>
          <div>
            <div className="menu-item px-[15px] flex items-center h-full">
              LINKS
              <IoIosArrowDown className="ml-1" />
            </div>
          </div>
        </div>
        <div className="self-center">
          <img
            src={playbtn}
            alt="playbtn"
            className="header-play-btn w-[147px] cursor-pointer"
          />
        </div>
      </div>
    </HeaderDiv>
  );
};

export default Header;
