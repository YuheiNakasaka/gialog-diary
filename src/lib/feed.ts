import RSS from "rss";
import { listFullIssues, type IssueComment } from "./issue";

export async function generateFeed(): Promise<string> {
  const rss = new RSS({
    description: "YuheiNakasakaの日記",
    feed_url: `${import.meta.env.VITE_GIALOG_PUBLIC_STATIC_URL}/feed.xml`,
    generator: "YuheiNakasaka/gialog-diary",
    site_url: `${import.meta.env.VITE_GIALOG_PUBLIC_STATIC_URL}/`,
    title: "YuheiNakasaka's diary",
  });
  let fullIssues = await listFullIssues({ limit: 20 });
  fullIssues.forEach(async (fullIssue: any) => {
    const url = `${import.meta.env.VITE_GIALOG_PUBLIC_STATIC_URL}/articles/${
      fullIssue.number
    }`;
    const _cdata = [fullIssue.bodyHTML]
      .concat(
        fullIssue.issueComments.map((issueComment: IssueComment) => {
          return issueComment.bodyHTML;
        })
      )
      .join("<hr>");
    const date = new Date(fullIssue.created_at);
    const dateString = date.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "Asia/Tokyo",
    });
    rss.item({
      custom_elements: [
        {
          "content:encoded": {
            _cdata,
          },
        },
      ],
      date: new Date(fullIssue.created_at),
      description: `YuheiNakasaka's diary on ${dateString}`,
      title: fullIssue.title,
      url,
    });
  });

  return rss.xml();
}
