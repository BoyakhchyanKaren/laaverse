import React from "react";
import styled from "styled-components";
import BgImage from 'assets/images/home/bg1.png';
import { Animate } from "components/global/animation";

export const Statistic = () => {
  return (
    <div className='w-full flex items-center justify-center' style={{
      backgroundImage: `url(${BgImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <RootRootRootRoot>
        <FlexRow />
        <FlexRow1>
          <Animate.FadeUp>
            <Group1>
              <Text1>100k</Text1>
              <Text2>Registered User</Text2>
            </Group1>
          </Animate.FadeUp>
          <Image2 src={`https://file.rendit.io/n/Hg1k6C8coBoVu2YDgLVo.svg`} />
          <Animate.FadeUp>
            <Group2>
              <Text3>5M</Text3>
              <Text4>Total Assets</Text4>
            </Group2>
          </Animate.FadeUp>
          <Image10 src={`https://file.rendit.io/n/Hg1k6C8coBoVu2YDgLVo.svg`} />
          <Animate.FadeUp>
            <Group3>
              <Text5>10B</Text5>
              <Text6>Yearly Trading</Text6>
            </Group3>
          </Animate.FadeUp>
        </FlexRow1>
        <Ellipse src={`https://file.rendit.io/n/XFKjn2Sp2Uh8EfvtWOI9.svg`} />
        <Ellipse1 src={`https://file.rendit.io/n/efp8WVar6kkdrSg4S79T.svg`} />
        <Group>
          <Ellipse2>
            <Image3 src={`https://file.rendit.io/n/RMB0phELYh81UhthiHKC.png`} />
            <Image4 src={`https://file.rendit.io/n/CTAF5QnodKcR3OeIXqcl.png`} />
            <Image5 src={`https://file.rendit.io/n/XHt8emtV0QbXh8RSKrJj.png`} />
            <Image6 src={`https://file.rendit.io/n/3YCqM3J9ytFDffbmKwm9.png`} />
            <Image7 src={`https://file.rendit.io/n/SZm6hKvTKjZFvAOsCKOC.png`} />
            <Image8 src={`https://file.rendit.io/n/YStzypympvLJtiHyxPr1.png`} />
          </Ellipse2>
          <Ellipse3>
            <Gallery src={`https://file.rendit.io/n/JzRwfayMCG5BzEeuuHtX.png`} />
          </Ellipse3>
          <Ellipse4>
            <Image11 src={`https://file.rendit.io/n/dkjpW8MZCPhknH5cLSYv.png`} />
          </Ellipse4>
          <Image12 src={`https://file.rendit.io/n/eqSGkUPpdS7tFRc3XlBP.png`} />
        </Group>
      </RootRootRootRoot>
    </div>
  );
};

const RootRootRootRoot = styled.div`
  position: relative;
  padding: 0px 203px 0px 66px;
  @media (max-width: 1250px) {
    display: none;
  }
`;
const FlexRow = styled.div`
  width: 1120px;
  height: 340px;
  left: 60px;
  top: 159px;
  position: absolute;
  gap: 78px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 00px;
  border-radius: 40px;
  background-image: linear-gradient(
    270deg,
    #623a82 -16%,
    #c87bff -16%,
    #9a18d7 106%
  );
`;
const FlexRow1 = styled.div`
  width: 1128px;
  height: 153px;
  left: 0px;
  top: 259px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 18.1px 56px 11.2px 56px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/c45zTJUy7JFyicnq4s0s.svg");
`;
const Group1 = styled.div`
  height: 153px;
  gap: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0px 51.5px 0px 0px;
`;
const Text1 = styled.div`
  width: 99px;
  height: 68px;
  align-self: flex-end;
  margin: 0px 11px 0px 0px;
  color: #ffffff;
  font-size: 45px;
  font-weight: 600;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: -0.9px;
`;
const Text2 = styled.div`
  width: 122px;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: -0.32px;
`;
const Image2 = styled.img`
  width: 1px;
  height: 118px;
  margin: 0px 46.5px 0px 0px;
`;
const Group2 = styled.div`
  height: 153px;
  gap: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0px 46.5px 0px 0px;
`;
const Text3 = styled.div`
  width: 69px;
  height: 68px;
  align-self: flex-end;
  margin: 0px 12px 0px 0px;
  color: #ffffff;
  font-size: 45px;
  font-weight: 600;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: -0.9px;
`;
const Text4 = styled.div`
  width: 94px;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: -0.32px;
`;
const Image10 = styled.img`
  width: 1px;
  height: 118px;
  margin: 0px 42.5px 0px 0px;
`;
const Group3 = styled.div`
  height: 153px;
  gap: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const Text5 = styled.div`
  width: 73px;
  height: 68px;
  color: #ffffff;
  font-size: 45px;
  font-weight: 600;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: -0.9px;
`;
const Text6 = styled.div`
  width: 113px;
  height: 24px;
  align-self: flex-start;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: -0.32px;
`;
const Ellipse = styled.img`
  width: 250px;
  height: 250px;
  left: 920px;
  top: 200px;
  position: absolute;
`;
const Ellipse1 = styled.img`
  width: 150;
  height: 150px;
  left: 620px;
  top: 340px;
  position: absolute;
`;
const Group = styled.div`
  width: 971px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;
const Ellipse2 = styled.div`
  width: 105px;
  height: 105px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0px 105px 130px 0px;
  padding: 27px 33.3px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/bdETLsxbJ1JWj7w42FpK.svg");
`;
const Image3 = styled.img`
  width: 17px;
  height: 18.8px;
  left: 63.3px;
  top: 31px;
  position: absolute;
`;
const Image4 = styled.img`
  width: 28.4px;
  height: 23px;
  left: 57.6px;
  top: 47.9px;
  position: absolute;
`;
const Image5 = styled.img`
  width: 17.5px;
  height: 18.8px;
  left: 21.6px;
  top: 32.1px;
  position: absolute;
`;
const Image6 = styled.img`
  width: 28.5px;
  height: 22.3px;
  left: 16px;
  top: 48.5px;
  position: absolute;
`;
const Image7 = styled.img`
  width: 21.6px;
  height: 22.9px;
  left: 40.5px;
  top: 28px;
  position: absolute;
`;
const Image8 = styled.img`
  width: 35.4px;
  height: 26.9px;
  position: relative;
`;
const Ellipse3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 92px 128px 0px;
  padding: 26px 24px 23px 24px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/Iv7LLEb8r9czEyqcIMT4.svg");
`;
const Gallery = styled.img`
  width: 54px;
  height: 53px;
`;
const Ellipse4 = styled.div`
  height: 110px;
  margin: 0px 17px 120px 0px;
  padding: 14px 17.6px;
  background-repeat: no-repeat;
  background-image: url("https://file.rendit.io/n/Iv7LLEb8r9czEyqcIMT4.svg");
`;
const Image11 = styled.img`
  width: 67.4px;
  height: 71.3px;
`;
const Image12 = styled.img`
  width: 440px;
  height: 440px;
  border-radius: 50px;
  padding-left: 20px;
`;
