# SK-GULF Website — Complete Image Placement Guide

All images go in: `public/images/`
Preferred format: `.jpg` or `.webp`
All images are automatically optimized by Next.js.

---

## 1. Logo & Favicon

| File | Location | Size | Notes |
|------|----------|------|-------|
| `logo.png` | `public/images/logo.png` | 200×60 px | Transparent PNG, used in header navbar |
| `logo-white.png` | `public/images/logo-white.png` | 200×60 px | White version for dark footer (optional) |
| `favicon.ico` | `public/favicon.ico` | 32×32 px | Browser tab icon — goes in `public/` root! |
| `apple-icon.png` | `public/apple-icon.png` | 180×180 px | Apple device bookmark icon — goes in `public/` root! |
| `og-image.jpg` | `public/og-image.jpg` | 1200×630 px | Social media share preview — goes in `public/` root! |

---

## 2. Hero Section (Top of Page)

| File | Size | Notes |
|------|------|-------|
| `hero.jpg` | 800×1000 px (portrait 4:5) | Main hero image — energy/industrial scene, high quality |

To activate: Replace Unsplash URL in `src/app/page.tsx` line ~167 with `/images/hero.jpg`

---

## 3. Markets Section (3 Cards)

| File | Size | Notes |
|------|------|-------|
| `market-oil-gas.jpg` | 800×1067 px (3:4) | Oil & Gas Contracting card |
| `market-renewable.jpg` | 800×1067 px (3:4) | Renewable Energy card |
| `market-ai.jpg` | 800×1067 px (3:4) | AI & Smart Systems card |

To activate: Replace Unsplash URLs in `src/app/page.tsx` lines ~12, ~17, ~22

---

## 4. Capabilities Section (6 Tab Images)

| File | Size | Notes |
|------|------|-------|
| `cap-01-energy.jpg` | 800×600 px (4:3) | Energy & Chemicals |
| `cap-02-renewables.jpg` | 800×600 px (4:3) | Renewables, Power & Water |
| `cap-03-pipelines.jpg` | 800×600 px (4:3) | Pipelines & Flow Systems |
| `cap-04-buildings.jpg` | 800×600 px (4:3) | Buildings & Industrial |
| `cap-05-integrity.jpg` | 800×600 px (4:3) | Asset Integrity & HSE |
| `cap-06-digital.jpg` | 800×600 px (4:3) | Digital & Low Carbon |

To activate: Replace Unsplash URLs in `src/components/capability-showcase.tsx` lines ~21, ~27, ~33, ~39, ~45, ~51

---

## 5. Technologies Section

| File | Size | Notes |
|------|------|-------|
| `tech-innovation.jpg` | 800×600 px (4:3) | AI/robotics/digital engineering image |

To activate: Replace Unsplash URL in `src/app/page.tsx` line ~299

---

## 6. Asset Integrity Section

| File | Size | Notes |
|------|------|-------|
| `asset-integrity.jpg` | 800×600 px (4:3) | Smart monitoring/inspection scene |

To activate: Replace Unsplash URL in `src/app/page.tsx` line ~318

---

## 7. Projects Gallery (6 Images)

| File | Size | Notes |
|------|------|-------|
| `project-01.jpg` | 600×600 px (1:1 square) | Upstream Gas Processing Facility |
| `project-02.jpg` | 600×600 px (1:1 square) | Solar Power Plant |
| `project-03.jpg` | 600×600 px (1:1 square) | Refinery Turnaround & Maintenance |
| `project-04.jpg` | 600×600 px (1:1 square) | Pipeline Integrity Program |
| `project-05.jpg` | 600×600 px (1:1 square) | AI-Driven Asset Monitoring |
| `project-06.jpg` | 600×600 px (1:1 square) | Industrial Buildings & Facilities |

These are already configured to load from `/images/project-XX.jpg`. Just place the files!
Project titles & descriptions: edit in `src/app/page.tsx` — the `projects` array starting around line 35.

---

## 8. Vision Section

| File | Size | Notes |
|------|------|-------|
| `vision-sustainability.jpg` | 800×600 px (4:3) | Sustainable energy/green landscape |

To activate: Replace Unsplash URL in `src/app/page.tsx` line ~418

---

## TOTAL: 20 images to prepare

| Category | Count |
|----------|-------|
| Logo & branding | 2 (+3 in public root) |
| Hero | 1 |
| Markets | 3 |
| Capabilities | 6 |
| Technologies | 1 |
| Asset Integrity | 1 |
| Projects | 6 |
| Vision | 1 |
