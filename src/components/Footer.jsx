import { motion } from 'framer-motion'
import {
    FaHeart,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaYoutube,      // Added
    FaFacebook      // Added
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        Services: [
            { name: 'Web Development', path: '/services' },
            { name: 'Mobile Apps', path: '/services' },
            { name: 'AI & ML', path: '/services' },
            { name: 'Cloud Solutions', path: '/services' },
            { name: 'SMS & WhatsApp Marketing', path: '/services' },
        ],
        Company: [
            { name: 'About Us', path: '/about' },
            { name: 'Our Team', path: '/team' },
            { name: 'Projects', path: '/projects' },
            { name: 'Testimonials', path: '/testimonials' },
            { name: 'Contact', path: '/contact' },
        ],
    }

    const contactInfo = [
        { name: 'contact@lifeboattechnologies.com', href: 'mailto:contact@lifeboattechnologies.com', icon: FaEnvelope },
        { name: '+91 9014651719', href: 'tel:+919014651719', icon: FaPhone },
        { name: 'Hanamkonda, Telangana', href: 'https://maps.app.goo.gl/xynyqCDBtkNt5KFN6', icon: FaMapMarkerAlt },
    ]

    // ✅ Updated Social Links with correct URLs
    const socialLinks = [
        {
            Icon: FaYoutube,
            link: 'https://www.youtube.com/channel/UCoTSMlJhz2MQkOUJrrVHzHQ',
            label: 'YouTube',
            hoverColor: 'hover:bg-red-600'
        },
        {
            Icon: FaTwitter,
            link: 'https://x.com/iamLifeboat',
            label: 'Twitter',
            hoverColor: 'hover:bg-black'
        },
        {
            Icon: FaInstagram,
            link: 'https://www.instagram.com/lifeboat_technologies/',
            label: 'Instagram',
            hoverColor: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
        },
        {
            Icon: FaLinkedin,
            link: 'https://www.linkedin.com/company/lifeboat-technologies-india/',
            label: 'LinkedIn',
            hoverColor: 'hover:bg-blue-600'
        },
        {
            Icon: FaFacebook,
            link: 'https://www.facebook.com/LifeboatTechnologies.Education/',
            label: 'Facebook',
            hoverColor: 'hover:bg-blue-700'
        },
    ]

    return (
        <footer className="relative overflow-hidden bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo & Description */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center space-x-3 mb-6">
                            <img src="/assets/LOGO  LIFE11.png" alt="Lifeboat" className="w-25 h-24 object-contain" />
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Building the future, one line of code at a time. Transform your ideas into innovative digital solutions.
                        </p>

                        {/* ✅ Updated Social Links Section */}
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white ${social.hoverColor} transition-all`}
                                >
                                    <social.Icon className="text-lg" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.Services.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-[#32a162] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.Company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-[#32a162] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            {contactInfo.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <item.icon className="text-[#32a162]" />
                                        <span className="text-sm">{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Lifeboat Technologies. All rights reserved. Made with{' '}
                        <FaHeart className="inline text-red-500" /> in Hanamkonda
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
                        <a href="#" className="text-gray-400 hover:text-white">Terms</a>
                        <a href="#" className="text-gray-400 hover:text-white">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer