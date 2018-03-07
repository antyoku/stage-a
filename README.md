# Stage-A

このステージではWebサイト開発の実戦訓練を行います。この結果に基づき、Stage-Bの課題と役割が決まります。また、就活の際の実績になるので、ソースコードやコミットメッセージも見られても良い状態に整えましょう。

## 要件

- [ ] Gulpとsassの導入し、使うこと
- [ ] RWD対応されていること
- [ ] [モバイルファースト](https://qiita.com/deerboy/items/5bfefc20a53098f7be16#%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB%E3%83%95%E3%82%A1%E3%83%BC%E3%82%B9%E3%83%88%E3%81%A7%E3%81%AEcss%E8%A8%AD%E8%A8%88)であること
- [ ] [BEMによるコンポーネント設計](https://qiita.com/deerboy/items/c891e20c36eb1fe2a4f5)がされていること
- [ ] JSによるなんらかの機能があること（ショボくても良い）
- [ ] [OGPタグが入っていること](https://qiita.com/sutara79/items/d7a45f6c4796c1ee1590)
- [ ] [Faviconが入っていること](https://qiita.com/deerboy/items/0a2d3ce368c5134511b8)
- [ ] 正しいコミットメッセージが使われていること。

```
feat(作業対象): 作業内容 ← 開発の場合
fix(作業対象): 作業内容 ← バグ修正の場合
```

## 検品

最後に公開したサイトに対し、検品（品質チェック）を行なってください。

検品項目|概要|合格基準
---|---|---
ブラウザチェック|自分のブラウザでの表示、動作チェック|表示崩れや動作バグがないこと
[HTML Validator](https://validator.w3.org/)|HTML品質チェック|エラーがない状態にする(外部ソースのエラーは除く)
[Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=ja)|パフォーマンス改善|PC, SPともにレッドスコアでないこと
[モバイルフレンドリー](https://search.google.com/search-console/mobile-friendly?hl=ja)|スマホ対応|エラーがない状態
[シェアデバッカー](https://developers.facebook.com/tools/debug/)|SNSシェア時にサムネイルなど表示するタグ|エラーがない状態

## テストアップ

GitHubPages に開発したサイトを公開してください。

## 期限

classroomの設定に従う

- 期限当日にエラーが出て見れない、サイトがアップされいない状態はNG
- 実現可能な内容設計と自己管理の元、仕事の感覚で取り組む
- 期限までに検品を終わらせてください

## 相互チェック

- 他のメンバーの公開サイトを見て、バグの指摘や軽微な変更の注文をissueで作成してください
- issue作成者自身が対象リポジトリをForkし、issueに対する対応を行い、本家にプルリクエストを出してください