# John Tenkorang Anim - Portfolio Website

A stunning, modern portfolio website built with **Vite + React + Three.js** featuring beautiful animations, a cyber-futuristic design, and smooth interactions.

![Portfolio Preview](https://img.shields.io/badge/Built%20with-React%20%2B%20Three.js-00FF88?style=for-the-badge)

## Features

- **3D Particle Background** - Interactive Three.js particle field that responds to mouse movement
- **Smooth Animations** - Powered by Framer Motion for buttery-smooth transitions
- **Cyber-Futuristic Design** - Neon colors, glass effects, and gradient meshes
- **Fully Responsive** - Looks great on desktop, tablet, and mobile
- **Loading Animation** - Impressive loading screen with orbiting elements
- **Interactive Elements** - Cursor glow effect, hover animations, and scroll triggers
- **Modern Stack** - Vite for fast development, React 19, Three.js, Framer Motion

## Tech Stack

- **Framework:** React 19 + Vite
- **3D Graphics:** Three.js + React Three Fiber + Drei
- **Animations:** Framer Motion + GSAP
- **Styling:** CSS with Custom Properties
- **Fonts:** Clash Display + Satoshi + JetBrains Mono

## Sections

1. **Hero** - Dynamic introduction with role carousel and code block decoration
2. **About** - Personal bio with stats and education info
3. **Skills** - Animated skill bars with certifications
4. **Projects** - Filterable project cards with hover effects
5. **Experience** - Interactive tabs showcasing experience
6. **Contact** - Contact form with social links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Extract the zip file** or clone the repository

2. **Install dependencies:**
   ```bash
   cd portfolio
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Colors

Edit CSS custom properties in `src/index.css`:

```css
:root {
  --neon-green: #00FF88;
  --neon-pink: #FF0080;
  --neon-gold: #FFD700;
  --neon-cyan: #00F5FF;
  --neon-purple: #9D4EDD;
}
```

### Personal Information

Update the following files with your information:

- `src/sections/Hero.jsx` - Name, roles, description
- `src/sections/About.jsx` - Bio, stats, education
- `src/sections/Skills.jsx` - Skills and certifications
- `src/sections/Projects.jsx` - Your projects
- `src/sections/Experience.jsx` - Work experience
- `src/sections/Contact.jsx` - Contact information

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Push your code to GitHub
2. Import on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CursorGlow.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   └── ParticleField.jsx
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## License

This project is open source and available for personal use. 

---

**Designed and Built by John Tenkorang Anim**

Cornell University | Full Stack Developer | AI/ML Engineer

- GitHub: [@John-Tenkorang-Anim](https://github.com/John-Tenkorang-Anim)
- LinkedIn: [john-anim](https://linkedin.com/in/john-anim)
- Email: ja857@cornell.edu
