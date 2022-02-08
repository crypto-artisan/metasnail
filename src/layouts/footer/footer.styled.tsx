import styled from "styled-components";

export const FooterDiv = styled.div`
  contain: content;
  a {
    text-decoration: none;
    :hover {
      color: #fff;
      border-bottom: 1.5px solid #fff;
    }
  }
  .bottom-btn {
    :hover {
      filter: brightness(115%) contrast(100%) saturate(140%) blur(0px)
        hue-rotate(0deg);
      animation-name: elementor-animation-pulse-grow;
      animation-duration: 0.3s;
      animation-timing-function: linear;
      animation-direction: alternate;
    }
    filter: brightness(100%) contrast(100%) saturate(200%) blur(0px)
      hue-rotate(176deg);
  }
  @keyframes elementor-animation-pop {
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
`;
