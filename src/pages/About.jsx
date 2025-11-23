import { motion } from 'framer-motion'

const About = ({ darkMode }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Lifeboat Technologies
              </span>
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Pioneering innovation in software development and digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div {...fadeInUp}>
              <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Our Mission
              </h2>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                We empower businesses with cutting-edge technology solutions that drive growth, innovation, and digital transformation. Our team is dedicated to delivering excellence in every project.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Our Vision
              </h2>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                To be the global leader in innovative technology solutions, creating sustainable impact on businesses and society through intelligent software development and digital excellence.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '50+', label: 'Expert Team Members' },
              { number: '15+', label: 'Years Experience' }
            ].map((stat, idx) => (
              <div key={idx} className={`p-8 rounded-xl ${
                darkMode ? 'bg-slate-800' : 'bg-gray-50'
              } border ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
