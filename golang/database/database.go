package database

import (
	"fmt"
	"log"
	"os"
	"strings"

	"github.com/jmoiron/sqlx"
	"github.com/jmoiron/sqlx/reflectx"
	_ "github.com/lib/pq"
)

// データベースへの接続をグローバル変数に格納
var DB *sqlx.DB

func SetUp() {
	var err error
	log.Printf("Server started")

	str := buildConnectionString()
	DB, err = sqlx.Open("postgres", str)
	if err != nil {
		return
	}

	DB.Mapper = reflectx.NewMapperFunc("json", strings.ToLower)

	err = DB.Ping()
	if err != nil {
		return
	}

	if err != nil {
		fmt.Println(err)
	}

	// モックデータの投入
	DB.QueryRow("INSERT INTO members (name, age) VALUES ($1, $2)", "小坂菜緒", 18)
	DB.QueryRow("INSERT INTO members (name, age) VALUES ($1, $2)", "佐々木美玲", 21)
	DB.QueryRow("INSERT INTO members (name, age) VALUES ($1, $2)", "高本彩花", 22)
	DB.QueryRow("INSERT INTO members (name, age) VALUES ($1, $2)", "丹生明里", 19)
	DB.QueryRow("INSERT INTO members (name, age) VALUES ($1, $2)", "影山優佳", 19)

	return
}

func buildConnectionString() string {
	user := os.Getenv("POSTGRES_USER")
	pass := os.Getenv("POSTGRES_PASSWORD")
	if user == "" || pass == "" {
		log.Fatalln("You must include POSTGRES_USER and POSTGRES_PASSWORD environment variables")
	}
	host := os.Getenv("POSTGRES_HOST")
	port := os.Getenv("POSTGRES_PORT")
	dbname := os.Getenv("POSTGRES_DB")
	if host == "" || port == "" || dbname == "" {
		log.Fatalln("You must include POSTGRES_HOST, POSTGRES_PORT, and POSTGRES_DB environment variables")
	}

	return fmt.Sprintf("postgres://%s:%s@%s:%s/%s?sslmode=disable", user, pass, host, port, dbname)
}
