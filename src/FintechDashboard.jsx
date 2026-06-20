import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RelatedProjects from './components/RelatedProjects';

const globalRevealProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.3 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const tabs = [
    { id: 'overview', label: 'Market Overview', desc: 'Sub-millisecond data density views', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { id: 'orderBook', label: 'Live Order Book', desc: 'Real-time liquidity and delta depth', icon: 'M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z' },
    { id: 'algorithms', label: 'Algorithmic Signals', desc: 'Predictive neural trade indicators', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
];

const FintechDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

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

                        {/* Interactive Hero Showcase Block: Linear.app Shell */}
                        <motion.div
                            className="mt-16 w-full bg-[#0e0f11] rounded-2xl border border-white/10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.8)] overflow-hidden relative z-10 flex flex-col md:flex-row h-[560px]"
                            {...globalRevealProps}
                        >
                            {/* Left Sidebar: Linear-Style Navigation */}
                            <div className="w-full md:w-64 bg-[#141517] border-b md:border-b-0 md:border-r border-white/10 flex flex-col flex-shrink-0 p-4 justify-between h-full select-none">
                                <div className="flex flex-col gap-5">
                                    {/* Workspace Title Selector */}
                                    <div className="flex items-center justify-between px-2">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-5.5 h-5.5 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[10px] font-extrabold text-white uppercase tracking-tighter shadow-sm">
                                                A
                                            </div>
                                            <span className="textapex-xs font-semibold text-white tracking-wide">Code Consortium</span>
                                        </div>
                                        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>

                                    {/* Minimal Menu List */}
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 mb-2 block">Views</span>
                                        {tabs.map((tab) => {
                                            const isActive = activeTab === tab.id;
                                            return (
                                                <button
                                                    key={tab.id}
                                                    onClick={() => setActiveTab(tab.id)}
                                                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 flex items-center gap-3 ${isActive
                                                        ? 'bg-white/5 text-white'
                                                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                                                        }`}
                                                >
                                                    <svg
                                                        className={`w-4 h-4 transition-colors ${isActive ? 'text-slate-200' : 'text-slate-400'}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
                                                    </svg>
                                                    <span className="truncate">{tab.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Sidebar Mock Settings / User info */}
                                <div className="border-t border-white/5 pt-4 px-2 flex items-center gap-2.5">
                                    <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-slate-200 font-bold">
                                        JD
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-semibold text-slate-300">John Doe</span>
                                        <span className="text-[8px] font-mono text-slate-500">ENGINEER #042</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Main Stage Area */}
                            <div className="flex-grow flex flex-col bg-[#0e0f11] h-full overflow-hidden">
                                {/* Header Row */}
                                <div className="h-12 border-b border-white/10 px-6 flex items-center justify-between select-none">
                                    {/* Breadcrumbs */}
                                    <div className="flex items-center gap-2 text-xs font-mono">
                                        <span className="text-slate-400 hover:text-slate-200 cursor-pointer">Workspace</span>
                                        <span className="text-slate-600">/</span>
                                        <span className="text-slate-400 hover:text-slate-200 cursor-pointer">Active Views</span>
                                        <span className="text-slate-600">/</span>
                                        <span className="text-white font-medium capitalize">
                                            {activeTab === 'overview' ? 'market overview' : activeTab === 'orderBook' ? 'live order book' : 'algorithmic signals'}
                                        </span>
                                    </div>

                                    {/* Micro-Navigation tabs */}
                                    <div className="hidden sm:flex items-center gap-4 text-[11px] font-medium text-slate-400 border-l border-white/10 pl-4">
                                        <span className={`hover:text-white cursor-pointer ${activeTab === 'overview' ? 'text-white' : ''}`} onClick={() => setActiveTab('overview')}>Overview</span>
                                        <span className={`hover:text-white cursor-pointer ${activeTab === 'orderBook' ? 'text-white' : ''}`} onClick={() => setActiveTab('orderBook')}>Order Book</span>
                                        <span className={`hover:text-white cursor-pointer ${activeTab === 'algorithms' ? 'text-white' : ''}`} onClick={() => setActiveTab('algorithms')}>Signals</span>
                                    </div>
                                </div>

                                {/* Dynamic Page Stage */}
                                <div className="flex-grow relative overflow-hidden flex flex-col p-6 min-h-0">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="flex-grow flex flex-col h-full min-h-0"
                                        >
                                            {activeTab === 'overview' && (
                                                <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white">
                                                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                                        <div className="flex items-center gap-2.5">
                                                            <span className="relative flex h-2 w-2">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                                            </span>
                                                            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Market Overview Data</span>
                                                        </div>
                                                        <span className="text-[10px] text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">LATENCY: 0.2ms</span>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-4 my-auto">
                                                        <div className="bg-[#151619]/60 border border-white/5 p-4 rounded-xl">
                                                            <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Total Throughput</span>
                                                            <div className="text-lg font-bold tracking-tight text-slate-200">142.8k <span className="text-[10px] text-slate-500 font-normal">req/s</span></div>
                                                            <div className="text-[9px] text-emerald-400 mt-2 font-bold">
                                                                <span>↑ 12.4%</span>
                                                            </div>
                                                        </div>
                                                        <div className="bg-[#151619]/60 border border-white/5 p-4 rounded-xl">
                                                            <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">CPU Load</span>
                                                            <div className="text-lg font-bold tracking-tight text-slate-200">22.4%</div>
                                                            <div className="w-full bg-white/5 h-1 mt-2.5 rounded-full overflow-hidden">
                                                                <div className="bg-indigo-500 h-full rounded-full w-[22.4%]" />
                                                            </div>
                                                        </div>
                                                        <div className="bg-[#151619]/60 border border-white/5 p-4 rounded-xl">
                                                            <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">GC Pause Time</span>
                                                            <div className="text-lg font-bold tracking-tight text-slate-200">1.04ms</div>
                                                            <div className="text-[9px] text-emerald-400 mt-2 font-bold">
                                                                <span>OPTIMIZED</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Mini Chart Mock */}
                                                    <div className="border border-white/5 bg-[#151619]/30 p-4 rounded-xl flex flex-col gap-3">
                                                        <div className="flex items-center justify-between text-[10px]">
                                                            <span className="text-slate-400">Memory Allocation (RSS)</span>
                                                            <span className="text-slate-500">60 FPS Render Loop</span>
                                                        </div>
                                                        <div className="h-24 flex items-end gap-1.5 w-full">
                                                            {[30, 45, 35, 60, 50, 40, 65, 75, 80, 55, 60, 70, 85, 90, 100, 80, 70, 75, 60, 85, 95, 105, 95, 85, 90, 100, 115, 120].map((val, idx) => (
                                                                <div key={idx} className="flex-grow bg-white/10 hover:bg-indigo-500 transition-colors rounded-t-sm" style={{ height: `${val}%` }} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 'orderBook' && (
                                                <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white">
                                                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                                        <div className="flex items-center gap-2.5">
                                                            <span className="relative flex h-2 w-2">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                                                            </span>
                                                            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Live Order Book Data</span>
                                                        </div>
                                                        <span className="text-[10px] text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">DEPTH: 100 levels</span>
                                                    </div>

                                                    {/* Mock Order Book visual */}
                                                    <div className="grid grid-cols-2 gap-6 my-auto">
                                                        {/* Asks (Sell Side) - Red */}
                                                        <div className="space-y-1.5">
                                                            <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-widest pb-1 border-b border-white/5">
                                                                <span>Price (USD)</span>
                                                                <span>Size</span>
                                                            </div>
                                                            {[67455.5, 67453.0, 67452.5, 67451.0, 67450.5].map((price, idx) => {
                                                                const sizes = [1.024, 0.450, 2.115, 0.088, 3.420];
                                                                const width = [30, 15, 65, 8, 90];
                                                                return (
                                                                    <div key={idx} className="relative flex justify-between items-center text-xs py-0.5 px-2 rounded hover:bg-rose-950/20 transition-all">
                                                                        <div className="absolute right-0 top-0 bottom-0 bg-rose-500/10 rounded-r" style={{ width: `${width[idx]}%` }} />
                                                                        <span className="text-rose-400 z-10">{price.toLocaleString(undefined, { minimumFractionDigits: 1 })}</span>
                                                                        <span className="text-slate-300 z-10 font-bold">{sizes[idx].toFixed(3)}</span>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>

                                                        {/* Bids (Buy Side) - Green */}
                                                        <div className="space-y-1.5">
                                                            <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-widest pb-1 border-b border-white/5">
                                                                <span>Price (USD)</span>
                                                                <span>Size</span>
                                                            </div>
                                                            {[67448.0, 67447.5, 67446.0, 67444.5, 67443.0].map((price, idx) => {
                                                                const sizes = [0.890, 1.455, 0.120, 4.102, 0.778];
                                                                const width = [25, 45, 6, 95, 20];
                                                                return (
                                                                    <div key={idx} className="relative flex justify-between items-center text-xs py-0.5 px-2 rounded hover:bg-emerald-950/20 transition-all">
                                                                        <div className="absolute left-0 top-0 bottom-0 bg-emerald-500/10 rounded-l" style={{ width: `${width[idx]}%` }} />
                                                                        <span className="text-emerald-400 z-10">{price.toLocaleString(undefined, { minimumFractionDigits: 1 })}</span>
                                                                        <span className="text-slate-300 z-10 font-bold">{sizes[idx].toFixed(3)}</span>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between items-center text-xs border-t border-white/5 pt-3 text-slate-400">
                                                        <span>SPREAD: $2.50</span>
                                                        <span>VOL (24H): 12,408 BTC</span>
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 'algorithms' && (
                                                <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white">
                                                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                                        <div className="flex items-center gap-2.5">
                                                            <span className="relative flex h-2 w-2">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                                                            </span>
                                                            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Algorithmic Signals</span>
                                                        </div>
                                                        <span className="text-[10px] text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">MODEL: V4.8</span>
                                                    </div>

                                                    {/* Neural network signals mock */}
                                                    <div className="space-y-2 my-auto">
                                                        {[
                                                            { time: '13:32:41', pair: 'BTC/USD', type: 'LONG', conf: '94.2%', status: 'EXECUTED' },
                                                            { time: '13:32:20', pair: 'ETH/USD', type: 'SHORT', conf: '88.7%', status: 'EXECUTED' },
                                                            { time: '13:31:55', pair: 'SOL/USD', type: 'LONG', conf: '79.1%', status: 'SKIPPED' }
                                                        ].map((signal, idx) => (
                                                            <div key={idx} className="bg-[#151619]/60 border border-white/5 p-3 rounded-xl flex items-center justify-between text-xs hover:border-white/10 transition-all">
                                                                <div className="flex items-center gap-3">
                                                                    <span className="text-slate-500">{signal.time}</span>
                                                                    <span className="font-bold text-slate-200">{signal.pair}</span>
                                                                </div>
                                                                <div className="flex items-center gap-4">
                                                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${signal.type === 'LONG' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                                                        }`}>{signal.type}</span>
                                                                    <span className="text-slate-400 text-[11px]">CONF: {signal.conf}</span>
                                                                    <span className={`font-semibold ${signal.status === 'EXECUTED' ? 'text-indigo-400' : 'text-slate-500'}`}>{signal.status}</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="flex justify-between items-center text-xs border-t border-white/5 pt-3 text-slate-400">
                                                        <span>ACTIVE THREADS: 128</span>
                                                        <span>SIG ACCURACY: 91.4%</span>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Technical Split Panel: Deep Slate Background */}
                <section className="bg-[#1e293b] border-b border-white/10 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]">
                    <motion.div
                        className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[700px]"
                        {...globalRevealProps}
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
                        {...globalRevealProps}
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

            <RelatedProjects currentProject="fintech" />
            <Footer />
        </div>
    );
};

export default FintechDashboard;