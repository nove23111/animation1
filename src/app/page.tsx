'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface ProjectCard {
  id: string
  title: string
  description: string
  url?: string
  img_url?: string
  position: {
    x: number
    y: number
  }
  orbit: 'inner' | 'outer'
}

const projects: ProjectCard[] = [
  {
    id: 'xao-dao',
    title: 'XAO DAO',
    description: "The world's first Decentralized Autonomous Organization for the XRP Ledger.",
    url: '',
    img_url: '/XRP/XAO DAO.png',
    position: { x: -150, y: -150 },
    orbit: 'inner'
  },
  {
    id: 'flare-network',
    title: 'Flare Network',
    description: 'Flare Network enables DeFi, smart contracts, and seamless multi-chain blockchain interoperability.',
    url: '',
    img_url: '/XRP/Flare Network.png',
    position: { x: 150, y: -150 },
    orbit: 'inner'
  },
  {
    id: 'future-verse',
    title: 'FutureVerse',
    description: 'We power global brands to create content that moves',
    url: '',
    img_url: '/XRP/FutureVerse.png',
    position: { x: 150, y: 150 },
    orbit: 'inner'
  },
  {
    id: 'ripple',
    title: 'Ripple',
    description: 'Modernize your financial infrastructure with Ripple',
    url: '',
    img_url: '/XRP/Ripple.png',
    position: { x: -150, y: 150 },
    orbit: 'inner'
  },
  {
    id: 'xao-dao-1',
    title: 'XAO DAO',
    description: "The world's first Decentralized Autonomous Organization for the XRP Ledger.",
    url: '',
    img_url: '/XRP/XAO DAO.png',
    position: { x: -250, y: 0 },
    orbit: 'outer'
  },
  {
    id: 'flare-network-1',
    title: 'Flare Network',
    description: 'Flare Network enables DeFi, smart contracts, and seamless multi-chain blockchain interoperability.',
    url: '',
    img_url: '/XRP/Flare Network.png',
    position: { x: 250, y: 0 },
    orbit: 'outer'
  },
  {
    id: 'future-verse-1',
    title: 'FutureVerse',
    description: 'We power global brands to create content that moves',
    url: '',
    img_url: '/XRP/FutureVerse.png',
    position: { x: 0, y: -250 },
    orbit: 'outer'
  },
  {
    id: 'ripple-1',
    title: 'Ripple',
    description: 'Modernize your financial infrastructure with Ripple',
    url: '',
    img_url: '/XRP/Ripple.png',
    position: { x: 0, y: 250 },
    orbit: 'outer'
  }
]

export default function Home() {
  const [showOrbits, setShowOrbits] = useState(false)
  const [showCards, setShowCards] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [currentCardSet, setCurrentCardSet] = useState(0) // 0 for first 4, 1 for second 4
  const [cardsTransitioning, setCardsTransitioning] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setShowOrbits(true), 1000)
    const timer2 = setTimeout(() => setShowCards(true), 2000)
    
    // Start rotation animation
    const rotationInterval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360)
    }, 50)
    
    // Start infinite loop for card transitions
    const startCardTransition = () => {
      setCardsTransitioning(true)
      setTimeout(() => {
        setCurrentCardSet(prev => (prev + 1) % 2) // Toggle between 0 and 1
        setCardsTransitioning(false)
      }, 1000) // Duration of scale down animation
    }
    
    // First transition after 5 seconds, then every 6 seconds (5s display + 1s transition)
    const transitionInterval = setInterval(() => {
      if (showCards) {
        startCardTransition()
      }
    }, 6000)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearInterval(rotationInterval)
      clearInterval(transitionInterval)
    }
  }, [showCards])

  const handleCardClick = (url: string) => {
    window.open(url, '_blank')
  }

  // Calculate rotated positions for cards
  const getRotatedPosition = (position: { x: number; y: number }, angle: number) => {
    const rad = (angle * Math.PI) / 180
    const cos = Math.cos(rad)
    const sin = Math.sin(rad)
    
    return {
      x: position.x * cos - position.y * sin,
      y: position.x * sin + position.y * cos
    }
  }

  // Get current set of cards to display
  const getCurrentCards = () => {
    if (currentCardSet === 0) {
      return projects.slice(0, 4) // First 4 cards
    } else {
      return projects.slice(4, 8) // Second 4 cards
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center">
        {/* Central Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-20"
        >
          <motion.div
            className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 overflow-hidden"
            style={{
              boxShadow: "0 0 43.615px 0 rgba(255, 255, 255, 0.50) inset",
              filter: "drop-shadow(0 0 148.855px #056FFF)"
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/XRP/XRP.png" 
              alt="XRP" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        </motion.div>

        {/* Rotating Orbital Container */}
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ duration: 0, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Orbital Lines */}
          {showOrbits && (
            <>
              {/* Circle 1 */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute rounded-full"
                style={{
                  width: "244px",
                  height: "244px",
                  flexShrink: 0,
                  border: "1px solid rgba(255, 255, 255, 0.20)"
                }}
              />
              {/* Circle 2 */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="absolute rounded-full"
                style={{
                  width: "368px",
                  height: "368px",
                  flexShrink: 0,
                  border: "1px solid rgba(255, 255, 255, 0.20)"
                }}
              />
              {/* Circle 3 */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="absolute rounded-full"
                style={{
                  width: "624px",
                  height: "624px",
                  flexShrink: 0,
                  border: "1px solid rgba(255, 255, 255, 0.20)"
                }}
              />
              {/* Circle 4 */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.05 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="absolute rounded-full"
                style={{
                  width: "744px",
                  height: "744px",
                  flexShrink: 0,
                  opacity: 0.01,
                  background: "#056FFF",
                  filter: "blur(200px)"
                }}
              />
            </>
          )}

          {/* Orbital Dots */}
          {showOrbits && (
            <>
              {/* Dots on Circle 1 (radius = 244/2 = 122px) */}
              {[0, 90, 180, 270].map((angle, index) => (
                <motion.div
                  key={`circle1-dot-${index}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="absolute rounded-full"
                  style={{
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                    background: "rgba(255, 255, 255, 0.20)",
                    border: "1px solid rgba(255, 255, 255, 0.20)",
                    left: `calc(50% + ${122 * Math.cos((angle * Math.PI) / 180)}px)`,
                    top: `calc(50% + ${122 * Math.sin((angle * Math.PI) / 180)}px)`,
                    transform: "translate(-50%, -50%)"
                  }}
                />
              ))}

              {/* Dots on Circle 2 (radius = 368/2 = 184px) */}
              {[45, 135, 225, 315].map((angle, index) => (
                <motion.div
                  key={`circle2-dot-${index}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.5 + index * 0.1 }}
                  className="absolute rounded-full"
                  style={{
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                    background: "rgba(255, 255, 255, 0.20)",
                    border: "1px solid rgba(255, 255, 255, 0.20)",
                    left: `calc(50% + ${184 * Math.cos((angle * Math.PI) / 180)}px)`,
                    top: `calc(50% + ${184 * Math.sin((angle * Math.PI) / 180)}px)`,
                    transform: "translate(-50%, -50%)"
                  }}
                />
              ))}
            </>
          )}
        </motion.div>

        {/* Project Cards (Outside rotation container) */}
        {showCards && getCurrentCards().map((project, index) => {
          const rotatedPos = getRotatedPosition(project.position, rotation)
          return (
            <motion.div
              key={`${currentCardSet}-${project.id}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: cardsTransitioning ? [1, 0.3, 0] : 1,
                opacity: cardsTransitioning ? [1, 0.3, 0] : 1,
                x: cardsTransitioning ? [0, (rotatedPos.x * 0.3), (rotatedPos.x * 0.1)] : 0,
                y: cardsTransitioning ? [0, (rotatedPos.y * 0.3), (rotatedPos.y * 0.1)] : 0,
                zIndex: cardsTransitioning ? [10, 5, 1] : (project.orbit === 'inner' ? 10 : 0)
              }}
              transition={{ 
                duration: cardsTransitioning ? 1 : 0.6, 
                delay: cardsTransitioning ? 0 : index * 0.1,
                ease: "easeInOut",
                times: cardsTransitioning ? [0, 0.5, 1] : undefined
              }}
              className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                project.orbit === 'inner' ? 'z-10' : 'z-0'
              }`}
              style={{
                left: `calc(50% + ${rotatedPos.x}px)`,
                top: `calc(50% + ${rotatedPos.y}px)`,
              }}
              onClick={() => handleCardClick(project.url)}
              whileHover={{ scale: 1.05, zIndex: 30 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                style={{
                  borderRadius: "10px",
                  border: "1px solid rgba(255, 255, 255, 0.10)",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(12px)",
                  display: "flex",
                  padding: "4px",
                  flexDirection: "column",
                  alignItems: "flex-start"
                }}
              >
                <div
                  className="p-4 w-64 shadow-xl hover:shadow-2xl transition-all duration-300"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    background: "rgba(255, 255, 255, 0.10)",
                    backdropFilter: "blur(7.5px)"
                  }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                      <img
                        src={project.img_url}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-white font-semibold text-sm">{project.title}</h3>
                  </div>

                  <p className="text-gray-300 text-xs leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-3 text-blue-400 text-xs font-medium">
                    Click to visit →
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}

        {/* Connecting Lines (Outside rotation container) */}
        {showCards && getCurrentCards().map((project) => {
          const rotatedPos = getRotatedPosition(project.position, rotation)
          return (
            <svg
              key={`line-${currentCardSet}-${project.id}`}
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 5 }}
            >
              <motion.line
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${rotatedPos.x}px)`}
                y2={`calc(50% + ${rotatedPos.y}px)`}
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="1"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: cardsTransitioning ? [1, 0.3, 0] : 1,
                  opacity: cardsTransitioning ? [1, 0.3, 0] : 1
                }}
                transition={{ 
                  duration: cardsTransitioning ? 1 : 1, 
                  delay: cardsTransitioning ? 0 : 2.5,
                  ease: "easeInOut",
                  times: cardsTransitioning ? [0, 0.5, 1] : undefined
                }}
              />
            </svg>
          )
        })}
      </div>
    </div>
  )
}
