import React from "react";
import styled from "styled-components";

export const DaoBanner = () => {
  return (
    <FrameRootRootRoot>
      <PurpleHeartFlexColumn>
        <Text1>DAO</Text1>
      </PurpleHeartFlexColumn>
    </FrameRootRootRoot>
  );
};

const FrameRootRootRoot = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  background-color: #06021a;
  overflow: hidden;
`;
const PurpleHeartFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 100px;
  border-radius: 8px;
  background-color: rgba(128, 5, 215, 0.88);
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 38px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
