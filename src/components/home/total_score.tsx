import { Box, Flex } from "@chakra-ui/react";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import {
  BallsPocketedLeftState,
  BallsPocketedRightState,
  ScoreLeftState,
  ScoreRightState,
} from "../../global/globalState";

export const TotalScore = () => {
  const scoreLeft = useRecoilValue(ScoreLeftState);
  const scoreRight = useRecoilValue(ScoreRightState);
  const BallspocketedLeft = useRecoilValue(BallsPocketedLeftState);
  const BallspocketedRight = useRecoilValue(BallsPocketedRightState);

  /** TotalScore  */
  const TotalScore = useMemo((): number => {
    const left9 = scoreLeft * 9;
    const right9 = scoreRight * 9;
    return left9 + right9;
  }, [scoreLeft, scoreRight]);

  /** BallsValue */
  const BallsValue = useMemo((): number => {
    return TotalScore - BallspocketedLeft - BallspocketedRight;
  }, [TotalScore, BallspocketedLeft, BallspocketedRight]);

  return (
    <>
      <Flex justifyContent="center" mb={0.5}>
        <Box
          textAlign="center"
          w={{ base: "60px", md: "80px" }}
          border="1px"
          borderColor="gray.400"
        />
        <Box
          textAlign="center"
          w={{ base: "60px", md: "80px" }}
          borderY="1px"
          borderColor="gray.400"
          pt="20px"
        >
          {BallsValue}
        </Box>
        <Box
          textAlign="center"
          fontWeight="medium"
          w={"150px"}
          h="65px"
          bg="cyan"
          border="1px"
          borderColor="gray.400"
          pt="20px"
        >
          {TotalScore}
        </Box>
        <Box
          textAlign="center"
          w={{ base: "60px", md: "80px" }}
          borderY="1px"
          borderColor="gray.400"
          pt="20px"
        >
          {BallsValue}
        </Box>
        <Box
          textAlign="center"
          w={{ base: "60px", md: "80px" }}
          border="1px"
          borderColor="gray.400"
        />
      </Flex>
    </>
  );
};
