import { motion } from 'framer-motion'

const SoftwareDevelopment = ({ darkMode }) => {
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Development
              </span>
            </h1>
            <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Custom software solutions tailored to your unique business needs with cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Enterprise Solutions', desc: 'Scalable systems for large organizations' },
              { title: 'Web Applications', desc: 'Full-stack development with modern frameworks' },
              { title: 'Cloud Integration', desc: 'Seamless cloud deployment and management' },
              { title: 'API Development', desc: 'RESTful and GraphQL API development' }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`p-8 rounded-xl ${darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-gray-50 border border-gray-200'}`}
              >
                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoftwareDevelopment
