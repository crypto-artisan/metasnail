import styled from "styled-components";
import bg from "assets/bg-shape4-home6.png";
import dotBg from "assets/bg3-dots-home6.png";
import cardImg from "assets/introCard.jpg";

export const SalesPartDiv = styled.div`
  background-image: url(${bg});
  background-position: center right;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  padding: 50px 0px 160px 0px;
  .sale-overlay {
    background-image: url(${dotBg});
    background-position: 0px 800px;
    opacity: 1;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  }
  .sale-card {
    background-image: url(${cardImg});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.26;
  }
  .sale-title-h6 {
    :before {
      background: #0ec6ff;
      position: absolute;
      content: "";
      width: 7px;
      height: 7px;
      left: 0;
      border-radius: 50%;
    }
  }
  .sale-card-group {
    & > * {
      transition: 0.5s all;
      :hover {
        transform: translateY(-10px);
      }
    }
  }
`;
