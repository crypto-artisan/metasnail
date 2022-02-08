import React, { useCallback, useEffect, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

import logo from "assets/buttons/preloader.png";
import playbtn from "assets/buttons/Play.png";
import { HeaderDiv } from "./header.styled";
import { HiArrowNarrowRight } from "react-icons/hi";
import { AiFillFire } from "react-icons/ai";

const Header = () => {
  const [y, setY] = useState(0);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      const header: any = document.getElementById("header");
      if (document.documentElement.scrollTop === 0) {
        header.style.backgroundColor = "transparent";
      } else if (document.documentElement.scrollTop > 0) {
        header.style.backgroundColor = "#0042A1";
      }

      if (y > window.scrollY) {
        header.style.top = 0;
      } else if (y < window.scrollY) {
        header.style.top = "-81px";
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const handleOnScroll = (e: any) => {};

  return (
    <HeaderDiv
      id="header"
      className="fixed w-full border-b border-[#ffffff50] z-10"
    >
      <div className="w-[92%] m-auto flex justify-between">
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-[124px] py-6 cursor-pointer"
          />
        </div>
        <div className="flex  text-white font-black text-lg">
          <div>
            <div className="menu-item mx-[15px] flex items-center h-full">
              HOME
            </div>
          </div>
          <div>
            <div className="menu-item mx-[15px] flex items-center h-full">
              NFTS
              <IoIosArrowDown className="ml-1" />
            </div>
          </div>
          <div>
            <div className="menu-item mx-[15px] flex items-center h-full">
              CHARTS
              <IoIosArrowDown className="ml-1" />
            </div>
          </div>
          <div>
            <div className="menu-item mx-[15px] flex items-center h-full">
              DOCUMENTS
              <IoIosArrowDown className="ml-1" />
            </div>
          </div>
          <div>
            <div className="menu-item mx-[15px] flex items-center h-full">
              MS ECO
              <IoIosArrowDown className="ml-1" />
            </div>
          </div>
          <div>
            <div className="menu-item mx-[15px] flex items-center h-full">
              LINKS
              <IoIosArrowDown className="ml-1" />
            </div>
          </div>
          <div className="ml-[24px] anim-btn self-center bg-[#FF7E00] h-fit text-white uppercase rounded-full text-base relative font-bold flex items-center p-[5px] border-x border-[#FF7E00] cursor-pointer">
            <span className="px-3">BETA Testers</span>
            <div className="p-[10px] bg-white text-[#00c3ff] rounded-full">
              <AiFillFire />
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
