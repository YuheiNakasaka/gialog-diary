const ogpImage = (body: string) => {
  const defaultImage = `${
    import.meta.env.VITE_GIALOG_PUBLIC_STATIC_URL
  }/ogp-global.png`;
  const image = body.match(/\((http[s]*.+\.(?:png|jpg|jpeg|gif))?\)/i);
  return image ? image[1] : defaultImage;
};

export default function CommonHead({
  title = import.meta.env.VITE_BLOG_TITLE,
  description = "日記",
  body = "",
  url = import.meta.env.VITE_GIALOG_PUBLIC_STATIC_URL,
}) {
  const image = ogpImage(body);
  const isCustomOgp = !image.match(/ogp-global\.png$/);
  const isHome = title == import.meta.env.VITE_BLOG_TITLE;
  return (
    <head>
      <title>{title}</title>
      <meta property="description" content={isHome ? description : title} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={isHome ? "website" : "article"} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={isHome ? description : title} />
      <meta property="og:image" content={image} />
      <meta
        name="twitter:card"
        content={isCustomOgp ? "summary_large_image" : "summary"}
      />
    </head>
  );
}
