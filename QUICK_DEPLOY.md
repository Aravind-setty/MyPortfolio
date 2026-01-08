# Quick Deployment Guide

## 🚀 Deploy Your Portfolio in 5 Minutes

### Step 1: Create GitHub Repository

**Option A: Personal Website (Recommended)**
- Go to https://github.com/new
- Repository name: `aravind-setty.github.io` (use your GitHub username)
- Make it **Public**
- **Don't** check "Initialize with README"
- Click "Create repository"

**Option B: Regular Repository**
- Repository name: `MyPortfolio` (or any name)
- Make it **Public**
- **Don't** check "Initialize with README"
- Click "Create repository"

### Step 2: Update vite.config.js (if using Option A)

If you chose Option A (`username.github.io`), update `vite.config.js`:

```js
base: '/',
```

If you chose Option B, keep it as is (already configured for `/MyPortfolio/`).

### Step 3: Push to GitHub

Run these commands in your terminal (replace with your GitHub username):

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Rename branch to main (if needed)
git branch -M main

# Add remote (replace YOUR_USERNAME with your GitHub username)
# For Option A:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git

# OR for Option B:
git remote add origin https://github.com/YOUR_USERNAME/MyPortfolio.git

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Wait 2-3 minutes for the first deployment

### Step 5: Your Website is Live! 🎉

**Option A URL:** `https://YOUR_USERNAME.github.io`  
**Option B URL:** `https://YOUR_USERNAME.github.io/MyPortfolio`

---

## 🔄 Updating Your Site

After making changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions will automatically rebuild and deploy!

---

## ❓ Need Help?

- Check the Actions tab in your GitHub repo to see deployment status
- If build fails, check the Actions logs
- Make sure GitHub Pages is set to use "GitHub Actions" as source
