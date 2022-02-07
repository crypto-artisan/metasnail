import styled from "styled-components";

import introBG from "assets/hert.jpg";
import introOverlay from "assets/bg-banner-home7.png";
import introCard from "assets/introCard.jpg";

export const IntroPartSection = styled.div`
  background-color: #144281;
  background-image: url(${introOverlay});
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  z-index: 1;
  padding-top: 265px;
`;

export const IntroOverlay = styled.div`
  background-image: url(${introBG});
  opacity: 0.31;
  mix-blend-mode: overlay;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
}`;

export const IntroImg = styled.img`
  padding-left: 5%;
  transition: 0.3s all;
  :hover {
    transform: scale(0.9);
  }
`;

export const IntroCard = styled.div`
  box-shadow: -9px 0px 16px 0px rgb(0 0 0 / 50%);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
`;

export const IntroCardOverlay = styled.div`
  background-image: url(${introCard});
  opacity: 0.4;
`;

export const BtnGetMyDiscount = styled.div`
  contain: content;
  transition: 0.5s all;
  box-shadow: 8px 8px 18px 0px rgb(254 76 28 / 30%);
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    transition: all 0.5s;
    opacity: 1;
    transform: translate(-105%, 0);
    background-color: rgba(255, 255, 255, 0.8);
  }
  :hover {
    box-shadow: none;
    :before {
      transform: translate(0, 0);
      opacity: 0;
    }
  }
`;

export const BtnHowItworks = styled.div`
  div {
    transition: all 0.3s;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 50%);
  }
`;
