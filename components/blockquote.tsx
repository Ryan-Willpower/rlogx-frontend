import { Box } from "@chakra-ui/react";

export const Blockquote: React.FC = ({ children }) => {
  return (
    <Box
      textStyle="blockquote"
      my="3"
      py="3"
      pl="5"
      borderLeft="10px solid #ccc"
    >
      {children}
    </Box>
  );
};
