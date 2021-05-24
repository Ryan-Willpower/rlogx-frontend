import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Error from "next/error";
import { Box, UnorderedList, ListItem } from "@chakra-ui/layout";
import Markdown from "react-markdown";

import type { Log } from "../../types/log";
import { LogsData } from "../../utils/logs-context";
import { getLogTitle } from "../../utils/get-log-title";
import { Text } from "../../components/text";
import { Blockquote } from "../../components/blockquote";

export default function LogPage() {
  const router = useRouter();

  const data = useContext(LogsData);

  const [log, setLog] = useState<Log>();
  const [isNotFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const logData = data.find((item) => item.id === router.query.id);

    if (logData) {
      setLog(logData);
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  });

  if (isNotFound || !log) {
    return <Error statusCode={404} />;
  }

  return (
    <Box w="100%" mt="5">
      <Box textStyle="title" my="4">
        {getLogTitle(log.id)} {log.Title ? log.Title : ""}
      </Box>
      <Box textStyle="text" my="4">
        {new Date(log.created_at).toLocaleDateString()}
      </Box>
      <Box textStyle="text">
        <Markdown
          components={{
            p: ({ node, ...props }) => <Text {...props} />,
            blockquote: ({ node, ...props }) => <Blockquote {...props} />,
            ul: ({ node, ...props }) => <UnorderedList {...props} />,
            li: ({ node, ...props }) => <ListItem {...props} />,
          }}
        >
          {log.Content}
        </Markdown>
      </Box>
    </Box>
  );
}
