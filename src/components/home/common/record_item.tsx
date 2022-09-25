import { Button, Flex } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import { RecoilState, useRecoilState, useRecoilValue } from "recoil";
import {
  TotalBreaksLeftState,
  TotalBreaksRightState,
} from "../../../global/globalState";
import { EBox, EMiddleBox } from "./widgets";

type Props = {
  title: string;
  leftState: RecoilState<number>;
  rightState: RecoilState<number>;
  hasPercent?: boolean;
};

export const RecordItem: FC<Props> = ({
  title,
  leftState,
  rightState,
  hasPercent = false,
}) => {
  const [left, setLeft] = useRecoilState(leftState);
  const [right, setRight] = useRecoilState(rightState);
  const totalLeft = useRecoilValue(TotalBreaksLeftState);
  const totalRight = useRecoilValue(TotalBreaksRightState);

  const percentLeft = useMemo(() => {
    const output = Math.round((left / totalLeft) * 100) || 0;
    const retVal = hasPercent ? output + "%" : "";
    return retVal;
  }, [left, totalLeft, hasPercent]);

  const percentRight = useMemo(() => {
    const output = Math.round((right / totalRight) * 100) || 0;
    const retVal = hasPercent ? output + "%" : "";
    return retVal;
  }, [hasPercent, right, totalRight]);
  return (
    <>
      <Flex justify={"center"} mb={1}>
        <Button
          onClick={() => setLeft(left - 1)}
          w={{ base: "60px", md: "80px" }}
          h="65px"
          colorScheme="red"
        >
          -1
        </Button>

        <Button
          onClick={() => setLeft(left + 1)}
          w={{ base: "60px", md: "80px" }}
          h="65px"
          colorScheme="blue"
        >
          +1
        </Button>

        <EBox>{percentLeft}</EBox>
        <EBox>{left}</EBox>
        <EMiddleBox>{title}</EMiddleBox>
        <EBox>{right}</EBox>
        <EBox>{percentRight}</EBox>

        <Button
          onClick={() => setRight(right + 1)}
          w={{ base: "60px", md: "80px" }}
          h="65px"
          colorScheme="blue"
        >
          +1
        </Button>

        <Button
          onClick={() => setRight(right - 1)}
          w={{ base: "60px", md: "80px" }}
          h="65px"
          colorScheme="red"
        >
          -1
        </Button>
      </Flex>
    </>
  );
};
