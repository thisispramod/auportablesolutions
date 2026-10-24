# AU Portable Solutions — Public Website UI (Phase 1)

> **Portable Spaces. Lasting Solutions.**
> High-performance B2B industrial website for prefabricated structures, portable office cabins, modular container spaces, and pre-engineered buildings.

---

## 🏗️ Brand Identity & Design System

- **Primary Colors:**
  - Navy Blue: `#1E3A5F`
  - Deep Navy (Dark): `#152A45`
  - Teal Green: `#0E9F8C`
  - Light Gray: `#D9DDE3`
  - White: `#FFFFFF`
- **Typography:**
  - Headings & Brand Text: `Montserrat` (400, 500, 600, 700, 800, 900)
  - Body Text: `Inter` (300, 400, 500, 600, 700)
- **Logo:** Authentic brand mark featuring the gable-roof "A" with four window panes and the 3D container corrugated "U", extracted directly from company profile assets with high-fidelity SVG/PNG fallbacks.

---

## 📄 Pages Implemented

1. **Home Page (`/`)**:
   - Sticky header with corporate contact bar, hotline (`+91 __________`), email (`sales@yourdomain.com`), and mobile drawer.
   - Hero banner with headline *"Portable Spaces. Lasting Solutions."*, short description, background imagery, and dual CTAs: *Explore Products* & *Request a Quote*.
   - 4-column Product Categories Grid (Portable Cabins, Container Spaces, Pre-Engineered Buildings, Panels & Doors) with direct filtered links.
   - Featured Products Grid with technical specifications badges and fast quote triggers.
   - About Section with verified Mission & Vision excerpts.
   - "Why Choose Us" 6-point industrial engineering advantage cards.
   - Six-Stage Manufacturing Process timeline (Cutting, Shearing, Bending, Foaming, Finishing, Dispatch).
   - Featured Project Showcase with clear placeholder disclaimers.
   - Industries & Applications Grid (Infrastructure, Commercial, Warehousing, Retail, Mining, Healthcare).
   - Latest Articles preview with read times.
   - Consultation CTA banner & corporate footer.

2. **About Page (`/about`)**:
   - Verified company overview from company profile Page 3.
   - Strict adherence to official text: Mission ("To make a difference...") and Vision ("To reduce project costs by supplying cost-effective portable offices to remote sites...").
   - Verified solution capability matrix across 4 domains.
   - Integrity notice clarifying that corporate registry and presence data await Phase 2 verification.

3. **Products Page (`/products`)**:
   - Filterable product grid with interactive category pills.
   - Real-time search by keyword, dimensions, and application.
   - Separated local sample data module (`src/data/products.ts`) covering all 10 required lines + 2 complementary solutions:
     1. Container Offices
     2. Portable Office Cabins
     3. Security Cabins
     4. Farmhouse Containers
     5. Staff Accommodation
     6. Prefabricated Structures
     7. Pre-Engineered Buildings
     8. Container Cafés
     9. Sandwich Panels
     10. Insulated Doors
     11. Aluminium & Glass Windows
     12. Liftable Bunk Houses

4. **Product Detail Page (`/products/:slug`)**:
   - Dynamic routing matching product slugs.
   - Breadcrumb navigation and interactive image gallery with thumbnail switcher.
   - Technical specifications table (dimensions, framework, insulation, flooring, doors, windows, paint).
   - In-page quotation enquiry form with client-side validation and backend-pending notice.
   - Related products carousel/grid.

5. **Projects Page (`/projects`)**:
   - Visual project showcase with category filters (Offices, Retail, Warehousing, Accommodations).
   - Explicit disclaimer banner: *"Sample Portfolio Showcase - Project details to be confirmed"*.
   - Major Orders Registry table formatted directly after Page 19 of the company profile with sample template entries.

6. **Manufacturing Page (`/manufacturing`)**:
   - Headline *"Production Under One Roof"* directly from profile Page 14.
   - Six fabrication stages: Cutting, Shearing, Bending, Foaming, Finishing, Dispatch.
   - 10 manufacturing machines listed from the profile (Continuous H-Beam welding machine, CNC plasma cutter, continuous sandwich panel line, Cannon foaming machine, shearing machine, C/Z purlin roll-former, CNC punch press, LGSF machine, roof profile line, shot blasting & painting).

7. **Contact Page (`/contact`)**:
   - Responsive enquiry form with client-side validation.
   - Submission state displaying explicit notice: *"Frontend Demo Only: Submission integration is pending backend deployment. No data has been saved or sent to a server."*
   - Verified contact placeholders from company profile (`sales@yourdomain.com`, `+91 __________`).
   - Interactive FAQ accordion for common customer questions.

8. **Blog Page (`/blog`)**:
   - Category-filtered article list.
   - Reusable article cards and interactive full-article modal reader.
   - Clearly marked sample educational guides on modular construction, PUF vs Rockwool vs EPS insulation, and container retail kiosks.

---

## 💻 Tech Stack

- **React 19**
- **TypeScript 5+**
- **Vite 6+**
- **React Router DOM 7**
- **Lucide React** (icons)
- **Pure CSS3 & Custom Variables** (no heavy CSS frameworks)

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
# Opens dev server on http://localhost:3000
```

### Production Build
```bash
npm run build
# Runs type checking (tsc) and generates optimized static bundle in dist/
```

### Preview Production Build
```bash
npm run preview
# Serves the production build on http://localhost:4173
```
