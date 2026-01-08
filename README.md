# Aravind Setty - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 💼 Showcases projects, skills, and education

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **JSX** - JavaScript syntax extension

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
my-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Deployment

This portfolio is ready to deploy to GitHub Pages! See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy Steps:

1. **Create a GitHub repository** (name it `yourusername.github.io` for a clean URL)
2. **Push your code:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. **Enable GitHub Pages:**
   - Go to Settings > Pages
   - Select "GitHub Actions" as the source
   - Your site will auto-deploy!

Your portfolio will be live at: `https://yourusername.github.io`

## License

This project is open source and available for personal use.
