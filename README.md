# WEBアプリケーション雛形 (作成中)
## 構成
- server-side: golang
- client-side: react (Next.js)
- db: postgres

## メモ
### 単体の起動
- golangのAPIサーバーは `golang` ディレクトリから以下で起動
```bash
go run main.go
```
- reactアプリケーションは `react` ディレクトリから以下で起動
```bash
npm run dev
```
- dbはこれから

### 開発環境におけるコンテナの起動
- 起動の際は `root` で以下を実行
  - 少し時間がかかるが立ち上がったら http://localhost:3000/ にアクセスする
  - サーバー・クライアントともに保存で再ビルドされ、コンテナを立ち上げなおさずとも反映される
```bash
docker-compose build
docker-compose up -d
```

- 終了の際は
```bash
docker-compose down
```