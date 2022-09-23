import { WrapItem } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  BallsPocketedLeftState,
  BallsPocketedRightState,
} from "../../global/globalState";
import {
  EFlex,
  ENumber,
  ETextBox,
  ETextline,
  SizedButton,
} from "../common/styles";

export const BallsPocketed = () => {
  // getter
  const left = useRecoilValue(BallsPocketedLeftState);
  const right = useRecoilValue(BallsPocketedRightState);
  // setter
  const setLeft = useSetRecoilState(BallsPocketedLeftState);
  const setRight = useSetRecoilState(BallsPocketedRightState);

  const incrementLeft = () => {
    setLeft(left + 1);
  };
  const decrementLeft = () => {
    setLeft(left - 1);
  };
  const incrementRight = () => {
    setRight(right + 1);
  };
  const decrementRight = () => {
    setRight(right - 1);
  };

  return (
    <EFlex>
      <WrapItem>
        <SizedButton onClick={decrementLeft} colorScheme="red">
          -1
        </SizedButton>
      </WrapItem>
      <WrapItem>
        <SizedButton onClick={incrementLeft} colorScheme="blue">
          +1
        </SizedButton>
      </WrapItem>
      <ENumber></ENumber>
      <ENumber>{left}</ENumber>
      <ETextBox>
        <ETextline>Balls Pocketed</ETextline>
      </ETextBox>
      <ENumber>{right}</ENumber>
      <ENumber></ENumber>
      <WrapItem>
        <SizedButton onClick={incrementRight} colorScheme="blue">
          +1
        </SizedButton>
      </WrapItem>
      <WrapItem>
        <SizedButton onClick={decrementRight} colorScheme="red">
          -1
        </SizedButton>
      </WrapItem>
    </EFlex>
  );
};
