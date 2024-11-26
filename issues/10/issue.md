---
active_lock_reason: 
assignee: 
assignees: []
author_association: OWNER
closed_at: 
comments: 0
comments_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/10/comments
created_at: '2022-06-23T03:03:33Z'
events_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/10/events
html_url: https://github.com/YuheiNakasaka/gialog-diary/issues/10
id: 1281601385
labels: []
labels_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/10/labels{/name}
locked: false
milestone: 
node_id: I_kwDOHaM3jc5MY69p
number: 10
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
  url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/10/reactions
repository_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary
state: open
state_reason: 
timeline_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/10/timeline
title: ソフトウェア開発におけるムダ
updated_at: '2022-06-23T08:22:59Z'
url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/10
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
[Misreading Chat](https://misreading.chat/2022/05/12/92-software-development-waste/)で紹介されていた[Software Development Waste](https://homepages.dcc.ufmg.br/~figueiredo/disciplinas/papers/icse17sedano.pdf)という論文。

この論文に載っていたTypes of Software Development Wasteというソフトウェア開発のムダについて類型されていたものが面白かったので日本語にしてみた。

# 誤った機能・製品の構築
## ムダ
ユーザーニーズやビジネスニーズに対応していない機能・製品を構築するコスト
## 原因
- ユーザーの要望
  - ユーザー調査、検証、テストを行っていない、ユーザーフィードバックを無視している、ユーザー価値の低い機能に取り組んでいる
- ビジネスの要望
  - ビジネス関係者を関与させていない、関係者からのフィードバックが遅い、製品の優先度が不明確
## 一言メモ
ユーザーの声を汲み損ねていたり、えいやで作ってしまった機能とかまぁムダですよねと言われてばそう。割とよく起こりがちである。

# バックログの管理ミス
## ムダ
作業の重複、価値の低いユーザー機能の迅速化、必要なバグ修正の遅延のコスト
## 原因
- バックログの逆転
- 同時に多くの機能に取り組む
- 作業の重複
- 十分に準備されていないストーリー(以降"ストーリー"は"機能"と同じ意味で使われてるっぽい？)
- 機能開発とバグ修正のアンバランス
- テストまたは重要なバグ修正の遅延
- 気まぐれなスラッシング(訳が微妙)
## 一言メモ
取り組むべきタスクの優先度づけがうまくできてないと、あるべき順番であるべき機能がユーザに届けられなくなるのでそういうのはムダですよねという感じか。

# リワーク(手戻り)
## ムダ
正しく行われたはずの納品物を変更するコスト
## 原因
- 技術的負債
- ストーリーの却下（例：プロダクトマネージャーがストーリーの実装を却下）
- 完了の明確な定義がない（ストーリーが曖昧、設計モックの推測）
- 欠陥（テスト戦略の不備、バグの根本原因分析がない）。
## 一言メモ
仕様の作り込みが甘かったり、そもそもユーザーテストが不十分であやふやな機能が設計されたりして作り直しが発生するのはムダですよねという感じ。技術的負債やバグ起因で作り直しが発生するのもここの無駄にカウントされてる。

# 不必要に複雑なソリューション
## ムダ
必要以上に複雑なソリューションを作成するコスト、機能、ユーザーインターフェース、コードを単純化する機会を逃す
## 原因
- ユーザーの視点から見た不必要な機能の複雑さ
- 不必要な技術的複雑さ
  - コードの重複、インタラクションデザインの再利用不足、前倒しで作った複雑すぎる技術的デザイン
## 一言メモ
オーバーエンジニアリングの結果、なんかかっこいいけど誰も容易に変更できなくなってしまったみたいな実装はたまにある気がする。しかもそれをやった人が退職してしまい結局全部書き直す羽目にみたいな、、やり直しが発生するという意味で確かにそういう実装は結局ムダと言われればムダ。

# 不要な認知負荷
## ムダ
精神的エネルギーを不必要に消費するコスト
## 原因
- 技術的負債に苦しんでいる
- 複雑または大規模なストーリー
- 非効率なツールや問題のあるAPI、ライブラリ、フレームワーク
- 不必要なコンテキストスイッチ
- 非効率な開発フロー
- 整理されていないコード
## 一言メモ
開発フローやツールや負債に起因してMPを過剰に消費させるのはムダですよねというやつ。

そういえば精神的に負荷がかかることそれ自体がどのくらい開発の生産性低下を引き起こすのか知りたいんだけどそういう研究あるかな。例えば技術的負債によって発生する精神的な負荷は自体は実は生産性を低下させてなくて、技術的な負債そのものが生産性を低下させているだけみたいな。

まぁMPが過剰に減らされるのは人間をリソースと考えるとムダだよねというのは当たり前だけど。

# 心理的苦痛
## ムダ
不要なストレスでチームに負担をかけるコスト
## 原因
- チームのモラルの低下
- ラッシュモード(締切がきつすぎるみたいな状況)
- 対人関係やチーム内の対立
## 一言メモ
これも上のやつと似ててMPの過剰消費に繋がるのでムダというやつ。

そういえばフルリモートでissueベースで働いてると対人関係みたいなものを気にすることがほぼ無くなった。issueだけの関係だと後腐れなくて事務的に処理できることが多くて楽。一方でプロダクトを作っていくチームの一員としてビルドアップから参加する必要があると柔らかなコミュニケーションが必要になるので気を遣う。

# 待ち時間/マルチタスク
## ムダ
マルチタスクに隠れがちなアイドルタイムのコスト
## 原因
- 遅いテストや信頼できないテスト
- 信頼できない受け入れ環境
- 不足する情報、人、設備
- フィードバック遅延によるコンテキストスイッチ
## 一言メモ
テストが遅すぎたりPRのレビューがスルーされたりして先に進めない時に発生する待ち時間はムダですよね、というやつ。確かによく起きがちではあるが、PRのレビューで発生する待ちはどうしようもないところがあるな...。

# ナレッジロス
## ムダ
チームがかつて知っていた情報を再取得するコスト
## 原因
- チームの解散や移動
- 知識のサイロ化
## 一言メモ
チームの移動や変更でナレッジの共有をやり直すのに発生する時間とかがムダですよねというやつ。これは暗黙知を減らすために各人が情報をオープンに見える化しておかないと発生しがち。

ベテランの特定の人に質問が集中しちゃったりするとその人の本質的な作業時間が減るのもよくある。そういうベテランはそのプロダクトのあらゆることを知っているから開発のパフォーマンスも他の人より出せるはずなんだけど、オンボーディングを手伝うコストが度々発生しちゃたりすると勿体無いな〜となる。

# 非効率的なコミュニケーション
## ムダ
不完全、不正確、誤解を招く、非効率的、または不在のコミュニケーションのコスト
## 原因
- チームサイズが大きすぎる
- 非同期コミュニケーション
  - 分散チーム、分散ステークホルダー、他のチームへの依存、チーム外の不透明なプロセス
- 不均衡
  - 会話を支配する、聞かない
- 非効率な会議
  - 集中力の欠如、振り返りのスキップ、毎日ブロッカーについて話さない(どういうこと...)、会議が長引く（例：長い立ち話）など
## 一言メモ
コミュニケーションがうまくいかないとムダですよねみたいな感じ。幅広いけどもまぁそれはそう。会議に関しても不要な話で盛り上がっちゃうとか曖昧な目的始まっちゃって終わりどころが見えずダラダラ続くみたいなことはよくある気がする。

# 雑感
ソフトウェア開発におけるあるあるネタまとめみたいな様相である。こういうムダは確かに至る所に散見されるが、これらをどうやって取り除くかというのは中々難しい問題だ。だがその辺の対処法についてはこの論文に書いていない。

この辺りのムダを取り除くためのプロセス改善の話はどういう本(や記事や論文)を読むと良いのだろうか。