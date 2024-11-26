---
active_lock_reason: 
assignee: 
assignees: []
author_association: OWNER
closed_at: 
comments: 0
comments_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/65/comments
created_at: '2024-11-17T02:02:47Z'
events_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/65/events
html_url: https://github.com/YuheiNakasaka/gialog-diary/issues/65
id: 2665150103
labels: []
labels_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/65/labels{/name}
locked: false
milestone: 
node_id: I_kwDOHaM3jc6e2vaX
number: 65
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
  url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/65/reactions
repository_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary
state: open
state_reason: 
timeline_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/65/timeline
title: エンジニア教育についての個人的な思考整理
updated_at: '2024-11-26T07:03:51Z'
url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/65
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
  user_view_type: public

---
※思考整理メモだから箇条書きで読みづらくてすいません......

- Xでエンジニアの教育(とりわけ新人の教育)について色々と話題になっているのを目にした。自分も10年以上エンジニアとして働いてきたので少しは思うところもあり、良い機会なので自分なりの考えを整理してみる
  - ちなみに最初に断っておくが、自分は教育の専門家ではないので、あくまで過去の経験や日々の思考に基づいたものにすぎない。よって唯一の正しい考え方を主張しているわけではない。
  - また、職業としてはソフトウェアエンジニアの話なのでその分野に限った話になる(よって以下"エンジニア"というときはソフトウェアのエンジニアを指す)。
- **エンジニア教育のゴール**
  - エンジニア教育のゴールは新人教育に限って言うと「**一人前になってもらうこと**」だと思う
  - 一人前とはどういう状態か
    - それはその企業・配属された部署、もしかするとチームによっても異なるかもしれないが、自分は「**課題の解き方を概ねイメージできる状態**」だと考えている。
      - 例えばプロダクト開発をしていれば様々な機能の追加や修正、運用のタスクが発生するが、それらの課題をどうやって解決するか見た時に想像できるような人材であれば信頼できる開発人員(アウトプットを得るためのインプット)としてカウントできるようになる。
      - 将来の事業計画が立てやすくなるし、よりスピードを上げて事業の発展を進められるようになる。
  - 一人前でないと何が困る？
    - 一人前でない状態 = 与えられた課題に対して解き方が思いつけない状態。
      - その状態の人には誰かが解き方を教えるまたは補助する必要がある。
    - 解き方を教えられる人は解法が分かっている訳なので本来一人で解決できるのだが、教えるという行為に専念しないといけなくなる。
    - もし一人前でない人がいなければその人を頭数として1カウントできていたのに、一人前でない人の存在で0.5カウントとかに減ってしまう。
    - なので一人前でない人を減らすこと(=教育を行うこと)は全ての人の本来の力を引き出すことにつながるため事業の推進にとって非常に重要。
  - 最初は誰でも一人前でないので教育は必須。ただし**その教育時間を短縮できるように学習効率を高める工夫や投資をしたい**。
- **エンジニア採用**
  - そもそも一人前でない人の教育コストが重いなら採用自体をしなければ良いのでは？
    - それはその通りで実際に体力のない企業や金のないベンチャーなんかは教育コストが限りなく低い即戦力の人材以外は採用しない(というか出来ない)
      - 特にベンチャーなんかだと歴史が浅かったり変な品質要件がなくシステムの複雑性も大したことがないことも多いので、ドメイン知識の教育に時間がかからない。単純な新規開発案件要員とかならそもそも教育が不要なこともある。
      - 採用フローや社則も緩いのでSNSでの採用活動も好きなように行えたりする。知名度自体は上げやすいから意外と中途採用がやりやすかったりする。
  - 新卒採用
    - 教育コストが重いので短期的にみると新卒は採用しない方が良く見える
    - ただし寿命の長い企業では一定の合理性がある
      - 新卒採用をし教育することで業界全体の人材ボリュームを増やせる。
      - 中途より新卒の方が自社への文化理解が早い(他社を知らない分疑わずに受け入れがちなので)コミットメントを上げやすく、求める人材像に育てやすい
      - 世代の偏りを緩和できる。多様なバリエーションの年代の人材がいた方が新たな価値観に適合しやすく(新技術のキャッチアップとか含め)市場の変化にも耐えやすい。
    - 何より何十人もまとめて採用できる機会はそう多くないので、教育コストが低めな労働集約的な業種においては千載一遇のチャンスではある。
    - 一方**知的労働者としては大量に人を採用できればすぐに生産性が上がる訳ではない**(むしろ前述のように一時的に教育のため生産性が下がる)ので、新卒採用というのは結構投機的で社会貢献的な側面が強そう
    - **新卒採用するならば、よっぽどの覚悟がない限り採用時点で教育コストの低そうな人を採用するべき**。
      - 教育コストの低そうな人 = 既に技術的な経験がある人・純粋に勉強ができる人
        - 教育時に基礎技術教育の時間を減らしたり、飲み込みが早い人を採用すればその分教育コストを減らせる
      - [ソフトウェア開発者採用ガイド](https://amzn.to/4hRHOoo)にも**採用すべき人は、1)頭が良く2)物事を成し遂げる人、以上**とある。
  - 採用時点で自社で教育しきれない人は採用しないのが失敗しない教育の第一歩。教育できない人は採用しない。
  - ところがどっこい、そんな都合良く欲しい人材が手に入ることはないので、諦めて新卒採用&教育を頑張るみたいな感じになりがち
- **エンジニア教育**
  - 採用したエンジニアの教育はどうあるべきか
    - 新卒にせよ中途にせよ**その人のレベルに合わせた教育方法を考えるべき**
  - **ドレイファスモデル**
    - 個人がスキルを習得し極めていく過程を5つの段階に分けて説明する理論([リファクタリング・ウェットウェア](https://amzn.to/4fH4LJi)の第1章より)
      - 初心者
        - 技術的な経験がない人。教えられたレシピ(手順やルール)がないと仕事ができないくらいのレベル。
      - 中級者
        - レシピが与えられるとある程度の仕事はこなせる。過去の経験を基に少しレシピから外れたタスクにも取り組めるがまだ周囲のサポートは必要。
        - 自分に与えられたタスクの解決で精一杯なので俯瞰した視点で仕事はできない。
      - 上級者
        - ほとんどのタスクはレシピがなくとも過去の経験を基にこなせる。周囲のサポートは基本不要。
        - イニシアティブを持って問題解決を行える力がある。初心者や中級者の指導もできる。
        - ここが一人前の状態。
      - 熟練者
        - 問題の全体像を俯瞰して理解し解決できる。
        - 自己を客観視し自己改善ができる。つまりどういう行いが良くてどういう行いが悪いかの軸ができており、自分自身もその軸で評価できる。その上で改善を行い続けられる。
      - 達人
        - どんな問題にも直感的に適切な対応法を思いつける。トップクラスの存在で情報源となれるような人。専門領域の方針や戦略の評価決定ができる。
        - 達人は達人のごとく振る舞わない。初心を忘れず常に新しいことに目を向け驕らず自覚を持っている。
  - エンジニア教育の対象となるのは多くは**初心者と中級者**
  - 初心者と中級者にはレシピが必要
    - [Xで話題になっていたポストのやり方](https://x.com/shinoyu/status/1856166316039909611)はタスクに期限を設けて概要とゴールを教え、あとはそのゴールまでの道筋は自分で考えながらやってくれというやり方だった
      - いわゆる「**お手並み拝見アサイン**」
    - これはドレイファスモデルでいうところの初心者と中級者にはあんまり向いていないだろう
    - 過去に似たようなタスクをやったことがあったりするならその経験を基にしてゴールに向かえるが、そうでない場合はある程度レシピを示さないと学習効率が悪そう
  - なんでレシピが必要なのか
    - 効率よく学んで成長してもらうため
    - **初心者や中級者はゴールに向かう道筋がわからない。目の前にあるコード全てが問題解決に必要な材料のように見えるので関係ありそうなものを全探索で試してしまう。**
      - 一方で上級者以上になるとどこを見るべきでどこは見ないべきであるかがパターン認識できるようになっているから寄り道がない。なのでレシピがなくても現実的な時間で課題解決ができてしまう。
    - 例えるなら将棋のルールを知らない人に「相手の玉を詰ませてください」と言って、いきなり対局させるようなもの。駒の動かし方や将棋のルールがわかっていても、初手でどの駒を動かしたら勝ちにつながっているのかわからない状態。
      - その状態の人間にとにかく実践!実践!と対局させてもどんだけ対局積ませればいいのか勝てるのかわからない。時間がかかる。
    - せめて序盤の定石を教えるとか相手に勝つための戦法を教えるとか、いわゆる将棋というゲームで勝ちに向かうためのレシピを教えた方が勝ちに向かう効率は良い
    - 勝ちへの道筋が早く見えて勝利の経験が増えると、その成功体験がさらに次の学習へのモチベーションを高めて学んでくれやすくなる
    - **人間は成功体験と失敗体験という経験を道標にしながら自己補正をおこなっていく**。道標は多く、さらに早く得られた方が学びが早い。
  - 基礎技術の教育
    - 基礎技術の教育は学校のように講義的な指導が必要。企業の最初の研修とかでやる。ツールの使い方、言語、フレームワークの使い方、など。ここは基本つまらなくても頑張ってもらうしかない。
    - あとはチーム開発に必要な一通りの経験を積んでもらう演習をやったりする。プログラミングスクールが提供してる授業もそんな感じだと思う。
    - 自分が新卒で入った会社だとハッカソン的なものをやり、実際にプロダクトを開発してみるというのがあった。ゼロから自分で動くモノを作り上げる経験はたとえ未熟なものでも財産にはなると思う。
  - 業務知識の教育
    - 問題はここでいわゆる配属後の教育。純粋な技術教育はある程度型が決まっているし、それこそ外部の教育システムに外出しすることもできる時もある。
    - 一方配属後の教育はチームによって教えるべき知識が異なる。
    - ドレイファスモデルでいうと上級者以上が教育を行うが彼らも教育のプロではないので人によって教え方にムラがある。
    - この時に先のXのポストのような教育者にあたると人によっては毎日悶々としながら仕事に取り組まざるを得ないので辛い...となってしまう人が出やすい。成功体験でも失敗体験でもない、無の状態が続く。
  - 心理的安全性
    - 心理的安全性には4つの段階があるらしい([4段階で実現する心理的安全性](https://amzn.to/4fKdPNX))
      - インクルージョン安全性
        - 組織の中で階層的な地位により阻害されていると感じさせない
        - 人々は受け入れられていると感じる必要がある
      - 学習者安全性
        - 個人のミスや失敗に対する寛容さ
        - 人々は学ぶ際に安全だと感じる必要がある
      - 貢献者安全性
        - 何をもって貢献か・その人の役割を明確にすること
        - 人々は貢献するのに安心感を持つ必要がある
      - 挑戦者安全性
        - 新しいアイデアや挑戦の失敗を嘲笑せず促進する
        - 人々は現状に挑戦するために安全だと感じる必要がある
    - 特に新人のエンジニア教育においてはまず**インクルージョン安全性と学習者安全性**を教育者が担保してあげるのが大事そう
      - インクルージョン安全性
        - 得てして上級者は初心者よりもたくさんものを知っているし"偉い"と考えられがち。スキル差により生まれる階層感は上級者側が意識的に払うように気をつけないといけない。
        - もしこの安全性が担保されていない場合、新人は自分を殺して偉い人の命令に従うだけの存在になる。
        - 初心者から中級者、上級者へと成長していく過程で、レシピから外れた解決手段も試せるようにならないといけないが、そういうスキルが身につけられない。
      - 学習者安全性
        - 失敗を恐れるようになると上級者の脳内にある正解をいかに出すかの試験のような思考パターンしか出来なくなる
        - 間違ったコードや微妙な設計を頭ごなしに非難され続ける経験によりまともにフィードバックが機能しなくなるので成長が止まる
        - 上級者は自分の脳内の正解が出せるまで指摘し続けるのではなく、正解が出せるようにレールを引いてあげるところもやるべき。初心者が上級者の考える正解のコードや設計を作りだせないのは上級者自身のせいでもある。
          - 教育は正解を与えるのではなく正解に導くものという意識(まぁこれが難しく時間もかかり面倒で大変...)
  - **結局どうすればいいのか**
    - 初心者・中級者には
      - 適切なサイズのタスクを与える。「適切」は人によって異なる。
      - 本人のレベルで学びや気づきが得られそうな重さの部分だけ穴抜けにして考えさせ、あとは従った通りに進めればゴールに辿り着ける課題とレシピを与える
        - 過去に似たような経験があるタスクなら、レシピの穴抜け部分を増やしても良い
        - 何にせよせめて初手とチェックポイントくらいは与えないと死にゲーやってるみたいになる
      - 心理的安全性(特にインクルージョン安全性と学習者安全性)を意識してフィードバックを行う
      - そういうタスク分割とレシピの割り当て、実装、フィードバックを何種類もイテレーションしていくうちに課題の解決方法のパターンを認識できるようになってもらう
        - そういえばGPTも問題の解答の穴抜け部分を埋めるような学習タスクを繰り返してた気がする(曖昧)
  - なので**教育する上級者以上の人間がやらないといけないことは結構重い。初心者/中級者を採用するということはその教育コストを払う覚悟がないとうまくワークしない**。
    - 別の業務がある人間が片手間でやるなら上級者1人に対して初心者/中級者2~3人くらいが限界ではないか。
  - とはいえ初心者/中級者を採用し未熟な教育でも生き残ってこれた初心者/中級者だけを残すという割り切り選択もあり、それが先のXのポストのような感じ。
    - 現にどちらかというと自分もそういうやり方で教育されてきたタイプなのでそれなりにワークすることもあるとは思う。
    - 小さい会社なら社内リソース的に仕方ないのかもしれない(自分もベンチャーが長かったし理解できるが)個人的にはあんまりその選択は取りたくはない。
      - そもそも勝手に成長していく人はどんなやり方でも成長していく。だが自分はドロップアウトする人を減らしたいという気持ちがあり、より広く掬い取れる方法があるのでは？というモチベーションで考えてみている。
- 採用と教育、大変ですね...
  - 偉そうに語っている自分も日々四苦八苦しているのでこういう話に興味ある人は[@razokulover](https://x.com/razokulover)までご連絡ください。
- 追記
  - ブコメで良い記事を教えてもらった
    - ジュニアを採用しない連中はシニアに値しない https://portalshit.net/2018/10/02/we-should-hire-junior-engineers