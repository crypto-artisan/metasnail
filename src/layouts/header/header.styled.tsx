import styled from "styled-components";

export const HeaderDiv = styled.div`
  .header-play-btn {
    :hover {
      filter: brightness(115%) contrast(100%) saturate(140%) blur(0px)
        hue-rotate(0deg);
      animation-name: elementor-animation-pulse-grow;
      animation-duration: 0.6s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
  @keyframes elementor-animation-pulse-grow {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .menu-item {
    position: relative;
    :hover {
      color: #9ddddd !important;
    }
    :before {
      left: auto;
      right: 0;
      position: absolute;
      height: 5px;
      width: 0%;
      bottom: -3px;
      background: #00c3ff;
      content: "";
      display: block;
      transition: all 0.3s linear;
      border-top-left-radius: 0;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 0;
    }
    :after {
      position: absolute;
      height: 5px;
      width: 0%;
      bottom: -3px;
      left: 0;
      background: #00c3ff;
      content: "";
      display: block;
      border-top-left-radius: 5px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 5px;
      transition: all 0.3s linear;
    }
  }
`;
