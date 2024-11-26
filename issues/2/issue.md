---
active_lock_reason: 
assignee: 
assignees: []
author_association: OWNER
closed_at: 
comments: 0
comments_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/2/comments
created_at: '2022-05-29T03:46:32Z'
events_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/2/events
html_url: https://github.com/YuheiNakasaka/gialog-diary/issues/2
id: 1251778935
labels: []
labels_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/2/labels{/name}
locked: false
milestone: 
node_id: I_kwDOHaM3jc5KnKF3
number: 2
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
  url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/2/reactions
repository_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary
state: open
state_reason: 
timeline_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/2/timeline
title: ブログのカスタマイズ
updated_at: '2022-05-29T03:46:32Z'
url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/2
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
昨日gialogで作ったブログを少しカスタマイズした。

具体的にはOGPの設定やTwitterボタンの設置。

最初GitHubのAPIにそんなに詳しくないからYAML front-matterでIssueから渡ってくるレスポンスの種類にどんなものがあるのかわからなかった。とりあえずはGitHubの[APIリファレンス](https://docs.github.com/ja/rest/issues/issues)を読むと大体解決した。

OGPの画像は記事内を正規表現で走査して最初に登場する画像を設定するようにしている。`/\((http[s]*.+\.(?:png|jpg|jpeg|gif))?\)/i`みたいなやつを使っているが、後方参照のキャプチャしないやつの書き方を思い出せなくてちょっと迷った。今回はキャプチャされてもいいんだけど、気分的に無駄なキャプチャは嫌である。グローバルな一致とかだとパフォーマンス問題が起きたりするなど[詳説 正規表現](https://amzn.to/3NaYcAs)に書いてた気もするから避けられるなら避けた方が良さげ。

あとちょっと困ってるのはOGP画像が仕様を超える解像度だった場合にTwitter Cardでうまく表示されない問題がある。これはどう対応したものかちょっと考えているところ。

それと雑でもいいので検索を設置したくてGoogle検索へのリンクを配置したがまだインデックスされていないから機能しない。時間が解決するのかなこれ。。


最後にOGPのテスト。先日[和処黒木](https://twitter.com/kurokijiro)に行った時に八木メシでお馴染みの八木栞FSKと撮った牛しぐれうどんでも載せておく。
![IMG_2962](https://user-images.githubusercontent.com/1421093/170851081-73034fa3-91c3-43be-94db-dcc08b642156.JPG)