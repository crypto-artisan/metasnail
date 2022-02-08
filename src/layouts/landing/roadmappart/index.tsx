import React from "react";
import { RoadMapDiv } from "./roadmap.styled";

import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";

const RoadMapPart = () => {
  return (
    <RoadMapDiv className="relative">
      <div className="pt-[200px] pb-[90px]">
        <h6 className="text-[#0EC6FF] metasnail-h6 text-sm font-bold uppercase relative flex items-center pl-5 mb-[15px]">
          METASNAILS TIMELINE
        </h6>
        <h2 className="text-white font-black text-[36px]">ROADMAP</h2>
      </div>
      <div className="roadmap-accordion">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="">Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="pb-[140px]">
        <h6 className="text-[#0EC6FF] metasnail-h6 text-sm font-bold uppercase relative flex items-center pl-5 mt-2 mb-[15px]">
          BUILD YOUR SMALL BUSINESS
        </h6>
        <h2 className="text-white font-black leading-10 text-[36px]">
          Dominate Your Competition with
          <br /> Process-Driven SEO
        </h2>
      </div>
    </RoadMapDiv>
  );
};

export default RoadMapPart;
