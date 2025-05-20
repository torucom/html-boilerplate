# HTML Boilerplate for WordPress-integrated LP

このボイラープレートは、WordPressテンプレートに組み込む前提で設計されたランディングページ（LP）用のフロントエンド開発環境です。

## 特徴

* Viteを使用した高速ビルド & ローカル開発環境
* SCSS構成（`reset`, `common`, `variables` による分離）
* Google Fontsや約物フォント（YakuHanJP）に対応
* WordPressテーマ構成を意識した出力ディレクトリ設計
* CSS・JS・フォント・画像を `dist/assets/` 以下に整理

---

## ディレクトリ構成

```text
project-root/
├── index.html              # エントリーポイント
├── vite.config.js          # Vite設定
├── package.json
├── src/                    # 開発用ソース
│   ├── assets/             # フォント・画像など
│   │   ├── fonts/
│   │   └── images/
│   ├── css/                # Sassビルド出力先
│   │   └── style.css
│   ├── js/
│   │   └── main.js         # メインスクリプト
│   └── scss/
│       ├── _reset.scss
│       ├── _common.scss
│       ├── _variables.scss
│       └── main.scss       # Sassのエントリーポイント
└── dist/                   # ビルド出力先
    └── assets/
        ├── css/
        ├── js/
        ├── fonts/
        └── images/
```

---

## 使用技術

* [Vite](https://vitejs.dev/) `^6.1.0`
* Sass `^1.84.0`
* Node.js v18 〜 v22 対応確認済み

---

## コマンド一覧

```bash
npm install       # 初期インストール
npm run dev       # 開発用サーバー起動（ホットリロード）
npm run build     # 本番ビルド（dist/assets/ 以下に出力）
npm run sass      # Sassのwatchモード（style.css を出力）
```

---

## 出力仕様

ビルド時には以下のように `dist/assets/` 以下へ各種ファイルが出力されます：

```text
dist/
└── assets/
    ├── css/       # SassからビルドされたCSS
    ├── js/        # main.jsなどのスクリプト
    ├── fonts/     # @font-faceで使用されるwoff2など
    └── images/    # SCSSやHTMLから参照された画像類
```

---

## フォント設定（例：common.scss内）

```scss
@font-face {
  font-family: 'YakuHanJP';
  src: url('../assets/fonts/YakuHanJP-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

:root {
  --font-base: 'YakuHanJP', 'NotoSansJP', sans-serif;
}

body {
  font-family: var(--font-base);
}
```

---

## ライセンス

MIT

---

## 補足

このテンプレートは、WordPressテーマ用の静的HTML/JS/CSSを生成するためのもので、PHPやテーマ構造は含まれていません。
