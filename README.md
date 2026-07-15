# 自己紹介サイト

HTML / CSS / JavaScript（バニラ）で作成したプロフェッショナルな自己紹介サイトです。

## ファイル構成

```
site/
├── index.html        # メインページ
├── style.css         # スタイルシート
├── script.js         # フェードインアニメーション
├── assets/
│   └── profile.jpg   # プロフィール写真（差し替えてください）
└── .gitignore
```

## 使い方

### プロフィール情報の変更

`index.html` を開き、以下の箇所を自分の情報に書き換えてください。

| 場所 | 変更内容 |
|---|---|
| `<h1 class="profile-name">` | 自分の名前 |
| `<p class="profile-title">` | 肩書き・職種 |
| `<p class="profile-bio">` | 自己紹介文 |
| `assets/profile.jpg` | 自分の顔写真ファイル |

### GitHub Pages へのデプロイ手順

1. **GitHub にリポジトリを作成する**
   - [github.com/new](https://github.com/new) からリポジトリを新規作成
   - リポジトリ名は任意（例: `my-profile`）

2. **ファイルをプッシュする**

   ```bash
   cd site
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
   git push -u origin main
   ```

3. **GitHub Pages を有効にする**
   - リポジトリの **Settings** タブを開く
   - 左サイドバーの **Pages** をクリック
   - **Source** を `Deploy from a branch` に設定
   - **Branch** を `main` / `/ (root)` に設定して **Save**

4. **公開 URL を確認する**
   - 数分後に `https://<ユーザー名>.github.io/<リポジトリ名>/` でアクセス可能になります
