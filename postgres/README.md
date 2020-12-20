# Schema migration
## [`golang-migrate`](https://github.com/golang-migrate/migrate) による migration
[このYouTube動画](https://www.youtube.com/watch?v=0CYkrGIJkpw) が参考になる。  
`postgres` において以下を実行する。最後はmigrationの名前なので、`init_schema` である必要はない。
```
migrate create -ext sql -dir migrations -seq init_schema
```
- `up` と `down` の2つのスクリプトが生成される。  
- `up` のスクリプトには dbdiagram.io で生成した PostgreSQL のテーブル生成の [SQL 文](https://dbdiagram.io/d/5fdf053c9a6c525a03bbb94a) をコピペする。diagram.io の使い方も [このYouTube動画](https://www.youtube.com/watch?v=rx6CPDK_5mU) が参考になる。
  ![diagram](../images/Simple_bank.png?raw=true "Screenshot")
- `down` のスクリプトにはテーブルを削除する SQL 文を書いておく。例えば、
  ```sql
  DROP TABLE IF EXISTS entries;
  DROP TABLE IF EXISTS transfers;
  DROP TABLE IF EXISTS accounts;
  ```
