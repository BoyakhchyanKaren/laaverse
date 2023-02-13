import { Animate } from "components/global/animation";
import { colors } from "constants/colors";
import React from "react";
import styled from "styled-components";

export const FAQBanner = () => {
  return (
    <FrameRootRootRoot>
      <Thumb>
        <BlackFlexColumn>
          <Text1><Animate.FadeUp>FAQ</Animate.FadeUp></Text1>
          <Text2><Animate.FadeUp>Frequently Asked Question</Animate.FadeUp></Text2>
          <Paragraph>
            Track your entire project from start to finish with beautiful views
            that make project planning a breeze.<br />
            Manage your resources on a List, Box, Gantt.
          </Paragraph>
        </BlackFlexColumn>
      </Thumb>
    </FrameRootRootRoot>
  );
};

const FrameRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  overflow: hidden;
  background-color: ${colors.primaryBackground}
`;
const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/mPnQt7KT2NAoz5QwCCHl.png");
`;
const BlackFlexColumn = styled.div`
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  border-radius: 13px;
  background-color: rgba(47, 19, 21, 0.62);
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 38px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
`;
const Text2 = styled.div`
  color: #ffffff;
  font-size: 32px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  letter-spacing: -0.64px;
`;
const Paragraph = styled.div`
  align-self: stretch;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  letter-spacing: -0.32px;
`;
