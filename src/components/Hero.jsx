import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useState } from 'react'

const Hero = ({ darkMode }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 20,
                y: (e.clientY / window.innerHeight) * 20
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background with Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&h=1080&fit=crop&q=80"
                    alt="Tech Background"
                    className="w-full h-full object-cover opacity-80"
                />
                // Find this line (around line 25):
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
                        alt="Technology Background"
                        className="w-full h-full object-cover opacity-20"  // ← Change to opacity-40
                    />
                    <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/70' : 'bg-gradient-to-b from-gray-50/70 via-gray-50/60 to-gray-50/70'}`}></div>  // ← Reduced opacity
                </div>
            </div>

            {/* Mesh Gradient Overlay */}
            <div className="absolute inset-0 mesh-gradient opacity-60" />

            {/* Floating Particles */}
            <div className="particles-bg">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-purple-500 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.random() * 50 - 25, 0],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Parallax Moving Shapes */}
            <motion.div
                style={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                }}
                className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
            />
            <motion.div
                style={{
                    x: -mousePosition.x,
                    y: -mousePosition.y,
                }}
                className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
            />

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    {/* Premium Badge with Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="mb-8 inline-block"
                    >
                        <motion.div
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(139, 92, 246, 0.5)',
                                    '0 0 40px rgba(236, 72, 153, 0.5)',
                                    '0 0 20px rgba(139, 92, 246, 0.5)',
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-bold border-2 backdrop-blur-xl ${darkMode
                                ? 'bg-white/5 text-purple-300 border-purple-500/30'
                                : 'bg-purple-50 text-purple-700 border-purple-300'
                                }`}
                        >
                            <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="mr-2 text-xl"
                            >
                                ✨
                            </motion.span>
                            <TypeAnimation
                                sequence={[
                                    'Welcome to Innovation',
                                    2000,
                                    'Welcome to Excellence',
                                    2000,
                                    'Welcome to the Future',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Main Headline with Stagger Animation */}
                    <motion.h1
                        className={`text-6xl md:text-7xl lg:text-9xl font-black mb-8 leading-tight font-display ${darkMode ? 'text-white' : 'text-gray-900'
                            }`}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="block"
                        >
                            Transform Your
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="block gradient-text animate-float-slow"
                        >
                            Digital Dreams
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="block"
                        >
                            Into Reality
                        </motion.span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className={`text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}
                    >
                        We craft <span className="font-bold text-purple-500">cutting-edge software solutions</span> that
                        propel businesses into the <span className="font-bold text-pink-500">future of technology</span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-2xl neon-glow relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center">
                                Start Your Project
                                <motion.svg
                                    className="w-5 h-5 ml-2"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </motion.svg>
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-white/20"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-10 py-5 rounded-2xl font-bold text-lg border-3 backdrop-blur-xl ${darkMode
                                ? 'border-white/30 text-white hover:bg-white/10'
                                : 'border-gray-300 text-gray-900 hover:bg-gray-100'
                                }`}
                        >
                            Explore Our Work
                        </motion.button>
                    </motion.div>

                    {/* Animated Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {[
                            { number: '500+', label: 'Projects Delivered', icon: '🎯', color: 'from-purple-500 to-pink-500' },
                            { number: '200+', label: 'Happy Clients', icon: '😊', color: 'from-blue-500 to-cyan-500' },
                            { number: '15+', label: 'Countries', icon: '🌍', color: 'from-green-500 to-teal-500' },
                            { number: '98%', label: 'Satisfaction', icon: '⭐', color: 'from-yellow-500 to-orange-500' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.6 + index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.1, y: -10, rotateY: 10 }}
                                className={`glass-effect p-6 rounded-2xl card-3d group cursor-pointer relative overflow-hidden`}
                            >
                                {/* Animated Background Gradient */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                                    whileHover={{ scale: 1.5, rotate: 45 }}
                                />

                                <div className="relative z-10">
                                    <motion.div
                                        className="text-4xl mb-2"
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        {stat.icon}
                                    </motion.div>
                                    <div className="text-4xl md:text-5xl font-black gradient-text mb-2 font-display">
                                        {stat.number}
                                    </div>
                                    <div className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {stat.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                            <svg className="w-6 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero