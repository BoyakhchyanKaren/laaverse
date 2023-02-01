import React from "react";
import styled from "styled-components";
import './style.css';

export const NewsLetter = () => {
  return (
    <FrameRootRootRoot>
      <Image1 src={`https://file.rendit.io/n/XwxopXdjqhka24dHB9AS.svg`} />
      <Text1>Get Newsletter</Text1>
      <Text2>Get udpated with news, tips & tricks</Text2>
      <input
        className='email-input12'
        placeholder="Enter your email"
      />
      <BlackFlexColumn>
        <FlexColumn>
          <Text4>Subscribe</Text4>
        </FlexColumn>
      </BlackFlexColumn>
      <Image1 src={`https://file.rendit.io/n/XwxopXdjqhka24dHB9AS.svg`} />
    </FrameRootRootRoot>
  );
};

const FrameRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2b032a;
  gap: 30px;
  padding-top:10px;
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  letter-spacing: 4.5px;
  text-transform: capitalize;
`;
const Text2 = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  text-transform: capitalize;
`;
const BlackFlexColumn = styled.div`
  height: 70px;
  display: flex;
  padding: 10px;
  border-width: 1px;
  border-radius: 6px;
  border-style: solid;
  border-color: #ffffff;
  background-color: rgba(15, 5, 36, 0.33);
`;
const FlexColumn = styled.button`
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 0px 5px 5px 5px;
  align-items: center;
  border-radius: 8px;
  background-image: linear-gradient(90deg, #8404e2 -7%, #610b90 143%);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
`;
const Text4 = styled.div`
  width: 100px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  align-self: center;
`;
const Image1 = styled.img`
  width: 1077px;
  height: 1.5px;
`;
