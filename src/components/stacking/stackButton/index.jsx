import React from "react";
import styled from "styled-components";
import { colors } from "constants/colors";
import { useStackingContext } from "context/stackingContext";

export const StackButton = () => {
  const { isLeaderBoardButtonClicked, setLeaderBoardButtonActive } = useStackingContext();

  const onLeaderBoardClick = () => {
    setLeaderBoardButtonActive(!isLeaderBoardButtonClicked);
  };

  return (
    <div style={{
      backgroundColor: colors.primaryBackground,
      padding: '50px'
    }}>
      <RectangleRootRootRoot>
        <Text1>Staking</Text1>
        <FlexColumn
          onClick={onLeaderBoardClick}
        >
          <Text2>LeaderBoard</Text2>
        </FlexColumn>
      </RectangleRootRootRoot>
    </div>
  );
};

const RectangleRootRootRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  border-radius: 16px;
  background-color: #320750;

  @media (max-width: 700px) {
    padding: 40px 20px;
    flex-direction: column;
    gap: 15px;
  }
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 50px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: 4px;

  @media (max-width: 700px) {
    font-size: 40px;
  }
`;
const FlexColumn = styled.button`
  padding: 20px;
  border-radius: 20px;
  background-image: linear-gradient(270deg, #9a18d7 0%, #bf6ec6 107%);
`;
const Text2 = styled.div`
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: 1.8px;
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;
