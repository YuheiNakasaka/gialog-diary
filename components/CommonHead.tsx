import Head from "next/head";

export default function CommonHead({
  title = "YuheiNakasaka's Diary",
  description = "日記",
  image = `${process.env.NEXT_PUBLIC_STATIC_URL}/ogp-global.png`,
}) {
  const isCustomOgp = !image.match(/ogp\-global\.png$/);
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta
        name="twitter:card"
        content={isCustomOgp ? "summary_large_image" : "summary"}
      />
    </Head>
  );
}
