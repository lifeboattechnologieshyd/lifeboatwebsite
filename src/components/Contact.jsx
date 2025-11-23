import { motion } from 'framer-motion'
import { useState } from 'react'
import {
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock,
    FaLinkedin, FaTwitter, FaGithub, FaInstagram,
    FaPaperPlane, FaCheckCircle
} from 'react-icons/fa'

const Contact = ({ darkMode }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const services = [
        'Web Development',
        'Mobile App Development',
        'AI/ML Solutions',
        'Cloud & DevOps',
        'UI/UX Design',
        'Consulting',
        'Other'
    ]

    const budgets = [
        '< $10,000',
        '$10,000 - $25,000',
        '$25,000 - $50,000',
        '$50,000 - $100,000',
        '> $100,000'
    ]

    const contactInfo = [
        {
            icon: <FaEnvelope className="text-2xl" />,
            title: 'Email Us',
            info: 'hello@lifeboat.tech',
            subInfo: 'We reply within 24 hours',
            gradient: 'from-purple-500 to-pink-500',
            link: 'mailto:hello@lifeboat.tech'
        },
        {
            icon: <FaPhone className="text-2xl" />,
            title: 'Call Us',
            info: '+91 7569787335',
            subInfo: 'Mon-Fri from 9am to 6pm',
            gradient: 'from-blue-500 to-cyan-500',
            link: 'tel:+917569787335'
        },
        {
            icon: <FaMapMarkerAlt className="text-2xl" />,
            title: 'Visit Us',
            info: '3rd Floor, GMR & GS Complex, Near Police Headquarters, Hanamkonda, Kishanpura, Telangana 506001',
            subInfo: 'Come say hello at our office',
            gradient: 'from-green-500 to-teal-500',
            link: 'https://maps.app.goo.gl/xynyqCDBtkNt5KFN6'
        },
        {
            icon: <FaClock className="text-2xl" />,
            title: 'Working Hours',
            info: 'Mon - Sat: 10AM - 7PM',
            subInfo: 'Weekend: By appointment',
            gradient: 'from-orange-500 to-red-500',
            link: null
        },
    ]

    const socialLinks = [
        { Icon: FaLinkedin, link: 'https://linkedin.com/company/lifeboat-tech', color: '#0077b5', name: 'LinkedIn' },
        { Icon: FaTwitter, link: 'https://twitter.com/lifeboattech', color: '#1da1f2', name: 'Twitter' },
        { Icon: FaGithub, link: 'https://github.com/lifeboattech', color: '#333', name: 'GitHub' },
        { Icon: FaInstagram, link: 'https://instagram.com/lifeboattech', color: '#e4405f', name: 'Instagram' },
    ]

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' })
        }
    }

    const validate = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required'
        return newErrors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newErrors = validate()

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setIsSubmitting(true)

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                budget: '',
                message: '',
            })

            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000)
        }, 2000)
    }

    return (
        <section
            id="contact"
            className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gray-950' : 'bg-gray-50'
                }`}
        >
            {/* Background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 mesh-gradient" />
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
                        📧 Get In Touch
                    </motion.span>

                    <h2 className={`text-4xl md:text-6xl font-black mb-6 font-display ${darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                        Let's Start a <span className="gradient-text">Conversation</span>
                    </h2>

                    <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
                            } shadow-2xl`}>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 0.5 }}
                                        className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6"
                                    >
                                        <FaCheckCircle className="text-5xl text-white" />
                                    </motion.div>
                                    <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Message Sent! 🎉
                                    </h3>
                                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                                        Thank you for reaching out! We'll get back to you within 24 hours.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name & Email */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                                }`}>
                                                Your Name *
                                            </label>
                                            <motion.input
                                                whileFocus={{ scale: 1.02 }}
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 ${errors.name
                                                    ? 'border-red-500'
                                                    : darkMode
                                                        ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500'
                                                        : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                                                    } outline-none transition-all`}
                                                placeholder="Nimmala Prashanth"
                                            />
                                            {errors.name && (
                                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                                }`}>
                                                Email Address *
                                            </label>
                                            <motion.input
                                                whileFocus={{ scale: 1.02 }}
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 ${errors.email
                                                    ? 'border-red-500'
                                                    : darkMode
                                                        ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500'
                                                        : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                                                    } outline-none transition-all`}
                                                placeholder="nimmalaprashanth9@gmail.com"
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Phone & Company */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                                }`}>
                                                Phone Number
                                            </label>
                                            <motion.input
                                                whileFocus={{ scale: 1.02 }}
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 ${darkMode
                                                    ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500'
                                                    : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                                                    } outline-none transition-all`}
                                                placeholder="+91 7569787335"
                                            />
                                        </div>

                                        <div>
                                            <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                                }`}>
                                                Company Name
                                            </label>
                                            <motion.input
                                                whileFocus={{ scale: 1.02 }}
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 ${darkMode
                                                    ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500'
                                                    : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                                                    } outline-none transition-all`}
                                                placeholder="LifeBoat Technologies"
                                            />
                                        </div>
                                    </div>

                                    {/* Service & Budget */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                                }`}>
                                                Service Interested In
                                            </label>
                                            <motion.select
                                                whileFocus={{ scale: 1.02 }}
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 ${darkMode
                                                    ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500'
                                                    : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                                                    } outline-none transition-all`}
                                            >
                                                <option value="">Select a service</option>
                                                {services.map((service) => (
                                                    <option key={service} value={service}>{service}</option>
                                                ))}
                                            </motion.select>
                                        </div>

                                        <div>
                                            <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                                }`}>
                                                Project Budget
                                            </label>
                                            <motion.select
                                                whileFocus={{ scale: 1.02 }}
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 ${darkMode
                                                    ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500'
                                                    : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                                                    } outline-none transition-all`}
                                            >
                                                <option value="">Select budget range</option>
                                                {budgets.map((budget) => (
                                                    <option key={budget} value={budget}>{budget}</option>
                                                ))}
                                            </motion.select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                            }`}>
                                            Your Message *
                                        </label>
                                        <motion.textarea
                                            whileFocus={{ scale: 1.02 }}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="6"
                                            className={`w-full px-4 py-3 rounded-xl border-2 ${errors.message
                                                ? 'border-red-500'
                                                : darkMode
                                                    ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500'
                                                    : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                                                } outline-none transition-all resize-none`}
                                            placeholder="Tell us about your project..."
                                        ></motion.textarea>
                                        {errors.message && (
                                            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-2xl neon-glow flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                    className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                                                />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Right - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {/* Contact Cards */}
                        {contactInfo.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.link || '#'}
                                target={item.link?.startsWith('http') ? '_blank' : '_self'}
                                rel={item.link?.startsWith('http') ? 'noopener noreferrer' : ''}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 10, scale: 1.02 }}
                                className={`block p-6 rounded-2xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
                                    } shadow-lg hover:shadow-2xl transition-all duration-300 group ${item.link ? 'cursor-pointer' : 'cursor-default'}`}
                            >
                                <div className="flex items-start gap-4">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <div className="flex-1">
                                        <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'
                                            }`}>
                                            {item.title}
                                        </h3>
                                        <p className={`text-lg font-semibold mb-1 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                                            {item.info}
                                        </p>
                                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {item.subInfo}
                                        </p>
                                    </div>
                                </div>
                            </motion.a>
                        ))}

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
                                } shadow-lg`}
                        >
                            <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Follow Us
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`w-12 h-12 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'
                                            } flex items-center justify-center hover:shadow-lg transition-all`}
                                        style={{
                                            color: darkMode ? '#fff' : social.color
                                        }}
                                    >
                                        <social.Icon className="text-xl" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* ✅ UPDATED: Google Maps - iframe tho */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-lg h-64 relative group"
                        >
                            {/* Google Maps Iframe */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.5463156789!2d79.56234!3d18.01234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba0c0c0c0c0c0%3A0x1234567890!2sGMR%20%26%20GS%20Complex%2C%20Hanamkonda!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="group-hover:scale-105 transition-transform duration-700"
                                title="Office Location"
                            />

                            {/* Overlay with office info */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6 pointer-events-none">
                                <div className="text-white">
                                    <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                                        Visit Our Office
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                            className="text-sm"
                                        >
                                            →
                                        </motion.span>
                                    </h3>
                                    <p className="text-sm opacity-90">3rd Floor, GMR & GS Complex</p>
                                    <p className="text-xs opacity-75 mt-1">Click to open in Google Maps</p>
                                </div>
                            </div>

                            {/* Clickable overlay */}
                            <a
                                href="https://maps.app.goo.gl/xynyqCDBtkNt5KFN6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-10"
                                aria-label="Open location in Google Maps"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact