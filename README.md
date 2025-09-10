# Fladeed - Dev Agency Landing Page

A stunning landing page for Fladeed development agency featuring fluid glass morphism design inspired by Apple's revolutionary visionOS design system.

## ✨ Features

- **🎨 Fluid Glass Design**: Beautiful glass morphism effects with backdrop blur and transparency
- **⚡ Performance Optimized**: Built with Next.js 15 and Turbopack for lightning-fast development
- **📱 Fully Responsive**: Mobile-first design that works perfectly on all devices
- **🚀 Modern Stack**: Next.js, TypeScript, Tailwind CSS, and React components
- **🎯 SEO Ready**: Optimized metadata and semantic HTML structure
- **♿ Accessible**: WCAG guidelines compliance with keyboard navigation support
- **🌟 Interactive Effects**: Hover animations, particle backgrounds, and smooth transitions

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom glass morphism utilities
- **Font**: Inter (Google Fonts)
- **Build Tool**: Turbopack
- **Deployment**: GitHub Pages ready with automatic CI/CD

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landing-page
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design System

### Glass Components

The landing page includes a comprehensive set of reusable glass morphism components:

- **GlassCard**: Versatile card component with light, default, and intense variants
- **GlassButton**: Interactive buttons with shimmer and glow effects
- **GlassNavigation**: Responsive navigation with mobile menu
- **ParticleBackground**: Animated particle system for enhanced visual appeal

### CSS Classes

Custom CSS utilities for glass effects:

- `.glass` - Standard glass morphism effect
- `.glass-light` - Subtle transparency
- `.glass-intense` - Enhanced blur and highlight
- `.glass-hover` - Interactive hover states
- `.shimmer` - Moving light effect
- `.pulse-glow` - Rhythmic glow animation
- `.float` - Gentle floating motion

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and glass morphism utilities
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page composition
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero banner with CTA
│   │   ├── ServicesSection.tsx  # Services showcase
│   │   ├── PortfolioSection.tsx # Featured projects
│   │   ├── AboutSection.tsx     # Company information
│   │   └── ContactSection.tsx   # Contact form and info
│   ├── GlassCard.tsx        # Reusable glass card component
│   ├── GlassButton.tsx      # Interactive glass button
│   ├── GlassNavigation.tsx  # Responsive navigation
│   ├── ParticleBackground.tsx # Animated particles
│   └── Footer.tsx           # Site footer
```

## 🎯 Customization

### Colors

Update the CSS custom properties in `globals.css`:

```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.18);
  --accent-primary: #667eea;
  --accent-secondary: #764ba2;
}
```

### Content

Edit the content in each section component:

- Hero content: `src/components/sections/HeroSection.tsx`
- Services: `src/components/sections/ServicesSection.tsx`
- Portfolio: `src/components/sections/PortfolioSection.tsx`
- About: `src/components/sections/AboutSection.tsx`
- Contact: `src/components/sections/ContactSection.tsx`

## 📱 Responsive Design

The design is mobile-first and includes breakpoints for:

- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🚀 Deployment

### GitHub Pages (Automatic)

This project is configured for automatic deployment to GitHub Pages:

1. **Push to GitHub**: Push your code to the `main` branch
2. **Enable GitHub Pages**: 
   - Go to your repository settings
   - Navigate to "Pages" section
   - Source: "GitHub Actions"
3. **Automatic Deploy**: The GitHub Actions workflow will automatically build and deploy your site

The workflow will:
- Build the Next.js app as a static export
- Deploy to GitHub Pages
- Your site will be available at: `https://yourusername.github.io/repository-name`

### Vercel (Alternative)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds

### Manual Build for GitHub Pages

```bash
npm run build        # Creates static export in 'dist' folder
# Upload the 'dist' folder contents to GitHub Pages
```

### Other Platforms

The project works with any platform that supports static sites:

- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [Liquid Glass UI](https://liquidglassui.org/)
- Apple's visionOS design system
- Next.js team for the amazing framework
- Vercel for hosting and deployment platform

## 📞 Support

For support and questions:

- 📧 Email: hello@fladeed.com
- 🌐 Website: [fladeed.com](https://fladeed.com)
- 💬 Open an issue in this repository

---

**Made with ❤️ by Fladeed Dev Agency**
