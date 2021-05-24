import { useContext } from "react";

import { Card } from "../components/card";
import { SEO } from "../components/seo";
import { getLogTitle } from "../utils/get-log-title";
import { LogsData } from "../utils/logs-context";

const Home: React.FC = () => {
  const logs = useContext(LogsData);

  return (
    <>
      <SEO />
      {logs.length > 0 ? (
        logs.map((item) => (
          <Card
            key={item.Title ? item.Title : getLogTitle(item.id)}
            id={item.id}
            title={`${getLogTitle(item.id)} ${item.Title ? item.Title : ""}`}
            content={item.Content}
            datetime={item.created_at}
          />
        ))
      ) : (
        <div>no logs</div>
      )}
    </>
  );
};

export default Home;
