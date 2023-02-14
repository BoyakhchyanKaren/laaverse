import { Animate } from "components/global/animation";
import React from "react";
import styled from "styled-components";

export const TopSeller = () => {
  return (
    <FrameRootRootRoot>
      <Text2><Animate.FadeUp>Top Seller</Animate.FadeUp></Text2>
      <BlackFlexRow>
        {[1, 2, 3, 4].map((key, index) => {
          return (
            <BlackFlexColumn key={`${key}-${index}`}>
              <Group13>
                <Image1 src={`https://file.rendit.io/n/ka5Kb5BoNvAu9A8nW3wc.png`} />
                <Group15>
                  <Text7>
                    Mazanov Sky
                  </Text7>
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
  width: 100%;
  height: 100%;
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
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 200px;
  overflow: hidden;
  background-color: #0a0427;
  @media (max-width: 500px){
    padding: 30px 0;
  }
`;
const BlackFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #0a0427;
  overflow: hidden;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const Text2 = styled.div`
  color: #ffffff;
  font-size: 26px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
`;
const BlackFlexColumn = styled.div`
  gap: 10px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  border-width: 1px;
  border-radius: 8px;
  border-style: solid;
  border-color: #b98cce;
  background-color: #150320;
  overflow: hidden;
`;
const Group13 = styled.div`
  padding: 10px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Group15 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Text7 = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: Poppins;
`;
const Eth7 = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins;
`;
const Group14 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
`;
const AddButton = styled.button`
  padding: 5px;
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  border-color: #9d9898;
`;
const ShareButton = styled.button`
  padding: 5px;
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  border-color: #9d9898;
`;