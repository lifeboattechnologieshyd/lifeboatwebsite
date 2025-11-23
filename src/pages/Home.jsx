import { lazy, Suspense } from 'react'
import Hero from '../components/Hero'
import StatsBanner from '../components/StatsBanner'
import Services from '../components/Services'

const Process = lazy(() => import('../components/Process'))
const TechStack = lazy(() => import('../components/TechStack'))
const Projects = lazy(() => import('../components/Projects'))
const Team = lazy(() => import('../components/Team'))
const Testimonials = lazy(() => import('../components/Testimonials'))
const CTA = lazy(() => import('../components/CTA'))

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
)

const Home = ({ darkMode }) => {
  return (
    <div>
      <Hero darkMode={darkMode} />
      <StatsBanner darkMode={darkMode} />
      <Services darkMode={darkMode} />

      <Suspense fallback={<LoadingSpinner />}>
        <Process darkMode={darkMode} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <TechStack darkMode={darkMode} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Projects darkMode={darkMode} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Team darkMode={darkMode} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials darkMode={darkMode} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CTA darkMode={darkMode} />
      </Suspense>
    </div>
  )
}

export default Home
