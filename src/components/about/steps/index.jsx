import React from "react";
import styled from "styled-components";
import BgImage from 'assets/images/home/bg1.png';

export const Steps = () => {
  return (
    <div className='flex w-full items-center justify-center' style={{
      backgroundImage: `url(${BgImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
      backgroundColor: '#2b032a',
    }}>
      <FrameRootRootRoot>
        <Group23>
          <Group>
            {[1, 2, 3, 4].map(() => {
              return (
                <Group1>
                  <BlackFlexColumn>
                    <Text2>Step 1</Text2>
                  </BlackFlexColumn>
                  <FlexRow1>
                    <Group4>
                      <Image1
                        src={`https://file.rendit.io/n/hO6iBkwhtvAcdvsCPNvO.svg`}
                      />
                      <Image2
                        src={`https://file.rendit.io/n/ruHGb7HBauL4E33ZDAov.svg`}
                      />
                      <Image3
                        src={`https://file.rendit.io/n/oulRPRM6pbcHAR9Cr7dJ.svg`}
                      />
                      <Group6>
                        <Image4
                          src={`https://file.rendit.io/n/glMFg9q2Th7tGZPCQarb.svg`}
                        />
                        <Image5
                          src={`https://file.rendit.io/n/jVWZBZzNZpgEBmDHcxJv.svg`}
                        />
                        <Image6
                          src={`https://file.rendit.io/n/suGDJyf0otMCGquKWki5.svg`}
                        />
                      </Group6>
                      <Group7>
                        <Image7
                          src={`https://file.rendit.io/n/hiPgPNYxfyuYzrT9EBaZ.svg`}
                        />
                        <Image6
                          src={`https://file.rendit.io/n/rJ9mvQDq7EZ8KN2OhnxQ.svg`}
                        />
                      </Group7>
                    </Group4>
                    <Image9
                      src={`https://file.rendit.io/n/tTA1lebkDgQDURyVftNp.svg`}
                    />
                    <Group5>
                      <Text1>Connect your wallet</Text1>
                      <Paragraph>
                        Suspendisse tristique neque a lorem placerat pharetra. <br />
                        Class aptent taciti sociosqu ad litora torquent per conubia{" "}
                        <br />
                        nostra, per inceptos himenaeos
                      </Paragraph>
                    </Group5>
                  </FlexRow1>
                </Group1>
              )
            })}
          </Group>
          <Image42 src={`https://file.rendit.io/n/8tZOLvnTp3N4TfEGyThC.png`} />
        </Group23>
      </FrameRootRootRoot>
    </div>
  );
};

const Image6 = styled.img`
  width: 10.9px;
  height: 19.4px;
  position: relative;
`;
const Image9 = styled.img`
  width: 2px;
  align-self: flex-end;
  margin: 0px 27px 0px 0px;
  @media (max-width: 500px) {
    display: none;
  }

`;
const Group5 = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
  }

`;
const Paragraph = styled.div`
  width: 100%;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  white-space: wrap;
  text-align: center;
`;
const FrameRootRootRoot = styled.div`
  backgroundImage: url(${BgImage}),
  background-color: #2b032a;
`;
const Group23 = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Group1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 25px;
  border-radius: 13px;
  margin-bottom: 20px;
  background-image: linear-gradient(
    1deg,
    rgba(6, 2, 26, 0.56) 11%,
    rgba(184, 86, 254, 0.53) 129%
  );
`;
const Group4 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 39.3px 0px 0px;
  padding: 38px 0px 55px 10.9px;
`;
const Image1 = styled.img`
  width: 21.7px;
  height: 10.3px;
  left: 0px;
  top: 57.4px;
  position: absolute;
`;
const Image2 = styled.img`
  width: 10.9px;
  height: 19.4px;
  left: 10.9px;
  top: 62.6px;
  position: absolute;
`;
const Image3 = styled.img`
  width: 21.7px;
  height: 10.3px;
  left: 21.7px;
  top: 57.4px;
  position: absolute;
`;
const Group6 = styled.div`
  width: 10.9px;
  height: 24.6px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 10.9px;
`;
const Image4 = styled.img`
  width: 21.7px;
  height: 10.3px;
  left: 0px;
  top: 0px;
  position: absolute;
`;
const Image5 = styled.img`
  width: 13.6px;
  height: 19.4px;
  left: 0px;
  top: 5.16px;
  position: absolute;
`;
const Group7 = styled.div`
  width: 10.9px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 0px 0px 21.7px;
`;
const Image7 = styled.img`
  width: 13.6px;
  height: 19.4px;
  left: 10.9px;
  top: 0px;
  position: absolute;
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  font-family: Poppins;
  text-align: center;
`;
const BlackFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px 26px 6px 27px;
  border-width: 1px;
  border-radius: 24px;
  border-style: solid;
  border-color: #ffffff;
  background-color: rgba(19, 3, 32, 0.76);
`;
const Text2 = styled.div`
  width: 45px;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: -0.32px;
`;
const Image42 = styled.img`
  align-self: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;