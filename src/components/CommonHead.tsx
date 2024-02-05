import { Style } from "hono/css";

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
  const gaTags =
    import.meta.env.NODE_ENV === "production" ? (
      <>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F4H77GLMNH"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F4H77GLMNH');
            `,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9116662346824543"
          crossOrigin="anonymous"
        ></script>
      </>
    ) : null;
  return (
    <head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <head>
        <title>{import.meta.env.VITE_BLOG_TITLE}</title>
        <link
          rel="icon"
          href={`${import.meta.env.VITE_GIALOG_PUBLIC_STATIC_URL}/favicon.ico`}
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${import.meta.env.VITE_GIALOG_PUBLIC_STATIC_URL}/feed.xml`}
        />
        <Style />
        {gaTags}
      </head>
    </head>
  );
}
