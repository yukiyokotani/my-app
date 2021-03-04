# Schema migration
## golang-migrate によるデータベース migration
[リンク: golang-migrate](https://github.com/golang-migrate/migrate) 
### 初回は以下のコマンドによって migration のための SQL を生成する。
[このYouTube動画](https://www.youtube.com/watch?v=0CYkrGIJkpw) が参考になる。  
`./postgres` において以下を実行する。最後はmigrationの名前なので、必ずしも`init_schema` である必要はない。
```
migrate create -ext sql -dir migrations -seq init_schema
```
- `up` と `down` の2つのスクリプトが生成される。  
- `up` のスクリプトには [dbdiagram.io](https://dbdiagram.io/d/5fdf053c9a6c525a03bbb94a) から Export した PostgreSQL 用のテーブル生成の SQL をコピペする。diagram.io の使い方も [このYouTube動画](https://www.youtube.com/watch?v=rx6CPDK_5mU) が参考になる。

  ![Diagram](../images/Hinatazaka.png?raw=true "Screenshot")

- `down` のスクリプトにはテーブルを削除する SQL 文を書いておく。例えば、
  ```sql
  DROP TABLE IF EXISTS members;
  DROP TABLE IF EXISTS discographies;
  ```

### 初回以降の migration
これから調査
## Table Plus (GUIツール) によるデータベース操作
本プロジェクトのルートディレクトリにおいて、
```
docker-compose build
docker-compose up -d
```
してコンテナを起動した状態で、Table Plus に以下の設定を入力して Postgres サーバーに接続する

  ![TablePlusSetting](../images/TablePlusSetting.png?raw=true "Screenshot")
基本的に `.env.example` に入力している情報をそのまま入力する。

  ![TablePlusImage](../images/TablePlusImage.png?raw=true "Screenshot")

  テーブルが作成されていることが確認できる。