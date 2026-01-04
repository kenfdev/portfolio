---
title: 子供向け電子工作学習管理システム
description: コンテナベースのLMS構築
lang: ja
techStack: [Angular, Node.js, ArangoDB, GitLab CI, Selenium Grid, robotframework, Rancher, AWS CloudWatch, AWS Lambda]
role: リードWebアプリケーションフロント兼バックエンドエンジニア
period: 2017年3月 - 2017年12月
order: 8
---

AngularとNgRxを組み合わせて画面表示とビジネスロジックの切り分けを意識したアーキテクチャで開発。お客様の要望の変化にも強いアプリケーションを作成。学習管理システムとしてはCanvasLMSを採用し、独自仕様部分に関してはNode.jsとArangoDBを採用。公開用のAPIとNode.js→CanvasLMSのAPI連携部分の設計を行った。社内仮想環境にRancher（オーケストレーターはCattle）でコンテナのクラスタを作成し, GitLab + GitLab CIを使って社内テスト環境にCI / CDできるパイプラインを構築。また、Selenium Grid + robotframeworkでe2eも回すことで、一定の品質を常に保てるようにした。本番環境もRancherを使用し、リリース時にはMattermostとボットを組み合わせることで人為的ミスの可能性を減らし、容易にリリース作業が行うことができるようにした。
