# Smart Dental Clinic

A responsive Next.js landing page for Smart Dental Clinic in Shafa Badran, Amman, Jordan.

Arabic is the default language. Visitors can switch to English, explore the clinic's services and photos, get directions, call the clinic, or request an appointment through WhatsApp.

## Local development

Use Node.js 22 or newer and pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000.

## Production

```sh
pnpm build
pnpm start
```

Commit the source files, public assets, and pnpm lockfile to GitHub. Generated files, local environment variables, and installed dependencies are excluded by `.gitignore`.

The project can be deployed to a Next.js-compatible host by connecting its GitHub repository. A hosting provider's default public URL can be used without buying a custom domain.
