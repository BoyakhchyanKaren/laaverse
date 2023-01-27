import React from "react";
import styled from "styled-components";
import BgImage from 'assets/images/home/bg1.png';

export const PartnerBrands = () => {
  return (
    <div className='w-full md:h-[40vh] h-[55vh] flex items-center justify-center' style={{
      backgroundImage: `url(${BgImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <RootRootRootRoot>
        <Ellipse />
        <MidnightBlueFlexColumn>
          <Text1>
            We
            {"  "}
            Are Partnered With Top Brands
          </Text1>
        </MidnightBlueFlexColumn>
        <Ellipse1 />
        <Group>
          <Download src={`https://file.rendit.io/n/LbgBkZ88APKomUzBB8mj.png`} />
          <Download1 src={`https://file.rendit.io/n/jHgjI9n1bAbeApotjzVs.png`} />
          <Download2 src={`https://file.rendit.io/n/Z6XSQJXUQaaVoxlxR1cw.png`} />
          <FlexColumn>
            <Download3
              src={`https://file.rendit.io/n/p2930YkZXenpzNUNPAp0.png`}
            />
          </FlexColumn>
        </Group>
      </RootRootRootRoot>
    </div>
  );
};

const RootRootRootRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
`;
const Ellipse = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/XqlfAK7jRypK1pNLHaZ8.svg");
`;
const MidnightBlueFlexColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px 33px 16px 33px;
  margin-bottom: 40px;
  border-width: 1px;
  border-radius: 47px;
  border-style: solid;
  border-color: #ffffff;
  background-color: rgba(51, 42, 99, 0.67);
`;
const Text1 = styled.div`
  width: 274px;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins;
  text-align: center;
  letter-spacing: -0.32px;
`;
const Ellipse1 = styled.div`
  width: 464.9931640625px;
  height: 39px;
  left: 447px;
  top: 0px;
  position: absolute;
  gap: 57px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/HG7sXL0e60o1e5pFsGpk.svg");
`;
const Group = styled.div`
  position: relative;
  display: flex;
  flex-grow: 0.45384615384615384;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Download = styled.img`
  width: 106px;
  height: 38px;
  left: 205px;
  top: 40px;
  position: absolute;
`;
const Download1 = styled.img`
  width: 126px;
  height: 36px;
  left: 368px;
  top: 41px;
  position: absolute;
`;
const Download2 = styled.img`
  width: 119px;
  height: 39px;
  left: 551px;
  top: 39.5px;
  position: absolute;
`;
const FlexColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 39px 565px 39px 43px;
  border-radius: 6px;
  background-image: linear-gradient(
    270deg,
    rgba(222, 199, 255, 0.95) -10%,
    rgba(153, 100, 190, 0.62) 106%
  );
`;
const Download3 = styled.img`
  width: 105px;
  height: 40px;
`;
