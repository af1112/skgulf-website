# SK-GULF Website — Complete Image Placement Guide

All images go in: `public/images/`
Preferred format: `.jpg` or `.webp`
All images are automatically optimized by Next.js.

---

## 1. Logo & Favicon

| File | Location | Size | Notes |
|------|----------|------|-------|
| `logo.webp` | `public/images/logo.webp` | 200×60 px | Optimized WebP logo, used in header navbar |
| `hero.webp` | `public/images/hero.webp` | 800×1000 px | Main hero image |
| `favicon.ico` | `public/favicon.ico` | 32×32 px | Browser tab icon — goes in `public/` root! |
| `apple-icon.png` | `public/apple-icon.png` | 180×180 px | Apple device bookmark icon — goes in `public/` root! |
| `og-image.jpg` | `public/og-image.jpg` | 1200×630 px | Social media share preview — goes in `public/` root! |

---

## 2. Hero Section (Top of Page)

| File | Size | Notes |
|------|------|-------|
| `hero.webp` | 800×1000 px (portrait 4:5) | Main hero image — energy/industrial scene, high quality |

To activate: Already configured in `src/components/home-content.tsx` to load `/images/hero.webp`

---

## 3. Markets Section (3 Cards)

| File | Size | Notes |
|------|------|-------|
| `market-oil-gas.webp` | 800×1067 px (3:4) | Oil & Gas Contracting card |
| `market-renewable.webp` | 800×1067 px (3:4) | Renewable Energy card |
| `market-ai.jpg` | 800×1067 px (3:4) | AI & Smart Systems card (Fallback URL) |

To activate: Configured in `src/components/home-content.tsx`

---

## 4. Capabilities Section (Tab Images)

| File | Size | Notes |
|------|------|-------|
| `cap-01.webp` to `cap-06.webp` | 800×600 px (4:3) | Place in `public/images/` |

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
| `project-01.webp` to `project-06.webp` | 600×600 px | Already configured to load from `/images/project-XX.webp` |

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
