import { Flex, Input } from "@chakra-ui/react";
import { EBox, EMiddleBox } from "./common/widgets";

export const PlayerName = () => {
  return (
    <Flex justifyContent="center" mb="1">
      <Input placeholder="Name" w="175px" h="65px" bg="white" />
      <EBox isTop>First breaks</EBox>
      <EMiddleBox>Players</EMiddleBox>
      <EBox isTop isRight={true}>
        Odd breaks
      </EBox>
      <Input placeholder="Name" w="175px" h="65px" bg="white" />
    </Flex>
  );
};
