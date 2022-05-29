import RSS from "rss";
import { listFullIssues, type IssueComment } from "./issue";
import { formatInTimeZone } from "date-fns-tz";

export async function generateFeed(): Promise<string> {
  const rss = new RSS({
    description: "YuheiNakasakaの日記",
    feed_url: `${process.env.NEXT_BASE_URL}/feed.xml`,
    generator: "YuheiNakasaka/gialog-diary",
    site_url: `${process.env.NEXT_BASE_URL}/`,
    title: "YuheiNakasaka's diary",
  });
  let fullIssues = await listFullIssues({ limit: 20 });
  fullIssues.forEach(async (fullIssue: any) => {
    const url = `${process.env.NEXT_BASE_URL}/articles/${fullIssue.number}`;
    const _cdata = [fullIssue.bodyHTML]
      .concat(
        fullIssue.issueComments.map((issueComment: IssueComment) => {
          return issueComment.bodyHTML;
        })
      )
      .join("<hr>");
    const dateString = formatInTimeZone(
      new Date(fullIssue.created_at),
      "Asia/Tokyo",
      "yyyy-MM-dd"
    );
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
