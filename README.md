# Asir Intesar Tushar — Academic Website

A research-first academic portfolio built for GitHub Pages. Research, publications, teaching, talks, honors, and contact links are available from the persistent top navigation.

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

Most content is in `app/page.tsx`. Colors and layout are in `app/globals.css`.

Before publishing, consider adding:

- your CV PDF under `public/Asir_Intesar_Tushar_CV.pdf`;
- a verified Google Scholar or ORCID link;
- a professional portrait if desired;
- any course materials you want to make public.

After adding a CV, add a navigation link with `href="/Asir_Intesar_Tushar_CV.pdf"`.
