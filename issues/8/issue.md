---
active_lock_reason: 
assignee: 
assignees: []
author_association: OWNER
closed_at: 
comments: 0
comments_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/8/comments
created_at: '2022-06-17T09:41:09Z'
events_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/8/events
html_url: https://github.com/YuheiNakasaka/gialog-diary/issues/8
id: 1274814318
labels: []
labels_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/8/labels{/name}
locked: false
milestone: 
node_id: I_kwDOHaM3jc5L_B9u
number: 8
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
  url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/8/reactions
repository_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary
state: open
state_reason: 
timeline_url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/8/timeline
title: 楽天モバイルからの移行先
updated_at: '2022-06-17T14:13:06Z'
url: https://api.github.com/repos/YuheiNakasaka/gialog-diary/issues/8
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
楽天モバイルからの移行を検討している。前々からニュースになっているが今まで1GB以下のデータ利用で無料だったのが7月からなくなってしまうからだ(追記: 2022年10月末までの最大4カ月間は月額データ利用量が1GB以下の場合、月額料金が実質無料だった →[詳細](https://network.mobile.rakuten.co.jp/fee/un-limit/info_20220513/))。
- [楽天モバイル「0円」終了。7月からは最低1078円](https://www.watch.impress.co.jp/docs/news/1408944.html)

# 要件
要件的には下記のような感じ。

- 1台目のスマホとして使える
- 電話番号は要る(電話はしない)
- SMS受け取れないと困る(が、送ることはない)
- ネットは外出時に検索等の静的サイトやアプリで使えればOK。1GB/月あれば十分。
- 家ではWi-Fiと接続する

# 合理的シンプル290プラン
これら要件を勘案した上で移行先の選択肢を検討した。

といっても候補がたくさんあってマジで訳分からんという感じだったが、いくつか調べた感じだと自分には日本通信の[合理的シンプル290プラン](https://www.nihontsushin.com/plan/plansimple.html)が合っていそうだと思った。

上記要件を全て満たした上で、ドコモ回線で1GB 290円/月というプランだ。

楽天モバイルでのデータ通信はもともと1GB/月以内に収まる使い方しかしていなかった。なのでこのプランで十分である。

さらに1GBを超えると+1GBごとに220円なので2GB使っても510円/月だけ。外出先でYoutubeを見たりゲームをするような人には全く向かないけどプライベートも引きこもりのリモートワーカーにはピッタリだと思う。

ちなみにSIM or eSIMを選べるが初期手数料はどちらも3300円かかる(どこも同じ。7月以降の楽天モバイルx3ヶ月分)。

# その他の候補
## [povo](https://povo.jp/)
基本料無料。年に2回トッピング購入が必要だがそれを加味しても440円/年で済む。多分1番安い。

選ばなかった理由は安すぎる回線は楽天モバイルみたいにどこかで終了しそうだな〜という気がするのと、トッピング購入がちょっと手間。

auの回線だし速度は十分だと思うし(ただし0円0GBの時は128kbpsになる)、何より1日だけ使い放題にしたりとかなり細かく料金をカスタマイズできるのは面白いなとは思った。

## [IIJmio](https://www.iijmio.jp/hdc/spec/)
2GB 850円/月。悪くはないけど日本通信の方が安かった。

## [NUROモバイル](https://mobile.nuro.jp/plan/)
3GB 792円/月。結構安い方だけど、これも日本通信の方が自分にあってたので却下。

## [OCNモバイルONE](https://www.ntt.com/personal/services/mobile/one/charge.html)
昔使ってたやつ。0.5GB 550円/月。月額だけ見たら安いけどさすがに1GBは欲しかったし、日本通信の方が安い。

## [HIS Mobile](https://his-mobile.com/domestic/planlp_2022splan)
1GB 550円/月。100MB未満だと290円/月になる。安いけど100MB未満のことは流石にないので却下。あとは申し訳ないがHISという名前にやや不安があった。

## その他
他にも[ahamo](https://ahamo.com/plan/)・[LINEMO](https://www.linemo.jp/)・[mineo](https://mineo.jp/price/)・[UQ Mobile](https://shop.uqmobile.jp/shop/)など色々と移行先の候補はあるが、どれも自分のユースケースには微妙で割に合わなかったので書いてない。

あくまでも今回は自分の要件に合っているのはどこか？という話であり、特定のサービスを勧めたり贔屓したりしているわけではないことはご了承願いたい。データ通信のみとか逆に20GB以上プランとかだと話が変わってくると思うし。

