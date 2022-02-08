import styled from "styled-components";

export const RoadMapDiv = styled.div`
  h6 {
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
  .roadmap-accordion {
    .accordion-item {
      border-radius: 10px;
      margin-bottom: 7px;
      contain: content;
      border: 1px solid white;
      background-color: #ffffff33;
    }
    .accordion-button {
      padding: 13px 10px 13px 25px;
      font-size: 21px;
      font-weight: 500;
      background-color: #fb7905;
      transition: all 0.3s;
      cursor: pointer;
      :focus {
        border: none;
        box-shadow: none;
      }
      color: #daf805;
    }
    .accordion-button.collapsed {
      transition: all 0.3s;
      color: black;
      background-color: #ffffff33;
    }
    .accordion-collapse.collapse {
      transition: all 0.3s;
      background-color: #fb7905;
    }
  }
`;
