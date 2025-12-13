import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'

const Hero = () => {
    // Memoize particles to prevent re-render issues
    const particles = useMemo(() => {
        return [...Array(20)].map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: Math.random() * 10 + 10,
        }))
    }, [])

    const stats = [
        { number: '500+', label: 'Projects Delivered', icon: '🎯' },
        { number: '200+', label: 'Happy Clients', icon: '😊' },
        { number: '15+', label: 'Countries', icon: '🌍' },
        { number: '98%', label: 'Satisfaction', icon: '⭐' },
    ]

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/Hero.jpg"
                    alt="Tech Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white/80"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-2 h-2 bg-[#3234a2] rounded-full"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Main Content Container */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="mb-8 inline-block"
                    >
                        <motion.div
                            animate={{
                                boxShadow: [
                                    '0 0 15px rgba(50, 52, 162, 0.3)',
                                    '0 0 25px rgba(50, 52, 162, 0.5)',
                                    '0 0 15px rgba(50, 52, 162, 0.3)',
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold border-2 backdrop-blur-xl bg-white/30 text-[#3234a2] border-[#3234a2]/30"
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
                                speed={50}
                                repeat={Infinity}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight font-display text-gray-900"
                    >
                        <span className="block">Transform Your</span>
                        <span className="block text-[#3234a2]">Digital Dreams</span>
                        <span className="block">Into Reality</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto text-gray-700 px-4"
                    >
                        We craft <span className="font-bold text-[#3234a2]">cutting-edge software solutions</span> that
                        propel businesses into the <span className="font-bold text-[#32a162]">future of technology</span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16"
                    >
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-8 sm:px-10 py-4 sm:py-5 bg-[#32a162] hover:bg-[#2a8a54] text-white rounded-2xl font-bold text-base sm:text-lg shadow-lg shadow-[#32a162]/30 transition-colors"
                            >
                                <span className="flex items-center">
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
                            </motion.button>
                        </Link>

                        <Link to="/projects">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg border-2 border-gray-300 text-gray-900 hover:bg-white/80 hover:border-gray-400 backdrop-blur-sm transition-all"
                            >
                                Explore Our Work
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="p-4 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
                                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 text-[#3234a2]">
                                    {stat.number}
                                </div>
                                <div className="text-xs sm:text-sm font-medium text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center text-gray-500"
                >
                    <span className="text-sm mb-2">Scroll Down</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero