# Espino's Home Repairs 🛠️🏡
### Fuquay-Varina Handyman & Remodeling

A modern, high-performance, mobile-responsive multi-page React website for **Espino's Home Repairs** in Fuquay-Varina, NC. Built strictly according to the official specification document with seamless online photo-quote intake, transparent hourly/package pricing, interactive before/after sliders, and custom craftsman branding.

---

## 🌟 Key Features

- **Multi-Page Architecture (React Router v6):**
  - **Home (`/`):** Full hero section, rapid photo-quote CTA, core services grid, upfront pricing overview, interactive punch-list calculator, before/after showcase, neighbor testimonials, and trust badges.
  - **Services (`/services`):** Comprehensive breakdown of all 5 core specialties (Drywall Repair, Door & Window Fixes, Trim & Finish Carpentry, Interior Painting, Minor Plumbing) with capability checklists and time estimates.
  - **Rates & Packages (`/pricing`):** Standard Hourly Rate ($75/hr, 2-hr min), Half-Day Package ($270 for 4 hrs), Full-Day Package ($520 for 8 hrs), materials policy, comparison table, and pricing FAQ.
  - **Photo Quote Intake (`/quote`):** Production-ready 6-field quote form supporting drag-and-drop & mobile camera uploads (JPG, PNG up to 10MB, max 3 photos), image preview removal, Fuquay neighborhood quick-select pills, and confirmation modal with instant reference ID.
  - **Before & After Gallery (`/gallery`):** Interactive dual-image comparison sliders showcasing real repairs across Fuquay-Varina communities.
  - **Our Story (`/about`):** Local word-of-mouth roots, craftsmanship philosophy, 1-year labor guarantee, and community coverage.
  - **Contact (`/contact`):** Direct one-click calling, SMS texting, working hours (Mon–Sat 7:30 AM – 6:00 PM), and zero-travel-fee service map.

- **Mobile First & Sticky Mobile Action Bar:**
  - Pinned bottom action bar on mobile devices featuring **Call Now** (Green) and **Text Now** (Blue) with instant dialer and pre-filled SMS prompts.
  - Responsive hamburger drawer navigation with safe-area spacing for notch devices.

- **Custom Craftsman Logo Suite:**
  - Distinctive craftsman shield logo featuring roof gable, precision crossed tools (hammer & wrench), and center star emblem in craftsman navy (`#11233B`), warm copper/amber (`#E28723`), and gold accents.
  - Formats: `public/logo.svg`, `public/logo-mark.svg`, `public/favicon.svg`, `public/og-image.svg`, and reusable React component `src/components/Logo.jsx`.

- **SEO & Performance:**
  - Tailored SEO metadata for Fuquay-Varina & South Wake County, NC.
  - Full OpenGraph & Twitter preview tags.
  - `sitemap.xml`, `robots.txt`, and Google Fonts preconnects.
  - Fully pre-configured for Vercel SPA routing via `vercel.json`.

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite 5
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS 3 with custom color tokens & typography
- **Icons:** Lucide React
- **Hosting Target:** Vercel (Production SPA rewrite ready)

---

## 🚀 Local Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Dev Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

3. **Build Production Bundle:**
   ```bash
   npm run build
   ```
   Generates optimized static assets in the `/dist` directory.

---

## 📦 Pushing to GitHub

The repository is already initialized with a clean initial commit. To push to your GitHub account:

1. **Create a new repository** on GitHub (e.g. `espinos-home-repairs`):
   - You can create it at [github.com/new](https://github.com/new) (Leave it blank, do not initialize with README or license).

2. **Link and Push:**
   ```bash
   # Add your remote repository URL (replace with your GitHub username)
   git remote add origin https://github.com/YOUR_USERNAME/espinos-home-repairs.git

   # Push to main branch
   git branch -M main
   git push -u origin main
   ```

---

## ▲ Deploying to Vercel

This repository is 100% Vercel-ready with `vercel.json` configured for client-side routing.

### Option 1: Via Vercel Web Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** > **"Project"**.
3. Select your GitHub repository (`espinos-home-repairs`) and click **Import**.
4. Vercel automatically detects **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Your website will be live in ~30 seconds with a free `.vercel.app` domain and free SSL!

### Option 2: Via Vercel CLI
```bash
# Run Vercel CLI directly via npx
npx vercel

# Follow the on-screen prompts:
# - Set up and deploy? [Y]
# - Which scope? [Select your account]
# - Link to existing project? [N]
# - Project name? [espinos-home-repairs]
# - Directory? [./]

# For production deployment:
npx vercel --prod
```

---

## 📁 Project Structure

```
Espino's Home Repairs/
├── public/
│   ├── favicon.svg            # Browser tab craftsman icon
│   ├── logo.svg               # Full brand horizontal logo
│   ├── logo-mark.svg          # Standalone crest logo mark
│   ├── og-image.svg           # Social share banner (1200x630)
│   ├── robots.txt             # Search crawler directives
│   └── sitemap.xml            # Google sitemap
├── src/
│   ├── components/
│   │   ├── Logo.jsx           # Dynamic SVG brand logo component
│   │   ├── Navbar.jsx         # Header with desktop/mobile navigation & CTAs
│   │   ├── Footer.jsx         # Footer with required legal & area copy
│   │   ├── StickyMobileBar.jsx# Fixed mobile bar (Call / Text)
│   │   ├── QuoteForm.jsx      # 6-Field photo intake form with file drag-and-drop
│   │   ├── ServiceCard.jsx    # Card with capabilities, price & quote link
│   │   ├── RateCalculator.jsx # Interactive punch list estimator
│   │   ├── BeforeAfterSlider.jsx # Interactive before/after photo slider
│   │   └── ScrollToTop.jsx    # Smooth route scroll handler
│   ├── pages/
│   │   ├── HomePage.jsx       # Hero, services, rates, form & reviews
│   │   ├── ServicesPage.jsx   # All 5 core services in depth
│   │   ├── PricingPage.jsx    # Hourly & package rates with comparison
│   │   ├── QuotePage.jsx      # Dedicated rapid photo quote intake
│   │   ├── GalleryPage.jsx    # Filterable repair portfolio
│   │   ├── AboutPage.jsx      # Word-of-mouth neighbor story
│   │   └── ContactPage.jsx    # Direct phone, text, hours & service map
│   ├── data/
│   │   └── content.js         # Single source of truth for all business details
│   ├── App.jsx                # Router configuration
│   ├── main.jsx               # Entry point
│   └── index.css              # Tailwind and typography styling
├── index.html                 # SEO title & meta specifications
├── tailwind.config.js         # Custom brand colors & fonts
├── vite.config.js             # Vite build configuration
├── vercel.json                # Single Page App rewrites for Vercel
└── package.json
```

---

## 📄 License & Ownership

© 2026 Espino's Home Repairs. Serving Fuquay-Varina, NC and surrounding areas. Locally owned and operated.
