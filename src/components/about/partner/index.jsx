import React from "react";
import styled from "styled-components";
import BgImage from 'assets/images/home/bg1.png';
import { Animate } from "components/global/animation";

export const PartnerBrands = () => {
  return (
    <div className='w-full md:h-[40vh] h-[55vh] flex items-center justify-center' style={{
      backgroundImage: `url(${BgImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <RootRootRootRoot>
        <Animate.FadeUp>
          <MidnightBlueFlexColumn>
            <Text1>
              We
              {"  "}
              Are Partnered With Top Brands
            </Text1>
          </MidnightBlueFlexColumn>
        </Animate.FadeUp>
        <Animate.FadeUp>
          <FlexColumn>
            <Download src={`https://file.rendit.io/n/p2930YkZXenpzNUNPAp0.png`} />
            <Download src={`https://file.rendit.io/n/LbgBkZ88APKomUzBB8mj.png`} />
            <Download src={`https://file.rendit.io/n/jHgjI9n1bAbeApotjzVs.png`} />
            <Download src={`https://file.rendit.io/n/Z6XSQJXUQaaVoxlxR1cw.png`} />
          </FlexColumn>
        </Animate.FadeUp>
      </RootRootRootRoot>
    </div>
  );
};

const RootRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-bottom: 20px;
  
`;
const MidnightBlueFlexColumn = styled.div`
  padding: 20px;
  border-width: 1px;
  border-radius: 47px;
  border-style: solid;
  border-color: #ffffff;
  background-color: rgba(51, 42, 99, 0.67);

  @media (max-width: 768px) {
    margin-top: 150px;
  }
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
const Download = styled.img`
  width: auto;
  height: 40px;
`;
const FlexColumn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 50px 100px;
  border-radius: 6px;
  background-image: linear-gradient(
    270deg,
    rgba(222, 199, 255, 0.95) -10%,
    rgba(153, 100, 190, 0.62) 106%
  );

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 30px 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
  }
`;