export interface Log {
  id: string;
  created_at: string;
  Title: string | null;
  Content: string;
}

export interface AllLogsResponse {
  logs: Log[];
}
