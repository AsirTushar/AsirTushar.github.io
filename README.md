# Asir Intesar Tushar — Academic Website

A multi-page academic portfolio built for GitHub Pages. The persistent top navigation opens separate Home, Research, Teaching, Talks, and CV pages. Publications are included on the Research page, while contact links remain on the Home page.

## Publish at `username.github.io`

1. Create a public GitHub repository named exactly `YOUR-USERNAME.github.io`.
2. Upload this project to the repository and push it to the `main` branch.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. The included workflow will build and publish the site automatically.

The public address will be `https://YOUR-USERNAME.github.io/`.

## Local development

```bash
npm install
npx next dev
```

## Update the content

The content is organized by page:

- Home: `app/page.tsx`
- Research and publications: `app/research/page.tsx`
- Teaching: `app/teaching/page.tsx`
- Talks: `app/talks/page.tsx`
- CV summary and PDF link: `app/cv/page.tsx`
- Shared navigation and footer: `app/components.tsx`
- Colors and layout: `app/globals.css`
- Homepage photograph: `public/asir-intesar-tushar.jpg`

## Add or update the full CV

Name the PDF `Asir_Intesar_Tushar_CV.pdf` and place it inside the `public` folder. Replacing that file later updates the full CV without requiring changes to the CV page.

Before publishing, consider adding any course materials you want to make public.
