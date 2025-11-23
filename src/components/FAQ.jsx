import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa'

const FAQ = ({ darkMode }) => {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            category: 'General',
            icon: '🌟',
            questions: [
                {
                    question: 'What technologies do you specialize in?',
                    answer: 'We specialize in modern web and mobile technologies including React, Next.js, Node.js, Python, React Native, Flutter, AWS, Docker, Kubernetes, and AI/ML frameworks like TensorFlow and PyTorch. Our team stays updated with the latest industry trends and best practices to deliver cutting-edge solutions.'
                },
                {
                    question: 'What industries do you serve?',
                    answer: 'We serve a diverse range of industries including FinTech, HealthTech, E-commerce, Education, Real Estate, Logistics, Entertainment, and more. Our versatile team has experience building solutions for startups to enterprise-level organizations across 15+ countries.'
                },
            ]
        },
        {
            category: 'Project Management',
            icon: '📋',
            questions: [
                {
                    question: 'How long does a typical project take?',
                    answer: 'Project timelines vary based on complexity and scope. A simple web application typically takes 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed project timelines during the discovery phase and use Agile methodology with 2-week sprints for transparent progress tracking.'
                },
                {
                    question: 'What is your development process?',
                    answer: 'We follow a comprehensive 6-phase process: (1) Discovery & Research - understanding your needs, (2) Design & Prototyping - creating wireframes and designs, (3) Development - building with Agile sprints, (4) Testing & QA - rigorous quality assurance, (5) Launch & Deployment - seamless go-live, and (6) Support & Maintenance - ongoing optimization and updates.'
                },
                {
                    question: 'How do you handle project communication?',
                    answer: 'We believe in transparent communication. You\'ll have a dedicated project manager, access to project management tools (Jira, Trello, or Asana), weekly progress updates, bi-weekly sprint reviews, and 24/7 access to our team via Slack or Microsoft Teams. We adapt to your preferred communication style.'
                },
            ]
        },
        {
            category: 'Pricing & Support',
            icon: '💰',
            questions: [
                {
                    question: 'What are your pricing models?',
                    answer: 'We offer flexible pricing models to suit different needs: (1) Fixed Price - for well-defined projects with clear scope, (2) Time & Materials - for evolving projects with changing requirements, (3) Dedicated Team - for long-term engagements, and (4) Retainer - for ongoing support and maintenance. All models include transparent billing and regular invoicing.'
                },
                {
                    question: 'Do you provide post-launch support?',
                    answer: 'Yes! We offer comprehensive post-launch support including bug fixes, security updates, performance optimization, feature enhancements, and 24/7 technical support. We provide different support tiers - Bronze (business hours), Silver (extended hours), and Gold (24/7) - to match your needs and budget.'
                },
                {
                    question: 'What about data security and confidentiality?',
                    answer: 'We take security seriously. All projects include NDA agreements, secure development practices (OWASP compliance), encrypted data transmission, regular security audits, GDPR/HIPAA compliance when required, and secure cloud infrastructure. Your intellectual property and data are always protected.'
                },
            ]
        },
        {
            category: 'Technical',
            icon: '⚙️',
            questions: [
                {
                    question: 'Can you work with our existing team?',
                    answer: 'Absolutely! We offer staff augmentation services and can seamlessly integrate with your in-house team. We\'re experienced with various collaboration tools, version control systems (Git), and can adapt to your existing workflows, coding standards, and project management practices.'
                },
                {
                    question: 'Do you provide source code and documentation?',
                    answer: 'Yes, complete ownership! You receive full source code, comprehensive technical documentation, API documentation, deployment guides, user manuals, and training materials. We ensure knowledge transfer so your team can maintain and extend the solution independently if needed.'
                },
                {
                    question: 'What about scalability and performance?',
                    answer: 'We architect solutions for scale from day one. Our applications are built with microservices architecture, implement caching strategies (Redis), use CDNs for global delivery, optimize databases, implement load balancing, and utilize auto-scaling cloud infrastructure. We regularly conduct performance testing and optimization.'
                },
            ]
        },
    ]

    const toggleFAQ = (categoryIndex, questionIndex) => {
        const index = `${categoryIndex}-${questionIndex}`
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gray-950' : 'bg-gray-50'
            }`}>
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-5 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full opacity-5 blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        ❓ FAQ
                    </motion.span>

                    <h2 className={`text-4xl md:text-6xl font-black mb-6 font-display ${darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>

                    <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Everything you need to know about our services and processes
                    </p>
                </motion.div>

                {/* FAQ Categories */}
                <div className="space-y-8">
                    {faqs.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">{category.icon}</span>
                                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    {category.category}
                                </h3>
                            </div>

                            {/* Questions */}
                            <div className="space-y-4">
                                {category.questions.map((faq, questionIndex) => {
                                    const index = `${categoryIndex}-${questionIndex}`
                                    const isOpen = openIndex === index

                                    return (
                                        <motion.div
                                            key={questionIndex}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: questionIndex * 0.05 }}
                                            className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'
                                                } shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${isOpen ? 'border-purple-500' : 'border-transparent'
                                                }`}
                                        >
                                            {/* Question Button */}
                                            <motion.button
                                                onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                                                className={`w-full p-6 text-left flex justify-between items-center gap-4 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                                                    } transition-colors group`}
                                                whileHover={{ x: 5 }}
                                            >
                                                <div className="flex items-start gap-4 flex-1">
                                                    <motion.div
                                                        animate={{ rotate: isOpen ? 360 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className={`flex-shrink-0 mt-1 ${isOpen ? 'text-purple-500' : darkMode ? 'text-gray-600' : 'text-gray-400'
                                                            }`}
                                                    >
                                                        <FaQuestionCircle className="text-xl" />
                                                    </motion.div>
                                                    <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'
                                                        } group-hover:text-purple-500 transition-colors`}>
                                                        {faq.question}
                                                    </span>
                                                </div>

                                                <motion.div
                                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${isOpen
                                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                                        : darkMode
                                                            ? 'bg-gray-800 text-gray-400'
                                                            : 'bg-gray-100 text-gray-600'
                                                        } group-hover:scale-110 transition-all`}
                                                >
                                                    {isOpen ? <FaMinus /> : <FaPlus />}
                                                </motion.div>
                                            </motion.button>

                                            {/* Answer */}
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <motion.div
                                                            initial={{ y: -20 }}
                                                            animate={{ y: 0 }}
                                                            exit={{ y: -20 }}
                                                            className={`px-6 pb-6 pl-20 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                                                } leading-relaxed`}
                                                        >
                                                            {faq.answer}
                                                        </motion.div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Still Have Questions CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`mt-16 p-8 rounded-2xl text-center ${darkMode
                        ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30'
                        : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200'
                        }`}
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-5xl mb-4"
                    >
                        💡
                    </motion.div>
                    <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Still Have Questions?
                    </h3>
                    <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Our team is here to help. Get in touch and we'll answer all your queries.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold shadow-lg neon-glow"
                    >
                        Contact Us →
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default FAQ