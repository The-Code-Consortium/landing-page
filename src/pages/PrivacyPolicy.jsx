import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const globalRevealProps = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans text-black bg-gray-50 min-h-screen flex flex-col relative selection:bg-black selection:text-white">
            <Navbar />

            <main className="flex-grow max-w-screen-2xl mx-auto border-l border-r border-gray-300 bg-white pt-24 pb-32 px-6 sm:px-8 w-full">
                <div className="max-w-3xl mx-auto">
                    {/* Header Section */}
                    <div className="border-b border-gray-200 pb-12 mb-16 text-center">
                        <motion.h1
                            className="font-sans font-bold text-5xl md:text-6xl tracking-tight text-black mb-6"
                            {...globalRevealProps}
                        >
                            Privacy Policy
                        </motion.h1>
                        <motion.p
                            className="font-mono text-xs uppercase tracking-widest text-gray-500"
                            {...globalRevealProps}
                        >
                            Last Updated: June 18, 2026
                        </motion.p>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-12 text-gray-500 leading-relaxed font-light text-sm">
                        <div className="space-y-4">
                            <motion.h2
                                className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-black"
                                {...globalRevealProps}
                            >
                                1. Commitment to Privacy
                            </motion.h2>
                            <motion.p {...globalRevealProps}>
                                The Code Consortium ("we", "our", or "us") is dedicated to protecting the privacy and security of your personal data. This Privacy Policy outlines how we collect, use, store, and disclose information when you visit our website (thecodeconsortium.com) or interact with our software engineering and design services.
                            </motion.p>
                        </div>

                        <div className="space-y-4">
                            <motion.h2
                                className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-black"
                                {...globalRevealProps}
                            >
                                2. Information We Collect
                            </motion.h2>
                            <motion.p {...globalRevealProps}>
                                We collect information that you voluntarily provide when contacting us or filling out our inquiry forms, which may include your name, email address, company name, and project specifications. Additionally, we automatically collect basic log and usage information (such as IP addresses, browser types, and visited pages) to analyze and optimize the performance of our Site.
                            </motion.p>
                        </div>

                        <div className="space-y-4">
                            <motion.h2
                                className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-black"
                                {...globalRevealProps}
                            >
                                3. How We Use Your Information
                            </motion.h2>
                            <motion.p {...globalRevealProps}>
                                We utilize the collected information to deliver and optimize our Services, respond to client inquiries, manage developer relations, verify system operations, and send transactional notifications. We do not sell, rent, or trade your personal data to third parties under any circumstances.
                            </motion.p>
                        </div>

                        <div className="space-y-4">
                            <motion.h2
                                className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-black"
                                {...globalRevealProps}
                            >
                                4. Data Security
                            </motion.h2>
                            <motion.p {...globalRevealProps}>
                                We implement industry-standard administrative, physical, and technical security controls (including encryption and secure access layers) to prevent unauthorized access, destruction, disclosure, or modification of your personal data. However, please note that no method of transmission over the internet is completely secure.
                            </motion.p>
                        </div>

                        <div className="space-y-4">
                            <motion.h2
                                className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-black"
                                {...globalRevealProps}
                            >
                                5. Cookies & Analytics
                            </motion.h2>
                            <motion.p {...globalRevealProps}>
                                Our Site uses cookies and similar tracking identifiers to remember user preferences, facilitate seamless navigation, and gather aggregated demographic analytics. You have the option to refuse or disable cookies through your browser settings, though doing so might affect the functionality of certain website elements.
                            </motion.p>
                        </div>

                        <div className="space-y-4">
                            <motion.h2
                                className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-black"
                                {...globalRevealProps}
                            >
                                6. Your Legal Rights
                            </motion.h2>
                            <motion.p {...globalRevealProps}>
                                Depending on your geographical location, you may have specific rights regarding your personal information, including the right to request access to the data we hold, correct inaccuracies, or request the complete deletion of your records. To exercise any of these rights, please reach out to us using the contact details provided below.
                            </motion.p>
                        </div>

                        <div className="space-y-4 font-mono text-xs uppercase tracking-wider text-gray-500 pt-6 border-t border-gray-200">
                            <motion.h3
                                className="font-sans font-bold text-lg tracking-tight text-black uppercase"
                                {...globalRevealProps}
                            >
                                Inquiries & Data Requests
                            </motion.h3>
                            <motion.p {...globalRevealProps}>
                                If you have any questions or data requests related to this Privacy Policy, please email us directly:
                            </motion.p>
                            <motion.p
                                className="text-black font-semibold lowercase"
                                {...globalRevealProps}
                            >
                                thecodeconsortium@gmail.com
                            </motion.p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
