# Deployment Guide - GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages and use it as your personal website.

## Option 1: Deploy to `username.github.io` (Recommended for Personal Website)

This option gives you a clean URL like `https://yourusername.github.io`

### Steps:

1. **Create a new repository on GitHub:**
   - Go to GitHub and create a new repository
   - Name it: `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - Make it public
   - Don't initialize with README

2. **Update vite.config.js:**
   ```js
   base: '/',
   ```
   (Already set correctly for this option)

3. **Initialize and push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll to **Pages** in the left sidebar
   - Under **Source**, select **GitHub Actions**
   - The site will automatically deploy when you push to main

5. **Your website will be live at:**
   `https://yourusername.github.io`

---

## Option 2: Deploy to a Regular Repository (Current Setup)

This option uses the repository name in the URL: `https://yourusername.github.io/MyPortfolio`

### Steps:

1. **Create a new repository on GitHub:**
   - Go to GitHub and create a new repository
   - Name it: `MyPortfolio` (or any name you prefer)
   - Make it public
   - Don't initialize with README

2. **The vite.config.js is already configured for this:**
   ```js
   base: process.env.NODE_ENV === 'production' ? '/MyPortfolio/' : '/',
   ```
   (If you use a different repo name, update `/MyPortfolio/` to match)

3. **Initialize and push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/MyPortfolio.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll to **Pages** in the left sidebar
   - Under **Source**, select **GitHub Actions**
   - The site will automatically deploy when you push to main

5. **Your website will be live at:**
   `https://yourusername.github.io/MyPortfolio`

---

## Custom Domain (Optional)

If you have a custom domain (e.g., `aravindsetty.com`):

1. **Add a CNAME file:**
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```

2. **Configure DNS:**
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub's IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. **Update GitHub Pages settings:**
   - Go to repository Settings > Pages
   - Enter your custom domain

---

## Troubleshooting

### Build fails:
- Check that all dependencies are in `package.json`
- Ensure Node.js version is 18+ in the workflow

### 404 errors:
- Verify the `base` path in `vite.config.js` matches your repository name
- Check that GitHub Pages is enabled and using GitHub Actions

### Assets not loading:
- Clear browser cache
- Check the browser console for errors
- Verify the base path is correct

---

## Updating Your Site

After making changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions will automatically rebuild and deploy your site!
