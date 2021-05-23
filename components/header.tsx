import { Box } from "@chakra-ui/react";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <Box
      textStyle="header"
      mb="15"
      position="fixed"
      top="0"
      w="100%"
      background="white"
      textAlign="center"
      py="3"
    >
      <Link href="/">r log x</Link>
    </Box>
  );
};
