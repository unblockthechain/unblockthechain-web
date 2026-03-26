**Unblock the Chain** — Web3 security audits, smart contract assurance, and RWA tokenization for enterprises.

This is a [Next.js](https://nextjs.org/) project using [shadcn/ui](https://ui.shadcn.com) with a custom theme. To customize the theme visually, use [tweakcn](https://tweakcn.com): design at [tweakcn.com/editor/theme](https://tweakcn.com/editor/theme), then copy the exported CSS variables into `app/globals.css` (replace the `:root` and `.dark` blocks in `@layer base`).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Audit request form (Typeform via API)

The site reads the public form URL from **`lib/audit-form-url.ts`** first, then **`NEXT_PUBLIC_AUDIT_FORM_URL`**, then falls back to **#contact**.

**Create the Typeform and write the URL into the repo (one-time):**

1. Create a [Typeform personal access token](https://admin.typeform.com/account#/section/tokens) (scopes: create forms).
2. Run:
   ```bash
   export TYPEFORM_ACCESS_TOKEN="tfp_..."
   npm run create:audit-form
   ```
3. Commit **`lib/audit-form-url.ts`** (it will contain `https://form.typeform.com/to/...`) and deploy.

Alternatively, paste any public form URL into **`.env.local`** as `NEXT_PUBLIC_AUDIT_FORM_URL` (e.g. [Tally](https://tally.so)) and add the same in Netlify **Environment variables**.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy (free hosting)

1. **Create a GitHub repo** (if you don’t have one yet): on [github.com](https://github.com/new) create a repo (e.g. `unblockthechain-web`), then in this folder run:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/unblockthechain-web.git
   git push -u origin main
   ```
2. Connect the repo to **Vercel** or **Netlify** below for free hosting.

### Option 1: Vercel (recommended for Next.js)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New** → **Project** and import your **unblockthechain-web** (or your repo name) from GitHub.
3. Leave **Build Command** as `npm run build` (or `yarn build`). **Root Directory** empty.
4. If you use Sanity, add your env vars (e.g. `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`) in **Environment Variables**.
5. Click **Deploy**. You’ll get a URL like `https://your-project.vercel.app`. Custom domain can be added in Project Settings.

No config file required; Vercel detects Next.js automatically.

### Option 2: Netlify

1. Go to [netlify.com](https://www.netlify.com) and sign in with GitHub.
2. Click **Add new site** → **Import an existing project** → **GitHub** and choose your repo.
3. **Build command:** `npm run build` (or `yarn build`). **Publish directory:** leave as default (the `netlify.toml` and Next.js plugin handle it).
4. Add Sanity env vars under **Site settings** → **Environment variables** if needed.
5. Click **Deploy site**. You’ll get a URL like `https://random-name.netlify.app`. Custom domain in **Domain management**.

This repo includes `netlify.toml` and uses `@netlify/plugin-nextjs` for Next.js support on Netlify.

### Netlify CLI — check deploy status

Install the CLI and link your site to see status and open the live URL:

```bash
# Install Netlify CLI (global)
npm install -g netlify-cli
# or
yarn global add netlify-cli

# Log in (opens browser)
netlify login

# Link this folder to your Netlify site (use your Site ID from Netlify dashboard)
netlify link

# Check deploy status and open live site
netlify status
netlify open:site
```

To deploy from your machine (optional; CI already deploys on push):

```bash
npm run build
netlify deploy --prod --dir=out
```

### Add site to Cloudflare (custom domain + DNS)

Use Cloudflare for DNS and optional proxy in front of Netlify:

1. **Netlify:** In [Netlify](https://app.netlify.com) → your site → **Domain management** → **Add custom domain** → add `unblockthechain.com` (or your domain). Note the **Netlify subdomain** (e.g. `random-name.netlify.app`).

2. **Cloudflare:** In [Cloudflare Dashboard](https://dash.cloudflare.com) → your domain (or add the site) → **DNS** → **Records**:
   - Add a **CNAME** record:
     - **Name:** `@` (root) or `www` (for www)
     - **Target:** `YOUR-SITE-NAME.netlify.app` (from Netlify)
     - **Proxy status:** Proxied (orange cloud) for CDN + SSL, or DNS only (grey) if you prefer.

3. **Netlify SSL:** In Netlify → **Domain management** → **HTTPS** → **Verify DNS configuration**. Netlify will issue the certificate once the CNAME is active.

4. **Optional — Cloudflare Pages:** If you prefer to host on Cloudflare Pages instead of Netlify, connect the same GitHub repo in [Cloudflare Pages](https://dash.cloudflare.com/pages), set build command `npm run build` and output directory `out`, then add your custom domain there.
