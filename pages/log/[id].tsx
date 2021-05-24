import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Error from "next/error";
import { Box } from "@chakra-ui/layout";

import type { Log } from "../../types/log";
import { LogsData } from "../../utils/logs-context";
import { getLogTitle } from "../../utils/get-log-title";

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
      <Box textStyle="title" mb="2">
        {log.Title ? log.Title : getLogTitle(log.id)}
      </Box>
      <Box textStyle="text" mb="2">
        {new Date(log.created_at).toLocaleDateString()}
      </Box>
      <Box textStyle="text">{log.Content}</Box>
    </Box>
  );
}
