// NOTE: Tutorial URL https://go.dev/doc/tutorial/getting-started

// メインパッケージを宣言
package main

// Go標準ライブラリパッケージの1つで人気パッケージとの事
import "fmt"

// pkg.go.devにあるquoteパッケージを呼び出す。
import "rsc.io/quote"

func main() {
		// rsc.io/quoteモジュールの「Go」関数を使用
    fmt.Println(quote.Go())
}
