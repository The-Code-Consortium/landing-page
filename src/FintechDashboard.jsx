import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const globalRevealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const FintechDashboard = () => {
    // This recreates the smooth hover effect from your script tag
    useEffect(() => {
        window.scrollTo(0, 0); // Ensures the page loads at the top
    }, []);

    return (
        <div className="font-sans text-[#151515] overflow-x-hidden selection:bg-black selection:text-white bg-[#FAF9F6] min-h-screen">

            <Navbar />

            <main className="pt-16">
                {/* Title & Showcase Section: Ivory Background with Aurora Glow */}
                <section className="relative px-8 md:px-16 pt-32 pb-32 border-b border-gray-200 bg-[#FAF9F6] overflow-hidden">
                    <motion.div
                        className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(51,95,130,0.5)_0%,transparent_70%)] pointer-events-none"
                        style={{ filter: "blur(140px)" }}
                        animate={{
                            x: [0, 80, -40, 0],
                            y: [0, -50, 40, 0],
                            scale: [1, 1.15, 0.9, 1],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-[-15%] left-[-15%] w-[950px] h-[950px] rounded-full bg-[radial-gradient(circle_at_center,rgba(163,101,74,0.5)_0%,transparent_75%)] pointer-events-none"
                        style={{ filter: "blur(150px)" }}
                        animate={{
                            x: [0, -90, 50, 0],
                            y: [0, 40, -60, 0],
                            scale: [1, 0.85, 1.1, 1],
                        }}
                        transition={{
                            duration: 28,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute top-[20%] left-[20%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(78,98,118,0.45)_0%,transparent_70%)] pointer-events-none"
                        style={{ filter: "blur(130px)" }}
                        animate={{
                            x: [0, 40, -30, 0],
                            y: [0, 50, -40, 0],
                            scale: [1, 1.1, 0.95, 1],
                        }}
                        transition={{
                            duration: 22,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    
                    <div className="max-w-[1440px] mx-auto relative z-10">
                        <motion.h1 
                            className="font-['Cormorant_Garamond',serif] text-5xl md:text-[112px] leading-tight md:leading-[0.85] italic font-light tracking-tight mb-12 text-black max-w-5xl"
                            {...globalRevealProps}
                        >
                            Fintech Dashboard
                        </motion.h1>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                            <motion.p 
                                className="text-[13px] font-mono text-gray-600 max-w-2xl border-l border-gray-300 pl-8 uppercase tracking-[0.2em] leading-relaxed italic"
                                {...globalRevealProps}
                            >
                                A comprehensive architectural overhaul prioritizing data density and sub-millisecond visual feedback.
                            </motion.p>
                            <motion.div 
                                className="text-[11px] font-mono text-gray-500 flex gap-4 uppercase tracking-widest"
                                {...globalRevealProps}
                            >
                                <span>[ EST. 2024 ]</span>
                                <span>[ ARCHIVE REF: 042 ]</span>
                            </motion.div>
                        </div>

                        <motion.div
                            className="border border-gray-200 p-1 bg-white shadow-xl relative z-10"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="relative">
                                <img
                                    alt="Fintech Dashboard Main Screen"
                                    className="w-full aspect-[16/9] object-cover opacity-100 transition-opacity duration-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhdE2z1QjpWMD0DMSVsvDMJ3HvDd2K4dvOSg4zxHq90QyCtBVoFOylWx5pARVbBtyP_zDse4yxR641qlLJNaLITQiIhMiTXPeDCr4YHqhgvtCJS6eHGhzZYhRgAonzI5eG8nPBhHNVSHYTnhplfeA4v6ITXNKbpRAC_giXP9Dfs4orBX1aq6tjlt5Kc8ZQaHRI_-KZ3s-An6r602Q5dxppA68qnHIIuFzUJrHisaV3cXa2-FOH_mKgI7E7R79PGEw3lIvl20FAI4rY"
                                />
                                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.05)] pointer-events-none"></div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Technical Split Panel: Deep Slate Background */}
                <section className="bg-[#1e293b] border-b border-white/10 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]">
                    <motion.div
                        className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[700px]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Left Column: Narratives */}
                        <div className="md:col-span-8 p-8 md:p-16 border-r border-white/10 space-y-24">
                            <div className="space-y-6">
                                <span className="text-[11px] font-mono text-blue-200/60 font-bold uppercase tracking-[0.4em] block">[ 01 ] THE COMPLEX CHALLENGE</span>
                                <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl italic text-white">System Requirements: 10,000+ Updates/Sec</h2>
                                <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl font-light">
                                    Legacy trading platforms often struggle with the reconciliation of high-velocity data streams and UI responsiveness. Our mandate was to rebuild the core rendering engine to support extreme throughput without frame degradation.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <span className="text-[11px] font-mono text-blue-200/60 font-bold uppercase tracking-[0.4em] block">[ 02 ] THE CUSTOM SOLUTION</span>
                                <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl italic text-white">Canvas-based Engine & Atomic State</h2>
                                <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl font-light">
                                    By implementing a layered Canvas rendering system for the primary charts and an atomic state management architecture, we isolated re-renders to only the specific DOM nodes requiring updates, preserving CPU cycles.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <span className="text-[11px] font-mono text-blue-200/60 font-bold uppercase tracking-[0.4em] block">[ 03 ] ENGINEERING RESULTS</span>
                                <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl italic text-white">Stable 60FPS at Peak Load</h2>
                                <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl font-light">
                                    The overhaul resulted in a consistent 60FPS visual experience under heavy volatility, a 35% reduction in perceived error rates, and sub-millisecond execution confirmations for institutional traders.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Metadata */}
                        <div className="md:col-span-4 bg-black/20 p-8 md:p-16 space-y-16">
                            <div className="border-b border-white/10 pb-10">
                                <span className="text-[11px] font-mono text-blue-200/60 uppercase block mb-4 tracking-[0.2em]">CLIENT</span>
                                <span className="font-['Cormorant_Garamond',serif] text-3xl text-white italic">Apex Global Equities</span>
                            </div>

                            <div className="border-b border-white/10 pb-10">
                                <span className="text-[11px] font-mono text-blue-200/60 uppercase block mb-4 tracking-[0.2em]">ROLE</span>
                                <div className="space-y-2">
                                    <span className="font-['Cormorant_Garamond',serif] text-2xl text-white block italic">UI/UX Engineering</span>
                                    <span className="font-['Cormorant_Garamond',serif] text-2xl text-white block italic">Frontend Development</span>
                                    <span className="font-['Cormorant_Garamond',serif] text-2xl text-white block italic">Data Visualization</span>
                                </div>
                            </div>

                            <div>
                                <span className="text-[11px] font-mono text-blue-200/60 uppercase block mb-6 tracking-[0.2em]">TECH STACK</span>
                                <div className="flex flex-wrap gap-3">
                                    {['REACT', 'TYPESCRIPT', 'D3.JS', 'CHART.JS', 'TAILWIND CSS', 'VITE'].map((tech) => (
                                        <span key={tech} className="px-4 py-1.5 border border-white/20 text-blue-100/80 font-mono text-[10px] uppercase tracking-widest">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Multi-Feature Gallery: Dark Charcoal Background */}
                <section className="px-8 md:px-16 py-32 bg-[#131313]">
                    <motion.div
                        className="max-w-[1440px] mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-8 mb-24">
                            <h3 className="font-['Cormorant_Garamond',serif] text-5xl md:text-7xl italic text-white whitespace-nowrap">Module Architecture</h3>
                            <div className="h-px bg-white/10 w-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {/* Feature 1 */}
                            <div className="group">
                                <div className="mb-10 overflow-hidden border border-white/10 relative">
                                    <img alt="Order Book Module" className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR_jXsHyQNEUqZ9B_u50oU5oviZqEYA7jv2exVBux546eDADEoFTwtyuHqHf2UIZQkB4g2C3up7x-g8YnB80QsKye8vKfDKyYjIDj7MM4x5VuApcRF4Y854iGZVfBPvwXSrc4_UV7wLrUsSxTOsgXohpc4r4elCSZDRKvyFYkeVKJpufzvZMoi8KtLZmLGIqtMKN1mIRUgomXQ7aeSeNwQFrxxLM4_h4J4u6O077TXebeeG7WzP2O3WY0Wn48ITm4OKyMjFkRWYrAW" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-l border-white/20 pl-6">
                                    <div>
                                        <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em] block mb-2">01 / MARKET DATA</span>
                                        <h4 className="font-['Cormorant_Garamond',serif] text-3xl italic text-white">Order Book</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="group">
                                <div className="mb-10 overflow-hidden border border-white/10 relative">
                                    <img alt="Portfolio Allocation" className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6g4AP617N_r3pjPw2sE21ArNZNFdm1i6qTA9w_CxYSLHwCU9A0fmLs1-svz9ZoIc0k9iAO3HrG4C7aT4VNrr0Rkz_HRfVUfO4jIXxOPdeg15AAzKj6qiGyy7xGKrlenRkosp4I0mK67Ck9fpm2oCLJW_GHPjdpgWXaLvwwCwMOQBslDnshLf5o1EVMQga2NpTEEwVAc0Fms3-6ANKhdXroLNpo5QDxLY-GGtnc-muzYhnDEB7-D-0owNmr6X9BETkyPE9EAvS3h9J" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-l border-white/20 pl-6">
                                    <div>
                                        <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em] block mb-2">02 / RISK MGMT</span>
                                        <h4 className="font-['Cormorant_Garamond',serif] text-3xl italic text-white">Portfolio Allocation</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="group">
                                <div className="mb-10 overflow-hidden border border-white/10 relative">
                                    <img alt="Trading Terminal" className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Vlse04m9Cr_HHxbFMqSaKPkTVx3dpytRQLODuUJmtems15DVb4RVnZRYEyZ98kHDJX2qVd4qGEsougfeiDZA5jyx9nAR4NhWZqGhKg_JJQ9bQEEdrrkTuuzojrpBe-cP0vwN71NonSJPrTcFPiPQtxYSkYBrj8QoUxdImGUBhFR0DO4XN4alkgu6ZQtwPGXm4qZGLDwMCDK1O4siz95yUWXJTCjpFHujzpfuXFMTFCqUSM5cOwjU34sBOjtM1yfr6f09AZxbZxoE" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-l border-white/20 pl-6">
                                    <div>
                                        <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em] block mb-2">03 / EXECUTION</span>
                                        <h4 className="font-['Cormorant_Garamond',serif] text-3xl italic text-white">Trading Terminal</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="group">
                                <div className="mb-10 overflow-hidden border border-white/10 relative">
                                    <img alt="Audit Trail" className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFFMV2Ot1qu1wEYHc0gGAQajdlDX_SSE6ySfTVdWPswhEwz7dx2ajEFtz9q6Xa2nOC_mYpMN9Teaisp4rMcu64iNrcw9CA8hX0ceFLPtkjstNB6e-PcVf2o0WJ3niDpdzc1EhSfv2uVYOKJwVfKvobdjr9yKlF9dAUAuFSVrHlXeEcGRkfNViVLGNku0Jhqm0Vf145sIyFsO_eFfnCVDcjJlg_UWfULv0VQ9f79AGaqyOcZQXdC584gB1Hk5eqyGUdKwmBPw2dS2fx" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-l border-white/20 pl-6">
                                    <div>
                                        <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em] block mb-2">04 / COMPLIANCE</span>
                                        <h4 className="font-['Cormorant_Garamond',serif] text-3xl italic text-white">Audit Trail</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default FintechDashboard;