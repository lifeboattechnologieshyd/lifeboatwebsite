import { motion } from 'framer-motion'

const MobileApps = ({ darkMode }) => {
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="pt-32 pb-20 max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Mobile App <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Development</span>
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>iOS and Android apps that users love</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[{ title: 'iOS Apps', desc: 'Native Swift development' }, { title: 'Android Apps', desc: 'Kotlin & Java solutions' }, { title: 'Cross-Platform', desc: 'React Native & Flutter' }, { title: 'App Store', desc: 'Publishing & distribution' }].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`p-8 rounded-xl ${darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-gray-50'}`}>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{s.title}</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileApps
