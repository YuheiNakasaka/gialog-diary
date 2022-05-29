import type { NextPage } from "next";
import Link from "next/link";
import { listIssues } from "../lib/issue";
import Time from "../components/Time";
import CommonHead from "../components/CommonHead";
import { writeFileSync } from "fs";
import { generateFeed } from "../lib/feed";

type Props = {
  issues: Array<Issue>;
};

type Issue = any;

const Home: NextPage<Props> = ({ issues }) => {
  return (
    <>
      <CommonHead />
      <section>
        <p>
          <a href="https://razokulover.com/" target={"_blank"} rel="noreferrer">
            YuheiNakasaka
          </a>
          の日記です。
        </p>
        <ol>
          {issues.map((issue) => (
            <li key={issue.number}>
              <Time dateTime={issue.created_at} />
              <Link href={`/articles/${issue.number}`}>{issue.title}</Link>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  if (process.env.ON_NEXT_BUILD) {
    writeFileSync("public/feed.xml", await generateFeed());
  }

  return {
    props: {
      issues: await listIssues(),
    },
  };
}
