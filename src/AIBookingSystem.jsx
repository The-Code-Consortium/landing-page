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
    { id: 'calendar', label: 'Smart Calendar', desc: 'Automated scheduling conflict resolver', icon: 'M19 4h-1V3a1 1 0 00-2 0v1H8V3a1 1 0 00-2 0v1H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z' },
    { id: 'routing', label: 'Agent Routing', desc: 'Real-time smart dispatching & queues', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
    { id: 'insights', label: 'Client Insights', desc: 'Predictive client metrics & risk score', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' }
];

const AIBookingSystem = () => {
    const [activeTab, setActiveTab] = useState('calendar');

    useEffect(() => {
        window.scrollTo(0, 0); // Ensures the page loads at the top
    }, []);

    return (
        <div className="font-sans text-[#151515] overflow-x-hidden selection:bg-black selection:text-white bg-[#FAF9F6] min-h-screen">

            <Navbar />

            <main className="pt-16">
                {/* Title & Showcase Section: Ivory Background with Aurora Glow */}
                <section className="relative px-8 md:px-16 pt-32 pb-32 border-b border-gray-200 bg-[#FAF9F6] overflow-hidden">
                    {/* Drifting radial gradients (Aurora effect) with futuristic tech tones */}
                    <motion.div
                        className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.5)_0%,transparent_70%)] pointer-events-none"
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
                        className="absolute bottom-[-15%] left-[-15%] w-[950px] h-[950px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.5)_0%,transparent_75%)] pointer-events-none"
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
                        className="absolute top-[20%] left-[20%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.45)_0%,transparent_70%)] pointer-events-none"
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
                            AI Booking System
                        </motion.h1>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                            <motion.p
                                className="text-[13px] font-mono text-gray-600 max-w-2xl border-l border-gray-300 pl-8 uppercase tracking-[0.2em] leading-relaxed italic"
                                {...globalRevealProps}
                            >
                                An autonomous agent-driven scheduling system built for real-time dispatch optimization and client interaction.
                            </motion.p>
                            <motion.div
                                className="text-[11px] font-mono text-gray-500 flex gap-4 uppercase tracking-widest"
                                {...globalRevealProps}
                            >
                                <span>[ EST. 2025 ]</span>
                                <span>[ ARCHIVE REF: 044 ]</span>
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
                                                AI
                                            </div>
                                            <span className="text-xs font-semibold text-white tracking-wide">Chronos AI</span>
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
                                                        ? 'bg-white/5 text-cyan-400'
                                                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                                                        }`}
                                                >
                                                    <svg
                                                        className={`w-4 h-4 transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-400'}`}
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
                                    <div className="w-6 h-6 rounded-full bg-indigo-700 flex items-center justify-center text-[10px] text-indigo-100 font-bold">
                                        CS
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-semibold text-slate-300">Chronos System</span>
                                        <span className="text-[8px] font-mono text-slate-500">SCHEDULER #044</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Main Stage Area */}
                            <div className="flex-grow flex flex-col bg-[#0e0f11] h-full overflow-hidden">
                                {/* Header Row */}
                                <div className="h-12 border-b border-white/10 px-6 flex items-center justify-between select-none">
                                    {/* Breadcrumbs */}
                                    <div className="flex items-center gap-2 text-xs font-mono">
                                        <span className="text-slate-400 hover:text-slate-200 cursor-pointer">Dispatch</span>
                                        <span className="text-slate-600">/</span>
                                        <span className="text-slate-400 hover:text-slate-200 cursor-pointer">Active Views</span>
                                        <span className="text-slate-600">/</span>
                                        <span className="text-white font-medium capitalize">
                                            {activeTab === 'calendar' ? 'smart calendar' : activeTab === 'routing' ? 'agent routing' : 'client insights'}
                                        </span>
                                    </div>

                                    {/* Micro-Navigation tabs */}
                                    <div className="hidden sm:flex items-center gap-4 text-[11px] font-medium text-slate-400 border-l border-white/10 pl-4">
                                        <span className={`hover:text-white cursor-pointer ${activeTab === 'calendar' ? 'text-white' : ''}`} onClick={() => setActiveTab('calendar')}>Calendar</span>
                                        <span className={`hover:text-white cursor-pointer ${activeTab === 'routing' ? 'text-white' : ''}`} onClick={() => setActiveTab('routing')}>Routing</span>
                                        <span className={`hover:text-white cursor-pointer ${activeTab === 'insights' ? 'text-white' : ''}`} onClick={() => setActiveTab('insights')}>Insights</span>
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
                                            {activeTab === 'calendar' && (
                                                <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white">
                                                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                                        <div className="flex items-center gap-2.5">
                                                            <span className="relative flex h-2 w-2">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                                            </span>
                                                            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Smart Calendar Data</span>
                                                        </div>
                                                        <span className="text-[10px] text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">CONFLICT SOLVED: 100%</span>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-4 my-auto">
                                                        <div className="bg-[#151619]/60 border border-white/5 p-4 rounded-xl">
                                                            <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Appointments Handled</span>
                                                            <div className="text-lg font-bold tracking-tight text-slate-200">12,482 <span className="text-[10px] text-slate-500 font-normal">units</span></div>
                                                            <div className="text-[9px] text-cyan-400 mt-2 font-bold">
                                                                <span>↑ 32.4%</span>
                                                            </div>
                                                        </div>
                                                        <div className="bg-[#151619]/60 border border-white/5 p-4 rounded-xl">
                                                            <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Automated Reschedules</span>
                                                            <div className="text-lg font-bold tracking-tight text-slate-200">1,942</div>
                                                            <div className="w-full bg-white/5 h-1 mt-2.5 rounded-full overflow-hidden">
                                                                <div className="bg-cyan-500 h-full rounded-full w-[40%]" />
                                                            </div>
                                                        </div>
                                                        <div className="bg-[#151619]/60 border border-white/5 p-4 rounded-xl">
                                                            <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Avg Handling Time</span>
                                                            <div className="text-lg font-bold tracking-tight text-slate-200">1.4s</div>
                                                            <div className="text-[9px] text-cyan-400 mt-2 font-bold">
                                                                <span>OPTIMIZED</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Mini Chart Mock */}
                                                    <div className="border border-white/5 bg-[#151619]/30 p-4 rounded-xl flex flex-col gap-3">
                                                        <div className="flex items-center justify-between text-[10px]">
                                                            <span className="text-slate-400">Booking Volume (Hourly)</span>
                                                            <span className="text-slate-500">Auto-Scaling Calendar Scheduler</span>
                                                        </div>
                                                        <div className="h-24 flex items-end gap-1.5 w-full">
                                                            {[50, 45, 60, 55, 70, 85, 95, 80, 75, 90, 100, 110, 95, 85, 105, 115, 120, 100, 90, 105, 115, 125, 130, 110, 105, 120, 135, 145].map((val, idx) => (
                                                                <div key={idx} className="flex-grow bg-white/10 hover:bg-cyan-500 transition-colors rounded-t-sm" style={{ height: `${val}%` }} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 'routing' && (
                                                <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white">
                                                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                                        <div className="flex items-center gap-2.5">
                                                            <span className="relative flex h-2 w-2">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                                            </span>
                                                            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Agent Routing & Dispatch</span>
                                                        </div>
                                                        <span className="text-[10px] text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">ACTIVE AGENTS: 120+</span>
                                                    </div>

                                                    {/* Real-time scheduling routing paths & dispatch queues */}
                                                    <div className="grid grid-cols-2 gap-6 my-auto">
                                                        {/* Real-Time Pathfinding Log (Left Column) */}
                                                        <div className="space-y-1.5">
                                                            <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-widest pb-1 border-b border-white/5">
                                                                <span>Routing Thread</span>
                                                                <span>Status</span>
                                                            </div>
                                                            {[
                                                                { path: 'Route-04: Agent Dispatch', label: 'ROUTED', color: 'text-cyan-400', width: 90, alertBg: 'bg-cyan-500/10' },
                                                                { path: 'Route-12: Traffic Avoided', label: 'REROUTED', color: 'text-cyan-400', width: 70, alertBg: 'bg-cyan-500/10' },
                                                                { path: 'Route-08: Time Conflict', label: 'RESOLVED', color: 'text-indigo-400', width: 45, alertBg: 'bg-indigo-500/10' },
                                                                { path: 'Route-22: Client SMS Alert', label: 'SENT', color: 'text-slate-300', width: 25, alertBg: 'bg-white/5' },
                                                                { path: 'Route-19: Queue Re-balanced', label: 'BALANCED', color: 'text-slate-300', width: 10, alertBg: 'bg-white/5' }
                                                            ].map((route, idx) => (
                                                                <div key={idx} className="relative flex justify-between items-center text-[10px] py-0.5 px-2 rounded hover:bg-cyan-950/20 transition-all">
                                                                    <div className={`absolute right-0 top-0 bottom-0 ${route.alertBg} rounded-r`} style={{ width: `${route.width}%` }} />
                                                                    <span className="text-slate-300 z-10 truncate">{route.path}</span>
                                                                    <span className={`${route.color} z-10 font-bold`}>{route.label}</span>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        {/* Active Agent Queues (Right Column) */}
                                                        <div className="space-y-1.5">
                                                            <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-widest pb-1 border-b border-white/5">
                                                                <span>Agent Sector</span>
                                                                <span>Load / Wait</span>
                                                            </div>
                                                            {[
                                                                { name: 'Sector 02 / Central', label: '2m wait', width: 85, color: 'text-cyan-400', alertBg: 'bg-cyan-500/10' },
                                                                { name: 'Sector 14 / West', label: '4m wait', width: 60, color: 'text-cyan-400', alertBg: 'bg-cyan-500/10' },
                                                                { name: 'Sector 09 / East', label: '12m wait', width: 30, color: 'text-indigo-400', alertBg: 'bg-indigo-500/10' },
                                                                { name: 'Sector 21 / North', label: '18m wait', width: 15, color: 'text-slate-300', alertBg: 'bg-white/5' },
                                                                { name: 'Sector 05 / South', label: '22m wait', width: 8, color: 'text-slate-300', alertBg: 'bg-white/5' }
                                                            ].map((agent, idx) => (
                                                                <div key={idx} className="relative flex justify-between items-center text-[10px] py-0.5 px-2 rounded hover:bg-white/[0.02] transition-all">
                                                                    <div className={`absolute left-0 top-0 bottom-0 ${agent.alertBg} rounded-l`} style={{ width: `${agent.width}%` }} />
                                                                    <span className="text-slate-300 z-10">{agent.name}</span>
                                                                    <span className={`${agent.color} z-10 font-bold`}>{agent.label}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between items-center text-xs border-t border-white/5 pt-3 text-slate-400">
                                                        <span>OVERFLOW DELAY: ZERO</span>
                                                        <span>OPTIMAL ROUTE RATE: 99.4%</span>
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 'insights' && (
                                                <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white">
                                                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                                        <div className="flex items-center gap-2.5">
                                                            <span className="relative flex h-2 w-2">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                                                            </span>
                                                            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Predictive Client Insights</span>
                                                        </div>
                                                        <span className="text-[10px] text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">NO-SHOW RISK: -82%</span>
                                                    </div>

                                                    {/* Client Sentiment list metrics */}
                                                    <div className="space-y-2 my-auto">
                                                        {[
                                                            { client: 'Client-8491 Sentiment', score: '98% Positive', conf: '94.2%', status: 'EXCELLENT' },
                                                            { client: 'Client-0284 No-Show Risk', score: '2% Risk Level', conf: '88.7%', status: 'STABLE' },
                                                            { client: 'Client-9931 Reschedule Alert', score: 'Auto SMS Reminded', conf: '79.1%', status: 'TRIGGERED' },
                                                            { client: 'Client-4810 Preferred Agent', score: '94% Match Score', conf: '91.4%', status: 'OPTIMAL' }
                                                        ].map((signal, idx) => (
                                                            <div key={idx} className="bg-[#151619]/60 border border-white/5 p-3 rounded-xl flex items-center justify-between text-xs hover:border-white/10 transition-all">
                                                                <div className="flex items-center gap-3">
                                                                    <span className="text-slate-500">{signal.client}</span>
                                                                    <span className="font-bold text-slate-200">{signal.score}</span>
                                                                </div>
                                                                <div className="flex items-center gap-4">
                                                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${signal.status === 'EXCELLENT' || signal.status === 'OPTIMAL' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                                                                        }`}>{signal.status}</span>
                                                                    <span className="text-slate-400 text-[11px]">CONF: {signal.conf}</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="flex justify-between items-center text-xs border-t border-white/5 pt-3 text-slate-400">
                                                        <span>ACTIVE THREADS: 256</span>
                                                        <span>INSIGHT ACCURACY: 94.8%</span>
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

                {/* Technical Split Panel: Futuristic Tech Night-Sky Background */}
                <section className="bg-[#0f1015] border-b border-white/10 bg-[radial-gradient(rgba(6,182,212,0.03)_1px,transparent_1px)] [background-size:32px_32px]">
                    <motion.div
                        className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[700px]"
                        {...globalRevealProps}
                    >
                        {/* Left Column: Narratives */}
                        <div className="md:col-span-8 p-8 md:p-16 border-r border-white/10 space-y-24">
                            <div className="space-y-6">
                                <span className="text-[11px] font-mono text-cyan-200/60 font-bold uppercase tracking-[0.4em] block">[ 01 ] THE COMPLEX CHALLENGE</span>
                                <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl italic text-white">System Requirements: Zero-Latency Routing</h2>
                                <p className="text-lg text-cyan-100/70 leading-relaxed max-w-2xl font-light">
                                    Dispatching hundreds of agents and managing calendar conflicts in real-time requires constant computing load. Legacy relational databases fell short on scale, leading to overlapping allocations, scheduling drift, and missed slots.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <span className="text-[11px] font-mono text-cyan-200/60 font-bold uppercase tracking-[0.4em] block">[ 02 ] THE CUSTOM SOLUTION</span>
                                <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl italic text-white">Event-Driven Dispatch</h2>
                                <p className="text-lg text-cyan-100/70 leading-relaxed max-w-2xl font-light">
                                    We engineered an event-driven system built on WebSockets and Redis Pub/Sub. When a booking or dispatch is triggered, a custom route-finding algorithm calculates agent proximity, historical completion speed, and calendar conflicts in milliseconds.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <span className="text-[11px] font-mono text-cyan-200/60 font-bold uppercase tracking-[0.4em] block">[ 03 ] ENGINEERING RESULTS</span>
                                <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl italic text-white">95% No-Show Reduction</h2>
                                <p className="text-lg text-cyan-100/70 leading-relaxed max-w-2xl font-light">
                                    Our automated client notification flows and AI scheduling agents reduced no-shows by 95%. Fleet routing efficiency surged by 40%, matching clients with their preferred agents instantly and cutting average handling times down to 1.4 seconds.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Metadata */}
                        <div className="md:col-span-4 bg-black/20 p-8 md:p-16 space-y-16">
                            <div className="border-b border-white/10 pb-10">
                                <span className="text-[11px] font-mono text-cyan-200/60 uppercase block mb-4 tracking-[0.2em]">CLIENT</span>
                                <span className="font-['Cormorant_Garamond',serif] text-3xl text-white italic">Chronos Logistics</span>
                            </div>

                            <div className="border-b border-white/10 pb-10">
                                <span className="text-[11px] font-mono text-cyan-200/60 uppercase block mb-4 tracking-[0.2em]">ROLE</span>
                                <div className="space-y-2">
                                    <span className="font-['Cormorant_Garamond',serif] text-2xl text-white block italic">AI & Systems Architecture</span>
                                    <span className="font-['Cormorant_Garamond',serif] text-2xl text-white block italic">WebSocket Integration</span>
                                    <span className="font-['Cormorant_Garamond',serif] text-2xl text-white block italic">Algorithm Design</span>
                                </div>
                            </div>

                            <div>
                                <span className="text-[11px] font-mono text-cyan-200/60 uppercase block mb-6 tracking-[0.2em]">TECH STACK</span>
                                <div className="flex flex-wrap gap-3">
                                    {['NODE.JS', 'WEBSOCKETS', 'REDIS', 'POSTGRESQL', 'TAILWIND CSS', 'OPENAI APIS'].map((tech) => (
                                        <span key={tech} className="px-4 py-1.5 border border-white/20 text-cyan-100/80 font-mono text-[10px] uppercase tracking-widest">
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
                            <h3 className="font-['Cormorant_Garamond',serif] text-5xl md:text-7xl italic text-white whitespace-nowrap">Agent Architecture</h3>
                            <div className="h-px bg-white/10 w-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {/* Feature 1 */}
                            <div className="group">
                                <div className="mb-10 overflow-hidden border border-white/10 relative">
                                    <img alt="Smart Calendar" className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR_jXsHyQNEUqZ9B_u50oU5oviZqEYA7jv2exVBux546eDADEoFTwtyuHqHf2UIZQkB4g2C3up7x-g8YnB80QsKye8vKfDKyYjIDj7MM4x5VuApcRF4Y854iGZVfBPvwXSrc4_UV7wLrUsSxTOsgXohpc4r4elCSZDRKvyFYkeVKJpufzvZMoi8KtLZmLGIqtMKN1mIRUgomXQ7aeSeNwQFrxxLM4_h4J4u6O077TXebeeG7WzP2O3WY0Wn48ITm4OKyMjFkRWYrAW" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-l border-white/20 pl-6">
                                    <div>
                                        <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em] block mb-2">01 / SCHEDULING</span>
                                        <h4 className="font-['Cormorant_Garamond',serif] text-3xl italic text-white">Smart Calendar</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="group">
                                <div className="mb-10 overflow-hidden border border-white/10 relative">
                                    <img alt="Dispatch Engine" className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6g4AP617N_r3pjPw2sE21ArNZNFdm1i6qTA9w_CxYSLHwCU9A0fmLs1-svz9ZoIc0k9iAO3HrG4C7aT4VNrr0Rkz_HRfVUfO4jIXxOPdeg15AAzKj6qiGyy7xGKrlenRkosp4I0mK67Ck9fpm2oCLJW_GHPjdpgWXaLvwwCwMOQBslDnshLf5o1EVMQga2NpTEEwVAc0Fms3-6ANKhdXroLNpo5QDxLY-GGtnc-muzYhnDEB7-D-0owNmr6X9BETkyPE9EAvS3h9J" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-l border-white/20 pl-6">
                                    <div>
                                        <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em] block mb-2">02 / ROUTING</span>
                                        <h4 className="font-['Cormorant_Garamond',serif] text-3xl italic text-white">Dispatch Engine</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="group">
                                <div className="mb-10 overflow-hidden border border-white/10 relative">
                                    <img alt="Client Analytics" className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Vlse04m9Cr_HHxbFMqSaKPkTVx3dpytRQLODuUJmtems15DVb4RVnZRYEyZ98kHDJX2qVd4qGEsougfeiDZA5jyx9nAR4NhWZqGhKg_JJQ9bQEEdrrkTuuzojrpBe-cP0vwN71NonSJPrTcFPiPQtxYSkYBrj8QoUxdImGUBhFR0DO4XN4alkgu6ZQtwPGXm4qZGLDwMCDK1O4siz95yUWXJTCjpFHujzpfuXFMTFCqUSM5cOwjU34sBOjtM1yfr6f09AZxbZxoE" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-l border-white/20 pl-6">
                                    <div>
                                        <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em] block mb-2">03 / INSIGHTS</span>
                                        <h4 className="font-['Cormorant_Garamond',serif] text-3xl italic text-white">Client Analytics</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="group">
                                <div className="mb-10 overflow-hidden border border-white/10 relative">
                                    <img alt="Alert Automations" className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFFMV2Ot1qu1wEYHc0gGAQajdlDX_SSE6ySfTVdWPswhEwz7dx2ajEFtz9q6Xa2nOC_mYpMN9Teaisp4rMcu64iNrcw9CA8hX0ceFLPtkjstNB6e-PcVf2o0WJ3niDpdzc1EhSfv2uVYOKJwVfKvobdjr9yKlF9dAUAuFSVrHlXeEcGRkfNViVLGNku0Jhqm0Vf145sIyFsO_eFfnCVDcjJlg_UWfULv0VQ9f79AGaqyOcZQXdC584gB1Hk5eqyGUdKwmBPw2dS2fx" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-l border-white/20 pl-6">
                                    <div>
                                        <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em] block mb-2">04 / NOTIFICATIONS</span>
                                        <h4 className="font-['Cormorant_Garamond',serif] text-3xl italic text-white">Alert Automations</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </section>
            </main>

            <RelatedProjects currentProject="booking" />
            <Footer />
        </div>
    );
};

export default AIBookingSystem;
