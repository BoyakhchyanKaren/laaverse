import React from "react";
import styled from "styled-components";

export const TopSeller = () => {
  return (
    <FrameRootRootRoot>
      <Text2>Top Seller</Text2>
      <BlackFlexRow>
        {[1, 2, 3, 4].map(() => {
          return (
            <BlackFlexColumn>
              <Group13>
                <Image1 src={`https://file.rendit.io/n/ka5Kb5BoNvAu9A8nW3wc.png`} />
                <Group15>
                  <Text7>Mazanov Sky</Text7>
                  <Eth7>
                    885.5 <Eth>Eth</Eth>
                  </Eth7>
                </Group15>
              </Group13>
              <Group14>
                <AddButton>
                  <Image13
                    src={`https://file.rendit.io/n/P1ukYYedeZoSyTE7xnRJ.svg`}
                  />
                </AddButton>
                <ShareButton>
                  <Image13
                    src={`https://file.rendit.io/n/6Ct1RPm3FxtVr9ADLLFQ.svg`}
                  />
                </ShareButton>
              </Group14>
            </BlackFlexColumn>
          )
        })}
      </BlackFlexRow>
    </FrameRootRootRoot>
  );
};

const Image1 = styled.img`
  width: 67.5px;
  height: 68.5px;
`;
const Eth = styled.div`
  display: contents;
  color: #a700f5;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins;
`;
const Image13 = styled.img`
  width: 7.38px;
  height: 7.5px;
`;
const FrameRootRootRoot = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 27px 34px 28px 29px;
  background-color: #0a0427;
  overflow: hidden;
`;
const BlackFlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 70px;
  padding: 20px 30px 47px 29px;
  background-color: #0a0427;
`;
const Text2 = styled.div`
  width: 130px;
  height: 44px;
  color: #ffffff;
  font-size: 26px;
  font-weight: 700;
  font-family: Poppins;
  line-height: 44.32999801635742px;
  text-align: center;
  white-space: nowrap;
  margin-left: 40px;
`;
const BlackFlexColumn = styled.div`
  gap: 10.8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  padding: 16.1px 73px 19.3px 14.8px;
  border-width: 1px;
  border-radius: 8px;
  border-style: solid;
  border-color: #b98cce;
  background-color: #150320;
`;
const Group13 = styled.div`
  height: 68.5px;
  gap: 8.44px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Group15 = styled.div`
  height: 68.5px;
  gap: 1.97px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
const Text7 = styled.div`
  width: 120px;
  height: 25px;
  margin: 0px 0px 0px 0.03px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Poppins;
`;
const Eth7 = styled.div`
  width: 79.1px;
  height: 25.7px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins;
`;
const Group14 = styled.div`
  height: 19.2px;
  gap: 6.89px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 76.8px 0px 75.5px;
`;
const AddButton = styled.button`
  height: 20px;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  border-color: #9d9898;
`;
const ShareButton = styled.button`
  height: 20px;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  border-color: #9d9898;
`;