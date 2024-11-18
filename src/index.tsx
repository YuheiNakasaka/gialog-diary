import { Hono } from "hono";
import { ssgParams } from "hono/ssg";
import { Issue, getIssue, listIssueComments, listIssues } from "./lib/issue";
import Home from "./components/Home";
import Layout from "./components/Layout";
import { generateFeed } from "./lib/feed";
import Article from "./components/Article";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono();

app.use("*", serveStatic({ root: "./static" }));

app.get("/", async (c) => {
  const issues = await listIssues();
  return c.render(
    <Layout>
      <Home issues={issues} />
    </Layout>
  );
});

app.get(
  "/articles/:id",
  ssgParams(async () => {
    const issues = await listIssues();
    return issues.map((issue: any) => {
      return {
        id: issue.number.toString(),
      };
    });
  }),
  async (c) => {
    const issueNumber = parseInt(c.req.param("id"), 10);
    if (Number.isNaN(issueNumber)) {
      return c.notFound();
    }

    const issue = (await getIssue({ issueNumber })) as Issue;
    if (!issue) {
      return c.notFound();
    }

    const issueComments = await listIssueComments({ issueNumber });
    const issues = await listIssues();
    const issuesWithoutThis = issues.filter(
      (o) => o.number !== issueNumber
    ) as Issue[];
    const pickupArticles = [] as Issue[];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * issuesWithoutThis.length);
      if (issuesWithoutThis[randomIndex]) {
        pickupArticles.push(issuesWithoutThis[randomIndex]);
        issuesWithoutThis.splice(randomIndex, 1);
      }
    }

    return c.render(
      <Layout>
        <Article
          issue={issue}
          issueComments={issueComments}
          pickupArticles={pickupArticles}
        />
      </Layout>
    );
  }
);

app.get("/feed", async (c) => {
  const feeds = await generateFeed();
  return c.text(feeds, 200, {
    "Content-Type": "text/xml",
  });
});

export default app;
