import React from "react";
import { FooterDiv } from "./footer.styled";

import footerLogo from "assets/buttons/Metasnails text shadow.png";
import buyBtn from "assets/buttons/Buy.png";

const Footer = () => {
  return (
    <FooterDiv className="pt-[230px] pb-[50px] relative bg-[#0042A1]">
      <div className="absolute -top-px left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="fill-[#0049B1]"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          ></path>
        </svg>
      </div>
      <div className="max-w-[1200px] m-auto flex justify-between">
        <div>
          <h5 className="text-white text-[20px] font-bold mb-[30px]">
            Services
          </h5>
          <div className="mb-[18px]">
            <a href="#" className="text-[#9ee8ff] font-normal text-base">
              SEO for Small Business
            </a>
          </div>
          <div className="mb-[18px]">
            <a href="#" className="text-[#9ee8ff] font-normal text-base">
              SEO for Local Services
            </a>
          </div>
          <div className="mb-[18px]">
            <a href="#" className="text-[#9ee8ff] font-normal text-base">
              Enterprise SEO
            </a>
          </div>
          <div className="mb-[18px]">
            <a href="#" className="text-[#9ee8ff] font-normal text-base">
              National SEO
            </a>
          </div>
          <div className="mb-[18px]">
            <a href="#" className="text-[#9ee8ff] font-normal text-base">
              International SEO
            </a>
          </div>
        </div>
        <div>
          <h5 className="text-white text-[20px] font-bold mb-[30px]">Learn</h5>
          <div className="mb-[18px]">
            <a href="#" className="text-[#9ee8ff] font-normal text-base">
              Why SEO Matters
            </a>
          </div>
          <div className="mb-[18px]">
            <a href="#" className="text-[#9ee8ff] font-normal text-base">
              How to Choose an Agency
            </a>
          </div>
          <div className="mb-[18px]">
            <a href="#" className="text-[#9ee8ff] font-normal text-base">
              Keyword Research Explained
            </a>
          </div>
          <div className="mb-[18px]">
            <a href="#" className="text-[#9ee8ff] font-normal text-base">
              On Page SEO Explained
            </a>
          </div>
          <div className="mb-[18px]">
            <a href="#" className="text-[#9ee8ff] font-normal text-base">
              Off Page SEO Explained
            </a>
          </div>
        </div>
        <div>
          <h5 className="text-white text-[20px] font-bold mb-[30px]">
            Company
          </h5>
          <div className="mb-[18px]">
            <a href="#" className="text-[#9ee8ff] font-normal text-base">
              About Company
            </a>
          </div>
          <div className="mb-[18px]">
            <a href="#" className="text-[#9ee8ff] font-normal text-base">
              IFor Customers
            </a>
          </div>
          <div className="mb-[18px]">
            <a href="#" className="text-[#9ee8ff] font-normal text-base">
              {"SEO Blog & News"}
            </a>
          </div>
          <div className="mb-[18px]">
            <a href="#" className="text-[#9ee8ff] font-normal text-base">
              {"Careers & Reviews"}
            </a>
          </div>
          <div className="mb-[18px]">
            <a href="#" className="text-[#9ee8ff] font-normal text-base">
              {"Sitemap"}
            </a>
          </div>
        </div>
        <div>
          <h5 className="text-white text-[20px] font-bold mb-[30px]">
            Subscribe
          </h5>
          <div className="mb-[18px]">
            <span className="text-[#9ee8ff] font-normal text-base">
              Follow our newsletter to stay updated
              <br />
              about agency.
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between max-w-[1200px]  mx-auto !mt-[95px]">
        <img
          src={footerLogo}
          alt="footerlogo"
          className="max-w-[555px] w-full"
        />
        <p className="text-[#9ee8ff] font-normal text-base">
          Copyright © {new Date().getFullYear()} METASNAILS . All Rights
          Reserved.
        </p>
      </div>
      <img
        src={buyBtn}
        alt="button"
        className="absolute -bottom-[180px] bottom-btn max-w-[300px]"
      />
    </FooterDiv>
  );
};

export default Footer;
