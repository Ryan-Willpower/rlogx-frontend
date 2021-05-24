import { Box } from "@chakra-ui/react";
import Link from "next/link";

import type { CardProps } from "../types/card";

export const Card: React.FC<CardProps> = ({ title, datetime, content, id }) => {
  return (
    <Link
      href={{
        pathname: "/log/[id]",
        query: { id },
      }}
    >
      <Box
        border="1px solid black"
        w="100%"
        borderRadius="default"
        p="5"
        my="15"
        _hover={{
          boxShadow: "dark-lg",
          cursor: "pointer",
        }}
      >
        <Box textStyle="title">{title}</Box>
        <Box
          textStyle="text"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {content}
        </Box>
        <Box>{new Date(datetime).toLocaleDateString()}</Box>
      </Box>
    </Link>
  );
};
