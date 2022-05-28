import { css } from "@emotion/css";

export default function TweetButton({
  url,
  text,
}: {
  url: string;
  text: string;
}) {
  const _url = encodeURIComponent(url);
  const _text = encodeURIComponent(text);
  const link = `http://twitter.com/share?url=${_url}&text=${_text}`;
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={css`
        display: inline-block;
        text-decoration: none;
      `}
    >
      <img
        alt="tweet"
        src={`${process.env.NEXT_PUBLIC_STATIC_URL}/twitter.svg`}
        width={40}
        height={40}
      />
    </a>
  );
}
