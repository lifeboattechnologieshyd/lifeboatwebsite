import { motion } from 'framer-motion'
import { FaHeart, FaRocket, FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        Services: [
            'Web Development',
            'Mobile Apps',
            'AI & ML',
            'Cloud Solutions',
            'UI/UX Design',
            'Consulting'
        ],
        Company: [
            'About Us',
            'Our Team',
            'Careers',
            'Blog',
            'Press Kit',
            'Partners'
        ],
        Resources: [
            'Case Studies',
            'Documentation',
            'API Reference',
            'Community',
            'Support',
            'Status'
        ],
        Legal: [
            'Privacy Policy',
            'Terms of Service',
            'Cookie Policy',
            'GDPR',
            'Security',
            'Compliance'
        ]
    }

    const socialLinks = [
        { Icon: FaLinkedin, link: '#', color: 'hover:text-blue-500' },
        { Icon: FaTwitter, link: '#', color: 'hover:text-sky-500' },
        { Icon: FaGithub, link: '#', color: 'hover:text-gray-600' },
        { Icon: FaInstagram, link: '#', color: 'hover:text-pink-500' },
    ]

    return (
        <footer className={`relative overflow-hidden ${darkMode
            ? 'bg-gray-900 border-t border-gray-800'
            : 'bg-white border-t border-gray-200'
            }`}>
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, ${darkMode ? '#fff' : '#000'} 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
                        {/* Company Info - Takes 2 columns */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            {/* Logo */}
                            <div className="flex items-center space-x-3 mb-6">
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg"
                                >
                                    <FaRocket className="text-white text-2xl" />
                                </motion.div>
                                <span className={`text-2xl font-bold font-display ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    Lifeboat <span className="gradient-text">Tech</span>
                                </span>
                            </div>

                            <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                Building the future, one line of code at a time. We transform ideas into innovative digital solutions that drive growth and success.
                            </p>

                            {/* Newsletter */}
                            <div className="mb-6">
                                <h4 className={`text-sm font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    Subscribe to our newsletter
                                </h4>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className={`flex-1 px-4 py-2 rounded-lg border ${darkMode
                                            ? 'bg-gray-800 border-gray-700 text-white'
                                            : 'bg-gray-50 border-gray-300 text-gray-900'
                                            } outline-none focus:border-purple-500 transition-all`}
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow-lg"
                                    >
                                        Subscribe
                                    </motion.button>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.link}
                                        whileHover={{ scale: 1.2, y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`w-10 h-10 rounded-lg ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'
                                            } flex items-center justify-center ${social.color} transition-all`}
                                    >
                                        <social.Icon className="text-lg" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Links Columns */}
                        {Object.entries(footerLinks).map(([title, links], columnIndex) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: columnIndex * 0.1 }}
                            >
                                <h3 className={`text-sm font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    {title}
                                </h3>
                                <ul className="space-y-3">
                                    {links.map((link, index) => (
                                        <motion.li
                                            key={index}
                                            whileHover={{ x: 5 }}
                                        >
                                            <a
                                                href="#"
                                                className={`text-sm ${darkMode
                                                    ? 'text-gray-400 hover:text-white'
                                                    : 'text-gray-600 hover:text-gray-900'
                                                    } transition-colors`}
                                            >
                                                {link}
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={`py-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'
                    }`}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                            © {currentYear} Lifeboat Technologies. All rights reserved. Made with{' '}
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="inline-block"
                            >
                                <FaHeart className="inline text-red-500" />
                            </motion.span>
                            {' '}and ☕ in San Francisco
                        </motion.p>

                        {/* Quick Links */}
                        <div className="flex flex-wrap gap-6 text-sm">
                            {['Privacy', 'Terms', 'Cookies', 'Sitemap'].map((item, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ y: -2 }}
                                    className={`${darkMode
                                        ? 'text-gray-400 hover:text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                        } transition-colors`}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Back to Top Button - Visible on scroll */}
                <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl flex items-center justify-center neon-glow z-50"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </motion.button>
            </div>
        </footer>
    )
}

export default Footer