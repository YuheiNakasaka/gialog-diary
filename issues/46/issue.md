---
active_lock_reason: 
assignee: 
assignees: []
author_association: OWNER
closed_at: 
comments: 0
comments_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/46/comments
created_at: '2023-06-19T07:54:46Z'
events_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/46/events
html_url: https://github.com/YuheiNakasaka/gialog-diary/issues/46
id: 1762962946
labels: []
labels_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/46/labels{/name}
locked: false
milestone: 
node_id: I_kwDOHaM3jc5pFK4C
number: 46
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
  url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/46/reactions
repository_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary
state: open
state_reason: 
timeline_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/46/timeline
title: "『プログラミング文体練習』を読んだ"
updated_at: '2023-06-19T07:54:46Z'
url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/46
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
[プログラミング文体練習 ―Pythonで学ぶ40のプログラミングスタイル ](https://amzn.to/3Nv34mL)という本を読みました。本書はある文章の中に含まれる単語の頻度を集計するという処理を題材にして、それを40種類の手法で実装していくという少し変わった本です。目次は以下になります。
![programming_buntai_rensyuu](https://github.com/YuheiNakasaka/gialog-diary/assets/1421093/56bb9fa7-ba9e-4011-8782-74934c4fcaff)

見ての通り、低レベルなところでいうとアセンブリやスタックヒープ縛りのようなスタイルから関数型やOOPを用いた実装など現代的なスタイル、果てはニューラルネットワークまで多岐にわたります。実装言語としてはPythonが採用されているため低レベルなプログラミング(主にメモリへの直接アクセス)や末尾再帰の実装では無理がある部分もありますが内容を理解するという点では問題はないでしょう。この本で重要なのは具体的な実装コードというよりもそのプログラミングスタイルが生まれた背景は何だったのか？ということであり、それらがコンパクトに各章まとめられている点が見どころのように思いました。

例えば構造化プログラミングについて。第Ⅱ部 5章によると1960年台、大規模プログラムを書くプロジェクトが増えてきて他人にも理解できるプログラムというものが必要となります。そこでどういう機能がプログラムの理解にとって「良い」ことでどの機能は「悪い」のかという共通認識を作るための議論がされ始めます。ここで登場するのがグラフの経路問題でお馴染みのダイクストラ先生であり、彼は`goto`を痛烈に批判したとされています。彼のこうしたいくつかの活動を中心にして、モノリスな手続き的プログラミングに対し構造化プログラミングというスタイルが生まれたとのことです。こうしたやりとりやターニングポイントになった50年以上も昔の原著論文に関してもしっかりと各章に参考文献が挙げられている点も有り難いところです。

各章それぞれにこのような幾つものプログラミングスタイルがどのような制約から生まれたのか？という歴史背景が書かれており、その時代の空気を垣間見ることができます。著者が前書きでスタイルというのはある制約によって生まれると述べていますが、スタイルを学ぶことで逆にその時代における物理的な制約やソフト的な限界などに想いを馳せることができるという体験は他のプログラミング系の書籍にはあまりない切り口であり、この本をユニークにしている点だと思いました。

一方でコードゴルフやデータベースやMVC/ステートレスといったものがスタイルとして紹介されていることにやや違和感があったり(章数を増やすため？)、追加収録されたニューラルネットワークの章に異様に力が入れられていたり(AI的な内容があった方が売れる？)みたいな邪推もなくはないです。ただこれはCS学部3,4年生くらいのプログラミングの授業で使われることが視野に入れられた書籍とのことなので出来るだけ幅広くトピックに触れてくれていた方が使い勝手が良いのかもしれないです。対象読者としてはCS学部3,4年生~はもちろん、プログラミング初心者ではなく、ある程度いくつかの言語でいくつかのコードを書き、試行錯誤した経験のある人が当てはまりそうです。

私のような職業プログラマがこれを読んだからといってすぐにお賃金アップにつながるといったようなお得な効果はほぼないと思われますが、単純に読み物としてはそれなりに面白いのでプログラミング好きの暇人には程々におすすめの一冊かと思います。
<br/>
<br/>
[![amazon](https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4814400225&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=razokulover-22&language=ja_JP)](https://amzn.to/3Nv34mL)
[プログラミング文体練習 ―Pythonで学ぶ40のプログラミングスタイル | Cristina Videira Lopes, 菊池 彰 |本 | 通販 | Amazon](https://amzn.to/3Nv34mL)