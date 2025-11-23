import { useState, useEffect, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import components that load immediately (Critical/Above the fold)
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBanner from './components/StatsBanner'
import Services from './components/Services'

// Lazy load heavy components (Below the fold - Performance optimization)
const Process = lazy(() => import('./components/Process'))
const TechStack = lazy(() => import('./components/TechStack'))
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Team = lazy(() => import('./components/Team'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const FAQ = lazy(() => import('./components/FAQ'))
const CTA = lazy(() => import('./components/CTA'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// ============================================
// LOADING SPINNER COMPONENT
// ============================================
const LoadingSpinner = ({ darkMode }) => {
  return (
    <div className="flex items-center justify-center py-20">
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className="relative"
      >
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
          ⚡
        </div>
      </motion.div>
    </div>
  )
}

// ============================================
// SCROLL TO TOP BUTTON COMPONENT
// ============================================
const ScrollToTop = ({ darkMode }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = window.pageYOffset
      setVisible(scrolled > 300)
    }

    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all ${darkMode
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
            : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
            }`}
          style={{
            boxShadow: darkMode
              ? '0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(236, 72, 153, 0.4)'
              : '0 0 20px rgba(139, 92, 246, 0.4)'
          }}
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

// ============================================
// INITIAL LOADING SCREEN COMPONENT
// ============================================
const InitialLoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Animated Logo */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl"
          style={{
            boxShadow: '0 0 60px rgba(139, 92, 246, 0.8), 0 0 100px rgba(236, 72, 153, 0.6)'
          }}
        >
          <span className="text-5xl">🚀</span>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-white mb-2 font-display"
        >
          Lifeboat Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-400 mb-8"
        >
          Loading amazing content...
        </motion.p>

        {/* Progress Bar */}
        <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
          />
        </div>

        {/* Loading Dots */}
        <motion.div
          className="flex justify-center gap-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-purple-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

// ============================================
// MAIN APP COMPONENT
// ============================================
function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true)

  // Initialize AOS and handle initial loading
  useEffect(() => {
    // Initialize AOS (Animate On Scroll library)
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50
    })

    // Simulate initial page load
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Handle dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.body.style.backgroundColor = '#0f172a'
    } else {
      document.documentElement.classList.remove('dark')
      document.body.style.backgroundColor = '#ffffff'
    }
  }, [darkMode])

  // Prevent scroll during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [loading])

  // Show loading screen
  if (loading) {
    return <InitialLoadingScreen />
  }

  return (
    <div className={`${darkMode ? 'dark' : ''} relative min-h-screen`}>
      {/* Cursor Trail Effect (Optional) */}
      <div className="fixed inset-0 pointer-events-none z-50" id="cursor-trail" />

      {/* ========================================== */}
      {/* NAVIGATION */}
      {/* ========================================== */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* ========================================== */}
      {/* HERO SECTION - Immediately Visible */}
      {/* ========================================== */}
      <Hero darkMode={darkMode} />

      {/* ========================================== */}
      {/* STATS BANNER - Immediately Visible */}
      {/* ========================================== */}
      <StatsBanner darkMode={darkMode} />

      {/* ========================================== */}
      {/* SERVICES SECTION - Immediately Visible */}
      {/* ========================================== */}
      <Services darkMode={darkMode} />

      {/* ========================================== */}
      {/* LAZY LOADED SECTIONS - Load on demand */}
      {/* ========================================== */}

      {/* Process Section */}
      <Suspense fallback={<LoadingSpinner darkMode={darkMode} />}>
        <Process darkMode={darkMode} />
      </Suspense>

      {/* Tech Stack Section */}
      <Suspense fallback={<LoadingSpinner darkMode={darkMode} />}>
        <TechStack darkMode={darkMode} />
      </Suspense>

      {/* About Section */}
      <Suspense fallback={<LoadingSpinner darkMode={darkMode} />}>
        <About darkMode={darkMode} />
      </Suspense>

      {/* Projects Section */}
      <Suspense fallback={<LoadingSpinner darkMode={darkMode} />}>
        <Projects darkMode={darkMode} />
      </Suspense>

      {/* Team Section */}
      <Suspense fallback={<LoadingSpinner darkMode={darkMode} />}>
        <Team darkMode={darkMode} />
      </Suspense>

      {/* Testimonials Section */}
      <Suspense fallback={<LoadingSpinner darkMode={darkMode} />}>
        <Testimonials darkMode={darkMode} />
      </Suspense>

      {/* FAQ Section */}
      <Suspense fallback={<LoadingSpinner darkMode={darkMode} />}>
        <FAQ darkMode={darkMode} />
      </Suspense>

      {/* CTA Section */}
      <Suspense fallback={<LoadingSpinner darkMode={darkMode} />}>
        <CTA darkMode={darkMode} />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<LoadingSpinner darkMode={darkMode} />}>
        <Contact darkMode={darkMode} />
      </Suspense>

      {/* Footer Section */}
      <Suspense fallback={<LoadingSpinner darkMode={darkMode} />}>
        <Footer darkMode={darkMode} />
      </Suspense>

      {/* ========================================== */}
      {/* SCROLL TO TOP BUTTON */}
      {/* ========================================== */}
      <ScrollToTop darkMode={darkMode} />

      {/* ========================================== */}
      {/* FLOATING BACKGROUND EFFECTS */}
      {/* ========================================== */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl"
        />
      </div>
    </div>
  )
}

export default App