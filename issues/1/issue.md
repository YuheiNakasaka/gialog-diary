---
active_lock_reason: 
assignee: 
assignees: []
author_association: OWNER
closed_at: 
comments: 0
comments_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/1/comments
created_at: '2022-05-28T09:22:36Z'
events_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/1/events
html_url: https://github.com/YuheiNakasaka/gialog-diary/issues/1
id: 1251560179
labels: []
labels_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/1/labels{/name}
locked: false
milestone: 
node_id: I_kwDOHaM3jc5KmUrz
number: 1
performed_via_github_app: 
reactions:
  "+1": 0
  "-1": 0
  confused: 0
  eyes: 0
  heart: 0
  hooray: 0
  laugh: 0
  rocket: 0
  total_count: 0
  url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/1/reactions
repository_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary
state: open
state_reason: 
timeline_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/1/timeline
title: gialogで簡単に日記を作るやつをやった
updated_at: '2022-05-29T02:50:59Z'
url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/1
user:
  avatar_url: https://avatars.githubusercontent.com/u/1421093?v=4
  events_url: https://api.github.com/users/YuheiNakasaka/events{/privacy}
  followers_url: https://api.github.com/users/YuheiNakasaka/followers
  following_url: https://api.github.com/users/YuheiNakasaka/following{/other_user}
  gists_url: https://api.github.com/users/YuheiNakasaka/gists{/gist_id}
  gravatar_id: ''
  html_url: https://github.com/YuheiNakasaka
  id: 1421093
  login: YuheiNakasaka
  node_id: MDQ6VXNlcjE0MjEwOTM=
  organizations_url: https://api.github.com/users/YuheiNakasaka/orgs
  received_events_url: https://api.github.com/users/YuheiNakasaka/received_events
  repos_url: https://api.github.com/users/YuheiNakasaka/repos
  site_admin: false
  starred_url: https://api.github.com/users/YuheiNakasaka/starred{/owner}{/repo}
  subscriptions_url: https://api.github.com/users/YuheiNakasaka/subscriptions
  type: User
  url: https://api.github.com/users/YuheiNakasaka

---
## 経緯
昨日[GitHubに日記を書く運用](https://github.com/YuheiNakasaka/life/blob/main/_posts/20220527-tutorial.md)というやつを書いたんだけど、実際にやってみると色々と微妙に使い心地がよくなくてう〜〜〜んとなってしまった。

その旨をツイートしたところr7kamuraさんがGitHub issuesをエディタにしてブログを作れるクソ便利ツールを教えてくれた。

![https://user-images.githubusercontent.com/1421093/170819012-f920b5be-ec7b-4cfd-8bb4-ef4730de3754.png](https://user-images.githubusercontent.com/1421093/170819012-f920b5be-ec7b-4cfd-8bb4-ef4730de3754.png)

## gialogを使った日記の作り方
[r7kamura/gialog](https://github.com/r7kamura/gialog)のリポジトリのREADME.mdに書かれているリンクをポチっとやって、自分用のリポジトリを適当に作成する。するとGitHub Actionsが起動し、gh-pagesへNext.js製のSGGのブログサイトがデプロイされる。これだけ。

あとはissuesを更新することでActionsがその更新を検知して変更を反映してくれるという仕組みっぽい。

サイト自体は普通のNext.js製なのでテーマの概念とかはないけども、その辺は勉強がてらコードを拡張していけばいいんじゃないですかね〜という感じ。

最近のぴよぴよフロントエンドピーポーにとってはNext.jsが一昔前のRailsだろうから大体弄れるだろうし、ちょっとした現代のWordPress感あってよいなとも思った。