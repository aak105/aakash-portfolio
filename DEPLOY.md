# GitHub Pages Deployment Guide

## Quick Setup for GitHub Pages

### 1. Repository Setup
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Portfolio ready for GitHub Pages"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The deployment workflow will automatically run

### 3. Access Your Live Site

Your portfolio will be available at:
```
https://yourusername.github.io/your-repo-name
```

## Files Created for GitHub Pages

✅ **`.github/workflows/deploy.yml`** - Automated deployment workflow
✅ **`dist/index.html`** - Static HTML version of your portfolio
✅ **`.gitignore`** - Proper git ignore configuration
✅ **`README.md`** - Project documentation

## Manual Deployment (Alternative)

If you prefer to deploy manually:

1. Build the static site:
```bash
cd client
npm run build
```

2. The built files will be in `dist/` directory

3. Push the `dist/` folder to the `gh-pages` branch:
```bash
git subtree push --prefix dist origin gh-pages
```

## Troubleshooting

### Common Issues:

1. **404 Error**: Make sure the repository name matches the URL path
2. **Build Fails**: Check the GitHub Actions tab for error details
3. **Styles Missing**: Verify the base URL configuration in build settings

### Checking Build Status:
- Go to **Actions** tab in your GitHub repository
- Click on the latest workflow run to see build logs

## Updating Your Portfolio

To update your portfolio:

1. Edit the data files in `client/src/data/`
2. Commit and push changes:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

3. GitHub Actions will automatically redeploy your site

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `dist/` directory with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

---

🎉 **Your portfolio is now live on GitHub Pages!**