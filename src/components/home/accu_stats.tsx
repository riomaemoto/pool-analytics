import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { AccuStatsState } from "../../global/globalState";

export const AccuStats = () => {
  const accustatsValue = useRecoilValue(AccuStatsState);

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
          {accustatsValue.left || 0}
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
          {"ACCU-STATS"}
        </Box>
        <Box
          textAlign="center"
          w={{ base: "60px", md: "80px" }}
          borderY="1px"
          borderColor="gray.400"
          pt="20px"
        >
          {accustatsValue.right || 0}
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
