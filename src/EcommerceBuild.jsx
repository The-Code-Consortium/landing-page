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
    { id: 'storefront', label: 'Storefront Analytics', desc: 'Real-time retail traffic metrics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { id: 'inventory', label: 'Live Inventory', desc: 'Real-time stock allocation depth', icon: 'M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z' },
    { id: 'funnel', label: 'Conversion Funnel', desc: 'Checkout drop-off tracking', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
];

const EcommerceBuild = () => {
    const [activeTab, setActiveTab] = useState('storefront');

    useEffect(() => {
        window.scrollTo(0, 0); // Ensures the page loads at the top
    }, []);

    return (
        <div className="font-sans text-[#151515] overflow-x-hidden selection:bg-black selection:text-white bg-[#FAF9F6] min-h-screen">

            <Navbar />

            <main className="pt-16">
                {/* Title & Showcase Section: Ivory Background with Aurora Glow */}
                <section className="relative px-8 md:px-16 pt-32 pb-32 border-b border-gray-200 bg-[#FAF9F6] overflow-hidden">
                    {/* Drifting radial gradients (Aurora effect) with warm retail tones */}
                    <motion.div
                        className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.4)_0%,transparent_70%)] pointer-events-none"
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
                        className="absolute bottom-[-15%] left-[-15%] w-[950px] h-[950px] rounded-full bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.45)_0%,transparent_75%)] pointer-events-none"
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
                        className="absolute top-[20%] left-[20%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.35)_0%,transparent_70%)] pointer-events-none"
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
                            E-Commerce Build
                        </motion.h1>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                            <motion.p
                                className="text-[13px] font-mono text-gray-600 max-w-2xl border-l border-gray-300 pl-8 uppercase tracking-[0.2em] leading-relaxed italic"
                                {...globalRevealProps}
                            >
                                A high-conversion headless commerce engine prioritizing performance and seamless inventory synchronization.
                            </motion.p>
                            <motion.div
                                className="text-[11px] font-mono text-gray-500 flex gap-4 uppercase tracking-widest"
                                {...globalRevealProps}
                            >
                                <span>[ EST. 2025 ]</span>
                                <span>[ ARCHIVE REF: 043 ]</span>
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
                                            <div className="w-5.5 h-5.5 rounded bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-[10px] font-extrabold text-white uppercase tracking-tighter shadow-sm">
                                                E
                                            </div>
                                            <span className="text-xs font-semibold text-white tracking-wide">Aura Retail</span>
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
                                                        ? 'bg-white/5 text-amber-400'
                                                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                                                        }`}
                                                >
                                                    <svg
                                                        className={`w-4 h-4 transition-colors ${isActive ? 'text-amber-400' : 'text-slate-400'}`}
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
                                    <div className="w-6 h-6 rounded-full bg-amber-700 flex items-center justify-center text-[10px] text-amber-100 font-bold">
                                        AR
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-semibold text-slate-300">Aura Retailer</span>
                                        <span className="text-[8px] font-mono text-slate-500">OPERATOR #043</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Main Stage Area */}
                            <div className="flex-grow flex flex-col bg-[#0e0f11] h-full overflow-hidden">
                                {/* Header Row */}
                                <div className="h-12 border-b border-white/10 px-6 flex items-center justify-between select-none">
                                    {/* Breadcrumbs */}
                                    <div className="flex items-center gap-2 text-xs font-mono">
                                        <span className="text-slate-400 hover:text-slate-200 cursor-pointer">Storefront</span>
                                        <span className="text-slate-600">/</span>
                                        <span className="text-slate-400 hover:text-slate-200 cursor-pointer">Active Views</span>
                                        <span className="text-slate-600">/</span>
                                        <span className="text-white font-medium capitalize">
                                            {activeTab === 'storefront' ? 'storefront analytics' : activeTab === 'inventory' ? 'live inventory' : 'conversion funnel'}
                                        </span>
                                    </div>

                                    {/* Micro-Navigation tabs */}
                                    <div className="hidden sm:flex items-center gap-4 text-[11px] font-medium text-slate-400 border-l border-white/10 pl-4">
                                        <span className={`hover:text-white cursor-pointer ${activeTab === 'storefront' ? 'text-white' : ''}`} onClick={() => setActiveTab('storefront')}>Storefront</span>
                                        <span className={`hover:text-white cursor-pointer ${activeTab === 'inventory' ? 'text-white' : ''}`} onClick={() => setActiveTab('inventory')}>Inventory</span>
                                        <span className={`hover:text-white cursor-pointer ${activeTab === 'funnel' ? 'text-white' : ''}`} onClick={() => setActiveTab('funnel')}>Funnel</span>
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
                                            {activeTab === 'storefront' && (
                                                <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white">
                                                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                                        <div className="flex items-center gap-2.5">
                                                            <span className="relative flex h-2 w-2">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                                                            </span>
                                                            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Storefront Analytics Data</span>
                                                        </div>
                                                        <span className="text-[10px] text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">CACHE HIT: 98.4%</span>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-4 my-auto">
                                                        <div className="bg-[#151619]/60 border border-white/5 p-4 rounded-xl">
                                                            <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Gross Volume</span>
                                                            <div className="text-lg font-bold tracking-tight text-slate-200">$1.24M <span className="text-[10px] text-slate-500 font-normal">USD</span></div>
                                                            <div className="text-[9px] text-amber-400 mt-2 font-bold">
                                                                 <span>↑ 18.2%</span>
                                                            </div>
                                                        </div>
                                                        <div className="bg-[#151619]/60 border border-white/5 p-4 rounded-xl">
                                                            <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Active Carts</span>
                                                            <div className="text-lg font-bold tracking-tight text-slate-200">4,821</div>
                                                            <div className="w-full bg-white/5 h-1 mt-2.5 rounded-full overflow-hidden">
                                                                <div className="bg-amber-500 h-full rounded-full w-[65%]" />
                                                            </div>
                                                        </div>
                                                        <div className="bg-[#151619]/60 border border-white/5 p-4 rounded-xl">
                                                            <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Avg Order Value</span>
                                                            <div className="text-lg font-bold tracking-tight text-slate-200">$156.50</div>
                                                            <div className="text-[9px] text-amber-400 mt-2 font-bold">
                                                                 <span>STABLE</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Mini Chart Mock */}
                                                    <div className="border border-white/5 bg-[#151619]/30 p-4 rounded-xl flex flex-col gap-3">
                                                        <div className="flex items-center justify-between text-[10px]">
                                                            <span className="text-slate-400">Transaction Volume (Hourly)</span>
                                                            <span className="text-slate-500">Live Edge Stream</span>
                                                        </div>
                                                        <div className="h-24 flex items-end gap-1.5 w-full">
                                                            {[45, 60, 50, 75, 65, 55, 80, 90, 95, 70, 75, 85, 95, 105, 120, 100, 90, 95, 80, 105, 115, 125, 115, 105, 110, 120, 135, 140].map((val, idx) => (
                                                                <div key={idx} className="flex-grow bg-white/10 hover:bg-amber-500 transition-colors rounded-t-sm" style={{ height: `${val}%` }} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 'inventory' && (
                                                <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white">
                                                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                                        <div className="flex items-center gap-2.5">
                                                            <span className="relative flex h-2 w-2">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                                                            </span>
                                                            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Live Inventory Stock</span>
                                                        </div>
                                                        <span className="text-[10px] text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">SKUS MONITORED: 4,820</span>
                                                    </div>

                                                    {/* Mock Order Book visual style for SKUs */}
                                                    <div className="grid grid-cols-2 gap-6 my-auto">
                                                        {/* Demand Velocity (Left Column) */}
                                                        <div className="space-y-1.5">
                                                            <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-widest pb-1 border-b border-white/5">
                                                                <span>Demand SKU</span>
                                                                <span>Velocity</span>
                                                            </div>
                                                            {[
                                                                { code: 'SKU-9902 Leather Tote', label: '3.4k/hr', width: 90 },
                                                                { code: 'SKU-4820 Merino Knit', label: '2.1k/hr', width: 65 },
                                                                { code: 'SKU-1082 Cashmere Scarf', label: '1.2k/hr', width: 45 },
                                                                { code: 'SKU-5821 Silk Slip', label: '0.8k/hr', width: 30 },
                                                                { code: 'SKU-3091 Linen Dress', label: '0.4k/hr', width: 15 }
                                                            ].map((sku, idx) => (
                                                                <div key={idx} className="relative flex justify-between items-center text-xs py-0.5 px-2 rounded hover:bg-amber-950/20 transition-all">
                                                                    <div className="absolute right-0 top-0 bottom-0 bg-amber-500/10 rounded-r" style={{ width: `${sku.width}%` }} />
                                                                    <span className="text-amber-400 z-10">{sku.code}</span>
                                                                    <span className="text-slate-300 z-10 font-bold">{sku.label}</span>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        {/* Stock Status / Alerts (Right Column) */}
                                                        <div className="space-y-1.5">
                                                            <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-widest pb-1 border-b border-white/5">
                                                                <span>Alert SKU</span>
                                                                <span>Stock Level</span>
                                                            </div>
                                                            {[
                                                                { code: 'SKU-8820 Wool Coat', label: '0 units', color: 'text-rose-400', width: 95, alertBg: 'bg-rose-500/10' },
                                                                { code: 'SKU-1082 Cashmere', label: '3 units', color: 'text-amber-400', width: 75, alertBg: 'bg-amber-500/10' },
                                                                { code: 'SKU-4820 Merino Knit', label: '12 units', color: 'text-slate-300', width: 45, alertBg: 'bg-white/5' },
                                                                { code: 'SKU-1209 Cotton Tee', label: '34 units', color: 'text-slate-300', width: 20, alertBg: 'bg-white/5' },
                                                                { code: 'SKU-3490 Denim Jacket', label: '98 units', color: 'text-slate-300', width: 8, alertBg: 'bg-white/5' }
                                                            ].map((sku, idx) => (
                                                                <div key={idx} className="relative flex justify-between items-center text-xs py-0.5 px-2 rounded hover:bg-white/[0.02] transition-all">
                                                                    <div className={`absolute left-0 top-0 bottom-0 ${sku.alertBg} rounded-l`} style={{ width: `${sku.width}%` }} />
                                                                    <span className={`${sku.color} z-10`}>{sku.code}</span>
                                                                    <span className="text-slate-300 z-10 font-bold">{sku.label}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between items-center text-xs border-t border-white/5 pt-3 text-slate-400">
                                                        <span>LOW STOCK SKUS: 2</span>
                                                        <span>TOTAL STOCK: 142,800 units</span>
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 'funnel' && (
                                                <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white">
                                                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                                        <div className="flex items-center gap-2.5">
                                                            <span className="relative flex h-2 w-2">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                                                            </span>
                                                            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Conversion Funnel Progression</span>
                                                        </div>
                                                        <span className="text-[10px] text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">CONVERSION RATE: 3.4%</span>
                                                    </div>

                                                    {/* Funnel Stage progression layout */}
                                                    <div className="space-y-2 my-auto">
                                                        {[
                                                            { step: '01 / VIEWED PRODUCT', sessions: '85,200 sessions', conf: '100% baseline', status: 'TOP' },
                                                            { step: '02 / ADDED TO CART', sessions: '14,800 sessions', conf: '17.3% rate', status: 'ENGAGED' },
                                                            { step: '03 / INITIATED CHECKOUT', sessions: '5,900 sessions', conf: '6.9% rate', status: 'PROCESSING' },
                                                            { step: '04 / PURCHASE COMPLETED', sessions: '2,900 sessions', conf: '3.4% final', status: 'CONVERTED' }
                                                        ].map((signal, idx) => (
                                                            <div key={idx} className="bg-[#151619]/60 border border-white/5 p-3 rounded-xl flex items-center justify-between text-xs hover:border-white/10 transition-all">
                                                                <div className="flex items-center gap-3">
                                                                    <span className="text-slate-500">{signal.step}</span>
                                                                    <span className="font-bold text-slate-200">{signal.sessions}</span>
                                                                </div>
                                                                <div className="flex items-center gap-4">
                                                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${signal.status === 'CONVERTED' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-white/5 text-slate-400 border border-white/10'
                                                                        }`}>{signal.status}</span>
                                                                    <span className="text-slate-400 text-[11px]">{signal.conf}</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="flex justify-between items-center text-xs border-t border-white/5 pt-3 text-slate-400">
                                                        <span>ABANDONED CARTS: 11.9k</span>
                                                        <span>FUNNEL EFFICIENCY: 92.4%</span>
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

                {/* Technical Split Panel: Deep Warm Stone/Charcoal Background */}
                <section className="bg-[#1c1917] border-b border-white/10 bg-[radial-gradient(rgba(244,63,94,0.03)_1px,transparent_1px)] [background-size:32px_32px]">
                    <motion.div
                        className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[700px]"
                        {...globalRevealProps}
                    >
                        {/* Left Column: Narratives */}
                        <div className="md:col-span-8 p-8 md:p-16 border-r border-white/10 space-y-24">
                            <div className="space-y-6">
                                <span className="text-[11px] font-mono text-amber-200/60 font-bold uppercase tracking-[0.4em] block">[ 01 ] THE COMPLEX CHALLENGE</span>
                                <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl italic text-white">System Requirements: Sub-100ms Page Loads</h2>
                                <p className="text-lg text-amber-100/70 leading-relaxed max-w-2xl font-light">
                                    Enterprise retail platforms often crash or slow down under flash-sale traffic, resulting in database locking, out-of-sync inventory data, and lost conversions. We were tasked with achieving instantaneous page load speeds and zero-latency inventory tracking under heavy loads.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <span className="text-[11px] font-mono text-amber-200/60 font-bold uppercase tracking-[0.4em] block">[ 02 ] THE CUSTOM SOLUTION</span>
                                <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl italic text-white">Headless Edge Integration</h2>
                                <p className="text-lg text-amber-100/70 leading-relaxed max-w-2xl font-light">
                                    We engineered a headless commerce frontend utilizing edge middleware and an optimized key-value caching layer. This design keeps static pages compiled on the edge while pulling live stock levels dynamically using lightweight API routes.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <span className="text-[11px] font-mono text-amber-200/60 font-bold uppercase tracking-[0.4em] block">[ 03 ] ENGINEERING RESULTS</span>
                                <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl italic text-white">+24% Conversion Uplift</h2>
                                <p className="text-lg text-amber-100/70 leading-relaxed max-w-2xl font-light">
                                    The performance enhancements directly increased metrics across the funnel: cart abandonment decreased by 18%, average order values rose by 12%, and search visibility spiked due to perfect 100 Lighthouse performance scores.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Metadata */}
                        <div className="md:col-span-4 bg-black/20 p-8 md:p-16 space-y-16">
                            <div className="border-b border-white/10 pb-10">
                                <span className="text-[11px] font-mono text-amber-200/60 uppercase block mb-4 tracking-[0.2em]">CLIENT</span>
                                <span className="font-['Cormorant_Garamond',serif] text-3xl text-white italic">Aura Luxury Retail</span>
                            </div>

                            <div className="border-b border-white/10 pb-10">
                                <span className="text-[11px] font-mono text-amber-200/60 uppercase block mb-4 tracking-[0.2em]">ROLE</span>
                                <div className="space-y-2">
                                    <span className="font-['Cormorant_Garamond',serif] text-2xl text-white block italic">Commerce Architecture</span>
                                    <span className="font-['Cormorant_Garamond',serif] text-2xl text-white block italic">Frontend Engineering</span>
                                    <span className="font-['Cormorant_Garamond',serif] text-2xl text-white block italic">Performance Optimization</span>
                                </div>
                            </div>

                            <div>
                                <span className="text-[11px] font-mono text-amber-200/60 uppercase block mb-6 tracking-[0.2em]">TECH STACK</span>
                                <div className="flex flex-wrap gap-3">
                                    {['NEXT.JS', 'SHOPIFY HYDROGEN', 'GRAPHQL', 'TURBOPACK', 'TAILWIND CSS', 'VERCEL EDGE'].map((tech) => (
                                        <span key={tech} className="px-4 py-1.5 border border-white/20 text-amber-100/80 font-mono text-[10px] uppercase tracking-widest">
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
                            <h3 className="font-['Cormorant_Garamond',serif] text-5xl md:text-7xl italic text-white whitespace-nowrap">Retail Architecture</h3>
                            <div className="h-px bg-white/10 w-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {/* Feature 1 */}
                            <div className="group">
                                <div className="mb-10 overflow-hidden border border-white/10 relative">
                                    <img alt="Storefront Engine" className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR_jXsHyQNEUqZ9B_u50oU5oviZqEYA7jv2exVBux546eDADEoFTwtyuHqHf2UIZQkB4g2C3up7x-g8YnB80QsKye8vKfDKyYjIDj7MM4x5VuApcRF4Y854iGZVfBPvwXSrc4_UV7wLrUsSxTOsgXohpc4r4elCSZDRKvyFYkeVKJpufzvZMoi8KtLZmLGIqtMKN1mIRUgomXQ7aeSeNwQFrxxLM4_h4J4u6O077TXebeeG7WzP2O3WY0Wn48ITm4OKyMjFkRWYrAW" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-l border-white/20 pl-6">
                                    <div>
                                        <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em] block mb-2">01 / FRONTEND</span>
                                        <h4 className="font-['Cormorant_Garamond',serif] text-3xl italic text-white">Storefront Engine</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="group">
                                <div className="mb-10 overflow-hidden border border-white/10 relative">
                                    <img alt="Live Inventory Sync" className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6g4AP617N_r3pjPw2sE21ArNZNFdm1i6qTA9w_CxYSLHwCU9A0fmLs1-svz9ZoIc0k9iAO3HrG4C7aT4VNrr0Rkz_HRfVUfO4jIXxOPdeg15AAzKj6qiGyy7xGKrlenRkosp4I0mK67Ck9fpm2oCLJW_GHPjdpgWXaLvwwCwMOQBslDnshLf5o1EVMQga2NpTEEwVAc0Fms3-6ANKhdXroLNpo5QDxLY-GGtnc-muzYhnDEB7-D-0owNmr6X9BETkyPE9EAvS3h9J" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-l border-white/20 pl-6">
                                    <div>
                                        <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em] block mb-2">02 / SUPPLY CHAIN</span>
                                        <h4 className="font-['Cormorant_Garamond',serif] text-3xl italic text-white">Live Inventory Sync</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="group">
                                <div className="mb-10 overflow-hidden border border-white/10 relative">
                                    <img alt="Checkout Optimization" className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Vlse04m9Cr_HHxbFMqSaKPkTVx3dpytRQLODuUJmtems15DVb4RVnZRYEyZ98kHDJX2qVd4qGEsougfeiDZA5jyx9nAR4NhWZqGhKg_JJQ9bQEEdrrkTuuzojrpBe-cP0vwN71NonSJPrTcFPiPQtxYSkYBrj8QoUxdImGUBhFR0DO4XN4alkgu6ZQtwPGXm4qZGLDwMCDK1O4siz95yUWXJTCjpFHujzpfuXFMTFCqUSM5cOwjU34sBOjtM1yfr6f09AZxbZxoE" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-l border-white/20 pl-6">
                                    <div>
                                        <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em] block mb-2">03 / CHECKOUT</span>
                                        <h4 className="font-['Cormorant_Garamond',serif] text-3xl italic text-white">Checkout Optimization</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="group">
                                <div className="mb-10 overflow-hidden border border-white/10 relative">
                                    <img alt="Personalization Engine" className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFFMV2Ot1qu1wEYHc0gGAQajdlDX_SSE6ySfTVdWPswhEwz7dx2ajEFtz9q6Xa2nOC_mYpMN9Teaisp4rMcu64iNrcw9CA8hX0ceFLPtkjstNB6e-PcVf2o0WJ3niDpdzc1EhSfv2uVYOKJwVfKvobdjr9yKlF9dAUAuFSVrHlXeEcGRkfNViVLGNku0Jhqm0Vf145sIyFsO_eFfnCVDcjJlg_UWfULv0VQ9f79AGaqyOcZQXdC584gB1Hk5eqyGUdKwmBPw2dS2fx" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-l border-white/20 pl-6">
                                    <div>
                                        <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em] block mb-2">04 / ENGAGEMENT</span>
                                        <h4 className="font-['Cormorant_Garamond',serif] text-3xl italic text-white">Personalization Engine</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </section>
            </main>

            <RelatedProjects currentProject="ecommerce" />
            <Footer />
        </div>
    );
};

export default EcommerceBuild;
