# 🪐 Planet - Interactive Orbital Project Showcase

An interactive web application featuring a beautiful orbital animation system that showcases various blockchain and fintech projects in a rotating, space-themed interface.

## ✨ Features

### 🌌 Interactive Orbital System
- **Rotating Animation** - Smooth continuous rotation of orbital rings and project cards
- **Dual Orbit Layers** - Inner and outer orbital rings with different project sets
- **Automatic Transitions** - Cards automatically cycle between two sets every 6 seconds
- **Smooth Animations** - Powered by Framer Motion for fluid transitions and interactions

### 🎯 Project Showcase
- **8 Featured Projects** - Blockchain and fintech companies including Ripple, FutureVerse, XAO DAO, Xaman, Flare Network, XRP Toolkit, Digital Wealth Partners, and SpendTheBits
- **Interactive Cards** - Click any project card to visit their website
- **Responsive Design** - Optimized for both desktop and mobile viewing
- **Visual Hierarchy** - Inner orbit projects have higher z-index for better visibility

### 🎨 Visual Design
- **Space Theme** - Dark background with blue gradient central logo
- **Orbital Visualization** - Dotted orbital paths with connecting lines to projects
- **Hover Effects** - Cards scale and glow on interaction
- **Modern UI** - Glass-morphism cards with backdrop blur effects

## 🚀 How It Works

### Animation System
The application uses a sophisticated animation system built with React and Framer Motion:

1. **Initial Load Sequence**
   - Central logo appears with scale animation (1 second)
   - Orbital rings fade in (1-1.2 seconds)
   - Orbital dots appear in sequence (1.5-2.1 seconds)
   - Project cards animate in (2+ seconds)

2. **Continuous Rotation**
   - The entire orbital system rotates continuously at 1 degree per 50ms
   - Cards maintain their relative positions while the system rotates
   - Connecting lines dynamically update to follow card positions

3. **Card Transitions**
   - Every 6 seconds, cards transition out with a scale-down animation
   - New set of 4 cards transitions in after 1 second
   - Alternates between inner orbit projects (first 4) and outer orbit projects (last 4)

### Technical Implementation
- **React Hooks**: Uses `useState` and `useEffect` for state management and lifecycle
- **Framer Motion**: Handles all animations including rotation, scaling, and transitions
- **Dynamic Positioning**: Calculates rotated positions using trigonometric functions
- **Responsive Design**: Adapts card sizes and spacing for different screen sizes

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the orbital project showcase.

## 🎯 Featured Projects

The application showcases 8 blockchain and fintech projects:

### Inner Orbit (First Set)
1. **Ripple** - Modernize your financial infrastructure with Ripple
2. **FutureVerse** - We power global brands to create content that moves
3. **XAO DAO** - The world's first Decentralized Autonomous Organization for the XRP Ledger
4. **Xaman** - The Leading Self-Custody Wallet. Secure Your XRP with Confidence

### Outer Orbit (Second Set)
5. **Flare Network** - DeFi, smart contracts, and seamless multi-chain blockchain interoperability
6. **XRP Toolkit** - Manage your XRPL crypto assets with ease
7. **Digital Wealth Partners** - Unlock the Future of Wealth with Digital Assets
8. **SpendTheBits** - Seamless, secure, instant cross-currency payment solution

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── page.tsx        # Main orbital showcase component
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── components/          # Reusable React components
│   └── ui/             # UI components
├── hooks/              # Custom React hooks
└── lib/                # Utility functions and configurations
```

## 🛠️ Technology Stack

- **⚡ Next.js 15** - React framework with App Router
- **📘 TypeScript** - Type-safe JavaScript
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🌈 Framer Motion** - Animation library for smooth transitions
- **🎯 Lucide React** - Icon library for UI elements

---

Built with ❤️ for showcasing blockchain and fintech innovation 🚀
