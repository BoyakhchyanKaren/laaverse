import React from "react";
import styled from "styled-components";
import { colors } from "constants/colors";
import { useStackingContext } from "context/stackingContext";

export const StackButton = () => {
    const { isLeaderBoardButtonClicked, setLeaderBoardButtonActive } = useStackingContext();

    const onLeaderBoardClick = () => {
        setLeaderBoardButtonActive(!isLeaderBoardButtonClicked);
    };

    console.log(isLeaderBoardButtonClicked)

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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 66px 34px 65px 42px;
  border-radius: 16px;
  background-color: #320750;
`;
const Text1 = styled.div`
  width: 208px;
  height: 71px;
  margin: 3px 0px 0px 0px;
  color: #ffffff;
  font-size: 47px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: 3.52px;
`;
const FlexColumn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 21px 44px;
  border-radius: 19px;
  background-image: linear-gradient(270deg, #9a18d7 0%, #bf6ec6 107%);
`;
const Text2 = styled.div`
  width: 176px;
  height: 36px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: 1.8px;
`;
