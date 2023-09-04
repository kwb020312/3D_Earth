import { styled } from "styled-components";

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex
    flex-direction: column;
    align-items: center;
    padding-top: 13%;
    z-index: 99;
    justify-contents: center;
    `;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 80px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  text-align: center;
`;

const DonateButton = styled.button`
  outline: none;
  border: none;
  background-color: #27b927;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #27b927;
  }
`;

const Topsection = () => {
  return (
    <TopSectionContainer>
      <Logo>지구온난화</Logo>
      <Slogan>지구를 지키기위해 도움이 필요합니다.</Slogan>
      <Paragraph>
        당신이 오늘 절약한 에너지가 미래에 가장 큰 도움이 될 것 입니다.
      </Paragraph>
      <DonateButton>후원하기</DonateButton>
    </TopSectionContainer>
  );
};

export default Topsection;
