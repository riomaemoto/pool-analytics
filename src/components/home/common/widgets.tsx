import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  isRight?: boolean;
  isTop?: boolean;
};

export const EBox: FC<Props> = ({
  children,
  isRight = false,
  isTop = false,
}) => {
  return (
    <Box
      textAlign={"center"}
      w={{ base: "60px", md: "80px" }}
      border={"1px"}
      borderRight={isRight ? "1px" : "0px"}
      borderColor={"gray.400"}
      pt={isTop ? 1 : "20px"}
    >
      {children}
    </Box>
  );
};

export const EMiddleBox: FC<Props> = ({ children }) => {
  return (
    <Box
      textAlign={"center"}
      w={"150px"}
      bg="cyan"
      border={"1px"}
      borderColor="gray.400"
      pt="20px"
      fontWeight={"medium"}
    >
      {children}
    </Box>
  );
};
