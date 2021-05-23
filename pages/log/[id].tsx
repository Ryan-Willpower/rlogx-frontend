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

  // console.log(data.find((item) => item.id === router.query.id));

  const [log, setLog] = useState<Log>();
  const [isNotFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const logData = data.find((item) => item.id === router.query.id);

    console.log(logData);

    if (logData) {
      console.log("set data");
      setLog(logData);
    } else {
      setNotFound(true);
    }
  });

  if (!isNotFound || !log) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <Box textStyle="title">{log.Title ? log.Title : getLogTitle(log.id)}</Box>
      <Box textStyle="text">
        {new Date(log.created_at).toLocaleDateString()}
      </Box>
      <Box textStyle="text">{log.Content}</Box>
    </>
  );
}
