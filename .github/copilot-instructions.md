# GitHub Copilot Instructions for Portal KGTK Gorontalo

You are working on the **Portal Kantor Guru dan Tenaga Kependidikan (KGTK) Provinsi Gorontalo**, under the **Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen RI)**.

Detailed project architecture, domain data, and guidelines are thoroughly documented in [context.md](../context.md).

## Key Guidelines

1. **Domain Context**:
   - Official institution: **KGTK Gorontalo** (formerly BGP Gorontalo, updated per Permendikdasmen No. 5 Tahun 2025).
   - Official reference site: `https://kgtkgorontalo.kemendikdasmen.go.id/`.
   - UI language must be formal Indonesian (Bahasa Indonesia baku kedinasan).
   - Do NOT use generic placeholder data or generic AI-slop marketing copy. Maintain factual information regarding training programs (BCKS, PM-KKA, PKGSD, Deep Learning, KKA), official contacts, and services.

2. **Tech Stack & Conventions**:
   - **React 19** with JSX.
   - **Vite 6** with `base: "./"` for GitHub Pages compatibility.
   - **Tailwind CSS v3** for all styling. Rely strictly on Tailwind utility classes.
   - **Inline SVG icons**: Keep all icons as inline, zero-dependency SVG functional components.
   - **Typography**: Inter font.

3. **Code Quality**:
   - When refactoring `App.jsx` into smaller components (e.g., in `src/components/`), preserve all existing data and props.
   - Keep components responsive across mobile, tablet, and desktop screens.
   - Retain smooth scrolling and accessibility standards.

