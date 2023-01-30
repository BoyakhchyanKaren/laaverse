import React from "react";
import styled from "styled-components";

export const DiagramFlex = () => {
    return (
        <GroupRootRootRoot>
            <PurpleHeartFlexColumn>
                <ShockingPinkRectangle />
            </PurpleHeartFlexColumn>
            <FlexColumn>
                <PurpleHeartRectangle />
                <ShockingPinkRectangle1 />
            </FlexColumn>
            <FlexColumn>
                <PurpleHeartRectangle1 />
                <ShockingPinkRectangle2 />
            </FlexColumn>
            <FlexColumn>
                <PurpleHeartRectangle2 />
                <ShockingPinkRectangle3 />
            </FlexColumn>
            <FlexColumn>
                <PurpleHeartRectangle3 />
                <ShockingPinkRectangle4 />
            </FlexColumn>
            <FlexColumn>
                <PurpleHeartRectangle4 />
                <ShockingPinkRectangle5 />
            </FlexColumn>
            <FlexColumn>
                <PurpleHeartRectangle />
                <ShockingPinkRectangle1 />
            </FlexColumn>
            <FlexColumn6>
                <PurpleHeartRectangle6 />
                <ShockingPinkRectangle2 />
            </FlexColumn6>
        </GroupRootRootRoot>
    );
};

const FlexColumn = styled.div`
  width: 17.3px;
  height: 136px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0px 10px 0px 0px;
`;
const PurpleHeartRectangle = styled.div`
  width: 17.3px;
  height: 32.1px;
  left: 0px;
  top: 104px;
  position: absolute;
  background-color: #9a18d7;
`;
const ShockingPinkRectangle1 = styled.div`
  width: 17.3px;
  height: 9.06px;
  position: relative;
  background-color: #d67eff;
`;
const ShockingPinkRectangle2 = styled.div`
  width: 17.3px;
  height: 78px;
  position: relative;
  background-color: #d67eff;
`;
const ShockingPinkRectangle4 = styled.div`
  width: 17.3px;
  height: 53.6px;
  position: relative;
  background-color: #d67eff;
`;
const ShockingPinkRectangle5 = styled.div`
  width: 17.3px;
  height: 41.2px;
  position: relative;
  background-color: #d67eff;
`;
const GroupRootRootRoot = styled.div`
  width: 281px;
  height: 138px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const PurpleHeartFlexColumn = styled.div`
  height: 6.59px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-end;
  margin: 0px 9.06px 1.65px 0px;
  background-color: #9a18d7;
`;
const ShockingPinkRectangle = styled.div`
  width: 17.3px;
  height: 4.2px;
  background-color: #d57eff;
`;
const PurpleHeartRectangle1 = styled.div`
  width: 17.3px;
  height: 115px;
  left: 0px;
  top: 0px;
  position: absolute;
  background-color: #9a18d7;
`;
const PurpleHeartRectangle2 = styled.div`
  width: 17.3px;
  height: 80.8px;
  left: 0px;
  top: 55.2px;
  position: absolute;
  background-color: #9a18d7;
`;
const ShockingPinkRectangle3 = styled.div`
  width: 17.3px;
  height: 70.9px;
  position: relative;
  background-color: #d67eff;
`;
const PurpleHeartRectangle3 = styled.div`
  width: 17.3px;
  height: 92.3px;
  left: 0px;
  top: 22.2px;
  position: absolute;
  background-color: #9a18d7;
`;
const PurpleHeartRectangle4 = styled.div`
  width: 17.3px;
  height: 57.7px;
  left: 0px;
  top: 56.9px;
  position: absolute;
  background-color: #9a18d7;
`;
const FlexColumn6 = styled.div`
  width: 17.3px;
  height: 136px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0px 9.06px 0px 0px;
  padding: 0.82px 0px;
`;
const PurpleHeartRectangle6 = styled.div`
  width: 17.3px;
  height: 115px;
  left: 0px;
  top: 0.82px;
  position: absolute;
  background-color: #9a18d7;
`;
