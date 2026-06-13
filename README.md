# Code For People Website

为“工友敲键盘 / 数据平权、AI 下乡”准备的官方网站。

## Tech Stack

- Next.js App Router
- shadcn-style local UI components
- Payload CMS
- Vercel deployment target

## Development

```bash
pnpm install
pnpm dev
```

Public site: http://localhost:3000

Payload admin: http://localhost:3000/admin

## Payload / Vercel

Local development can run on SQLite through `DATABASE_URI=file:./payload.db` or the default
`payload.db` file. Vercel deployments must use Postgres and set:

- `PAYLOAD_SECRET`
- one Postgres URL: `PAYLOAD_DATABASE_URL`, `DATABASE_URL`, `DATABASE_URL_UNPOOLED`,
  `POSTGRES_URL_NON_POOLING`, or `POSTGRES_URL`

Admin bootstrap is intentionally narrow. Set `ALLOW_ADMIN_BOOTSTRAP=true` only long enough to
create the first `/admin` user; after one admin exists, anonymous creation is blocked either way.

For Payload schema changes against Postgres:

```bash
pnpm payload:migrate:create
pnpm payload:migrate
```

`PAYLOAD_DB_PUSH=true` is available for disposable preview environments, but production should use
migrations.
