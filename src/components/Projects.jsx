import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa'

const Projects = ({ darkMode }) => {
    const [filter, setFilter] = useState('all')
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const categories = ['all', 'web', 'mobile', 'ai', 'blockchain']

    const projects = [
        {
            title: 'E-Commerce Platform',
            category: 'web',
            description: 'A modern, scalable e-commerce solution with AI-powered recommendations and real-time analytics',
            image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop&q=80',
            tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],
            gradient: 'from-purple-500 to-pink-500',
            link: '#',
            github: '#',
            metrics: {
                users: '100K+',
                growth: '+250%',
                rating: '4.8/5'
            }
        },
        {
            title: 'FinTech Dashboard',
            category: 'web',
            description: 'Real-time financial analytics and trading platform with advanced charting and portfolio management',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
            tags: ['Vue.js', 'Python', 'PostgreSQL', 'Docker', 'WebSocket'],
            gradient: 'from-blue-500 to-cyan-500',
            link: '#',
            github: '#',
            metrics: {
                users: '50K+',
                transactions: '1M+',
                uptime: '99.9%'
            }
        },
        {
            title: 'Healthcare Mobile App',
            category: 'mobile',
            description: 'Telemedicine platform connecting patients with doctors featuring video calls and e-prescriptions',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80',
            tags: ['React Native', 'Firebase', 'TypeScript', 'WebRTC'],
            gradient: 'from-green-500 to-teal-500',
            link: '#',
            github: '#',
            metrics: {
                downloads: '500K+',
                doctors: '5K+',
                rating: '4.9/5'
            }
        },
        {
            title: 'AI Chat Assistant',
            category: 'ai',
            description: 'Intelligent chatbot with natural language processing and multi-language support',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80',
            tags: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'NLP'],
            gradient: 'from-yellow-500 to-orange-500',
            link: '#',
            github: '#',
            metrics: {
                accuracy: '95%',
                languages: '50+',
                queries: '10M+'
            }
        },
        {
            title: 'Smart IoT System',
            category: 'web',
            description: 'Connected device management and monitoring platform with real-time data visualization',
            image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop&q=80',
            tags: ['Angular', 'MQTT', 'InfluxDB', 'Grafana', 'IoT'],
            gradient: 'from-indigo-500 to-purple-500',
            link: '#',
            github: '#',
            metrics: {
                devices: '100K+',
                data: '1TB+',
                response: '<50ms'
            }
        },
        {
            title: 'NFT Marketplace',
            category: 'blockchain',
            description: 'Decentralized NFT trading platform with wallet integration and smart contracts',
            image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&q=80',
            tags: ['React', 'Solidity', 'Web3', 'IPFS', 'Ethereum'],
            gradient: 'from-pink-500 to-purple-600',
            link: '#',
            github: '#',
            metrics: {
                volume: '$50M+',
                nfts: '100K+',
                users: '25K+'
            }
        },
        {
            title: 'Education Portal',
            category: 'web',
            description: 'Interactive learning platform with live classes, assessments, and progress tracking',
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop&q=80',
            tags: ['Next.js', 'GraphQL', 'Prisma', 'WebRTC', 'AWS'],
            gradient: 'from-red-500 to-pink-500',
            link: '#',
            github: '#',
            metrics: {
                students: '200K+',
                courses: '1K+',
                completion: '85%'
            }
        },
        {
            title: 'Food Delivery App',
            category: 'mobile',
            description: 'On-demand food delivery with real-time tracking and seamless payment integration',
            image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&q=80',
            tags: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps', 'Stripe'],
            gradient: 'from-orange-500 to-red-500',
            link: '#',
            github: '#',
            metrics: {
                orders: '5M+',
                restaurants: '10K+',
                delivery: '<30min'
            }
        },
        {
            title: 'AI Image Generator',
            category: 'ai',
            description: 'Text-to-image AI model with custom training and style transfer capabilities',
            image: 'https://images.unsplash.com/photo-1686191128892-c15fbd0b4a1b?w=800&h=600&fit=crop&q=80',
            tags: ['Python', 'Stable Diffusion', 'PyTorch', 'FastAPI'],
            gradient: 'from-cyan-500 to-blue-600',
            link: '#',
            github: '#',
            metrics: {
                images: '10M+',
                users: '100K+',
                quality: 'HD 4K'
            }
        },
    ]

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter)

    return (
        <section
            id="projects"
            className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gray-950' : 'bg-gray-50'
                }`}
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
                        style={{
                            background: `linear-gradient(45deg, ${['#8b5cf6', '#ec4899', '#3b82f6', '#10b981', '#f59e0b'][i]}, transparent)`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -100, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 20 + i * 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
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
                        💼 Our Work
                    </motion.span>

                    <h2 className={`text-4xl md:text-6xl font-black mb-6 font-display ${darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                        Featured <span className="gradient-text">Projects</span>
                    </h2>

                    <p className={`text-xl max-w-2xl mx-auto mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Showcasing our latest work and success stories across industries
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-2 rounded-xl font-semibold capitalize transition-all duration-300 ${filter === category
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                                    : darkMode
                                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -10 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                className="group"
                            >
                                <div className={`h-full rounded-2xl overflow-hidden ${darkMode
                                    ? 'bg-gray-900 border border-gray-800'
                                    : 'bg-white border border-gray-200'
                                    } shadow-xl hover:shadow-2xl transition-all duration-500 card-3d`}>

                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            animate={{
                                                scale: hoveredIndex === index ? 1.1 : 1,
                                            }}
                                            transition={{ duration: 0.6 }}
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />

                                        {/* Overlay Links */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            className="absolute inset-0 flex items-center justify-center gap-4"
                                        >
                                            <motion.a
                                                href={project.link}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                                            >
                                                <FaExternalLinkAlt className="text-gray-900" />
                                            </motion.a>
                                            <motion.a
                                                href={project.github}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                                            >
                                                <FaGithub className="text-gray-900" />
                                            </motion.a>
                                        </motion.div>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm text-gray-900 capitalize`}>
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'
                                            }`}>
                                            {project.title}
                                        </h3>

                                        <p className={`mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                            }`}>
                                            {project.description}
                                        </p>

                                        {/* Metrics */}
                                        <div className="grid grid-cols-3 gap-2 mb-4">
                                            {Object.entries(project.metrics).map(([key, value]) => (
                                                <div key={key} className={`text-center p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'
                                                    }`}>
                                                    <div className={`text-sm font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                                        {value}
                                                    </div>
                                                    <div className={`text-xs capitalize ${darkMode ? 'text-gray-500' : 'text-gray-600'
                                                        }`}>
                                                        {key}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, tagIndex) => (
                                                <motion.span
                                                    key={tagIndex}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: tagIndex * 0.05 }}
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${darkMode
                                                        ? 'bg-gray-800 text-gray-300'
                                                        : 'bg-gray-100 text-gray-700'
                                                        }`}
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <motion.button
                                            whileHover={{ x: 5 }}
                                            className={`flex items-center space-x-2 font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group`}
                                        >
                                            <span>View Project</span>
                                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-lg neon-glow"
                    >
                        View All Projects →
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects