---
title: 新規事業立ち上げ
description: マルチテナントSaaSアプリケーションの基盤構築
lang: ja
techStack: [Go, Laravel, TypeScript, AWS Lambda, AWS ECS, AWS API Gateway, Open Policy Agent, CircleCI, Docker]
role: リードエンジニア
period: 2018年9月 - 2020年4月
order: 5
---

マルチテナントソフトウェアアーキテクチャの基盤をLaravelで作成し、フロントエンドのSPAをVue.js+Vuexを使って基盤作成。ユニット・インテグレーションテストの基盤は、バックエンドのPHPはPHPUnit、GoはGinkgo、TypeScriptはJestを使い、フロントエンドはTypeScriptでJestを用いたテスト基盤と、Cypressによるe2eテストのテスト基盤を作成。CodecovとCIを連携させ、カバレッジをPRに可視化させて、テストの実装を日常的に促進。さらにCI/CDのパイプラインをCircleCIとCloudFormationを組み合わせ、PR毎にレビュー環境が構築されるように自動化。AWS IAMの簡易版権限管理サービスを、Echo+Open Policy Agent（言語はGo）で作成。権限のモデルとしてはABACを採用。
