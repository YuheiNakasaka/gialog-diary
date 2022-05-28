import Head from "next/head";

export default function CommonHead({
  title = "YuheiNakasaka's Diary",
  description = "YuheiNakasakaの日記です。",
  image = "https://yuheinakasaka.github.io/gialog-diary/ogp-global.png",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
}
