---
active_lock_reason: 
assignee: 
assignees: []
author_association: OWNER
closed_at: 
comments: 0
comments_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/3/comments
created_at: '2022-05-30T09:55:28Z'
events_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/3/events
html_url: https://github.com/YuheiNakasaka/gialog-diary/issues/3
id: 1252487542
labels: []
labels_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/3/labels{/name}
locked: false
milestone: 
node_id: I_kwDOHaM3jc5Kp3F2
number: 3
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
  url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/3/reactions
repository_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary
state: open
state_reason: 
timeline_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/3/timeline
title: Web Development with Ruby on Railsと悲しい性
updated_at: '2022-05-30T09:55:55Z'
url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/3
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
[Web Development with Ruby on Rails](https://amzn.to/3N2XFRl)を読んでる。

modelにロジックは書かない、1コントローラーメソッドに対して1Serviceにしてそこに必要なビジネスロジックは詰めこむ、serviceは1メソッドしかpublicにしない、serviceのpublicなメソッドの振る舞いのみ入念にテストするという割り切った考えは前評判どおりだけど思想強ぇ〜となった。

RailsでDDDとかやろうとするとドメインの整理から始まりmodelはただのDTOにしてentityやvalue object等の実装を用意して、なんというか少なくとも実装に関してはクラスがめちゃくちゃ増えていくイメージだけど著者はむしろそういうのと逆方向(というかRailsとしては自然な方向)に逆らわず標準提供されてる道具を使って、最低限のレイヤーをサステナブルという目的(ここが重要)を達成するためだけに追加するという考えだ。

設計に絶対的な正解はなく、未来・要件・チーム・言語・フレームワークなどにあらゆる環境によって最適な選択は変わるという当たり前のことを思い知らされる感じ。

[良いコード／悪いコードで学ぶ設計入門](https://amzn.to/3PNmkuN)を読んだあとなのでなおのことその実装方針の差が面白く感じた。

良いコード設計ができるというのはこういった多種多様な設計方針や実装方法の引き出しがあり、その中から妥当なものを選択できる能力なのだろうと思う。(もっと広い意味でだけど)アーキテクチャ選択に絶対はないというのは[ソフトウェアアーキテクチャの基礎](https://amzn.to/3POoAly)でも書いてあった気がする。

自分は金にならんプロジェクト(スタートアップのすぐ解散するアプリ開発や少人数開発みたいなもの)ばかりやってきたから将来性についてあまり深く考えなくてもぶっちゃけよくて、そんなに神経質に設計について固執してこなかった。そのツケみたいなもので設計に関するスキルにややコンプレックスがあるから最近はこういう本をいくつか読んで妄想したりしている。

自分のようなバックグラウンドの人間からするとどんなにクソコードでも金を産むコードに対してまずはリスペクトが生まれてしまうという悲しい性。めくじらたててキレ散らかしてる人を見るとなんともいえない感情にならん訳でもない。もちろんそれとこれとは別なのは理解するが....