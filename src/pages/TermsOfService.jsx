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

const TermsOfService = () => {
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
                            Terms of Service
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
                                1. Acceptance of Terms
                            </motion.h2>
                            <motion.p {...globalRevealProps}>
                                Welcome to The Code Consortium. By accessing or using our website located at thecodeconsortium.com (the "Site") or any software, products, or consulting services provided by us (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not access or use our Services.
                            </motion.p>
                        </div>

                        <div className="space-y-4">
                            <motion.h2
                                className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-black"
                                {...globalRevealProps}
                            >
                                2. Provision of Services
                            </motion.h2>
                            <motion.p {...globalRevealProps}>
                                The Code Consortium is an elite digital engineering studio offering bespoke software architecture, user interface development, and custom operations automation. We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time without notice or liability.
                            </motion.p>
                        </div>

                        <div className="space-y-4">
                            <motion.h2
                                className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-black"
                                {...globalRevealProps}
                            >
                                3. Intellectual Property Rights
                            </motion.h2>
                            <motion.p {...globalRevealProps}>
                                All materials on the Site, including text, graphics, logos, images, design components, software tools, and their layout and assembly, are the exclusive property of The Code Consortium or its licensors. You are granted a limited, non-exclusive, non-transferable license to access the Site for personal, non-commercial informational purposes only. No content may be reproduced, distributed, or modified without our express prior written permission.
                            </motion.p>
                        </div>

                        <div className="space-y-4">
                            <motion.h2
                                className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-black"
                                {...globalRevealProps}
                            >
                                4. User Conduct & Security
                            </motion.h2>
                            <motion.p {...globalRevealProps}>
                                You agree not to use the Site or Services in any manner that could disable, overburden, damage, or impair our infrastructure or interfere with any other party's use. You are prohibited from attempting to gain unauthorized access to any system accounts, servers, or database networks associated with The Code Consortium through hacking, password mining, or any other means.
                            </motion.p>
                        </div>

                        <div className="space-y-4">
                            <motion.h2
                                className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-black"
                                {...globalRevealProps}
                            >
                                5. Limitation of Liability
                            </motion.h2>
                            <motion.p {...globalRevealProps}>
                                To the maximum extent permitted by applicable law, The Code Consortium, its officers, partners, and employees shall not be liable for any direct, indirect, incidental, special, exemplary, or consequential damages resulting from your access to or inability to access the Site or Services, even if we have been advised of the possibility of such damages.
                            </motion.p>
                        </div>

                        <div className="space-y-4">
                            <motion.h2
                                className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-black"
                                {...globalRevealProps}
                            >
                                6. Governing Law & Jurisdiction
                            </motion.h2>
                            <motion.p {...globalRevealProps}>
                                These Terms and any agreements between you and The Code Consortium shall be governed by and construed in accordance with the laws of Sri Lanka, without giving effect to any principles of conflicts of law. Any legal suit, action, or proceeding arising out of or related to these Terms shall be instituted exclusively in the competent courts of Sri Lanka.
                            </motion.p>
                        </div>

                        <div className="space-y-4 font-mono text-xs uppercase tracking-wider text-gray-500 pt-6 border-t border-gray-200">
                            <motion.h3
                                className="font-sans font-bold text-lg tracking-tight text-black uppercase"
                                {...globalRevealProps}
                            >
                                Contact Information
                            </motion.h3>
                            <motion.p {...globalRevealProps}>
                                If you have any inquiries regarding these Terms of Service, please contact us at:
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

export default TermsOfService;
