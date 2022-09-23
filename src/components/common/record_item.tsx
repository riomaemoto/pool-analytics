import { WrapItem } from "@chakra-ui/react";
import { FC } from "react";
import { RecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { EFlex, ENumber, ETextBox, ETextline, SizedButton } from "./styles";
import {
  totalBreaksLeftState,
  totalBreaksRightState,
} from "../../global/globalState";

type Props = {
  title: string;
  leftState: RecoilState<number>;
  rightState: RecoilState<number>;
  hasPercentage: boolean;
};

export const CommonItems: FC<Props> = ({
  title,
  leftState,
  rightState,
  hasPercentage,
}) => {
  const left = useRecoilValue(leftState);
  const right = useRecoilValue(rightState);

  const totalLeft = useRecoilValue(totalBreaksLeftState);
  const totalRight = useRecoilValue(totalBreaksRightState);

  const setLeft = useSetRecoilState(leftState);
  const setRight = useSetRecoilState(rightState);

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

  const PercentageLeft = Math.round((left / totalLeft) * 100) || 0;

  const PercentageRight = Math.round((right / totalRight) * 100) || 0;
  return (
    <>
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
        <ENumber>{hasPercentage && PercentageLeft + "%"}</ENumber>
        <ENumber>{left}</ENumber>
        <ETextBox>
          <ETextline>{title}</ETextline>
        </ETextBox>
        <ENumber>{right}</ENumber>
        <ENumber>{hasPercentage && PercentageRight + "%"}</ENumber>
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
    </>
  );
};
