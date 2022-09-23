import { WrapItem } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  LongestGameWinningStreakLeftState,
  LongestGameWinningStreakRightState,
} from "../../global/globalState";
import {
  EFlex,
  ENumber,
  ETextBox,
  ETextline,
  SizedButton,
} from "../common/styles";

export const LongestGameWinningStreak = () => {
  // getter
  const left = useRecoilValue(LongestGameWinningStreakLeftState);
  const right = useRecoilValue(LongestGameWinningStreakRightState);
  // setter
  const setLeft = useSetRecoilState(LongestGameWinningStreakLeftState);
  const setRight = useSetRecoilState(LongestGameWinningStreakRightState);

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
        <ETextline>Longest Game Winning Streak</ETextline>
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
