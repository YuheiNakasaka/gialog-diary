import Head from "next/head";
import Link from "next/link";

const siteTitle = process.env.BLOG_TITLE;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_STATIC_URL}/favicon.ico`}
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${process.env.NEXT_PUBLIC_STATIC_URL}/feed.xml`}
        />
      </Head>
      <header>
        <nav>
          <p>
            <Link href="/">
              <a>{siteTitle}</a>
            </Link>
          </p>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.google.com/search?q=site:yuheinakasaka.github.io">
                <a>Search</a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
