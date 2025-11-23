import { motion } from 'framer-motion'
import {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker,
    FaAngular, FaVuejs, FaLaravel, FaDatabase
} from 'react-icons/fa'
import {
    SiTypescript, SiMongodb, SiGraphql, SiKubernetes,
    SiRedis, SiPostgresql, SiTailwindcss, SiNextdotjs,
    SiNestjs, SiFigma, SiFirebase, SiVercel
} from 'react-icons/si'

const TechStack = ({ darkMode }) => {
    const technologies = [
        {
            name: 'React',
            Icon: FaReact,
            color: 'from-cyan-400 to-blue-500',
            description: 'UI Library',
            proficiency: 95
        },
        {
            name: 'Node.js',
            Icon: FaNodeJs,
            color: 'from-green-500 to-emerald-600',
            description: 'Backend Runtime',
            proficiency: 92
        },
        {
            name: 'TypeScript',
            Icon: SiTypescript,
            color: 'from-blue-600 to-blue-400',
            description: 'Type Safety',
            proficiency: 90
        },
        {
            name: 'Python',
            Icon: FaPython,
            color: 'from-blue-500 to-yellow-400',
            description: 'ML & Backend',
            proficiency: 88
        },
        {
            name: 'Next.js',
            Icon: SiNextdotjs,
            color: 'from-gray-700 to-gray-900',
            description: 'React Framework',
            proficiency: 93
        },
        {
            name: 'GraphQL',
            Icon: SiGraphql,
            color: 'from-pink-500 to-purple-600',
            description: 'API Query',
            proficiency: 85
        },
        {
            name: 'MongoDB',
            Icon: SiMongodb,
            color: 'from-green-500 to-teal-600',
            description: 'NoSQL DB',
            proficiency: 90
        },
        {
            name: 'PostgreSQL',
            Icon: SiPostgresql,
            color: 'from-blue-600 to-indigo-700',
            description: 'SQL Database',
            proficiency: 87
        },
        {
            name: 'Angular',
            Icon: FaAngular,
            color: 'from-red-600 to-red-500',
            description: 'Frontend Framework',
            proficiency: 85
        },
        {
            name: 'Vue.js',
            Icon: FaVuejs,
            color: 'from-green-400 to-green-600',
            description: 'Frontend Framework',
            proficiency: 83
        },
        {
            name: 'Laravel',
            Icon: FaLaravel,
            color: 'from-red-500 to-red-700',
            description: 'PHP Framework',
            proficiency: 82
        },
        {
            name: 'SQL',
            Icon: FaDatabase,
            color: 'from-gray-500 to-gray-700',
            description: 'Database Language',
            proficiency: 88
        },
        {
            name: 'AWS',
            Icon: FaAws,
            color: 'from-orange-500 to-yellow-500',
            description: 'Cloud Platform',
            proficiency: 91
        },
        {
            name: 'Docker',
            Icon: FaDocker,
            color: 'from-blue-500 to-cyan-400',
            description: 'Containerization',
            proficiency: 89
        },
        {
            name: 'Kubernetes',
            Icon: SiKubernetes,
            color: 'from-blue-600 to-purple-600',
            description: 'Orchestration',
            proficiency: 82
        },
        {
            name: 'Tailwind',
            Icon: SiTailwindcss,
            color: 'from-cyan-400 to-blue-500',
            description: 'CSS Framework',
            proficiency: 96
        },
        {
            name: 'Firebase',
            Icon: SiFirebase,
            color: 'from-yellow-500 to-orange-500',
            description: 'BaaS Platform',
            proficiency: 88
        },
        {
            name: 'Redis',
            Icon: SiRedis,
            color: 'from-red-500 to-red-600',
            description: 'Caching',
            proficiency: 85
        },
        {
            name: 'Figma',
            Icon: SiFigma,
            color: 'from-purple-500 to-pink-500',
            description: 'Design Tool',
            proficiency: 90
        },
        {
            name: 'Vercel',
            Icon: SiVercel,
            color: 'from-gray-800 to-black',
            description: 'Deployment',
            proficiency: 92
        },
    ]

    return (
        <section className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>

            {/* BACKGROUND GRID */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(${darkMode ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? '#fff' : '#000'} 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${darkMode
                            ? 'bg-purple-900/50 text-purple-300 border border-purple-500/30'
                            : 'bg-purple-100 text-purple-700 border border-purple-200'
                            }`}
                    >
                        💻 Technologies
                    </motion.span>

                    <h2
                        className={`text-4xl md:text-6xl font-black mb-6 font-display ${darkMode ? 'text-white' : 'text-gray-900'
                            }`}
                    >
                        Our <span className="gradient-text">Tech Stack</span>
                    </h2>

                    <p
                        className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                    >
                        Cutting-edge technologies we master to build exceptional products
                    </p>
                </motion.div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
                    {technologies.slice(0, 16).map((tech, index) => {
                        const Icon = tech.Icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.05,
                                    duration: 0.4,
                                    type: 'spring',
                                    stiffness: 100
                                }}
                                whileHover={{
                                    y: -15,
                                    scale: 1.1,
                                    rotateY: 10,
                                    rotateX: 10
                                }}
                                className="group cursor-pointer"
                            >
                                <div
                                    className={`aspect-square rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
                                        } shadow-lg hover:shadow-2xl transition-all duration-500`}
                                >
                                    {/* Hover BG */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    />

                                    {/* ICON */}
                                    <motion.div
                                        className={`text-5xl mb-2 relative z-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Icon />
                                    </motion.div>

                                    {/* NAME */}
                                    <p className={`text-xs font-bold text-center relative z-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {tech.name}
                                    </p>

                                    {/* DESC */}
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className={`text-xs text-center mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                                    >
                                        {tech.description}
                                    </motion.p>

                                    {/* Shine */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                        animate={{ x: ['-100%', '100%'] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 3,
                                            ease: 'linear'
                                        }}
                                    />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* DETAILED CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technologies.slice(0, 4).map((tech, index) => {
                        const Icon = tech.Icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
                                    } shadow-lg hover:shadow-2xl transition-all duration-300`}
                            >
                                <div
                                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white text-3xl mb-4`}
                                >
                                    <Icon />
                                </div>

                                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {tech.name}
                                </h3>

                                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {tech.description}
                                </p>

                                {/* BAR */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs">
                                        <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Proficiency</span>
                                        <span className={`font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                                            {tech.proficiency}%
                                        </span>
                                    </div>
                                    <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${tech.proficiency}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* FLOATING ICONS */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
                {[...Array(15)].map((_, i) => {
                    const RandomIcon = technologies[Math.floor(Math.random() * technologies.length)].Icon
                    return (
                        <motion.div
                            key={i}
                            className="absolute text-6xl"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -50, 0],
                                x: [0, Math.random() * 30 - 15, 0],
                                rotate: [0, 360],
                                opacity: [0.1, 0.3, 0.1],
                            }}
                            transition={{
                                duration: Math.random() * 20 + 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <RandomIcon />
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default TechStack
