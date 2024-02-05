import Time from "./Time";
import CommonHead from "./CommonHead";
import { FC } from "hono/jsx";

type Issue = any;

const Home: FC<{ issues: Issue[] }> = (props) => {
  const { issues } = props;
  return (
    <>
      <CommonHead />
      <section>
        <p>
          <a href="https://razokulover.com/" target={"_blank"} rel="noreferrer">
            YuheiNakasaka
          </a>
          の日記です。日常ネタメインで技術関連は少なめ。
        </p>
        <ol>
          {issues.map((issue) => (
            <li key={issue.number}>
              <Time dateTime={issue.created_at} />
              <a
                href={`${import.meta.env.VITE_GIALOG_BASE_URL}/articles/${
                  issue.number
                }`}
              >
                {issue.title}
              </a>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};

export default Home;
