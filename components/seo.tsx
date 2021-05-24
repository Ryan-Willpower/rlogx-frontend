import Head from "next/head";

import type { SEOProps } from "../types/seo";

export const SEO: React.FC<SEOProps> = ({ title }) => {
  return (
    <Head>
      <title>r log x {title ? `| ${title}` : ""}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};
