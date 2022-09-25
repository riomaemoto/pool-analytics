import { Box, Flex } from "@chakra-ui/react";

export const InGameStats = () => {
  return (
    <Flex justifyContent="center" mb={1}>
      <Box
        textAlign="center"
        w={{ base: "60px", md: "80px" }}
        border="1px"
        borderColor="gray.400"
        pt={1}
      />
      <Box
        textAlign="center"
        w={{ base: "60px", md: "80px" }}
        borderY="1px"
        borderColor="gray.400"
        pt={1}
      />
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
        In Game Stats
      </Box>
      <Box
        textAlign="center"
        w={{ base: "60px", md: "80px" }}
        borderY="1px"
        borderColor="gray.400"
        pt={1}
      />
      <Box
        textAlign="center"
        w={{ base: "60px", md: "80px" }}
        border="1px"
        borderColor="gray.400"
        pt={1}
      />
    </Flex>
  );
};
