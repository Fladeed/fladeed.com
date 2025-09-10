# GitHub Pages Deployment Guide

This guide will help you deploy your Fladeed landing page to GitHub Pages.

## Prerequisites

- GitHub account
- Repository with the Fladeed landing page code

## Steps to Deploy

### 1. Push Code to GitHub

```bash
git add .
git commit -m "Add Fladeed landing page with GitHub Pages configuration"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **"GitHub Actions"**

### 3. Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:

1. **Trigger** on every push to the `main` branch
2. **Install** Node.js 18 and dependencies
3. **Build** the Next.js app as a static export
4. **Configure** GitHub Pages settings
5. **Deploy** to GitHub Pages

The workflow combines build and deployment in a single job for reliability.

### 4. Access Your Site

After the workflow completes (usually 2-3 minutes), your site will be available at:

```
https://[your-username].github.io/[repository-name]
```

For example:
- Username: `fladeed`
- Repository: `landing-page`
- URL: `https://fladeed.github.io/landing-page`

## Workflow Status

You can monitor the deployment status:

1. Go to the **Actions** tab in your repository
2. Click on the latest workflow run
3. Watch the build and deploy steps

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update repository settings under **Pages** > **Custom domain**

## Troubleshooting

### Build Fails
- Check the Actions tab for error details
- Ensure all dependencies are listed in `package.json`
- Verify the build works locally with `npm run build`

### Site Not Loading
- Wait a few minutes after deployment
- Check if the repository is public
- Verify GitHub Pages is enabled in repository settings

### Missing Files
- Ensure all files are committed and pushed
- Check that the `dist` folder is created during build
- Verify the `.nojekyll` file exists in the build output

## Local Testing

Test the static build locally:

```bash
npm run build
npm run serve
```

Then open `http://localhost:3000` to preview the static site.

---

**Happy deploying! 🚀**
