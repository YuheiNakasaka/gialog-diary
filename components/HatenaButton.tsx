import { css } from "@emotion/css";

export default function HatenaButton({
  url,
  text,
}: {
  url: string;
  text: string;
}) {
  const _url = encodeURIComponent(url);
  const _text = encodeURIComponent(text);
  const link = `https://b.hatena.ne.jp/entry/panel/?url=${_url}&btitle=${_text}`;
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
        src={`${process.env.NEXT_PUBLIC_STATIC_URL}/hatena.png`}
        width={40}
        height={40}
      />
    </a>
  );
}
