import React from "react";
import styled from "styled-components";
import NFTBackground from 'assets/images/about/nftBackground.png';
import FirstLayer from 'assets/images/about/firstLayer.png';
import GirlBackground from 'assets/images/about/girlBackground.png';
import LeftTop from 'assets/images/about/nftCollectionLeftTop.png';
import LeftBottom from 'assets/images/about/leftbottom.png';
import RightTop from 'assets/images/about/rightTop.png';
import RightBottom from 'assets/images/about/rightBottom.png';
import Kalco from 'assets/images/about/kaylco.png';
import Arev from 'assets/images/about/arev.png';
import Ket from 'assets/images/about/ket.png'
import './style.css';
import { Animate } from "components/global/animation";

export const NftCollection = () => {
  return (
    <RectangleRootRootRoot>
      <Group4>
        <div className='w-full md:h-[90vh] h-[55vh] flex items-center justify-center' style={{
          backgroundImage: `url(${NFTBackground})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}>
          <img src={FirstLayer} alt="Land" className='lg:w-[30%] w-full' style={{
            position: 'absolute',
            top: '10%',
          }} />
          <img src={GirlBackground} alt="Land" className='lg:w-[30%] w-full' style={{
            position: 'absolute',
            top: '25%',
            right: '38%'
          }} />
          <img src={LeftTop} alt="Land" className='lg:w-[10%] w-full left-top child-image' style={{
            position: 'absolute',
            top: '13%',
            left: '20%'
          }} />
          <img src={LeftBottom} alt="Land" className='lg:w-[8%] w-full left-bottom child-image' style={{
            position: 'absolute',
            top: '70%',
            left: '20%'
          }} />
          <img src={Arev} alt="Land" className='lg:w-[12%] w-full child-image' style={{
            position: 'absolute',
            top: '2%',
            right: '22%'
          }} />
          <img src={RightTop} alt="Land" className='lg:w-[12%] w-full right-top child-image' style={{
            position: 'absolute',
            top: '12%',
            right: '18%'
          }} />
          <img src={RightBottom} alt="Land" className='lg:w-[10%] w-full right-bottom child-image' style={{
            position: 'absolute',
            top: '65%',
            right: '24%'
          }} />
          <img src={Kalco} alt="Land" className='lg:w-[7%] w-full child-image' style={{
            position: 'absolute',
            top: '75%',
            right: '30%'
          }} />


          <img src={Ket} alt="Land" className='lg:w-[1%] w-full child-image' style={{
            position: 'absolute',
            top: '50%',
            left: '20%'
          }} />
          <img src={Ket} alt="Land" className='lg:w-[1%] w-full child-image' style={{
            position: 'absolute',
            top: '10%',
            left: '31%'
          }} />
          <img src={Ket} alt="Land" className='lg:w-[1%] w-full child-image' style={{
            position: 'absolute',
            top: '40%',
            right: '15%'
          }} />
          <img src={Ket} alt="Land" className='lg:w-[1%] w-full child-image' style={{
            position: 'absolute',
            top: '75%',
            right: '22%'
          }} />

        </div>
      </Group4>
      <Group5>
        <Animate.FadeUp>
          <Paragraph>
            Laaverse will allow users to purchase virtual land or properties using
            NFTs.
          </Paragraph>
        </Animate.FadeUp>
        <Animate.FadeUp>
          <Paragraph1>
            In Laaverse, users who own virtual land will be able to develop and
            customise their properties as they see fit. <br />
            This could include building virtual homes or businesses, or even
            creating unique landscapes.
          </Paragraph1>
        </Animate.FadeUp>
        <Animate.FadeUp>

          <PurpleMountainsMajestyFlexColumn>
            <FlexColumn5>
              <Text1 >More About US</Text1>
            </FlexColumn5>
          </PurpleMountainsMajestyFlexColumn>
        </Animate.FadeUp>

      </Group5>
    </RectangleRootRootRoot>
  );
};

const RectangleRootRootRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(270deg, #b974ea -98%, #06021a 117%);
  padding-bottom: 50px;
`;
const Group4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 100px;
  @media (max-width: 1024px) {
    padding: 40px;
  }
  @media (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 500px) {
    padding: 10px;
  }
`;
const Group5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    margin-top: 140px;
  }
`;
const Paragraph = styled.div`
  margin: 0px 0px 15px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  letter-spacing: -0.32px;
`;
const Paragraph1 = styled.div`
  margin: 0px 0px 15px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  letter-spacing: -0.32px;
`;
const PurpleMountainsMajestyFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 7px 5px 7px 6px;
  border-width: 1px;
  border-radius: 6px;
  border-style: solid;
  border-color: #ffffff;
  background-color: rgba(160, 134, 172, 0.57);
`;
const FlexColumn5 = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13px 20px 12px 21px;
  border-radius: 8px;
  background-image: linear-gradient(90deg, #8404e2 -7%, #610b90 143%);
  box-shadow: 0px 2px 4px 0px rgba(84, 23, 113, 0.6);
`;
const Text1 = styled.div`
  width: 115px;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: -0.32px;
`;
