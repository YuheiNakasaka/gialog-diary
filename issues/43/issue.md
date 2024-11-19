---
active_lock_reason: 
assignee: 
assignees: []
author_association: OWNER
closed_at: 
comments: 0
comments_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/43/comments
created_at: '2023-05-05T12:25:27Z'
events_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/43/events
html_url: https://github.com/YuheiNakasaka/gialog-diary/issues/43
id: 1697533206
labels: []
labels_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/43/labels{/name}
locked: false
milestone: 
node_id: I_kwDOHaM3jc5lLk0W
number: 43
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
  url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/43/reactions
repository_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary
state: open
state_reason: 
timeline_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/43/timeline
title: "『研鑽Rubyプログラミング』を読んだ"
updated_at: '2023-05-05T12:25:27Z'
url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/43
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
[研鑽Rubyプログラミング 実践的なコードのための原則とトレードオフ](https://amzn.to/3Vfsqra)を読んだ。モチベーションとしては最近Rubyistの間でよく話題にされていたので気になったというミーハーな気持ちと、仕事でよく書くのはRuby(というかRailsでアプリ開発するのが多い)ので何か得られたらラッキーくらいな気持ち半々。

どんな本かについては他の著名なRubyistの方々が色々と書いておられるのでそちらを読む方が良いかもしれない。例えば[「研鑽Rubyプログラミング」はライブラリ作者の知識・技術の幅と深さを拡大する1冊](https://tagomoris.hatenablog.com/entry/2023/04/19/123501)とかTechRachoの[
『研鑽Rubyプログラミング』は英語版を買った人も買うべき](https://techracho.bpsinc.jp/hachi8833/2023_04_19/129409)とか。

またこの本を一言で表した文章としてあとがきから引用すると下記が端的。
>Rubyコミュニティのリーダーをして「完璧超人か」と言わしめるような優れたプログラマーが、「読者が『すでにRubyをよく知っている』ことを前提」として、「Rubyプログラミングの原則と、実装方針を決めるにあたって考慮すべきトレードオフ」を伝えるために執筆されています

このような本なのでいわゆる初心者(シンタックスを覚え、ライブラリやアプリケーションの構築方法をやっと覚えたくらいの人たち)には結構ハードな内容かもしれない。一方で自分のような仕事でRubyを書きRailsを使い...といった日々を過ごす中級者くらいの人にとっては全17章のうちどの章からも示唆深い考え方や概念や手法を得られると思う。

コードを書く時に、Webアプリケーション開発にせよライブラリ開発にせよ、中級者以上になるとプログラマーは常に何かしらの決断を下しながらコードを書いていると思う。どういう設計にするか？どのアルゴリズムを使うか？メソッド名はどうするか？等々の大なり小なりの判断が常に求められる。その時に最良の決断をするために必要なのは「**複数の選択肢を持ち、適切に選択できる力**」だ。これは業務やOSSなどで他人のコードをある程度読み書きする経験を積む過程で自然と醸成されていくことが多いと思うが、この本ではそうした力を得るための指標やコツを惜しみなく書き記してくれているので今までは時間をかけて経験的に学んでいくであろう内容を高速道路的に得られる。

先んじてレビューを書いてくださっているRubyistの方々もブログの中で書いてあるとおり、こんな書き方ええんか...(例えばデフォルト引数のところの書き方とか)みたいな議論が必要そうなものもある。しかしそれを採用するかしないかに関わらずとりえる選択肢の一つとして頭の片隅に置いておくことは重要であると思う。仕事などで実際に直面する課題に対して、最良の答えを出すためには大抵いくつかの方法があり、それらにはどれも互いにトレードオフが存在し、我々は何かしらの根拠を持って決断する必要がある。その時に一つしか倒し方を知らない人よりも幾つも倒し方を知っている中で最良なものを選択できる人の方がより多くのパターンを考慮できており信頼できる。信頼できる開発者になるためにはともすると無駄かもしれない知識も持っておいた方が良い。

第一部はRubyの基本的な機能に関する原則とトレードオフについて書かれている。この部では各章で自分のRubyに対する理解力がはっきりとわかる。Rubyは書き手にフレンドリーで何となくでも良い感じに書けてしまうから細かい仕様に関して甘い人も多いと思うが、割とそういう人は取りこぼしている知識などがちょくちょくあって学びがある(特に引数のところとかめちゃくちゃ解説が詳しい)。

第二部は主にライブラリを書く人向けの話題が中心のような雰囲気だが、何かしらのgemの作者でなくともコードの設計や拡張、リファクタリングやテスト、最適化についての話は一般的な話題なのでアプリ開発してるだけの人でも自分なりのツッコミを入れながら楽しめる感じだった。メタプログラミングについては[メタプログラミングRuby](https://amzn.to/412T1ZP)を読んだ方がいいし、リファクタリングについては[リファクタリング:Rubyエディション](https://amzn.to/3pbzTeS)を読んだ方が良いとは思う。デザインパターンだと[このサイト](https://refactoring.guru/ja/design-patterns/ruby)とかが良さそう。

第三部はウェブプログラミングに関する話。ここは流石にRubyというコンテキストだけで語るには薄くならざるを得ない気がしていて、実際DBと簡単なアーキテクチャとセキュリティの話くらいしかない。多分Rubyでウェブ開発する人の多くはRails開発者だと思うので最近だと[Sustainable Web Development with Ruby on Rails](https://amzn.to/3VxI1T2)あたりが思想は独特だが面白いのでおすすめ(だいぶ好き嫌い分かれる内容だとは思う...)。その時の感想は[Sustainable Web Development with Ruby on Railsと悲しい性](https://yuheinakasaka.github.io/gialog-diary/articles/3)に書いた。

とまぁこんな感じで、全体通して個人的には第一部がクライマックスで、第二部は14章のプロファイリングとベンチマーク全般の記述と図書館に呪いの本を実装するギャグみたいなプラグインを書いていく8章の話が面白かったという感想。

誰彼構わず万人に薦めるのはどうか？という気もするが、中級レベルの開発者がこういう考え方もあるよな〜とクリティカルに読みつつ見識深めていくのが良い読み方なのかなと思った。

先にもあげたレビューを読んだり、[研鑽Rubyプログラミング](https://scrapbox.io/kensan-ruby/)という日本語サポートページがScrapboxにあるのでこちらを見たりしながら、一つでも気になる部分があれば手に取ってみるといいんじゃないでしょうか。