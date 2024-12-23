import { css } from "hono/css";

export const globalCss = css`
  :root {
    --color-light: #666;
  }

  html {
    color: #333;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.8;
  }

  @media (min-width: 1000px) {
    html {
      font-size: 1.6vw;
    }
  }

  @media (min-width: 1200px) {
    html {
      font-size: 19.2px;
    }
  }

  body {
    background-color: #f8f9fa;
    margin: 0 auto !important;
    max-width: 40rem;
    word-wrap: break-word;
  }

  nav {
    padding: 2rem;
  }

  section {
    background-color: #fff;
    margin-bottom: 2px;
    padding: 3rem 1rem;
  }

  nav a {
    color: inherit;
  }

  header nav {
    font-weight: 700;
  }

  footer nav {
    font-size: 0.8rem;
    text-align: center;
  }

  nav ul {
    list-style-type: none;
    padding-left: 0;
  }

  nav li {
    display: inline-block;
  }

  nav li + li {
    display: inline-block;
  }

  nav li + li:before {
    content: "//";
    padding: 0 0.5rem;
  }

  section + section {
    margin-top: 3rem;
  }

  section > ol {
    list-style-type: none;
    padding-left: 0;
  }

  section > ol > li {
    margin-top: 2rem;
  }

  time {
    color: var(--color-light);
    display: block;
    font-size: 0.8rem;
  }

  aside {
    color: var(--color-light);
    font-size: 0.8rem;
  }

  main article {
    font-family: Inter,GenJyuuGothicL,Hiragino Kaku Gothic ProN,Hiragino Sans,BIZ UDPGothic,Meiryo,sans-serif
    font-size: 1.06rem;
    letter-spacing: .02em;
    line-height: 2.15;
  }

  /* The followings are mainly for article. */

  h1 {
    font-size: 1.5rem;
    line-height: 1.3;
    margin-bottom: 0;
    margin-top: 2.3rem;
    border-bottom: 1px solid #5c93bb2b;
    padding-bottom: 0.2em;
  }

  h1.article-title {
    border-bottom: 0;
    padding-bottom: 0;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    margin-top: 2.3rem;
  }

  hr {
    border-width: 0px;
    font-size: 1rem;
    margin: 4rem 0;
    text-align: center;
  }

  hr:before {
    color: var(--color-light);
    content: "❧";
    font-size: 1.5rem;
  }

  img {
    backface-visibility: hidden;
    display: block;
    margin: 2rem auto;
    max-width: 100%;
  }

  p {
    margin-top: 1rem;
  }

  ol,
  ul {
    padding-left: 1rem;
  }

  code {
    border-radius: 0.2rem;
    font-family: monospace;
    font-size: 0.8rem;
    background-color: #eee;
    padding: 0.2rem 0.4rem;
  }

  pre code {
    background-color: transparent;
    border-radius: 0;
    padding: 0;
  }

  pre {
    background-color: #333;
    color: #eee;
    line-height: 1.3;
    margin: 2rem 0;
    padding: 0.75rem;
    overflow-x: auto;
  }

  blockquote {
    border-left: 0.25rem solid #eee;
    color: #999;
    font-style: italic;
    margin: 1rem 0;
    padding-left: 1rem;
  }

  video {
    max-width: 100%;
  }

  .task-list-item {
    list-style-type: none;
  }

  .task-list-item label {
    font-weight: 400;
  }

  .task-list-item.enabled label {
    cursor: pointer;
  }

  .task-list-item + .task-list-item {
    margin-top: 3px;
  }

  .task-list-item .handle {
    display: none;
  }

  .task-list-item-checkbox {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
  }

  .contains-task-list:dir(rtl) .task-list-item-checkbox {
    margin: 0 -1.6em 0.25em 0.2em;
  }
`;
