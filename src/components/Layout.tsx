import type { FC } from "hono/jsx";
import { globalCss } from "../styles/global";
import CommonHead from "./CommonHead";

const Layout: FC = (props) => {
  const { children } = props;
  return (
    <>
      <html class={globalCss}>
        <CommonHead />
        <body>
          <header>
            <nav>
              <p>
                <a href={import.meta.env.VITE_GIALOG_BASE_URL}>
                  {import.meta.env.VITE_BLOG_TITLE}
                </a>
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
