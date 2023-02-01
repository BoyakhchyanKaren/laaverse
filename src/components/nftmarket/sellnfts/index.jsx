import React from "react";
import styled from "styled-components";

export const SellNfts = () => {
  return (
    <RectangleRootRootRoot>
      <Text1>Create And Sell your NFTS</Text1>
      <Group4>
        <Group>
          <BlackFlexColumn>
            <Text2>Step - 01</Text2>
            <Text3>Create And Sell</Text3>
            <Paragraph>
              Wallet that is functional for
              <br />
              NFT purchasing. You have <br />
              Coinbase account at this point.
            </Paragraph>
          </BlackFlexColumn>
          <Nfts src={`https://file.rendit.io/n/nep9DurllDEV30Indo72.png`} />
        </Group>
        <Group>
          <BlackFlexColumn>
            <Text4>Step - 02</Text4>
            <Text5>Create Collection</Text5>
            <Paragraph>
              Wallet that is functional for
              <br />
              NFT purchasing. You have <br />
              Coinbase account at this point.
            </Paragraph>
          </BlackFlexColumn>
          <Nfts src={`https://file.rendit.io/n/ODiyPVtM60lXTdYWKpyc.png`} />
        </Group>
        <Group>
          <BlackFlexColumn2>
            <Text4>Step - 03</Text4>
            <Text7>Add Your NFTs</Text7>
            <Paragraph>
              Wallet that is functional for
              <br />
              NFT purchasing. You have <br />
              Coinbase account at this point.
            </Paragraph>
          </BlackFlexColumn2>
          <Nfts src={`https://file.rendit.io/n/ub8vsLdWoTdJWru4C7kW.png`} />
        </Group>
        <Group>
          <BlackFlexColumn2>
            <Text8>Step - 04</Text8>
            <Text9>List Them For Sale</Text9>
            <Paragraph>
              Wallet that is functional for
              <br />
              NFT purchasing. You have <br />
              Coinbase account at this point.
            </Paragraph>
          </BlackFlexColumn2>
          <Nfts src={`https://file.rendit.io/n/ENglcIF9kt6sdB6dKvky.png`} />
        </Group>
      </Group4>
    </RectangleRootRootRoot>
  );
};

const BlackFlexColumn = styled.div`
  height: 189px;
  left: 0px;
  top: 36px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13px 36px 13px 17px;
  border-radius: 11px;
  background-color: #1d1933;
  box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.1);
`;
const Paragraph = styled.div`
  width: 25%;
  height: 72px;
  color: #ffffff;
  font-size: 16px;
  font-family: Poppins;
  white-space: nowrap;
`;
const Text4 = styled.div`
  width: 73px;
  height: 24px;
  margin: 0px 0px 13px 0px;
  color: #c097dd;
  font-size: 16px;
  font-family: Poppins;
  white-space: nowrap;
`;
const BlackFlexColumn2 = styled.div`
  height: 189px;
  left: 0px;
  top: 36px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13px 36px 13px 17px;
  border-radius: 11px;
  background-color: #1d1933;
  box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.1);
`;
const RectangleRootRootRoot = styled.div`
  padding: 50px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #0f0540;
  overflow: hidden;
`;
const Text1 = styled.div`
  height: 39px;
  color: #ffffff;
  font-size: 26px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
`;
const Group4 = styled.div`
  gap: 150px;
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  } 

  @media (max-width: 1024px) {
    flex-direction: column;
    flex-wrap: wrap;
    gap: 40px;
    width: 300px;
  } 
`;
const Group = styled.div`
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1px 13px 1px 211px;
`;
const Text2 = styled.div`
  width: 69px;
  height: 24px;
  margin: 0px 0px 13px 0px;
  color: #c097dd;
  font-size: 16px;
  font-family: Poppins;
  white-space: nowrap;
`;
const Text3 = styled.div`
  width: 157px;
  height: 30px;
  margin: 0px 0px 19px 0px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
`;
const Nfts = styled.img`
  width: 79px;
  height: 73px;
  position: absolute;
  top: 0; 
  right: 0;
  margin-left: 60px;
`;
const Text5 = styled.div`
  width: 179px;
  height: 30px;
  margin: 0px 0px 18px 0px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
`;
const Text7 = styled.div`
  width: 148px;
  height: 30px;
  margin: 0px 0px 19px 0px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
`;
const Text8 = styled.div`
  width: 74px;
  height: 24px;
  margin: 0px 0px 13px 0px;
  color: #c097dd;
  font-size: 16px;
  font-family: Poppins;
  white-space: nowrap;
`;
const Text9 = styled.div`
  width: 183px;
  height: 30px;
  margin: 0px 0px 19px 0px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
`;