# First Payload Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first visible Chinese official website for Code For People, with Payload included from the first iteration.

**Architecture:** Use a single Next.js App Router application. Payload CMS is mounted in the same app under `/admin` and `/api`, with local file/database defaults for development and static seed content used by the public pages in this first PR.

**Tech Stack:** Next.js, React, TypeScript, Payload CMS 3, SQLite adapter for local-first setup, Tailwind CSS 4, Playwright.

---

## File Structure

- Create `package.json`: root app scripts and dependencies.
- Create `next.config.ts`: wraps Next config with Payload.
- Create `payload.config.ts`: Payload config with SQLite and initial collections.
- Create `src/payload/collections/SiteDocuments.ts`: CMS collection for manifesto/license/map content.
- Create `src/payload/collections/FormLinks.ts`: CMS collection for Tencent form link records.
- Create `src/app/(payload)/...`: Payload admin and API route group.
- Create `src/app/(site)/...`: public homepage and deep-read routes.
- Create `src/content/site.ts`: first-iteration copy from `ideal`.
- Create `src/app/globals.css`: restrained visual system.
- Create `tests/e2e/site.spec.ts`: first Playwright coverage for homepage and deep links.

## Task 1: Scaffold Next + Payload

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `payload.config.ts`
- Create: `src/payload/collections/SiteDocuments.ts`
- Create: `src/payload/collections/FormLinks.ts`
- Create: `src/app/(payload)/layout.tsx`
- Create: `src/app/(payload)/admin/[[...segments]]/page.tsx`
- Create: `src/app/(payload)/api/[...slug]/route.ts`

- [ ] **Step 1: Create package metadata and config**

Use Next App Router, Payload, SQLite, Tailwind, and Playwright dependencies.

- [ ] **Step 2: Create Payload config**

Define `site-documents` and `form-links` collections. Use SQLite via `@payloadcms/db-sqlite`, defaulting to `file:./payload.db`.

- [ ] **Step 3: Create Payload route group**

Mount Payload admin and REST API using `@payloadcms/next`.

- [ ] **Step 4: Run install and build**

Run: `pnpm install && pnpm build`

Expected: build succeeds or surfaces configuration issues to fix before public pages.

## Task 2: Public Site Content and Routes

**Files:**
- Create: `src/content/site.ts`
- Create: `src/app/globals.css`
- Create: `src/app/(site)/layout.tsx`
- Create: `src/app/(site)/page.tsx`
- Create: `src/app/(site)/manifesto/page.tsx`
- Create: `src/app/(site)/license/page.tsx`
- Create: `src/app/(site)/map/page.tsx`

- [ ] **Step 1: Write failing E2E test first**

Test that the homepage contains:
- `软件也是一种服务，为何不还给人民`
- `我们是一群用键盘搬砖的人`
- CTA labels `我想一起做事`, `我有真实需求`, `提出批评`
- links to `/manifesto`, `/license`, `/map`

- [ ] **Step 2: Verify the test fails**

Run: `pnpm test:e2e`

Expected: fails because pages do not exist yet.

- [ ] **Step 3: Implement public routes**

Build a mobile-first homepage focused on service objects, with a clear hero, participation entrances, direction-map summary, and three deep-read cards.

- [ ] **Step 4: Verify tests and build**

Run: `pnpm test:e2e && pnpm build`

Expected: both pass.

## Task 3: Local Preview, PR, Review, Merge

**Files:**
- Modify as needed from Tasks 1-2 only.

- [ ] **Step 1: Run local dev server**

Run: `pnpm dev`

Open the site in the in-app browser at `http://localhost:3000`.

- [ ] **Step 2: Check responsive UI**

Inspect desktop and mobile viewport screenshots. Confirm no blank page, no obvious overlap, and CTA links are visible.

- [ ] **Step 3: Commit and push branch**

Run:

```bash
git add .
git commit -m "feat: add first Payload-backed website"
git push -u origin codex/first-payload-site
```

- [ ] **Step 4: Open draft PR**

Open a draft PR from `codex/first-payload-site` into `main`.

- [ ] **Step 5: Run sub-agent review**

Request a review focused on:
- Payload integration correctness
- service-object-first homepage copy
- mobile layout risks
- obvious build or routing issues

- [ ] **Step 6: Address review and merge**

Fix Critical/Important findings. Re-run `pnpm test:e2e && pnpm build`. Merge after the branch is reviewed and verified.

## Self-Review

- Spec coverage: First iteration covers Payload requirement, service-object-first homepage, three deep-read routes, PR workflow, local visual inspection.
- Placeholder scan: The Tencent form URL is intentionally a configurable placeholder in code until the real Tencent form exists; the UI must label it as “腾讯表单待接入” rather than pretend it works.
- Scope check: This PR does not build full CMS editing workflows or production deployment. Those belong in later PRs after the first visual review.
