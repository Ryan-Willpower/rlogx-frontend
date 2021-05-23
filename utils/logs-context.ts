import { createContext } from "react";

import type { Log } from "../types/log";

export const LogsData = createContext([] as Log[]);

export const LogsDataProvider = LogsData.Provider;
