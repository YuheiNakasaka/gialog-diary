import { Style } from "hono/css";
import type { FC } from "hono/jsx";
import { globalCss } from "../styles/global";

const siteTitle = "YuheiNakasaka's Diary";

const Layout: FC = (props) => {
  const { children } = props;
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
    <>
      <html class={globalCss}>
        <head>
          <title>{siteTitle}</title>
          <link
            rel="icon"
            href={`${
              import.meta.env.VITE_GIALOG_PUBLIC_STATIC_URL
            }/favicon.ico`}
          />
          <link
            rel="alternate"
            type="application/rss+xml"
            href={`${import.meta.env.VITE_GIALOG_PUBLIC_STATIC_URL}/feed.xml`}
          />
          <Style />
          {gaTags}
        </head>
        <body>
          <header>
            <nav>
              <p>
                <a href={import.meta.env.VITE_GIALOG_BASE_URL}>{siteTitle}</a>
              </p>
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            <nav>
              <ul>
                <li>
                  <a href={`${import.meta.env.VITE_GIALOG_BASE_URL}/`}>Home</a>
                </li>
                <li>
                  <a href="https://razokulover.com/">About</a>
                </li>
                <li>
                  <a href="https://www.google.com/search?q=site:yuheinakasaka.github.io">
                    Search
                  </a>
                </li>
                <li>
                  <a href={`${import.meta.env.VITE_GIALOG_BASE_URL}/feed.xml`}>
                    RSS
                  </a>
                </li>
              </ul>
            </nav>
          </footer>
        </body>
      </html>
    </>
  );
};

export default Layout;
