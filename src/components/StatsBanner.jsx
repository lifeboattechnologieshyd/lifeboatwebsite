import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const StatsBanner = ({ darkMode }) => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    const stats = [
        { icon: '⚡', number: 99.9, suffix: '%', label: 'Uptime SLA', prefix: '' },
        { icon: '⏱️', number: 100, suffix: 'ms', label: 'Response Time', prefix: '<' },
        { icon: '🏆', number: 50, suffix: '+', label: 'Awards Won', prefix: '' },
        { icon: '🌟', number: 5.0, suffix: '/5', label: 'Client Rating', prefix: '', decimals: 1 }
    ]

    return (
        <section
            ref={ref}
            className={`py-16 relative overflow-hidden ${darkMode
                ? 'bg-gradient-to-r from-purple-900 via-pink-900 to-blue-900'
                : 'bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100'
                }`}
        >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5, y: 50 }}
                            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                            transition={{
                                delay: index * 0.1,
                                type: 'spring',
                                stiffness: 100
                            }}
                            whileHover={{
                                scale: 1.1,
                                y: -10,
                                transition: { duration: 0.2 }
                            }}
                            className="text-center group cursor-pointer"
                        >
                            {/* Icon with Animation */}
                            <motion.div
                                className="text-5xl md:text-6xl mb-3"
                                animate={{
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: 'reverse'
                                }}
                            >
                                {stat.icon}
                            </motion.div>

                            {/* Number Counter */}
                            <div className={`text-4xl md:text-5xl font-black mb-2 font-display ${darkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                {stat.prefix}
                                {inView && (
                                    <CountUp
                                        end={stat.number}
                                        duration={2.5}
                                        decimals={stat.decimals || 0}
                                        decimal="."
                                    />
                                )}
                                {stat.suffix}
                            </div>

                            {/* Label */}
                            <div className={`text-sm font-medium ${darkMode ? 'text-purple-200' : 'text-purple-700'
                                }`}>
                                {stat.label}
                            </div>

                            {/* Animated Underline */}
                            <motion.div
                                className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 group-hover:w-full transition-all duration-300 rounded-full"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Floating Particles */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </section>
    )
}

export default StatsBanner