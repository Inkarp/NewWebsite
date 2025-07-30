import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <span className="button-text">Join us</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="svgIcon"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(20, 20, 20);
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px 4px rgba(255, 160, 161, 0.25);
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
    position: relative;
    color: white;
  }

  .svgIcon {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
    z-index: 2;
  }

  .button-text {
    position: absolute;
    opacity: 0;
    font-size: 13px;
    color: white;
    transition: opacity 0.3s ease, transform 0.3s ease;
    transform: translateY(20px);
    z-index: 1;
  }

  .button:hover {
    width: 140px;
    border-radius: 50px;
    background-color: #ff4d4d;
  }

  .button:hover .svgIcon {
    transform: translateY(-200%);
  }

  .button:hover .button-text {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default Button;
