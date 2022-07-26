---
active_lock_reason: 
assignee: 
assignees: []
author_association: OWNER
closed_at: 
comments: 0
comments_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/13/comments
created_at: '2022-07-16T13:34:40Z'
events_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/13/events
html_url: https://github.com/YuheiNakasaka/gialog-diary/issues/13
id: 1306808778
labels: []
labels_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/13/labels{/name}
locked: false
milestone: 
node_id: I_kwDOHaM3jc5N5FHK
number: 13
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
  url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/13/reactions
repository_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary
state: open
state_reason: 
timeline_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/13/timeline
title: 開発時のフォーム入力を少し楽にするためのChrome Extensionを作った
updated_at: '2022-07-16T13:34:40Z'
url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/13
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
最近は複数のフォーム入力項目があるページをお仕事で作ったりしてる。その中でUIを作ってる時に動作確認をするんだけど数十項目の入力フォームをいちいちゼロから埋めてsubmitして...みたいなことをするのが結構だるい。この作業を良い感じに手助けしてくれるChrome Extensionを作った(というか作っているところ)。

- [YuheiNakasaka/FormFill](https://github.com/YuheiNakasaka/form-fill)

↓下記がデモとしてGoogle Formを埋めている例。Google Formは結構特殊でinput要素を全然使わずdivをボタンやチェックボックスにしているので一発入力できずに厳しいのだが90%くらいの要素は一気に埋められる。

https://user-images.githubusercontent.com/1421093/179355981-2729be7c-7552-4217-a9a2-1dc809997dc2.mp4

今回欲しかった機能としては、

- 任意のフォームのセレクタとvalueを指定して一発でフォームを埋めてくれる
- 入力パターンのセット(住所が東京の場合とか電話番号が070から始まる場合のパターンなど)をいくつも作成できる
- 入力パターンセットを好きに組み合わせて選択してフォームを埋めてくれる

逆に不要なものは、

- リッチなGUI

という感じ。

なので今回は入力パターンセットをまとめたJSONを指定して、それに則ってフォームを埋めてくれるようにした。開発者とか向けのデバッグでしか使わんだろうと思うしGUIは設けていない。

JSON一つあれば良いことのメリットとしては、チーム内で入力項目をまとめたJSONを作りgit管理とかしておけること。テキストファイル一つにまとめられるので共有が楽なのは良い。まぁJSONを作るのがだるいのだけども...

Chrome Extensionを作り始める際のボイラープレートとしては[chibat/chrome-extension-typescript-starter](https://github.com/chibat/chrome-extension-typescript-starter)を使った。

過去にいくつか作ったことはあったので基本的な開発の流れは覚えていたが細かい部分を忘れていたので[API Docs](https://developer.chrome.com/docs/extensions/reference/)と睨めっこしたりした。

ChromeでしかもPCでしか動かさなくて良いから考えるべき動作環境が限定的でその辺りは楽。

あとストアへのリリースはまだしてない。一旦は雑な作りだし、リポジトリとして公開しておけばそれをビルドして自前の環境で使うこともできるので後回しにしている。開発者向けなのでなおさら。

ちなみにこのExtensionはよくある住所などの自動入力のためのExtension([AutoFill](https://chrome.google.com/webstore/detail/autofill/nlmmgnhgdeffjkdckmikfpnddkbbfkkk?gl=JP&hl=ja)みたいなやつ)ではない。

あくまで複数の入力パターンを何度も実行するようなケースでしか嬉しくない。その辺りは理解しておいてほしい。