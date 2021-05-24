import { Box } from "@chakra-ui/react";

export const Text: React.FC = ({ children }) => {
  return (
    <Box textStyle="text" py="3">
      {children}
    </Box>
  );
};
