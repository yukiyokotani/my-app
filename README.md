# WEBアプリケーション雛形 (作成中)
![ESLint](https://github.com/yokotani92/my-app/workflows/ESLint/badge.svg)
![Jest](https://github.com/yokotani92/my-app/workflows/Jest/badge.svg)

## 構成
- server-side: Golang
- client-side: React (TypeScript, Next.js)
- db: postgres
- others:
  - using OpenAPI for API definition
  - code generating for go-server and typescript-axios

## メモ
### 単体の起動
- GolangのAPIサーバーは `golang` ディレクトリから以下で起動
```bash
go run main.go
```
- Reactアプリケーションは `react` ディレクトリから以下で起動
```bash
npm run dev
```
- dbはこれから

### 開発環境におけるコンテナの起動
- 事前準備
  - `mkcert` によって localhost 用の `localhost.pem` と `localhostkey.pem` を作成する。 [[参考](https://qiita.com/rkunihiro/items/530b5dc685bd3bff2082)]
  ```
  brew install mkcert // 未インストールの場合のみ
  mkcert --install
  mkcert localhost
  ```
  - 作成した `pem` ファイル `localhost.pem`, `localhost-key.pem` を `./nginx` 下に置く。これで Nginx のリバースプロキシサーバー `https://localhost` に `https` 接続できるようになる。（開発時のクライアントサーバー `http://localhost:3000` は `express` で用意しており、こちらは `https` 接続できないので注意。また、その影響で CORS 制限があり、API リクエストもできないようになっている。）
- 起動の際は `root` で以下を実行
  - 少し時間がかかるが立ち上がったら https://localhost にアクセスする
  - サーバー・クライアントともに保存で再ビルドされ、コンテナを立ち上げなおさずともホットリロードで反映される。
```bash
docker-compose build
docker-compose up -d
```

- 終了の際は
```bash
docker-compose down
```
