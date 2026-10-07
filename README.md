# PhotoRedactor

A free, open-source editor for screenshots, mockups, and social graphics. No signup or watermarks.

## Run locally

Requires Node.js 20.9+ and npm.

```bash
git clone https://github.com/maxmutov-nuriddin/PhotoRedactor.git
cd screenshot-studio
npm ci
printf 'DATABASE_URL="postgresql://localhost:5432/screenshot_studio"\n' > .env
npm run dev
```

Open [localhost:3000](http://localhost:3000). The browser editor needs no running database; `DATABASE_URL` is required by Prisma during startup and builds. Server-side screenshot caching requires PostgreSQL and R2 credentials; see the [cache configuration](./lib/screenshot-cache.ts).

## Contribute

Read [CONTRIBUTING.md](./CONTRIBUTING.md) for the workflow and checks. Built with Next.js, React, TypeScript, Tailwind CSS, and Zustand.

[Apache 2.0 license](./LICENSE) · Supported by the [Vercel OSS Program](https://vercel.com/oss)
