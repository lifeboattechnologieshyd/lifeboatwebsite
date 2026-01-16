// src/pages/ProjectDetailPage.jsx
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    FaArrowLeft,
    FaExternalLinkAlt,
    FaGithub,
    FaCalendar,
    FaUsers,
    FaStar,
    FaClock,
    FaCheckCircle,
    FaLightbulb,
    FaTools,
    FaQuoteLeft,
    FaGooglePlay,
    FaAppStore,
    FaGlobe,
    FaYoutube
} from 'react-icons/fa'
import { useState } from 'react'

const ProjectDetailPage = () => {
    const { projectId } = useParams()
    const navigate = useNavigate()
    const [selectedImage, setSelectedImage] = useState(0)

    // 📦 Complete Project Data with All Projects
    const projectData = {
        'dhuniya-news': {
            title: 'Dhuniya',
            subtitle: 'Smart, Personalized News App',
            category: 'mobile',
            tagline: 'Your News, Your Way – Real-time & Personalized',
            description: 'Dhuniya is a modern news platform delivering real-time, reliable, and hyper-personalized content to users across India.',
            longDescription: `Dhuniya is a modern news platform we developed to deliver real-time, reliable, and hyper-personalized content to users across India. 

Built with intelligent categorization, multilingual support, and a clean, intuitive UI, Dhuniya ensures that users stay informed with the stories that matter most to them.

From breaking news to curated insights, the app is designed for speed, accuracy, and an engaging reading experience. Our AI-powered recommendation engine learns from user behavior to deliver increasingly relevant content.

The app supports multiple Indian languages including Hindi, English, Telugu, Tamil, and more – making news accessible to millions of users across the country. With offline reading capabilities, users can stay informed even without an internet connection.`,
            features: [
                'Real-time Breaking News Alerts',
                'Hyper-personalized Content Feed',
                'Intelligent News Categorization',
                'Multilingual Support (Hindi, English, Telugu, Tamil+)',
                'Clean & Intuitive User Interface',
                'Offline Reading Mode',
                'Curated Insights & Deep Dives',
                'Bookmark & Save Articles',
                'Dark/Light Mode Toggle',
                'Text-to-Speech Feature',
                'Share to Social Media',
                'Speed-optimized Loading',
                'Push Notifications for Breaking News',
                'Personalized News Digest'
            ],
            technologies: ['Kotlin', 'Swift', 'Python', 'Django', 'Redis', 'PostgreSQL', 'Android', 'iOS'],
            gradient: 'from-[#3234a2] to-cyan-500',
            images: [
                '/assets/Dhuniya.jpeg',
                'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1586339949216-35c2747cc36d?w=800&h=600&fit=crop'
            ],
            liveLink: 'https://play.google.com/store/apps/details?id=com.dhuniya.news.business.listings.classifieds.ott&hl=en_IN',
            githubLink: '',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.dhuniya.news.business.listings.classifieds.ott&hl=en_IN',
            appStoreLink: '',
            metrics: {
                downloads: '50K+',
                activeUsers: '15K+',
                accuracy: '92%',
                languages: '5+',
                articles: '1M+',
                rating: '4.5★'
            },
            timeline: '4 Months',
            team: '4 Members',
            client: 'Dhuniya Media',
            year: '2024',
            challenges: [
                'Aggregating news from 100+ reliable sources in real-time',
                'Building accurate AI-powered personalization algorithm',
                'Supporting multiple Indian languages seamlessly',
                'Ensuring fast loading speeds across network conditions',
                'Offline data synchronization without data loss',
                'Optimizing app performance for low-end devices'
            ],
            solutions: [
                'Built custom news aggregation pipeline with Redis caching for real-time updates',
                'Implemented collaborative filtering with TensorFlow Lite for personalization',
                'Integrated Google ML Kit for automatic language detection and translation',
                'Used lazy loading, image compression, and CDN for speed optimization',
                'Implemented Hive local database with background sync mechanism',
                'Optimized Flutter widgets and used efficient state management'
            ],
            testimonial: {
                text: "Dhuniya has transformed how I consume news. The personalization is incredibly accurate, and I love reading news in my native language!",
                author: "Rajesh Kumar",
                role: "Daily User, Delhi"
            },
            results: [
                { label: 'User Retention', value: '78%', description: '30-day retention rate' },
                { label: 'Session Duration', value: '12 min', description: 'Average reading time' },
                { label: 'Play Store Rating', value: '4.5★', description: 'User satisfaction' }
            ],
            keyHighlights: [
                'Hyper-personalized news experience',
                'Multi-language support for pan-India reach',
                'Speed & accuracy focused design',
                'Engaging reading experience'
            ]
        },

        'schoolfirst': {
            title: 'SchoolFirst',
            subtitle: 'An All-in-One School Ecosystem App',
            category: 'mobile',
            tagline: 'Streamlining Education for Schools, Parents, Teachers & Students',
            description: 'SchoolFirst is a comprehensive digital solution created to streamline communication and operations for schools, parents, teachers, and students.',
            longDescription: `SchoolFirst is a comprehensive digital solution created to streamline communication and operations for schools, parents, teachers, and students.

The platform centralizes attendance, homework, fee management, announcements, academic progress, and more—providing each stakeholder with tailored tools designed for their specific needs.

SchoolFirst enhances school efficiency, boosts parent engagement, and brings transparency to the entire educational workflow. Whether it's tracking a child's attendance, submitting homework, paying fees online, or receiving important announcements – everything is just a tap away.

The platform supports multiple user roles with dedicated dashboards:
• **Schools/Admin**: Complete school management, analytics, and reporting
• **Teachers**: Attendance marking, homework assignment, grade management
• **Parents**: Real-time updates on child's progress, fee payments, communication
• **Students**: Homework tracking, study materials, academic progress`,
            features: [
                'Centralized Attendance Management',
                'Digital Homework Submission & Tracking',
                'Online Fee Management & Payments',
                'Real-time Announcements & Notifications',
                'Academic Progress Tracking',
                'Parent-Teacher Communication Portal',
                'Dedicated Dashboards for Each Stakeholder',
                'Student Report Cards & Analytics',
                'Event Calendar & Scheduling',
                'School Bus Tracking',
                'Digital Library & Study Materials',
                'Exam Schedule & Results',
                'Leave Application Management',
                'Multi-school Support'
            ],
            technologies: ['Kotlin', 'Swift', 'Python', 'Django', 'Redis', 'PostgreSQL', 'Android', 'iOS'],
            gradient: 'from-yellow-500 to-orange-500',
            images: [
                '/assets/SF.png',
                'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop'
            ],
            liveLink: 'https://www.schoolfirst.ai/',
            githubLink: '',
            playStoreLink: '',
            appStoreLink: '',
            websiteLink: 'https://www.schoolfirst.ai/',
            metrics: {
                schools: '500+',
                students: '100K+',
                teachers: '5K+',
                parents: '80K+',
                satisfaction: '98%'
            },
            timeline: '8 Months',
            team: '8 Members',
            client: 'SchoolFirst EdTech',
            year: '2023',
            challenges: [
                'Managing multiple user roles with different access levels',
                'Handling concurrent users during peak hours (morning attendance)',
                'Secure payment gateway integration for fee collection',
                'Real-time sync across all stakeholders',
                'Building intuitive UI for non-tech-savvy parents',
                'Multi-tenant architecture for different schools'
            ],
            solutions: [
                'Implemented role-based access control (RBAC) with dedicated dashboards',
                'Used auto-scaling infrastructure with Kubernetes for peak loads',
                'Integrated Razorpay with PCI-DSS compliance for secure payments',
                'WebSocket implementation for real-time updates across devices',
                'Extensive user testing with parents and teachers for UX optimization',
                'Built multi-tenant SaaS architecture with data isolation'
            ],
            testimonial: {
                text: "SchoolFirst has reduced our administrative work by 60%. Parent engagement has improved dramatically, and the transparency it brings is invaluable!",
                author: "Dr. Meena Sharma",
                role: "Principal, Delhi Public School"
            },
            results: [
                { label: 'Admin Time Saved', value: '60%', description: 'Reduction in paperwork' },
                { label: 'Parent Engagement', value: '85%', description: 'Monthly active parents' },
                { label: 'School Efficiency', value: '+40%', description: 'Operational improvement' }
            ],
            keyHighlights: [
                'Complete school ecosystem in one app',
                'Tailored tools for each stakeholder',
                'Enhanced transparency & communication',
                'Streamlined educational workflow'
            ]
        },

        'familifirst': {
            title: 'FamiliFirst',
            subtitle: 'A Private, Connected Family App',
            category: 'mobile',
            tagline: 'Keeping Families Connected, Organized & Informed',
            description: 'FamiliFirst is a secure family management and communication app designed to help families stay connected, organized, and informed.',
            longDescription: `FamiliFirst is a secure family management and communication app designed to help families stay connected, organized, and informed.

It includes features such as shared calendars, event planning, reminders, and edutainment for entertainment and education. The app strengthens family bonds by offering a safe digital hub for everyday coordination and long-term memories.

In today's busy world, families often struggle to stay coordinated. FamiliFirst solves this by providing a private, secure space where family members can:
• Share important dates and events
• Coordinate schedules and activities
• Store and share precious memories
• Access educational content for kids
• Stay entertained together

All communications are end-to-end encrypted, ensuring that family moments stay within the family. Unlike public social media, FamiliFirst is designed exclusively for your family circle.`,
            features: [
                'Shared Family Calendar',
                'Event Planning & RSVP',
                'Smart Reminders & Notifications',
                'Edutainment Section (Education + Entertainment)',
                'Private Photo & Video Albums',
                'Family Chat & Messaging',
                'Memory Timeline & Highlights',
                'Task Assignment & Chores',
                'Shopping Lists (Shared)',
                'Location Sharing for Safety',
                'Family Tree Builder',
                'Milestone Tracking (Birthdays, Anniversaries)',
                'Recipe Sharing',
                'End-to-End Encryption'
            ],
            technologies: ['Kotlin', 'Swift', 'Python', 'Django', 'Redis', 'PostgreSQL', 'Android', 'iOS'],
            gradient: 'from-[#32a162] to-teal-500',
            images: [
                '/assets/FF logo.jpeg',
                'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&h=600&fit=crop'
            ],
            liveLink: '#',
            githubLink: '',
            playStoreLink: '',
            appStoreLink: '',
            metrics: {
                families: '50K+',
                members: '200K+',
                events: '500K+',
                memories: '2M+',
                rating: '4.9★'
            },
            timeline: '6 Months',
            team: '5 Members',
            client: 'FamiliFirst Inc',
            year: '2024',
            challenges: [
                'Implementing end-to-end encryption for all communications',
                'Building intuitive UX for all age groups (kids to grandparents)',
                'Cross-platform sync for photos and videos',
                'Managing family hierarchies and permissions',
                'Balancing privacy with sharing features'
            ],
            solutions: [
                'Implemented Signal Protocol for E2E encryption',
                'Conducted user testing across age groups for UX optimization',
                'Built custom photo sync with conflict resolution and compression',
                'Created flexible family role management system',
                'Designed granular privacy controls for each feature'
            ],
            testimonial: {
                text: "Finally, a place where our family can share memories and coordinate without worrying about privacy. The kids love the edutainment section!",
                author: "The Sharma Family",
                role: "Family of 8 members, Mumbai"
            },
            results: [
                { label: 'Daily Active', value: '75%', description: 'Family members active daily' },
                { label: 'Memories Shared', value: '2M+', description: 'Photos & videos' },
                { label: 'User Rating', value: '4.9★', description: 'App store rating' }
            ],
            keyHighlights: [
                'Safe digital hub for families',
                'Edutainment for education & entertainment',
                'Strengthens family bonds',
                'Long-term memory preservation'
            ]
        },

        'ishu-store': {
            title: "Ishu's Store",
            subtitle: 'A Digital Storefront for Modest Fashion',
            category: 'web',
            tagline: 'Style, Comfort & Modesty – Delivered Globally',
            description: "Ishu's Store is an elegant e-commerce platform built for a modest fashion brand specializing in hijabs, abayas, and contemporary modest wear.",
            longDescription: `Ishu's Store is an elegant e-commerce platform built for a modest fashion brand specializing in hijabs, abayas, and contemporary modest wear.

The app offers a seamless shopping experience with curated collections, detailed product visuals, secure checkout, and personalized recommendations. Ishu's Store empowers the brand to reach customers globally while staying true to its identity of style, comfort, and modesty.

Key aspects of the platform:
• **Curated Collections**: Carefully selected hijabs, abayas, and modest wear
• **Detailed Visuals**: High-quality product images from multiple angles
• **Secure Checkout**: Multiple payment options with complete security
• **Personalized Experience**: AI-powered recommendations based on preferences
• **Global Reach**: Shipping to customers worldwide

The platform celebrates modest fashion while embracing modern e-commerce capabilities, helping the brand connect with its audience authentically.`,
            features: [
                'Curated Modest Fashion Collections',
                'Hijabs, Abayas & Contemporary Wear',
                'Detailed Product Visuals (Multi-angle)',
                'Secure Payment Gateway',
                'Personalized Recommendations',
                'Wishlist & Favorites',
                'Size Guide & Fit Assistance',
                'Order Tracking in Real-time',
                'Easy Returns & Exchange',
                'Global Shipping Support',
                'New Arrival Notifications',
                'Style Lookbooks & Inspiration',
                'Customer Reviews & Ratings',
                'Loyalty Points Program'
            ],
            technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'Payment Gateway'],
            gradient: 'from-[#32a162] to-teal-500',
            images: [
                '/assets/Ishu store.jpg',
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&h=600&fit=crop'
            ],
            liveLink: 'https://ishustore.com/',
            githubLink: '',
            websiteLink: 'https://ishustore.com/',
            metrics: {
                products: '5K+',
                customers: '25K+',
                countries: '15+',
                orders: '50K+',
                rating: '4.9★'
            },
            timeline: '5 Months',
            team: '5 Members',
            client: "Ishu's Fashion Pvt Ltd",
            year: '2024',
            challenges: [
                'Showcasing fabric quality through digital medium',
                'Building trust for online modest fashion shopping',
                'Managing inventory across multiple product categories',
                'International shipping and currency handling',
                'Creating authentic brand experience digitally'
            ],
            solutions: [
                'High-quality multi-angle product photography with zoom',
                'Added video reviews, influencer content, and detailed descriptions',
                'Built real-time inventory management with low-stock alerts',
                'Integrated multi-currency support with international shipping APIs',
                'Designed UI reflecting brand identity of elegance and modesty'
            ],
            testimonial: {
                text: "Ishu's Store made it so easy to find beautiful modest wear. The quality is amazing, and the shopping experience is seamless!",
                author: "Fatima Ahmed",
                role: "Regular Customer, Dubai"
            },
            results: [
                { label: 'Conversion Rate', value: '4.2%', description: 'Above industry average' },
                { label: 'Return Rate', value: '<2%', description: 'Industry lowest' },
                { label: 'Repeat Customers', value: '65%', description: 'Loyal customer base' }
            ],
            keyHighlights: [
                'Elegant modest fashion platform',
                'Global customer reach',
                'Seamless shopping experience',
                'True to brand identity'
            ]
        },

        'ishaa-trends': {
            title: 'Ishaa Trends',
            subtitle: "Kids' Clothing Brand",
            category: 'web',
            tagline: 'Trendy, Comfortable & Affordable Kids Fashion',
            description: "Ishaa Trends is a vibrant e-commerce platform crafted for a children's fashion brand, designed with parents in mind.",
            longDescription: `Ishaa Trends is a vibrant e-commerce platform crafted for a children's fashion brand. Designed with parents in mind, it showcases trendy, comfortable, and affordable kids' clothing through a playful and user-friendly interface.

With features like smart size guides, fast checkout, and curated collections, Ishaa Trends delivers a delightful shopping experience for modern families.

Understanding that kids grow quickly, we've built features that help parents:
• **Smart Size Guides**: Recommendations based on age and measurements
• **Curated Collections**: Age-appropriate, trendy clothing options
• **Fast Checkout**: Quick and hassle-free purchasing
• **Playful UI**: Fun, colorful interface that reflects kids' fashion

The platform makes kids' clothing shopping enjoyable, efficient, and affordable for busy parents.`,
            features: [
                'Trendy Kids Clothing Collections',
                'Smart Size Guide by Age',
                'Playful & User-Friendly Interface',
                'Fast Checkout Process',
                'Curated Age-Appropriate Collections',
                'Comfortable & Affordable Options',
                'Wishlist for Future Purchases',
                'Gift Registry for Occasions',
                'Size Exchange Policy',
                'New Collection Alerts',
                'Parent Reviews & Photos',
                'Bundle Discounts',
                'Seasonal Sales',
                'Easy Navigation by Age Group'
            ],
            technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
            gradient: 'from-pink-500 to-purple-500',
            images: [
                '/assets/ishaa.jpeg',
                'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop'
            ],
            liveLink: '#',
            githubLink: '',
            metrics: {
                products: '3K+',
                parents: '15K+',
                orders: '30K+',
                sizeAccuracy: '95%',
                rating: '4.8★'
            },
            timeline: '4 Months',
            team: '4 Members',
            client: 'Ishaa Trends Pvt Ltd',
            year: '2024',
            challenges: [
                'Accurate size recommendations for growing children',
                'Creating playful yet professional e-commerce experience',
                'Managing seasonal inventory and trends',
                'Building trust with first-time online shoppers',
                'Easy navigation for busy parents'
            ],
            solutions: [
                'Built smart size guide with age-based recommendations',
                'Designed colorful, fun UI while maintaining professionalism',
                'Implemented predictive inventory management',
                'Added customer photos and honest reviews section',
                'Created intuitive filters by age, size, occasion'
            ],
            testimonial: {
                text: "Shopping for my kids has never been easier! The size guide is spot-on, and the clothes are both trendy and comfortable.",
                author: "Sneha Reddy",
                role: "Mom of 2, Hyderabad"
            },
            results: [
                { label: 'Size Accuracy', value: '95%', description: 'Correct size selections' },
                { label: 'Return Rate', value: '5%', description: 'Below industry average' },
                { label: 'Repeat Buyers', value: '70%', description: 'Loyal customers' }
            ],
            keyHighlights: [
                'Designed with parents in mind',
                'Trendy, comfortable & affordable',
                'Playful user-friendly interface',
                'Smart size recommendations'
            ]
        },

        'sru-clothing': {
            title: 'SRU',
            subtitle: 'Clothing & Cosmetics Lifestyle App',
            category: 'mobile',
            tagline: 'Style & Self-Care in One Unified Platform',
            description: 'SRU is a stylish, dual-category e-commerce app offering a curated blend of fashion apparel and premium cosmetics.',
            longDescription: `SRU is a stylish, dual-category e-commerce app offering a curated blend of fashion apparel and premium cosmetics. Designed to deliver a seamless lifestyle shopping experience, the platform features trend-driven clothing collections, high-quality beauty products, personalized recommendations, secure checkout, and an intuitive browsing interface.

SRU brings together style and self-care in one unified digital storefront, helping customers discover everything they need to look and feel their best.

The platform serves as a one-stop destination for:
• **Fashion Apparel**: Trend-driven clothing collections for every occasion
• **Premium Cosmetics**: High-quality beauty and skincare products
• **Personalized Experience**: AI-powered recommendations based on preferences
• **Seamless Shopping**: Intuitive interface with secure checkout

SRU represents the modern lifestyle where fashion and beauty complement each other.`,
            features: [
                'Dual-Category Shopping (Fashion + Cosmetics)',
                'Trend-Driven Clothing Collections',
                'Premium Beauty Products',
                'Personalized Recommendations',
                'Secure Checkout',
                'Intuitive Browsing Interface',
                'Virtual Try-On for Cosmetics',
                'Style Guides & Lookbooks',
                'Beauty Tutorials',
                'Subscription Boxes',
                'Loyalty Rewards Program',
                'Flash Sales & Offers',
                'Wishlist & Collections',
                'Express Delivery Options'
            ],
            technologies: ['Python', 'Django', 'React', 'Android', 'iOS'],
            gradient: 'from-[#3234a2] to-[#32a162]',
            images: [
                '/assets/SRU.jpeg',
                'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&h=600&fit=crop'
            ],
            liveLink: '#',
            githubLink: '',
            metrics: {
                downloads: '100K+',
                products: '10K+',
                categories: '2',
                customers: '50K+',
                rating: '4.7★'
            },
            timeline: '6 Months',
            team: '6 Members',
            client: 'SRU Lifestyle Inc',
            year: '2023',
            challenges: [
                'Managing two distinct product categories in one app',
                'Creating cohesive shopping experience across fashion & beauty',
                'Accurate cosmetic shade matching for diverse skin tones',
                'Inventory management across multiple brands',
                'Building unified recommendation engine'
            ],
            solutions: [
                'Designed category-specific browsing with unified cart & checkout',
                'Created consistent design language that works for both categories',
                'Implemented ML-based skin tone detection for cosmetic recommendations',
                'Built centralized inventory system with brand-specific APIs',
                'Developed hybrid recommendation engine considering both categories'
            ],
            testimonial: {
                text: "I love that I can shop for clothes and makeup in one app! The recommendations are always on point.",
                author: "Priya Patel",
                role: "Fashion & Beauty Enthusiast"
            },
            results: [
                { label: 'Cross-Category Sales', value: '35%', description: 'Users buy from both' },
                { label: 'User Satisfaction', value: '4.7★', description: 'App store rating' },
                { label: 'Avg. Order Value', value: '+25%', description: 'Higher than single-category' }
            ],
            keyHighlights: [
                'Fashion + Cosmetics in one platform',
                'Seamless lifestyle shopping',
                'Trend-driven & curated',
                'Look and feel your best'
            ]
        },

        'iqrar-times': {
            title: 'IQRAR TIMES',
            subtitle: 'Digital News & Creative Media Platform',
            category: 'web',
            tagline: 'News, Stories & Entertainment – All in One Place',
            description: 'A modern digital content platform delivering news, lifestyle articles, creative stories, and entertainment-focused media with a clean magazine-style layout.',
            longDescription: `IQRAR TIMES is a modern digital content platform we developed to deliver engaging news, lifestyle articles, creative stories, and entertainment-focused media to readers worldwide.

Built with a clean magazine-style layout, the platform ensures that users get a seamless reading experience across all devices. From breaking news to in-depth features, creative fiction to lifestyle tips – IQRAR TIMES covers it all.

Key aspects of the platform:
• **Diverse Content Categories**: News, Lifestyle, Entertainment, Stories, and more
• **Magazine-Style Layout**: Clean, professional design for easy reading
• **Regular Updates**: Fresh content published daily
• **Mobile-Responsive**: Perfect reading experience on any device
• **SEO Optimized**: Content reaches the right audience through search engines

The platform serves as a one-stop destination for readers who want quality content that informs, entertains, and inspires.`,
            features: [
                'Clean Magazine-Style Layout',
                'Multiple Content Categories',
                'Daily Content Updates',
                'Mobile-Responsive Design',
                'Fast Loading Speed',
                'SEO Optimized Articles',
                'Social Media Integration',
                'Newsletter Subscription',
                'Related Articles Suggestions',
                'Comment & Discussion Section',
                'Author Profiles & Bios',
                'Search & Filter Functionality',
                'Trending Articles Section',
                'Category-wise Navigation'
            ],
            technologies: ['WordPress', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'SEO Tools'],
            gradient: 'from-[#1a1a2e] via-[#16213e] to-[#0f3460]',
            images: [
                '/assets/iqrar1.jpg',
                'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=800&h=600&fit=crop'
            ],
            liveLink: 'https://www.iqrartimes.com/',
            githubLink: '',
            websiteLink: 'https://www.iqrartimes.com/',
            metrics: {
                articles: '50+',
                categories: '5+',
                updates: 'Daily',
                readers: '10K+',
                authors: '5+',
                engagement: '85%'
            },
            timeline: '2 Months',
            team: '3 Members',
            client: 'IQRAR TIMES Media',
            year: '2024',
            challenges: [
                'Creating engaging magazine-style layout for diverse content',
                'Optimizing website speed with rich media content',
                'SEO optimization for maximum organic reach',
                'Building intuitive navigation across multiple categories',
                'Ensuring consistent brand identity across all pages',
                'Mobile responsiveness with complex layouts'
            ],
            solutions: [
                'Custom WordPress theme with magazine-style grid layouts',
                'Image optimization, lazy loading, and CDN integration',
                'Implemented Yoast SEO with structured data markup',
                'Designed category-based navigation with breadcrumbs',
                'Created style guide and consistent design components',
                'Mobile-first approach with responsive breakpoints'
            ],
            testimonial: {
                text: "IQRAR TIMES has become my go-to platform for quality content. The clean layout makes reading a pleasure, and I love the variety of topics covered!",
                author: "Ahmed Khan",
                role: "Regular Reader, Hyderabad"
            },
            results: [
                { label: 'Page Load Speed', value: '<2s', description: 'Fast loading time' },
                { label: 'Reader Engagement', value: '85%', description: 'Average read completion' },
                { label: 'SEO Ranking', value: 'Top 10', description: 'For target keywords' }
            ],
            keyHighlights: [
                'Modern digital content platform',
                'Clean magazine-style design',
                'Daily fresh content updates',
                'Multi-category coverage'
            ]
        },

        // 🆕 NEW PROJECT: Anand Ads
        'anand-ads': {
            title: 'Anand Ads',
            subtitle: 'Digital Advertising & Marketing Agency',
            category: 'web',
            tagline: 'Creative Campaigns That Drive Results',
            description: 'A professional digital advertising and marketing agency website showcasing comprehensive advertising solutions, creative campaigns, and media buying services.',
            longDescription: `Anand Ads is a leading digital advertising and marketing agency that we partnered with to build their online presence. The website showcases their comprehensive advertising solutions, creative campaigns, media buying services, and impressive client success stories.

The platform serves as a powerful business tool that:
• **Showcases Services**: Complete range of advertising and marketing solutions
• **Displays Portfolio**: Creative campaigns and successful case studies
• **Generates Leads**: Optimized contact forms and CTAs
• **Builds Trust**: Client testimonials and industry credentials
• **Drives Engagement**: Modern design that reflects creativity and professionalism

The website is designed to position Anand Ads as a trusted partner for businesses looking to elevate their brand through strategic advertising. With a focus on conversion optimization, the site effectively turns visitors into potential clients.

From traditional media to digital campaigns, social media marketing to brand strategy – the website communicates Anand Ads' expertise across all advertising channels.`,
            features: [
                'Modern Agency Portfolio Design',
                'Service Showcase with Details',
                'Client Case Studies & Success Stories',
                'Campaign Gallery with Visuals',
                'Lead Generation Forms',
                'Client Testimonials Section',
                'Team & About Us Pages',
                'Blog & Industry Insights',
                'Contact & Quote Request',
                'Social Media Integration',
                'Mobile-Responsive Design',
                'SEO Optimized Pages',
                'Fast Loading Performance',
                'Analytics Integration'
            ],
            technologies: ['React', 'Tailwindcss', 'Python', 'Django', 'Fastapi'],
            gradient: 'from-orange-500 to-red-600',
            images: [
                '/assets/anand-ads.jpg',
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop'
            ],
            liveLink: 'https://www.anandads.com',
            githubLink: '',
            websiteLink: 'https://www.anandads.com',
            metrics: {
                clients: '200+',
                campaigns: '1K+',
                industries: '15+',
                years: '10+',
                satisfaction: '99%',
                reach: '50M+'
            },
            timeline: '3 Months',
            team: '4 Members',
            client: 'Anand Ads Agency',
            year: '2024',
            challenges: [
                'Showcasing diverse advertising services cohesively',
                'Creating design that reflects creativity and professionalism',
                'Optimizing for lead generation and conversions',
                'Displaying portfolio without overwhelming visitors',
                'Building trust with potential enterprise clients',
                'Fast loading with high-quality campaign visuals'
            ],
            solutions: [
                'Organized services into clear, navigable categories',
                'Designed bold, creative UI with professional undertones',
                'Implemented strategic CTAs and optimized contact forms',
                'Created filterable portfolio with lightbox galleries',
                'Added client logos, testimonials, and case studies',
                'Image optimization and lazy loading for performance'
            ],
            testimonial: {
                text: "Our new website perfectly captures our creative spirit while maintaining professionalism. Lead generation has increased by 150% since launch!",
                author: "Anand Kumar",
                role: "Founder, Anand Ads"
            },
            results: [
                { label: 'Lead Increase', value: '150%', description: 'More inquiries generated' },
                { label: 'Bounce Rate', value: '-40%', description: 'Improved engagement' },
                { label: 'Page Speed', value: '95/100', description: 'Google PageSpeed score' }
            ],
            keyHighlights: [
                'Creative agency portfolio',
                'Lead generation focused',
                'Professional brand presence',
                'Conversion optimized design'
            ]
        },

        // 🆕 NEW PROJECT: Paranpara Education
        'paranpara': {
            title: 'Paranpara',
            subtitle: 'Education Policy Platform',
            category: 'web',
            tagline: 'Empowering Education Through Policy & Innovation',
            description: 'An educational platform for Paranpara Education Policy Private Limited, providing comprehensive resources and innovative educational services for institutions and students across India.',
            longDescription: `Paranpara Education Policy Private Limited is on a mission to transform education in India through policy advocacy, innovative programs, and comprehensive educational services. We developed their digital platform to support this vision.

The platform serves multiple purposes:
• **Policy Information**: Resources on education policies and their implementation
• **Educational Services**: Programs and services for institutions and students
• **Research & Insights**: Studies and reports on Indian education
• **Community Building**: Connecting educators, institutions, and policymakers
• **Resource Library**: Educational materials and guides

Paranpara works with schools, colleges, and educational institutions across India to implement effective educational strategies aligned with national education policies like NEP 2020.

The website positions Paranpara as a thought leader in Indian education policy while providing practical resources for educators and institutions seeking to improve their educational outcomes.`,
            features: [
                'Educational Policy Resources',
                'Institution Partnership Programs',
                'Student Development Services',
                'Research & Publications Section',
                'Event & Workshop Calendar',
                'Resource Download Library',
                'Institution Registration Portal',
                'Contact & Inquiry Forms',
                'Blog & News Updates',
                'Team & Leadership Pages',
                'Success Stories & Impact',
                'Multi-language Support',
                'Mobile-Responsive Design',
                'SEO Optimized Content'
            ],
            technologies: ['React', 'Tailwindcss', 'Python', 'Django', 'Fastapi'],
            gradient: 'from-blue-600 to-indigo-700',
            images: [
                '/assets/paranpara.jpg',
                'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop'
            ],
            liveLink: 'https://paranpara.com',
            githubLink: '',
            websiteLink: 'https://paranpara.com',
            metrics: {
                institutions: '300+',
                students: '75K+',
                programs: '25+',
                states: '15+',
                educators: '5K+',
                impact: '1M+'
            },
            timeline: '4 Months',
            team: '5 Members',
            client: 'Paranpara Education Policy Pvt Ltd',
            year: '2024',
            challenges: [
                'Communicating complex education policies simply',
                'Serving diverse audience (students, teachers, institutions)',
                'Creating credibility as education policy experts',
                'Managing large resource library efficiently',
                'Multi-language content for pan-India reach',
                'Integration with institution management systems'
            ],
            solutions: [
                'Created clear, jargon-free content with infographics',
                'Designed role-based navigation and personalized sections',
                'Added research publications, team credentials, and impact data',
                'Built organized, searchable resource library with filters',
                'Implemented translation support for regional languages',
                'Developed API integrations for partner institutions'
            ],
            testimonial: {
                text: "Paranpara's platform has become our go-to resource for understanding and implementing NEP 2020. The clarity they bring to education policy is invaluable!",
                author: "Dr. Ramesh Iyer",
                role: "Principal, Government School, Karnataka"
            },
            results: [
                { label: 'Institution Sign-ups', value: '300+', description: 'Partner institutions' },
                { label: 'Resource Downloads', value: '50K+', description: 'Monthly downloads' },
                { label: 'User Engagement', value: '8 min', description: 'Avg. session duration' }
            ],
            keyHighlights: [
                'Education policy expertise',
                'Pan-India institution network',
                'Comprehensive resource library',
                'Impact-driven approach'
            ]
        },

        // 🆕 NEW PROJECT: TinyTales YouTube Channel
        'tiny-tales': {
            title: 'TinyTales',
            subtitle: 'Kids Entertainment YouTube Channel',
            category: 'media',
            tagline: 'Where Stories Come Alive for Little Minds',
            description: 'An in-house YouTube channel dedicated to creating engaging, educational, and entertaining content for children with animated stories, nursery rhymes, and creative learning videos.',
            longDescription: `TinyTales is our in-house YouTube channel created with a mission to provide quality, educational, and entertaining content for children. In a world of endless digital content, TinyTales stands out by combining entertainment with learning.

Our content includes:
• **Animated Stories**: Engaging tales with moral lessons and cultural values
• **Nursery Rhymes**: Classic and original rhymes with colorful animations
• **Moral Stories**: Age-appropriate stories that teach important life lessons
• **Educational Content**: Learning videos covering alphabets, numbers, colors, and more
• **Creative Learning**: DIY activities, art projects, and interactive content

Every video is carefully crafted to ensure it's age-appropriate, educational, and genuinely entertaining. We work with child development experts to ensure our content supports cognitive and emotional development.

TinyTales aims to be a trusted companion for parents who want their children to have positive screen time experiences. Our content is free from inappropriate themes and designed to spark curiosity and imagination.`,
            features: [
                'Animated Story Videos',
                'Classic Nursery Rhymes',
                'Original Songs & Music',
                'Moral & Value-Based Stories',
                'Educational Learning Videos',
                'Colorful 2D/3D Animations',
                'Age-Appropriate Content',
                'Cultural & Traditional Stories',
                'Interactive Learning Content',
                'Regular Upload Schedule',
                'Playlist Organization',
                'Parent-Friendly Content',
                'Multi-Language Support',
                'Engaging Thumbnails & Titles'
            ],
            technologies: ['Adobe After Effects', 'Premiere Pro', 'Illustrator', 'YouTube Studio', 'Animation Software', 'Audio Production'],
            gradient: 'from-red-500 to-pink-500',
            images: [
                '/assets/tiny-tales.jpg',
                'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=800&h=600&fit=crop'
            ],
            liveLink: 'https://www.youtube.com/@TinyTales1812',
            githubLink: '',
            youtubeLink: 'https://www.youtube.com/@TinyTales1812',
            isYouTube: true,
            metrics: {
                subscribers: '10K+',
                videos: '150+',
                views: '2M+',
                watchHours: '100K+',
                countries: '50+',
                engagement: '8%'
            },
            timeline: 'Ongoing',
            team: '6 Members',
            client: 'In-House Project',
            year: '2023',
            challenges: [
                'Creating content that educates while entertaining',
                'Maintaining consistent upload schedule',
                'Ensuring age-appropriate content across all videos',
                'Standing out in crowded kids content space',
                'Balancing production quality with quantity',
                'Growing audience organically without ads'
            ],
            solutions: [
                'Developed content framework with education experts',
                'Built production pipeline for efficient video creation',
                'Established content review process with child safety focus',
                'Created unique animation style and character designs',
                'Optimized production workflow with templates and assets',
                'Focused on SEO, thumbnails, and community engagement'
            ],
            testimonial: {
                text: "My kids absolutely love TinyTales! The stories are engaging, and I love that they're learning good values while being entertained. It's our daily family time now!",
                author: "Priya Mehta",
                role: "Mother of 2, Bangalore"
            },
            results: [
                { label: 'Watch Time', value: '100K+ hrs', description: 'Total watch hours' },
                { label: 'Avg. View Duration', value: '5+ min', description: 'High engagement' },
                { label: 'Subscriber Growth', value: '+500/mo', description: 'Organic growth' }
            ],
            keyHighlights: [
                'Quality kids entertainment',
                'Educational & value-driven',
                'Safe parent-approved content',
                'Growing engaged community'
            ]
        },

        // 🆕 NEW PROJECT: Sapphire House E-Commerce
        'sapphire-house': {
            title: 'Sapphire House',
            subtitle: 'Premium E-Commerce Platform',
            category: 'web',
            tagline: 'Discover Premium Lifestyle Products',
            description: 'A sophisticated e-commerce platform offering premium lifestyle products with elegant design, seamless shopping experience, and personalized customer recommendations.',
            longDescription: `Sapphire House is a premium e-commerce platform we developed to offer discerning customers access to high-quality lifestyle products. The platform combines elegant design with powerful e-commerce functionality.

The platform features:
• **Curated Collections**: Hand-picked premium products across categories
• **Elegant Design**: Sophisticated UI that reflects the premium brand
• **Seamless Shopping**: Intuitive navigation and frictionless checkout
• **Personalization**: AI-powered recommendations based on preferences
• **Secure Payments**: Multiple payment options with enterprise-grade security

Sapphire House caters to customers who value quality over quantity. Every product on the platform is carefully selected to meet high standards of craftsmanship and design.

From home décor to fashion accessories, personal care to gifts – Sapphire House offers a curated shopping experience for those who appreciate the finer things in life. The platform is built for scale, supporting growth while maintaining the boutique shopping experience.`,
            features: [
                'Premium Product Catalog',
                'Elegant Boutique Design',
                'Secure Payment Integration',
                'Personalized Recommendations',
                'Wishlist & Favorites',
                'Advanced Search & Filters',
                'Product Reviews & Ratings',
                'Order Tracking System',
                'Gift Wrapping Options',
                'Loyalty Rewards Program',
                'Newsletter & Offers',
                'Mobile-Responsive Design',
                'Fast Checkout Process',
                'Customer Account Dashboard'
            ],
            technologies: ['React', 'Tailwindcss', 'Python', 'Django', 'Fastapi'],
            gradient: 'from-blue-500 to-purple-600',
            images: [
                '/assets/sapphire-house.jpg',
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
            ],
            liveLink: '#',
            githubLink: '',
            metrics: {
                products: '5K+',
                customers: '20K+',
                orders: '35K+',
                categories: '12+',
                rating: '4.8★',
                retention: '60%'
            },
            timeline: '6 Months',
            team: '7 Members',
            client: 'Sapphire House Pvt Ltd',
            year: '2024',
            challenges: [
                'Creating premium brand experience online',
                'High-performance e-commerce at scale',
                'Secure payment processing with multiple options',
                'Personalization without being intrusive',
                'Managing large product catalog efficiently',
                'Building customer loyalty in competitive market'
            ],
            solutions: [
                'Designed elegant UI with premium aesthetics and micro-interactions',
                'Built on scalable MERN stack with Redis caching',
                'Integrated Stripe with PCI-DSS compliance and multiple payment methods',
                'Implemented subtle AI recommendations based on browsing patterns',
                'Created efficient CMS with advanced inventory management',
                'Developed tiered loyalty program with exclusive benefits'
            ],
            testimonial: {
                text: "Sapphire House offers a shopping experience that matches the quality of their products. The website is beautiful, fast, and makes me feel valued as a customer!",
                author: "Ritu Sharma",
                role: "Loyal Customer, Mumbai"
            },
            results: [
                { label: 'Conversion Rate', value: '3.8%', description: 'Above industry average' },
                { label: 'Avg. Order Value', value: '₹4,500', description: 'Premium purchases' },
                { label: 'Customer Retention', value: '60%', description: 'Repeat customers' }
            ],
            keyHighlights: [
                'Premium brand experience',
                'Curated quality products',
                'Seamless shopping journey',
                'Personalized recommendations'
            ]
        }
    }

    const project = projectData[projectId]

    // 404 - Project Not Found
    if (!project) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-8"
                >
                    <div className="text-8xl mb-6">🔍</div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
                    <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been moved.</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/projects')}
                        className="px-8 py-4 bg-gradient-to-r from-[#3234a2] to-[#32a162] text-white rounded-xl font-bold shadow-lg"
                    >
                        View All Projects
                    </motion.button>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Fixed Back Button */}
            <motion.button
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => navigate(-1)}
                className="fixed top-24 left-4 md:left-8 z-50 px-4 py-2 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center gap-2 hover:shadow-xl transition-all group"
            >
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                <span className="hidden md:inline font-semibold">Back</span>
            </motion.button>

            {/* Hero Section */}
            <section className={`relative pt-20 pb-32 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-white"
                    >
                        {/* Category Badge */}
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm text-white text-sm font-semibold mb-6 uppercase tracking-wider ${
                                project.isYouTube ? 'bg-red-500/80' : 'bg-white/20'
                            }`}
                        >
                            {project.isYouTube && <FaYoutube className="text-lg" />}
                            {project.category} {project.isYouTube ? 'Channel' : 'Project'}
                        </motion.span>

                        {/* Title */}
                        <h1 className="text-4xl md:text-6xl font-black mb-2">
                            {project.title}
                        </h1>

                        {/* Subtitle */}
                        <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
                            {project.subtitle}
                        </h2>

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl text-white/80 mb-6">
                            {project.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
                            {project.description}
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <FaCalendar />
                                <span>{project.year}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <FaClock />
                                <span>{project.timeline}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <FaUsers />
                                <span>{project.team}</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {/* YouTube Button */}
                            {project.isYouTube && project.youtubeLink && (
                                <motion.a
                                    href={project.youtubeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <FaYoutube className="text-xl" />
                                    Subscribe on YouTube
                                </motion.a>
                            )}
                            
                            {/* Website Button */}
                            {project.liveLink && project.liveLink !== '#' && !project.isYouTube && (
                                <motion.a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <FaGlobe />
                                    Visit Website
                                </motion.a>
                            )}
                            
                            {/* Play Store Button */}
                            {project.playStoreLink && project.playStoreLink !== '' && (
                                <motion.a
                                    href={project.playStoreLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <FaGooglePlay />
                                    Play Store
                                </motion.a>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb" />
                    </svg>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">

                {/* Key Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                >
                    {project.keyHighlights.map((highlight, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow"
                        >
                            <div className="text-2xl mb-2">
                                {['✨', '🚀', '💡', '🎯'][idx]}
                            </div>
                            <div className="text-sm font-semibold text-gray-700">
                                {highlight}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Metrics Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
                >
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-5 shadow-lg text-center hover:shadow-xl transition-shadow"
                        >
                            <div className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                {value}
                            </div>
                            <div className="text-sm text-gray-500 capitalize mt-1">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Image Gallery */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <span className={`w-10 h-10 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white`}>
                            {project.isYouTube ? '🎬' : '📸'}
                        </span>
                        {project.isYouTube ? 'Channel Gallery' : 'Project Gallery'}
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {/* Main Image */}
                        <div className="lg:col-span-2">
                            <motion.img
                                key={selectedImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                src={project.images[selectedImage]}
                                alt={`${project.title} screenshot`}
                                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 lg:grid-cols-1 gap-4">
                            {project.images.map((img, idx) => (
                                <motion.button
                                    key={idx}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`relative rounded-xl overflow-hidden ${selectedImage === idx ? 'ring-4 ring-[#3234a2]' : ''}`}
                                >
                                    <img
                                        src={img}
                                        alt={`Thumbnail ${idx + 1}`}
                                        className="w-full h-20 lg:h-[5.5rem] object-cover"
                                    />
                                    {selectedImage === idx && (
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Overview */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <FaLightbulb className="text-yellow-500" />
                                {project.isYouTube ? 'About The Channel' : 'Project Overview'}
                            </h2>
                            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                {project.longDescription}
                            </p>
                        </motion.section>

                        {/* Features */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <FaCheckCircle className="text-green-500" />
                                {project.isYouTube ? 'Content Features' : 'Key Features'}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.03 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className={`w-2 h-2 rounded-full mt-2 bg-gradient-to-r ${project.gradient} flex-shrink-0`} />
                                        <span className="text-gray-700">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Challenges & Solutions */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {/* Challenges */}
                            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                                    🎯 Challenges Faced
                                </h3>
                                <ul className="space-y-3">
                                    {project.challenges.map((challenge, idx) => (
                                        <li key={idx} className="text-red-700 text-sm flex items-start gap-2">
                                            <span className="text-red-400 mt-1">•</span>
                                            <span>{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Solutions */}
                            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                                    ✅ Our Solutions
                                </h3>
                                <ul className="space-y-3">
                                    {project.solutions.map((solution, idx) => (
                                        <li key={idx} className="text-green-700 text-sm flex items-start gap-2">
                                            <span className="text-green-400 mt-1">•</span>
                                            <span>{solution}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.section>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-6">
                        {/* Technologies */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <FaTools className="text-[#3234a2]" />
                                {project.isYouTube ? 'Tools Used' : 'Technologies Used'}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <motion.span
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className={`px-3 py-2 rounded-lg text-sm font-medium bg-gradient-to-r ${project.gradient} text-white`}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Project Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {project.isYouTube ? 'Channel Info' : 'Project Info'}
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">{project.isYouTube ? 'Type' : 'Client'}</span>
                                    <span className="font-semibold text-gray-900 text-right text-sm">{project.client}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Year</span>
                                    <span className="font-semibold text-gray-900">{project.year}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Duration</span>
                                    <span className="font-semibold text-gray-900">{project.timeline}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Team Size</span>
                                    <span className="font-semibold text-gray-900">{project.team}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Category</span>
                                    <span className={`font-semibold capitalize px-3 py-1 rounded-full text-xs bg-gradient-to-r ${project.gradient} text-white`}>
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Results */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <FaStar className="text-yellow-500" />
                                Key Results
                            </h3>
                            <div className="space-y-4">
                                {project.results.map((result, idx) => (
                                    <div key={idx} className="text-center p-4 bg-gray-50 rounded-xl">
                                        <div className={`text-2xl font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                            {result.value}
                                        </div>
                                        <div className="font-semibold text-gray-900">{result.label}</div>
                                        <div className="text-xs text-gray-500">{result.description}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Testimonial */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className={`bg-gradient-to-br ${project.gradient} rounded-2xl p-6 text-white`}
                        >
                            <FaQuoteLeft className="text-3xl text-white/30 mb-4" />
                            <p className="text-white/90 italic mb-4 text-sm leading-relaxed">
                                "{project.testimonial.text}"
                            </p>
                            <div>
                                <div className="font-bold">{project.testimonial.author}</div>
                                <div className="text-white/70 text-sm">{project.testimonial.role}</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* CTA Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-[#3234a2] to-[#32a162] rounded-3xl p-8 md:p-12 text-white text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {project.isYouTube 
                                ? 'Want Us to Create Content for You? 🎬' 
                                : 'Have a Similar Project in Mind? 🚀'
                            }
                        </h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            {project.isYouTube 
                                ? "Let's create engaging video content that captures your audience"
                                : "Let's discuss how we can bring your vision to life with cutting-edge technology"
                            }
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/#contact')}
                                className="px-8 py-4 bg-white text-[#3234a2] rounded-xl font-bold text-lg shadow-lg"
                            >
                                Start Your Project →
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/projects')}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-xl font-bold text-lg"
                            >
                                View More Projects
                            </motion.button>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    )
}

export default ProjectDetailPage