import { Flex } from "@chakra-ui/react";

import { Header } from "./header";

export const Layout: React.FC = ({ children }) => {
  return (
    <Flex justifyContent="center" my="30">
      <Header />

      <Flex w={[300, 400, 600]} flexFlow="column" alignItems="center" mt="90px">
        {children}
      </Flex>
    </Flex>
  );
};
