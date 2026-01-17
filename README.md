# Cloudflare Workers + D1 + Next.js サンプル

このリポジトリは **Cloudflare Workers 上で Next.js App Router を動かし、D1 Database を Drizzle ORM で操作する** 最小かつ実践的なサンプルです。

* ローカル環境のみで動作
* D1（SQLite）を使用
* Drizzle ORM による型安全な DB 操作
* Next.js App Router + Edge Runtime

---

## ✨ 特徴

* Cloudflare Workers 実行環境
* D1 Database（ローカル / 本番対応）
* Drizzle ORM（型安全）
* API 実装（GET / POST）
* マイグレーション管理

---

## 📦 技術スタック

* **Runtime**: Cloudflare Workers
* **Framework**: Next.js (App Router)
* **Database**: Cloudflare D1 (SQLite)
* **ORM**: Drizzle ORM
* **Dev Tool**: Wrangler

---

## 📁 ディレクトリ構成

```
.
├─ app/api/todos/route.ts   # API Route
├─ drizzle/
│  ├─ schema.ts             # Drizzle schema
│  └─ migrations/           # SQL migrations
├─ src/lib/db.ts            # DB helper
├─ wrangler.toml
├─ drizzle.config.ts
└─ package.json
```

---

## 🚀 セットアップ（ローカル）

### 1. 依存関係のインストール

```bash
npm install
```

### 2. D1 マイグレーション生成

```bash
npx drizzle-kit generate
```

### 3. ローカル D1 にマイグレーション適用

```bash
npx wrangler d1 migrations apply local-db --local
```

### 4. 開発サーバ起動

```bash
npm run dev
```

---

## 🔌 API エンドポイント

### GET /api/todos

全ての TODO を取得します。

```bash
curl http://localhost:8787/api/todos
```

### POST /api/todos

TODO を追加します。

```bash
curl -X POST http://localhost:8787/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Buy milk"}'
```

---

## ⚠️ 注意点（重要）

* D1 マイグレーション適用後は **必ず `wrangler dev` を再起動**してください
* Route Handler では `getCloudflareContext()` を使用しません
* `env.DB` は **実行時のみ存在**します（型には書きません）

---

## 📄 License

MIT License

---

---

# Cloudflare Workers + D1 + Next.js Sample

This repository is a **minimal and practical example** of running **Next.js App Router on Cloudflare Workers** and using **D1 Database with Drizzle ORM**.

* Runs entirely in local development
* Uses D1 (SQLite)
* Type-safe database access with Drizzle ORM
* Next.js App Router + Edge Runtime

---

## ✨ Features

* Cloudflare Workers runtime
* D1 Database (local / production)
* Drizzle ORM (type-safe)
* API routes (GET / POST)
* Migration management

---

## 📦 Tech Stack

* **Runtime**: Cloudflare Workers
* **Framework**: Next.js (App Router)
* **Database**: Cloudflare D1 (SQLite)
* **ORM**: Drizzle ORM
* **Dev Tool**: Wrangler

---

## 📁 Project Structure

```
.
├─ app/api/todos/route.ts   # API Route
├─ drizzle/
│  ├─ schema.ts             # Drizzle schema
│  └─ migrations/           # SQL migrations
├─ src/lib/db.ts            # DB helper
├─ wrangler.toml
├─ drizzle.config.ts
└─ package.json
```

---

## 🚀 Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Generate migrations

```bash
npx drizzle-kit generate
```

### 3. Apply migrations to local D1

```bash
npx wrangler d1 migrations apply local-db --local
```

### 4. Start development server

```bash
npm run dev
```

---

## 🔌 API Endpoints

### GET /api/todos

Fetch all TODO items.

```bash
curl http://localhost:8787/api/todos
```

### POST /api/todos

Create a new TODO item.

```bash
curl -X POST http://localhost:8787/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Buy milk"}'
```

---

## ⚠️ Important Notes

* Always **restart `wrangler dev` after applying migrations**
* Do not use `getCloudflareContext()` in Route Handlers
* `env.DB` exists **only at runtime** (do not type it explicitly)

---

## 📄 License

MIT License

