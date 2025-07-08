# Aakash Sharma Portfolio

A modern, responsive portfolio website showcasing data governance, policy analysis, and social impact projects.

## 🚀 Live Demo

Visit the live site: [https://yourusername.github.io/your-repo-name](https://yourusername.github.io/your-repo-name)

## 🛠️ Built With

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool
- **Wouter** - Lightweight routing

## 📁 Project Structure

```
├── client/              # React application
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page components
│   │   ├── data/        # Static data files
│   │   └── lib/         # Utility functions
├── dist/                # Built static files
├── .github/workflows/   # GitHub Actions
└── docs/                # Documentation
```

## 🔧 Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5000](http://localhost:5000) in your browser

## 📦 Building for Production

To build the static site for GitHub Pages:

```bash
cd client
npm run build
```

The built files will be in the `dist/` directory.

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Fork or clone this repository**

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

3. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

4. **Automatic deployment:**
   - The GitHub Action will automatically build and deploy
   - Your site will be available at `https://yourusername.github.io/repository-name`

## 📝 Content Management

All content is managed through static data files in `client/src/data/`:

- **projects.ts** - Portfolio projects
- **blogPosts.ts** - Blog articles
- **siteContent.ts** - Site-wide content
- **contactMessages.ts** - Contact form configuration

## 🎨 Customization

### Colors and Styling
- Edit `client/src/index.css` for custom styles
- Modify Tailwind configuration in `tailwind.config.ts`

### Content
- Update project information in `client/src/data/projects.ts`
- Add blog posts in `client/src/data/blogPosts.ts`
- Modify site content in `client/src/data/siteContent.ts`

## 📱 Features

- ✅ Responsive design
- ✅ Dark/light mode toggle
- ✅ Smooth scrolling navigation
- ✅ Project portfolio showcase
- ✅ Blog section
- ✅ Contact form
- ✅ SEO optimized
- ✅ Fast loading with static generation

## 🔒 Security

- Static site - no server-side vulnerabilities
- Client-side only - no database or API endpoints
- HTTPS by default with GitHub Pages

## 📊 Performance

- Optimized for Core Web Vitals
- Minimal JavaScript bundle
- Efficient CSS with Tailwind
- Image optimization recommended

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

For questions or support, reach out via:
- Email: contact@aakash.dev
- LinkedIn: [linkedin.com/in/aakash-sharma](https://linkedin.com/in/aakash-sharma)
- GitHub: [github.com/yourusername](https://github.com/yourusername)

---

Built with ❤️ by Aakash Sharma