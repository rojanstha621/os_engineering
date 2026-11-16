# O.S Engineering Nirman Sewa Pvt. Ltd. — Mobile-First Website

A mobile-first corporate website built with React 19, Vite 7, custom CSS and lightweight GSAP scroll animations. The compact layout features architectural photography and preserves the original website sections as a static company profile.

## Quick start — Garuda Linux / Arch Linux (Fish-compatible)

If Node.js and npm are not installed:

```fish
sudo pacman -S nodejs npm
```

Inside the extracted project folder:

```fish
npm install
npm run dev
```

Open the URL printed by Vite, usually `http://localhost:5173`.

For a production build and local preview:

```fish
npm run build
npm run preview
```

For current Vite, use Node.js 20.19+ or 22.12+.

## Features

- Mobile-first responsive layouts (320px through desktop), 44px+ mobile controls, accessible navigation, sensible spacing and reduced-motion treatment.
- Locally hosted architectural hero photograph with responsive WebP sources, priority loading and reserved layout space.
- Screen-height sections: the hero, About, Services, statement, Projects, Materials and Contact each occupy at least the viewport below the sticky header. Taller content expands naturally, including mobile stacks. The capability strip belongs to About; the footer stays compact.
- Up to 1600px of content, fluid 20–36px page gutters, a 70px desktop header and 60–64px section padding. Phones use 20px gutters, 56px section padding and a stacked hero. Anchor navigation aligns section starts below the header, with ordinary scrolling and no forced scroll snapping.
- Company introduction, services, illustrative project cards, materials and equipment, demo contact information.
- GSAP progressive scroll reveal effects, disabled for visitors requesting reduced motion.
- Local SVG illustration if externally hosted stock photography fails.

## IMPORTANT: Everything in the contact area is currently DEMO DATA

All placeholder details are centralized in **`src/data/siteContent.js`**. Current examples are:

- Sample email: `os@gmail.com`
- Sample phone: `+977 9876543210`
- Sample office: `New Baneshwor, Kathmandu, Nepal`
- Sample opening hours: Sunday–Friday, 9:00 AM–5:00 PM
- Social links lead to platform homepages, **not** official company accounts.

These are not verified company details. The UI labels them as demo values and displays phone and email as text, without live calling/email actions.

**Before public launch**: verify the address, phone, email, hours, social pages, and company/service descriptions in `src/data/siteContent.js`; then set `demoMode: false`. Check any company regulatory claims with the company before adding them.

## Projects and images

Project photos in `src/data/siteContent.js` are illustrative Unsplash image URLs, **not** O.S Engineering's confirmed projects. Each card is visibly marked illustrative. Replace them with licensed company project photographs when available, and change the copy/categories accordingly. Use Vite's `public/images/` for locally hosted production photographs. Local SVG fallback: `public/images/construction-fallback.svg`.

The hero uses an illustrative [Unsplash architectural photograph](https://images.unsplash.com/photo-1486406146926-c627a92ad1ab), stored locally as `public/images/hero-architecture-{480,800,1600}.webp`. The three variants are approximately 51KB, 122KB and 364KB. Responsive `srcSet` and `sizes` let browsers select an appropriate file. It is explicitly labelled as illustrative, not company work. No Three.js, React Three Fiber or Drei code remains.

## Static company profile

This is an informational React website, built into static files in `dist/` with Vite. It has no contact form, visitor-data collection, clipboard workflow, email drafting or submission backend. Contact details are displayed as text only. Responsive navigation and lightweight scroll effects remain.

Deploy the production `dist/` directory to a static hosting service.

## Key source files

```
index.html
package.json
public/images/construction-fallback.svg
public/images/hero-architecture-{480,800,1600}.webp
src/main.jsx
src/App.jsx                    # layout, navigation, sections, company information
src/styles.css                # mobile-first design system and responsive CSS
src/data/siteContent.js       # replaceable demo/company content
```

## Suggested checks

- In Chrome/Firefox DevTools, test widths of **320, 360, 390, 430, 768, 1024, 1440 and 1660px** for horizontal overflow, image loading and readable content.
- Test mobile menu link navigation, Escape, tab focus, image fallbacks, and company details.
- In system accessibility settings, enable **Reduce Motion** and ensure scroll reveal effects are disabled and all content remains visible.
- Try network throttling (Slow 4G). The hero should retain its dimensions while the responsive image loads; block its image request to verify the local SVG fallback.

## Production reminder

This project is intended as a **visual demo for a real company** until the details and images are verified. It must not be deployed as a finished factual company website while the demo placeholders remain.
