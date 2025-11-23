import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = ({ darkMode }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CEO, TechStart Inc.',
            company: 'TechStart Inc.',
            image: 'https://i.pravatar.cc/400?img=44',
            feedback: 'Lifeboat Technologies transformed our vision into reality with exceptional expertise and dedication. The team delivered beyond our expectations, creating a scalable platform that has driven 250% growth in just 6 months!',
            rating: 5,
            project: 'SaaS Platform',
            gradient: 'from-purple-500 to-pink-500',
            stats: {
                roi: '+250%',
                timeline: '3 months',
                satisfaction: '100%'
            }
        },
        {
            name: 'Michael Chen',
            role: 'CTO, DataFlow Systems',
            company: 'DataFlow Systems',
            image: 'https://i.pravatar.cc/400?img=51',
            feedback: 'Outstanding work! The development process was smooth, transparent, and the final product exceeded all our requirements. Their technical expertise in handling complex data pipelines is simply unmatched.',
            rating: 5,
            project: 'Analytics Dashboard',
            gradient: 'from-blue-500 to-cyan-500',
            stats: {
                performance: '+180%',
                users: '500K+',
                uptime: '99.9%'
            }
        },
        {
            name: 'Emma Williams',
            role: 'Product Manager, CloudNine',
            company: 'CloudNine',
            image: 'https://i.pravatar.cc/400?img=45',
            feedback: 'Professional, responsive, and incredibly talented. Lifeboat Technologies helped us scale our platform to millions of users seamlessly. Their DevOps expertise saved us countless hours and resources.',
            rating: 5,
            project: 'Cloud Infrastructure',
            gradient: 'from-green-500 to-teal-500',
            stats: {
                scalability: '10M users',
                cost: '-40%',
                speed: '+300%'
            }
        },
        {
            name: 'David Rodriguez',
            role: 'Founder, FinanceHub',
            company: 'FinanceHub',
            image: 'https://i.pravatar.cc/400?img=12',
            feedback: 'The best development partner we\'ve ever worked with. They understand business needs and translate them into elegant technical solutions. Our fintech platform is now processing millions in transactions daily.',
            rating: 5,
            project: 'FinTech Platform',
            gradient: 'from-yellow-500 to-orange-500',
            stats: {
                transactions: '$50M+',
                security: 'A+ Grade',
                compliance: '100%'
            }
        },
        {
            name: 'Lisa Anderson',
            role: 'Director of Engineering, HealthTech Plus',
            company: 'HealthTech Plus',
            image: 'https://i.pravatar.cc/400?img=47',
            feedback: 'Exceptional quality and attention to detail. The team built our telemedicine platform with HIPAA compliance and amazing UX. Patient satisfaction scores went through the roof!',
            rating: 5,
            project: 'Telemedicine App',
            gradient: 'from-pink-500 to-rose-500',
            stats: {
                patients: '100K+',
                rating: '4.9/5',
                growth: '+400%'
            }
        },
        {
            name: 'James Taylor',
            role: 'VP of Technology, EduLearn',
            company: 'EduLearn',
            image: 'https://i.pravatar.cc/400?img=33',
            feedback: 'Lifeboat Technologies built our e-learning platform from scratch. The result? A beautiful, intuitive platform that students love. Engagement rates increased by 300%!',
            rating: 5,
            project: 'Education Platform',
            gradient: 'from-indigo-500 to-purple-500',
            stats: {
                students: '200K+',
                completion: '85%',
                nps: '92'
            }
        },
    ]

    const nextTestimonial = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const goToTestimonial = (index) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }

    // Auto-scroll every 5 seconds
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            nextTestimonial()
        }, 5000)

        return () => clearInterval(interval)
    }, [currentIndex, isAutoPlaying])

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
        }),
    }

    return (
        <section
            id="testimonials"
            className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'
                }`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                        backgroundSize: '100px 100px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
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
                        💬 Testimonials
                    </motion.span>

                    <h2 className={`text-4xl md:text-6xl font-black mb-6 font-display ${darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                        What Our <span className="gradient-text">Clients Say</span>
                    </h2>

                    <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Real feedback from real clients who trust us with their digital transformation
                    </p>
                </motion.div>

                {/* Main Testimonial Slider */}
                <div className="relative max-w-6xl mx-auto mb-12">
                    <div className="relative h-[600px] md:h-[500px]">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 },
                                    scale: { duration: 0.3 }
                                }}
                                className="absolute w-full"
                            >
                                <div className={`p-8 md:p-12 rounded-3xl ${darkMode
                                    ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                                    : 'bg-gradient-to-br from-gray-50 to-gray-100'
                                    } shadow-2xl border-2 border-transparent hover:border-purple-500 transition-all duration-500`}>

                                    {/* Quote Icon */}
                                    <motion.div
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className={`absolute -top-6 left-8 w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[currentIndex].gradient} flex items-center justify-center shadow-xl`}
                                    >
                                        <FaQuoteLeft className="text-2xl text-white" />
                                    </motion.div>

                                    {/* Project Badge */}
                                    <div className="absolute top-8 right-8">
                                        <span className={`px-4 py-2 rounded-full text-sm font-bold ${darkMode ? 'bg-gray-700 text-purple-300' : 'bg-white text-purple-700'
                                            } shadow-lg`}>
                                            🚀 {testimonials[currentIndex].project}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                                        {/* Left - Client Info */}
                                        <div className="md:col-span-1 text-center md:text-left">
                                            {/* Avatar with Gradient Border */}
                                            <div className={`inline-block p-1 rounded-2xl bg-gradient-to-br ${testimonials[currentIndex].gradient} mb-4`}>
                                                <motion.img
                                                    src={testimonials[currentIndex].image}
                                                    alt={testimonials[currentIndex].name}
                                                    className="w-32 h-32 rounded-2xl object-cover"
                                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                                />
                                            </div>

                                            <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'
                                                }`}>
                                                {testimonials[currentIndex].name}
                                            </h3>

                                            <p className={`text-lg font-semibold mb-1 bg-gradient-to-r ${testimonials[currentIndex].gradient} bg-clip-text text-transparent`}>
                                                {testimonials[currentIndex].role}
                                            </p>

                                            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                                }`}>
                                                {testimonials[currentIndex].company}
                                            </p>

                                            {/* Star Rating */}
                                            <div className="flex justify-center md:justify-start gap-1 mb-4">
                                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: i * 0.1 }}
                                                    >
                                                        <FaStar className="text-yellow-500 text-xl" />
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Stats */}
                                            <div className="space-y-2">
                                                {Object.entries(testimonials[currentIndex].stats).map(([key, value], idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.1 }}
                                                        className={`flex justify-between items-center p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'
                                                            }`}
                                                    >
                                                        <span className={`text-sm capitalize ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                                            }`}>
                                                            {key}:
                                                        </span>
                                                        <span className={`font-bold bg-gradient-to-r ${testimonials[currentIndex].gradient} bg-clip-text text-transparent`}>
                                                            {value}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right - Feedback */}
                                        <div className="md:col-span-2 flex flex-col justify-center">
                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className={`text-xl md:text-2xl italic leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                                    }`}
                                            >
                                                "{testimonials[currentIndex].feedback}"
                                            </motion.p>

                                            {/* Decorative Elements */}
                                            <motion.div
                                                className="mt-8 flex gap-2"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                {[...Array(3)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className={`h-1 bg-gradient-to-r ${testimonials[currentIndex].gradient} rounded-full`}
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${(i + 1) * 33}%` }}
                                                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                                                    />
                                                ))}
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevTestimonial}
                            className={`w-14 h-14 rounded-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                                } shadow-lg flex items-center justify-center hover:shadow-xl transition-all`}
                        >
                            <FaChevronLeft className="text-xl" />
                        </motion.button>

                        {/* Dot Indicators */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => goToTestimonial(index)}
                                    className={`transition-all duration-100 rounded-full ${index === currentIndex
                                        ? `w-12 h-3 bg-gradient-to-r ${testimonials[currentIndex].gradient}`
                                        : `w-3 h-3 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`
                                        }`}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextTestimonial}
                            className={`w-14 h-14 rounded-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                                } shadow-lg flex items-center justify-center hover:shadow-xl transition-all`}
                        >
                            <FaChevronRight className="text-xl" />
                        </motion.button>
                    </div>
                </div>

                {/* Client Logos */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className={`text-sm font-semibold mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        TRUSTED BY LEADING COMPANIES WORLDWIDE
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix'].map((company, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.2, opacity: 1 }}
                                className={`text-2xl font-black ${darkMode ? 'text-gray-600' : 'text-gray-400'
                                    }`}
                            >
                                {company}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials