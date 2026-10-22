# LUXORA JEWELRY — Fine Luxury Jewellery & Sacred Silverware

> A high-performance, responsive luxury e-commerce web application crafted with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. Designed for discerning patrons seeking certified 22K hallmarked gold, 925 sterling silver heirlooms, and sacred silverware.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [Available Scripts](#available-scripts)
- [Design & Aesthetic Guidelines](#design--aesthetic-guidelines)
- [Security & Environment Variables](#security--environment-variables)
- [License](#license)

---

## Overview

**LUXORA JEWELRY** delivers an editorial luxury shopping experience that blends heritage craftsmanship with modern e-commerce capabilities. Built from the ground up for speed, visual elegance, and seamless responsiveness across all screen sizes—from mobile viewports to ultra-wide 4K/5K displays.

---

## Key Features

### 1. Live Precious Metal Rates Bar

- Real-time bullion ticker tracking **24K Gold**, **22K Gold**, **999 Pure Silver**, and **925 Sterling Silver**.
- Visual price direction indicators (`+0.62%`, `+0.45%`, `-0.18%`) with automated updates and verified BIS hallmarking badges.

### 2. Editorial Hero & Category Navigation

- Cinematic visual layout featuring handcrafted heirloom jewellery, classic serif typography, and gold foil divider flourishes.
- Quick navigation discs routing directly into major collections:
  - **22K Gold Jewellery** (Bridal Necklaces, Jhumkas, Royal Kadas, Payals)
  - **925 Sterling Silver** (Solitaire Rings, Ghungroo Payals, Layered Chains)
  - **18K Micron Electroplated** (Cocktail Rings, Summer Anklets, Hoops)
  - **Sacred Silver Utensils** (Puja Thalis, Kalash & Nariyal, Ayurvedic Tumblers)
  - **Consecrated Idols** (Lord Ganesha, Radha Krishna Murti, Bal Gopal)

### 3. Interactive Product Explorer

- **Instant Search:** Dynamic filtering by product title, collection name, or sub-category.
- **Categorization:** Tabbed browsing across all precious metal departments with sub-product chips.
- **Advanced Sorting:** Filter products by _Featured_, _Price: Low to High_, _Price: High to Low_, or _Customer Rating_.
- **Currency Switcher:** Seamless price conversion between **INR (₹)** and **USD ($)**.

### 4. Interactive Drawers & Modals

- **Quick View Modal:** In-depth product view with high-definition image galleries, purity ratings, gross weight specifications, and one-click add to bag.
- **Shopping Bag Drawer:** Slide-out interactive cart with real-time quantity modifiers, item removal, and order subtotal calculations.
- **Wishlist Drawer:** Dedicated patron wishlist management with instant transfer to shopping bag.

### 5. Continuous Infinite Marquee Slider

- **GPU-Accelerated RTL Glide:** 100% continuous right-to-left marquee animation built with CSS transforms, eliminating browser rewind stutter.
- **Ultra-Wide Support:** Continuous multi-track architecture supporting monitors up to 5K resolution without blank gaps.
- **Interactive Pause:** Automatically pauses glide on patron hover for inspection.

### 6. Full-Width Editorial Promotional Banners

- **Crafted for Life's Special Moments:** Dedicated wedding & bridal showcase with travertine stone aesthetics.
- **A Gift That Lasts Forever:** Timeless presentation gift curation with instant navigation to curated collections.

### 7. Patron Trust & Authenticity Badges

- **Ethically Sourced:** 100% conflict-free precious diamonds and gemstones.
- **Certified Quality:** Government-registered BIS 916 & 925 hallmarking on every creation.
- **Sustainable Practices:** Recycled precious metals and ethical artisan ateliers.
- **Trusted by 50K+ Patrons:** Backed by generations of patrons and glowing customer reviews.

### 8. Client Concierge & Bespoke Consultation

- Dedicated client inquiry channel for custom bridal sets, corporate gifting, and private boutique consultations.
- Interactive contact form with direct WhatsApp, phone, and boutique flagship locations.

---

## Tech Stack

| Category            | Technology                                              |
| :------------------ | :------------------------------------------------------ |
| **Framework**       | [Next.js](https://nextjs.org/) 16 (App Router)          |
| **Library**         | [React](https://react.dev/) 19                          |
| **Language**        | [TypeScript](https://www.typescriptlang.org/) 5         |
| **Styling**         | [Tailwind CSS](https://tailwindcss.com/) 4              |
| **Icons**           | [Lucide React](https://lucide.dev/)                     |
| **Code Formatting** | [Prettier](https://prettier.io/)                        |
| **Code Quality**    | [ESLint](https://eslint.org/) (Next.js Core Web Vitals) |

---

## Project Structure

```text
jewellery-page/
├── public/
│   └── images/              # Optimized product, model, and category photography
├── src/
│   ├── app/
│   │   ├── globals.css      # Core theme tokens, CSS keyframes, and base typography
│   │   ├── layout.tsx       # Root layout with Playfair Display and Inter fonts
│   │   └── page.tsx         # Main luxury jewellery store composition
│   ├── components/
│   │   ├── CartDrawer.tsx               # Slide-out interactive shopping bag
│   │   ├── CategoryShowcase.tsx         # Circular collection discs
│   │   ├── Footer.tsx                   # Luxury footer with synchronized navigation
│   │   ├── Header.tsx                   # Sticky navbar with badges & mobile menu
│   │   ├── HeritageCraftsmanship.tsx    # Hallmarking and craftsmanship story
│   │   ├── Hero.tsx                     # Editorial hero banner with model imagery
│   │   ├── InstagramCommunity.tsx       # Infinite continuous RTL marquee
│   │   ├── LiveRateBar.tsx              # Real-time gold & silver metal rate ticker
│   │   ├── Newsletter.tsx               # Bespoke concierge & callback request form
│   │   ├── ProductExplorer.tsx          # Filterable, sortable jewellery catalog
│   │   ├── QuickViewModal.tsx           # Product detail modal with weight & purity
│   │   ├── SpecialMoments.tsx           # Full-width wedding & gifting banners
│   │   ├── Testimonials.tsx             # Verified patron reviews
│   │   └── WishlistDrawer.tsx           # Slide-out saved items drawer
│   └── data/
│       └── jewelleryData.ts # Catalog database, category definitions, and live rates
├── .gitignore               # Ignored files, dependencies, and environment files
├── eslint.config.mjs        # ESLint flat configuration
├── next.config.ts           # Next.js build and image optimization settings
├── package.json             # Project dependencies and script runner
├── tsconfig.json            # TypeScript strict compiler configuration
└── README.md                # Project documentation
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: `v18.18.0` or higher (Node.js 20+ recommended)
- **Package Manager**: `npm` (v9+), `yarn`, or `pnpm`

### Installation

Clone the repository and install the project dependencies:

```bash
# Clone the repository
git clone <repository-url>

# Navigate into the project directory
cd jewellery-page

# Install dependencies
npm install
```

### Development Server

Run the local development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application. The page automatically reloads when modifying files in `src/`.

### Production Build

To create an optimized production build and test it locally:

```bash
# Create production build
npm run build

# Start the production server
npm start
```

---

## Available Scripts

In the project directory, you can run:

| Command                | Description                                                      |
| :--------------------- | :--------------------------------------------------------------- |
| `npm run dev`          | Starts the Next.js development server on `http://localhost:3000` |
| `npm run build`        | Compiles the production application bundle                       |
| `npm run start`        | Launches the built production server                             |
| `npm run lint`         | Runs ESLint to verify code quality and rule compliance           |
| `npm run format`       | Automatically formats all source code using Prettier             |
| `npm run format:check` | Validates that all files comply with Prettier styling            |

---

## Design & Aesthetic Guidelines

- **Color Palette:**
  - Ivory & Warm Cream: `#FAF7F2`, `#FAF5EE`, `#FBF9F5`
  - Royal Antique Gold: `#C59B27`, `#9E7518`, `#A67C1E`
  - Rich Espresso & Obsidian: `#1C1814`, `#1A1815`, `#16120E`
  - Warm Earth & Olive: `#72604D`, `#7D806C`, `#5E4E3D`
- **Typography:**
  - **Playfair Display / Serif:** Headlines, hero banners, and brand emblems.
  - **Inter / Sans-Serif:** Product labels, pricing, specifications, and UI elements.
- **Visual Standards:**
  - Zero placeholder graphics; all photography utilizes high-resolution assets with proper aspect ratios and `sizes` attributes.
  - Smooth micro-interactions and transitions on all buttons, cards, and modal backdrops.

---

## Security & Environment Variables

- **No Sensitive Information:** This codebase contains no embedded API keys, secret credentials, or private database connection strings.
- **Environment Configuration:** If connecting external payment gateways (e.g., Razorpay, Stripe) or CMS backends, copy `.env.example` to `.env.local` and define keys using standard Next.js conventions:
  ```bash
  # Client-exposed variables (if needed)
  NEXT_PUBLIC_STORE_NAME="Luxora Jewelry"
  NEXT_PUBLIC_SUPPORT_EMAIL="concierge@luxorajewelry.com"

  # Server-only secrets (never commit to version control)
  # PAYMENT_GATEWAY_SECRET=""
  # DATABASE_URL=""
  ```
- All `.env*` files are strictly excluded from version control via `.gitignore`.

---

## License

This project is privately developed for **LUXORA JEWELRY**. All rights reserved.
