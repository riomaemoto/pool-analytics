import { Button, Center } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const ECenter = styled(Center)`
  background-color: rgba(211, 274, 80, 0.2);
  @media (max-width: 500px) {
    background-color: white;
  }
`;

export const InputBox = styled.input`
  border: 0.5px solid;
  height: 65px;
  width: 177px;
`;

export const SizedButton = styled(Button)`
  width: 80px;
  height: 65px;

  @media (max-width: 500px) {
    width: 60px;
    height: 65px;
    border: 1px solid;
  }
`;

export const EContainer = styled.div`
  padding: 40px;
  @media (max-width: 500px) {
    margin-left: 310px;
    padding: 80px 40px 40px 0px;
  }
`;

export const ETextBox = styled.div`
  background-color: rgba(11, 434, 332);
  text-align: center;
  display: flex;
  border: 0.5px solid;
  height: 65px;
`;
export const ETextline = styled.div`
  text-align: center;
  font-weight: 600;
  width: 240px;
  @media (max-width: 500px) {
    height: 40px;
    align-items: center;
    text-align: center;
    width: 120px;
    padding-top: 12px;
  }
`;
export const ENumber = styled.div`
  text-align: center;
  width: 80px;
  border: 0.5px solid;
  box-sizing: border-box;
  padding: 5px;
  @media (max-width: 500px) {
    padding: 2.5px;
    width: 60px;
    padding-top: 8px;
    height: 65px;
  }
`;
export const EFlex = styled.div`
  display: flex;
  margin: 1px;
  @media (max-width: 500px) {
  }
`;

export const EFlex2 = styled.div`
  display: flex;
  margin: 1px;
  margin-left: 161px;
  @media (max-width: 500px) {
    margin-left: 121px;
  }
`;
export const TopFlex = styled.div`
  display: flex;
  margin-left: 64px;
  @media (max-width: 500px) {
    height: 68px;
    margin-left: 4px;
  }
`;

export const EFlex3 = styled.div`
  display: flex;
  margin: 1px;
  margin-left: 161px;
  @media (max-width: 500px) {
    margin-left: 121px;
  }
`;

export const EFlexBottom = styled.div`
  display: flex;
  margin: 1px;
  margin-left: 161px;
  @media (max-width: 500px) {
    margin-left: 121px;
    height: 60px;
  }
`;
