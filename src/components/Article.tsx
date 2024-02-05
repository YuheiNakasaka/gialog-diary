import { type Issue, type IssueComment } from "../lib/issue";
import Time from "./Time";
import CommonHead from "./CommonHead";
import TweetButton from "./TweetButton";
import { css } from "hono/css";
import HatenaButton from "./HatenaButton";
import { FC } from "hono/jsx";

type Props = {
  issue: Issue;
  issueComments: Array<IssueComment>;
  pickupArticles: Array<Issue>;
};

const Article: FC<Props> = ({ issue, issueComments, pickupArticles }) => {
  const canonicalUrl = `${import.meta.env.VITE_GIALOG_BASE_URL}/articles/${
    issue.number
  }`;
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
            <a href="https://twitter.com/razokulover">{issue.user.login}</a>
            &nbsp;at&nbsp;
            <a href={issue.html_url}>{`#${issue.number}`}</a>.
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
          text={`${issue.title} - ${
            import.meta.env.VITE_BLOG_TITLE
          } @razokulover`}
          url={canonicalUrl}
        />
        <div
          className={css`
            display: inline-block;
            margin-right: 1em;
          `}
        ></div>
        <HatenaButton
          text={`${issue.title} - ${import.meta.env.VITE_BLOG_TITLE}`}
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
              <a
                href={`${import.meta.env.VITE_GIALOG_BASE_URL}/articles/${
                  pickupArticle.number
                }`}
              >
                {pickupArticle.title}
              </a>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
};

export default Article;
