import type { NextPage } from "next";
import Link from "next/link";
import {
  getIssue,
  listIssues,
  listIssueComments,
  type Issue,
  type IssueComment,
} from "../../lib/issue";
import Time from "../../components/Time";
import CommonHead from "../../components/CommonHead";
import TweetButton from "../../components/TweetButton";
import { css } from "@emotion/css";
import HatenaButton from "../../components/HatenaButton";

type Props = {
  issue: Issue;
  issueComments: Array<IssueComment>;
  pickupArticles: Array<Issue>;
};

const ShowArticle: NextPage<Props> = ({
  issue,
  issueComments,
  pickupArticles,
}) => {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_STATIC_URL}/articles/${issue.number}`;
  return (
    <article>
      <CommonHead title={issue.title} body={issue.body} url={canonicalUrl} />
      <section>
        <header>
          <Time dateTime={issue.created_at} />
          <h1 className="article-title">{issue.title}</h1>
        </header>
        <aside>
          <p>
            Posted by&nbsp;
            <Link href={issue.user.html_url}>{issue.user.login}</Link>
            &nbsp;at&nbsp;
            <Link href={issue.html_url}>{`#${issue.number}`}</Link>.
          </p>
        </aside>
        <div dangerouslySetInnerHTML={{ __html: issue.bodyHTML }}></div>
      </section>
      {issueComments.map((issueComment) => (
        <article key={issueComment.id}>
          <section>
            <header>
              <Time dateTime={issueComment.created_at} />
            </header>
            <div
              dangerouslySetInnerHTML={{ __html: issueComment.bodyHTML }}
            ></div>
          </section>
        </article>
      ))}
      <section
        className={css`
          text-align: center;
        `}
      >
        <TweetButton
          text={`${issue.title} - ${process.env.BLOG_TITLE}`}
          url={canonicalUrl}
        />
        <div
          className={css`
            display: inline-block;
            margin-right: 1em;
          `}
        ></div>
        <HatenaButton
          text={`${issue.title} - ${process.env.BLOG_TITLE}`}
          url={canonicalUrl}
        />
      </section>
      <section
        className={css`
          text-align: center;
        `}
      >
        <p
          className={css`
            margin-top: 0;
            font-weight: bold;
          `}
        >
          おすすめ
        </p>
        <ol>
          {pickupArticles.map((pickupArticle) => (
            <li key={pickupArticle.number}>
              <Time dateTime={pickupArticle.created_at} />
              <Link href={`/articles/${pickupArticle.number}`}>
                {pickupArticle.title}
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
};

export default ShowArticle;

export async function getStaticPaths() {
  const issues = await listIssues();
  const paths = issues.map((issue: any) => {
    return {
      params: {
        issueNumber: issue.number.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const issueNumber = parseInt(params.issueNumber, 10);
  const issue = await getIssue({ issueNumber });
  const issueComments = await listIssueComments({ issueNumber });
  const issues = await listIssues();
  const issuesWithoutThis = issues.filter((o) => o.number !== issueNumber);
  const pickupArticles = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * issuesWithoutThis.length);
    pickupArticles.push(issuesWithoutThis[randomIndex]);
    issuesWithoutThis.splice(randomIndex, 1);
  }
  return {
    props: {
      issue,
      issueComments,
      pickupArticles,
    },
  };
}
