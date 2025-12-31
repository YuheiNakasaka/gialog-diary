---
active_lock_reason: 
assignee: 
assignees: []
author_association: OWNER
closed_at: 
comments: 0
comments_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/20/comments
created_at: '2022-08-27T09:22:56Z'
events_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/20/events
html_url: https://github.com/YuheiNakasaka/gialog-diary/issues/20
id: 1352994529
labels: []
labels_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/20/labels{/name}
locked: false
milestone: 
node_id: I_kwDOHaM3jc5QpQ7h
number: 20
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
  url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/20/reactions
repository_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary
state: open
state_reason: 
timeline_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/20/timeline
title: TaPLを読んでる
updated_at: '2022-08-27T10:03:43Z'
url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/20
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
RustやTypeScriptに関するちょっと込み入ったドキュメントや記事を読んだりすると「部分型」だとか「多相」のようなワードが頻出するのだけどこれらの意味があんまりよくわかっていなかった。

普段よく書いているプログラミング言語のはずなのにその(主に型の)解説で使われている単語が全くわからんというのはどうなのかというあたりに[型システム入門](https://amzn.to/3dPn7wK)(通称 TaPL)を読み始めたモチベーションがある。

しかしまぁ普段プログラミングをしていると型キャストしたりジェネリクスを使ったりとか、何かしらの形でそういったワードに由来する言語機能を**使う経験**自体はすでにあり、今更小難しい話を知らなくても使い方はわかるので大して困ることもないわけで。

それにこの先プログラミング言語を本格的に開発する予定もないし、その理論的な意味といったものに特別興味を持つことはなかったわけだがふと[TypeScriptの型メモ](https://qiita.com/dico_leque/items/06ac5837b7a333c5c8da)というQiitaの記事なんかを読もうと思うと知らない単語が大量に出てきてぐぬぬ...となるのが不便というのもまた事実。

Blockchain関連の開発の情報を追うのも少し飽きてきてたところなので良い機会と思い重い腰を上げた。

Amazonから届いて読み始めた当初は噂に違わぬ難解な書籍であるな...と感じた。その辺りの苦慮は[型に関連するよく分からん用語がありすぎる](https://scrapbox.io/razokulover-tech-memo/%E5%9E%8B%E3%81%AB%E9%96%A2%E9%80%A3%E3%81%99%E3%82%8B%E3%82%88%E3%81%8F%E5%88%86%E3%81%8B%E3%82%89%E3%82%93%E7%94%A8%E8%AA%9E%E3%81%8C%E3%81%82%E3%82%8A%E3%81%99%E3%81%8E%E3%82%8B)に書いている...。

とはいうものの実際10章くらいまでの型付きラムダ計算を理解し操作的意味論を読み下せるまで根気強く粘ることができれば、あとはそれ以降は全ての証明や演習問題は理解できるとは言わなくとも、各概念のエッセンスについて理解する土台は整う気がする。それでも全く簡単ではなく、特に後半はMLやHaskell等の関数型言語の経験がない自分には見たこともない概念だらけで苦戦した。

ちなみに型付きラムダ計算に関してはYoutubeに名大の木原准教授の講義動画があり、これが本当に大変素晴らしく、「あれ？俺、ラムダ計算完全に理解した！？！？」と錯覚させられるのでおすすめ。

- [名大・講義 計算論](https://www.youtube.com/playlist?list=PLQJysrzOMzUlaYej_MMl5929fJ5A0qdLK)

第Ⅲ章 部分型以降は、TaPL読む -> 知らない概念に出会う -> 本文を読み込む -> 意味わからん -> ググる -> 「OOOはXXXみたいなイメージやで」みたいな解説を読む -> 自分なりに噛み砕く -> TaPL読む -> 知らない概念に出会う -> ...の繰り返しになる。

今でも全然理解出来ているとは思わないが以前よりは各種ワードに対するアレルギーのようなものはなく「OOOの言語で言うところのアレね」とか「なるほど、{ ∃X, T }のことね〜」、みたいな論理記号を見てやりたいことがほんのりわかるというくらいにはなってはきた。それだけでも読む価値があったなと思う。

反面、言葉の意味的なものを知りたいだけならWikipediaなりググって各種大学の講義PDFとか読めば良いのでは？みたいな感覚もあった。あくまでTaPLは型理論を大学院以上で学んでいく学生に入門的な知識を授ける本なので、型についてちょっと知りたいくらいのレベルの人には重すぎるかも。その辺はご自身の体力とご相談という気がする。

あと今後はHaskell・OCaml、あとはidrisあたりに手を出してみるとTaPLで出てきた完全に知らんかった概念を言語機能レベルで体感できて身になりそうだな〜と思った。これはこの先の宿題としてみる。