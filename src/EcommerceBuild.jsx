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

const modules = [
    { id: 'workspace', label: 'Workspace', icon: 'home', header: 'My Workspace' },
    { id: 'personnel', label: 'Personnel', icon: 'group', header: 'Personnel' },
    { id: 'finance', label: 'Finance & Ops', icon: 'payments', header: 'Finance & Ops' },
    { id: 'it', label: 'IT Management', icon: 'terminal', header: 'IT Management' },
    { id: 'inventory', label: 'Inventory & Assets', icon: 'inventory_2', header: 'Inventory & Assets' },
    { id: 'bpo', label: 'BPO Performance', icon: 'leaderboard', header: 'BPO Performance' },
    { id: 'systems', label: 'System & Tools', icon: 'dns', header: 'System & Tools' }
];

const moduleSubTabs = {
    workspace: ['Dashboard', 'My Leaves', 'My Payslips', 'My IT Tickets', 'My Profile (CV)'],
    personnel: ['Staff Database', 'Hierarchy Blueprint', 'Recruitment', 'Offboarding'],
    finance: ['Time & Attendance', 'Payroll Engine', 'Finance & Ledger'],
    it: ['Service Desk', 'SLA Reports'],
    inventory: ['Dashboard', 'Active Assets', 'Consumables'],
    bpo: ['Live Leaderboard'],
    systems: ['HR Utilities']
};

const EcommerceBuild = () => {
    const [activeModule, setActiveModule] = useState('workspace');
    const [activeSubTab, setActiveSubTab] = useState('Dashboard');

    useEffect(() => {
        window.scrollTo(0, 0); // Ensures the page loads at the top
    }, []);

    const handleModuleChange = (moduleId) => {
        setActiveModule(moduleId);
        if (moduleSubTabs[moduleId] && moduleSubTabs[moduleId].length > 0) {
            setActiveSubTab(moduleSubTabs[moduleId][0]);
        }
    };

    // Helper renderings
    const renderCommandCenter = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-6">
                {/* Hero Banner */}
                <div className="w-full bg-gradient-to-r from-blue-950/40 via-slate-900/40 to-blue-900/30 border border-blue-500/10 p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold text-white tracking-tight font-sans">Command Center</h2>
                        <p className="text-xs text-slate-400 mt-2 font-sans">Real-time overview of HRIS Demo operations, BPO compliance, and global hardware intelligence.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* SYSTEMS ONLINE Badge */}
                        <div className="flex items-center gap-2 bg-[#0e1322] border border-emerald-500/20 px-3 py-1.5 rounded-full text-[10px] font-mono text-emerald-400 uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            SYSTEMS ONLINE
                        </div>
                        {/* Date Badge */}
                        <div className="flex items-center gap-1.5 bg-[#0e1322] border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-mono text-slate-300">
                            <span className="material-symbols-outlined text-[12px]">calendar_today</span>
                            Tuesday, 23 June 2026
                        </div>
                    </div>
                </div>

                {/* CORE INFRASTRUCTURE Section */}
                <div className="flex-grow flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-3 block font-sans">CORE INFRASTRUCTURE</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Card 1: Client Operations */}
                        <div className="bg-[#121826]/60 border border-white/5 hover:border-blue-500/30 p-5 rounded-xl text-left transition-all duration-300 group hover:-translate-y-0.5 flex flex-col justify-between h-40">
                            <div>
                                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">business_center</span>
                                </div>
                                <h3 className="font-bold text-sm text-slate-200 mb-1 font-sans">Client Operations</h3>
                                <p className="text-[11px] text-slate-400 font-sans leading-relaxed">Manage campaigns, billing accounts, and partner permissions.</p>
                            </div>
                            <div className="text-[9px] text-slate-500 font-mono mt-2 flex items-center justify-between">
                                <span>CAMPAIGNS: 12</span>
                                <span className="text-emerald-400 font-semibold">ACTIVE</span>
                            </div>
                        </div>

                        {/* Card 2: Shift Library */}
                        <div className="bg-[#121826]/60 border border-white/5 hover:border-blue-500/30 p-5 rounded-xl text-left transition-all duration-300 group hover:-translate-y-0.5 flex flex-col justify-between h-40">
                            <div>
                                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                                </div>
                                <h3 className="font-bold text-sm text-slate-200 mb-1 font-sans">Shift Library</h3>
                                <p className="text-[11px] text-slate-400 font-sans leading-relaxed">Define operational hours, dynamic schedules, and rotation schemas.</p>
                            </div>
                            <div className="text-[9px] text-slate-500 font-mono mt-2 flex items-center justify-between">
                                <span>TEMPLATES: 8</span>
                                <span className="text-slate-400">UPDATED</span>
                            </div>
                        </div>

                        {/* Card 3: Statutory Holidays */}
                        <div className="bg-[#121826]/60 border border-white/5 hover:border-blue-500/30 p-5 rounded-xl text-left transition-all duration-300 group hover:-translate-y-0.5 flex flex-col justify-between h-40">
                            <div>
                                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">event</span>
                                </div>
                                <h3 className="font-bold text-sm text-slate-200 mb-1 font-sans">Statutory Holidays</h3>
                                <p className="text-[11px] text-slate-400 font-sans leading-relaxed">Configure calendar exceptions, religious observances, and payment overrides.</p>
                            </div>
                            <div className="text-[9px] text-slate-500 font-mono mt-2 flex items-center justify-between">
                                <span>EXCEPTIONS: 14</span>
                                <span className="text-blue-400">SYNCED</span>
                            </div>
                        </div>

                        {/* Card 4: Global Settings */}
                        <div className="bg-[#121826]/60 border border-white/5 hover:border-blue-500/30 p-5 rounded-xl text-left transition-all duration-300 group hover:-translate-y-0.5 flex flex-col justify-between h-40">
                            <div>
                                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">settings_applications</span>
                                </div>
                                <h3 className="font-bold text-sm text-slate-200 mb-1 font-sans">Global Settings</h3>
                                <p className="text-[11px] text-slate-400 font-sans leading-relaxed">EPF/ETF rates, currency parameters, and compliance rules.</p>
                            </div>
                            <div className="text-[9px] text-slate-500 font-mono mt-2 flex items-center justify-between">
                                <span>EPF: 12% / ETF: 3%</span>
                                <span className="text-emerald-400 font-semibold">SECURE</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-auto">
                    {/* Total Active Staff */}
                    <div className="bg-[#121826]/30 border border-white/5 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <span className="text-[9px] text-slate-500 uppercase tracking-wider block mb-1">TOTAL ACTIVE STAFF</span>
                            <span className="text-lg font-bold text-slate-100 font-sans">14,820</span>
                        </div>
                        <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">↑ 1.2%</span>
                    </div>

                    {/* Pending Leaves */}
                    <div className="bg-[#121826]/30 border border-white/5 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <span className="text-[9px] text-slate-500 uppercase tracking-wider block mb-1">PENDING LEAVES</span>
                            <span className="text-lg font-bold text-slate-100 font-sans">42 Requests</span>
                        </div>
                        <span className="text-[10px] text-amber-400 font-bold bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">12 Urgent</span>
                    </div>

                    {/* Active Clients */}
                    <div className="bg-[#121826]/30 border border-white/5 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <span className="text-[9px] text-slate-500 uppercase tracking-wider block mb-1">ACTIVE CLIENTS</span>
                            <span className="text-lg font-bold text-slate-100 font-sans">28 Accounts</span>
                        </div>
                        <span className="text-[10px] text-blue-400 font-bold bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">2 New</span>
                    </div>

                    {/* The Live Floor */}
                    <div className="bg-[#121826]/30 border border-white/5 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <span className="text-[9px] text-slate-500 uppercase tracking-wider block mb-1">THE LIVE FLOOR</span>
                            <span className="text-lg font-bold text-slate-100 font-sans">94.8% SLA</span>
                        </div>
                        <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">Optimal</span>
                    </div>
                </div>
            </div>
        );
    };

    const renderStaffDatabase = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="border-b border-white/5 pb-3 flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">Personnel Records</span>
                    <button className="text-[10px] text-blue-400 bg-blue-600/10 border border-blue-500/20 px-2 py-1 rounded hover:bg-blue-600 hover:text-white transition-colors font-sans">+ Add Employee</button>
                </div>
                <div className="bg-[#121826]/30 border border-white/5 rounded-xl overflow-hidden my-auto max-h-[300px] overflow-y-auto">
                    <table className="w-full text-left border-collapse text-xs">
                        <thead>
                            <tr className="bg-[#121826]/80 text-slate-400 border-b border-white/10">
                                <th className="p-3">Name</th>
                                <th className="p-3">Role</th>
                                <th className="p-3">Department</th>
                                <th className="p-3">Location</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                { name: 'Sarah Connor', role: 'Support Supervisor', dept: 'BPO Operations', loc: 'Offshore Rail A', status: 'On Floor', color: 'text-emerald-400' },
                                { name: 'John Doe', role: 'Senior Systems Engineer', dept: 'IT Infrastructure', loc: 'On-site HQ', status: 'Active', color: 'text-emerald-400' },
                                { name: 'Miles Dyson', role: 'Lead Architect', dept: 'R&D Systems', loc: 'Remote (US)', status: 'On Leave', color: 'text-amber-400' },
                                { name: 'Marcus Wright', role: 'Compliance Officer', dept: 'BPO Quality', loc: 'Offshore Rail B', status: 'Active', color: 'text-emerald-400' },
                                { name: 'Ellen Ripley', role: 'Procurement Specialist', dept: 'Inventory Control', loc: 'On-site HQ', status: 'Inactive', color: 'text-rose-400' }
                            ].map((emp, idx) => (
                                <tr key={idx} className="hover:bg-white/[0.02]">
                                    <td className="p-3 font-sans font-medium text-slate-200">{emp.name}</td>
                                    <td className="p-3 text-slate-400">{emp.role}</td>
                                    <td className="p-3 text-slate-400">{emp.dept}</td>
                                    <td className="p-3 text-slate-400">{emp.loc}</td>
                                    <td className="p-3"><span className={`font-bold ${emp.color}`}>{emp.status}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-500">
                    <span>TOTAL INDEXED: 14,820 EMPLOYEES</span>
                    <span>PAGINATION: 1 - 5 OF 2,964</span>
                </div>
            </div>
        );
    };

    const renderHierarchyBlueprint = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="border-b border-white/5 pb-3 flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">Organizational Hierarchy</span>
                    <span className="text-[10px] text-slate-400">Blueprint Active</span>
                </div>
                <div className="my-auto flex flex-col items-center justify-center p-4 bg-[#121826]/30 border border-white/5 rounded-xl gap-4">
                    <div className="bg-blue-600/10 border border-blue-500/20 px-4 py-2 rounded-lg text-center text-xs w-48 shadow-sm">
                        <div className="font-bold text-slate-200 font-sans">President & CEO</div>
                        <div className="text-[10px] text-slate-500">Global Executive Office</div>
                    </div>
                    <div className="w-0.5 h-6 bg-white/10" />
                    <div className="flex gap-12 justify-center w-full">
                        <div className="flex flex-col items-center">
                            <div className="bg-[#121826]/60 border border-white/10 px-4 py-2 rounded-lg text-center text-xs w-44">
                                <div className="font-bold text-slate-300 font-sans">VP Engineering</div>
                                <div className="text-[9px] text-slate-500">Systems & Infrastructure</div>
                            </div>
                            <div className="w-0.5 h-4 bg-white/10" />
                            <div className="bg-[#121826]/40 border border-white/5 px-3 py-1.5 rounded-lg text-center text-[11px] w-40 text-slate-400">
                                Engineering Managers
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-[#121826]/60 border border-white/10 px-4 py-2 rounded-lg text-center text-xs w-44">
                                <div className="font-bold text-slate-300 font-sans">VP Operations</div>
                                <div className="text-[9px] text-slate-500">BPO Campaigns & Personnel</div>
                            </div>
                            <div className="w-0.5 h-4 bg-white/10" />
                            <div className="bg-[#121826]/40 border border-white/5 px-3 py-1.5 rounded-lg text-center text-[11px] w-40 text-slate-400">
                                Campaign Directors
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-[10px] text-slate-500 text-center">
                    Interactive node rendering enabled. Click node to filter workspace database.
                </div>
            </div>
        );
    };

    const renderRecruitment = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="border-b border-white/5 pb-3 flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">Candidate Pipeline</span>
                    <button className="text-[10px] text-blue-400 bg-blue-600/10 border border-blue-500/20 px-2 py-1 rounded hover:bg-blue-600 hover:text-white transition-colors font-sans">+ Create Requisition</button>
                </div>
                <div className="grid grid-cols-4 gap-3 my-auto">
                    {[
                        { col: 'Applied', count: 184, candidates: ['Luke S. (Lead Dev)', 'Leia O. (Manager)'] },
                        { col: 'Interviewing', count: 24, candidates: ['Han S. (SysAdmin)', 'Lando C. (Support)'] },
                        { col: 'Offered', count: 6, candidates: ['Chewbacca (Co-Pilot)'] },
                        { col: 'Hired', count: 32, candidates: ['Wedge A. (Platform Eng)'] }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-[#121826]/40 border border-white/5 p-3 rounded-xl flex flex-col gap-3 min-h-[180px]">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2 text-[11px] font-sans font-bold">
                                <span className="text-slate-300">{item.col}</span>
                                <span className="text-blue-400 font-mono">{item.count}</span>
                            </div>
                            <div className="flex-grow space-y-2 overflow-y-auto">
                                {item.candidates.map((cand, cIdx) => (
                                    <div key={cIdx} className="bg-[#121826]/80 border border-white/5 p-2 rounded text-[10px] font-sans text-slate-300">
                                        {cand}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-[10px] text-slate-500 flex justify-between">
                    <span>ACTIVE POSITIONS: 14 REQUISITIONS</span>
                    <span>TIME TO HIRE AVG: 18.4 DAYS</span>
                </div>
            </div>
        );
    };

    const renderOffboarding = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="border-b border-white/5 pb-3 flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">Offboarding Lifecycle</span>
                    <span className="text-[10px] text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded">2 PENDING DEPARTURES</span>
                </div>
                <div className="my-auto space-y-2.5">
                    {[
                        { name: 'Ellen Ripley (Inventory)', date: 'June 28, 2026', steps: 'IT Access: Revoked | Assets: Returned | Pay: Pending' },
                        { name: 'Roy Batty (QA Specialist)', date: 'June 24, 2026', steps: 'IT Access: Active | Assets: Pending Return | Pay: Synced' }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-[#121826]/60 border border-white/5 p-4 rounded-xl flex flex-col gap-2 hover:border-white/10 transition-all">
                            <div className="flex justify-between items-center text-xs">
                                <span className="font-bold text-slate-200 font-sans">{item.name}</span>
                                <span className="text-slate-500 text-[10px]">Exit Date: {item.date}</span>
                            </div>
                            <p className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">{item.steps}</p>
                        </div>
                    ))}
                </div>
                <div className="text-[10px] text-slate-500 text-center">
                    Ensure physical hardware retrieval and active directory block before final payroll sign-off.
                </div>
            </div>
        );
    };

    const renderTimeAttendance = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="border-b border-white/5 pb-3 flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">Time & Attendance</span>
                    <span className="text-[10px] text-slate-400">Live Attendance Active</span>
                </div>
                <div className="grid grid-cols-3 gap-4 my-auto">
                    <div className="bg-[#121826]/60 border border-white/5 p-4 rounded-xl">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">On-Time Punch Rate</span>
                        <div className="text-sm font-bold text-slate-200 font-sans">98.4%</div>
                        <div className="text-[9px] text-emerald-400 mt-2 font-bold font-sans">↑ 0.8%</div>
                    </div>
                    <div className="bg-[#121826]/60 border border-white/5 p-4 rounded-xl">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Late Arrivals Today</span>
                        <div className="text-sm font-bold text-slate-200 font-sans">8 Staff</div>
                        <div className="text-[9px] text-slate-500 mt-2">All notifications sent</div>
                    </div>
                    <div className="bg-[#121826]/60 border border-white/5 p-4 rounded-xl">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Absentee Exceptions</span>
                        <div className="text-sm font-bold text-slate-200 font-sans">4 Requests</div>
                        <div className="text-[9px] text-blue-400 mt-2 font-bold font-sans">Medical Verified</div>
                    </div>
                </div>
                <div className="border border-white/5 bg-[#121826]/30 p-4 rounded-xl flex flex-col gap-2">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">Shift Synchronization Logs</span>
                    <div className="text-[11px] text-slate-300 font-mono space-y-1">
                        <div>[18:24:02] Night shift scheduling template validated for BPO Rail B</div>
                        <div>[18:25:30] Auto-punch process synchronized for 4,821 active accounts</div>
                    </div>
                </div>
            </div>
        );
    };

    const renderPayrollEngine = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="border-b border-white/5 pb-3 flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">Payroll Engine</span>
                    <button className="text-[10px] text-emerald-400 bg-emerald-600/10 border border-emerald-500/20 px-2 py-1 rounded hover:bg-emerald-600 hover:text-white transition-colors font-sans">Execute Payroll Run</button>
                </div>
                <div className="bg-[#121826]/30 border border-white/5 rounded-xl overflow-hidden my-auto max-h-[300px] overflow-y-auto">
                    <table className="w-full text-left border-collapse text-xs">
                        <thead>
                            <tr className="bg-[#121826]/80 text-slate-400 border-b border-white/10">
                                <th className="p-3">Campaign Group</th>
                                <th className="p-3">Gross Pay</th>
                                <th className="p-3">Deductions</th>
                                <th className="p-3">Net Pay</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                { group: 'IT Core Infrastructure', gross: '$145,200.00', ded: '$32,100.00', net: '$113,100.00', status: 'Pending Review', color: 'text-amber-400' },
                                { group: 'BPO Campaign Alpha', gross: '$420,800.00', ded: '$95,400.00', net: '$325,400.00', status: 'Approved', color: 'text-emerald-400' },
                                { group: 'BPO Campaign Beta', gross: '$390,400.00', ded: '$88,200.00', net: '$302,200.00', status: 'Approved', color: 'text-emerald-400' },
                                { group: 'Operations Support Services', gross: '$84,000.00', ded: '$19,000.00', net: '$65,000.00', status: 'Pending Review', color: 'text-amber-400' }
                            ].map((run, idx) => (
                                <tr key={idx} className="hover:bg-white/[0.02]">
                                    <td className="p-3 font-sans font-medium text-slate-200">{run.group}</td>
                                    <td className="p-3 text-slate-400">{run.gross}</td>
                                    <td className="p-3 text-slate-400">{run.ded}</td>
                                    <td className="p-3 text-emerald-400 font-bold">{run.net}</td>
                                    <td className="p-3"><span className={`font-bold ${run.color}`}>{run.status}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-500">
                    <span>PAYROLL CYCLE: MONTH END (JUNE 2026)</span>
                    <span>DISBURSEMENT DATE: JUNE 28, 2026</span>
                </div>
            </div>
        );
    };

    const renderFinanceLedger = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="border-b border-white/5 pb-3 flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">Finance & Ledger</span>
                    <span className="text-[10px] text-slate-400 font-mono">Synced YTD</span>
                </div>
                <div className="grid grid-cols-2 gap-6 my-auto">
                    <div className="bg-[#121826]/60 border border-white/5 p-4 rounded-xl">
                        <span className="text-[9px] text-slate-500 uppercase block mb-1">YEAR-TO-DATE WITHHOLDINGS</span>
                        <div className="text-xl font-bold text-slate-200 font-sans">$248,500.00</div>
                        <div className="text-[9px] text-emerald-400 mt-2 font-bold font-sans">EPF/ETF SECURED</div>
                    </div>
                    <div className="bg-[#121826]/60 border border-white/5 p-4 rounded-xl">
                        <span className="text-[9px] text-slate-500 uppercase block mb-1">TOTAL CAMPAIGN EXPENSES</span>
                        <div className="text-xl font-bold text-slate-200 font-sans">$1,240,800.00</div>
                        <div className="text-[9px] text-slate-400 mt-2">Billed directly to partners</div>
                    </div>
                </div>
                <div className="text-[10px] text-slate-500 flex justify-between border-t border-white/5 pt-3">
                    <span>AUDIT INDEX REF: FIN-2026-Q2</span>
                    <span>LAST MODIFIED: JUN 20, 2026</span>
                </div>
            </div>
        );
    };

    const renderServiceDesk = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="border-b border-white/5 pb-3 flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">Service Desk</span>
                    <button className="text-[10px] text-blue-400 bg-blue-600/10 border border-blue-500/20 px-2 py-1 rounded hover:bg-blue-600 hover:text-white transition-colors font-sans">+ Open New Ticket</button>
                </div>
                <div className="bg-[#121826]/30 border border-white/5 rounded-xl overflow-hidden my-auto max-h-[300px] overflow-y-auto">
                    <table className="w-full text-left border-collapse text-xs">
                        <thead>
                            <tr className="bg-[#121826]/80 text-slate-400 border-b border-white/10">
                                <th className="p-3">Ticket ID</th>
                                <th className="p-3">User</th>
                                <th className="p-3">Category</th>
                                <th className="p-3">Description</th>
                                <th className="p-3">Priority</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                { id: 'TIC-88392', user: 'Miles Dyson', cat: 'Hardware Request', desc: 'Request spare monitor charger replacement', pri: 'Medium', status: 'In Progress', color: 'text-blue-400' },
                                { id: 'TIC-88120', user: 'John Doe', cat: 'Security Access', desc: 'VPN keys configuration request for staging', pri: 'High', status: 'Resolved', color: 'text-emerald-400' },
                                { id: 'TIC-87941', user: 'Sarah Connor', cat: 'Active Directory', desc: 'Reset email sync logs and credentials lock', pri: 'Critical', status: 'Pending Review', color: 'text-amber-400' }
                            ].map((tic, idx) => (
                                <tr key={idx} className="hover:bg-white/[0.02]">
                                    <td className="p-3 font-bold text-slate-200">{tic.id}</td>
                                    <td className="p-3 text-slate-400">{tic.user}</td>
                                    <td className="p-3 text-slate-400">{tic.cat}</td>
                                    <td className="p-3 text-slate-400 truncate max-w-[120px]">{tic.desc}</td>
                                    <td className="p-3 font-semibold text-slate-300">{tic.pri}</td>
                                    <td className="p-3"><span className={`font-bold ${tic.color}`}>{tic.status}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-500">
                    <span>RESOLVED TICKETS: 14</span>
                    <span>AVG RESPONSE TIME: 42 MINUTES</span>
                </div>
            </div>
        );
    };

    const renderSLAReports = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="border-b border-white/5 pb-3 flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">SLA Reports</span>
                    <span className="text-[10px] text-slate-400">Daily Sync Active</span>
                </div>
                <div className="grid grid-cols-3 gap-4 my-auto">
                    <div className="bg-[#121826]/60 border border-white/5 p-4 rounded-xl">
                        <span className="text-[9px] text-slate-500 uppercase tracking-wider block mb-1">Average Response SLA</span>
                        <div className="text-sm font-bold text-slate-200 font-sans">99.8% Met</div>
                        <div className="text-[9px] text-emerald-400 mt-2 font-bold font-sans">Perfect compliance</div>
                    </div>
                    <div className="bg-[#121826]/60 border border-white/5 p-4 rounded-xl">
                        <span className="text-[9px] text-slate-500 uppercase tracking-wider block mb-1">Mean Time to Resolve</span>
                        <div className="text-sm font-bold text-slate-200 font-sans">1.8 Hours</div>
                        <div className="text-[9px] text-slate-500 mt-2">Optimal target &lt; 4h</div>
                    </div>
                    <div className="bg-[#121826]/60 border border-white/5 p-4 rounded-xl">
                        <span className="text-[9px] text-slate-500 uppercase tracking-wider block mb-1">Active SLA Violations</span>
                        <div className="text-sm font-bold text-slate-200 font-sans">0 Events</div>
                        <div className="text-[9px] text-emerald-400 mt-2 font-bold font-sans">Perfect Record</div>
                    </div>
                </div>
                <div className="text-[10px] text-slate-500 text-center border-t border-white/5 pt-3">
                    SLA compliance scores are refreshed hourly against Zendesk and Active Directory logs.
                </div>
            </div>
        );
    };

    const renderInventoryDashboard = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="border-b border-white/5 pb-3 flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">Inventory Dashboard</span>
                    <span className="text-[10px] text-slate-400 font-mono">SKUs Monitored: 4,820</span>
                </div>
                <div className="grid grid-cols-3 gap-4 my-auto">
                    <div className="bg-[#121826]/60 border border-white/5 p-4 rounded-xl">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Total Cataloged Devices</span>
                        <div className="text-sm font-bold text-slate-200 font-sans">1,280 Units</div>
                        <div className="text-[9px] text-slate-400 mt-2">All assets barcoded</div>
                    </div>
                    <div className="bg-[#121826]/60 border border-white/5 p-4 rounded-xl">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Allocated to Staff</span>
                        <div className="text-sm font-bold text-slate-200 font-sans">1,120 Units</div>
                        <div className="w-full bg-white/5 h-1 mt-2.5 rounded-full overflow-hidden">
                            <div className="bg-blue-500 h-full rounded-full w-[87.5%]" />
                        </div>
                    </div>
                    <div className="bg-[#121826]/60 border border-white/5 p-4 rounded-xl">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">In Storage / Buffer</span>
                        <div className="text-sm font-bold text-slate-200 font-sans">160 Units</div>
                        <div className="text-[9px] text-amber-400 mt-2 font-bold font-sans">Low stock on laptops</div>
                    </div>
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-500 border-t border-white/5 pt-3">
                    <span>BUFFER LEVEL: 12.5%</span>
                    <span>DEPRECIATION TRACKING: ON</span>
                </div>
            </div>
        );
    };

    const renderActiveAssets = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="border-b border-white/5 pb-3 flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">Active Assets</span>
                    <button className="text-[10px] text-blue-400 bg-blue-600/10 border border-blue-500/20 px-2 py-1 rounded hover:bg-blue-600 hover:text-white transition-colors font-sans">+ Check In/Out</button>
                </div>
                <div className="bg-[#121826]/30 border border-white/5 rounded-xl overflow-hidden my-auto max-h-[300px] overflow-y-auto">
                    <table className="w-full text-left border-collapse text-xs">
                        <thead>
                            <tr className="bg-[#121826]/80 text-slate-400 border-b border-white/10">
                                <th className="p-3">Asset ID</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">User</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                { id: 'AST-9902', name: 'MacBook Pro 16" (M3 Max)', user: 'Miles Dyson', status: 'Allocated', color: 'text-emerald-400' },
                                { id: 'AST-4820', name: 'ThinkPad P16 Gen 2', user: 'John Doe', status: 'Allocated', color: 'text-emerald-400' },
                                { id: 'AST-1082', name: 'Dell UltraSharp 38"', user: 'Sarah Connor', status: 'In Storage', color: 'text-slate-400' },
                                { id: 'AST-5821', name: 'MacBook Air 15" (M2)', user: 'Ellen Ripley', status: 'In Repair', color: 'text-rose-400' }
                            ].map((asset, idx) => (
                                <tr key={idx} className="hover:bg-white/[0.02]">
                                    <td className="p-3 font-bold text-slate-200">{asset.id}</td>
                                    <td className="p-3 text-slate-400">{asset.name}</td>
                                    <td className="p-3 text-slate-400">{asset.user}</td>
                                    <td className="p-3"><span className={`font-bold ${asset.color}`}>{asset.status}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="text-[10px] text-slate-500 text-center">
                    All changes must be signed off by both the employee and an IT representative.
                </div>
            </div>
        );
    };

    const renderConsumables = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="border-b border-white/5 pb-3 flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">Consumables</span>
                    <span className="text-[10px] text-slate-400">Inventory Alert Active</span>
                </div>
                <div className="space-y-2 my-auto">
                    {[
                        { item: 'USB-C Charging Cables (2m)', level: '4 units remaining', alert: 'CRITICAL LOW', color: 'text-rose-400 bg-rose-500/10 border border-rose-500/20', width: 95 },
                        { item: 'HDMI Display Cables (1.8m)', level: '12 units remaining', alert: 'LOW STOCK', color: 'text-amber-400 bg-amber-500/10 border border-amber-500/20', width: 75 },
                        { item: 'Wireless Keyboard & Mouse Sets', level: '45 units remaining', alert: 'HEALTHY', color: 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20', width: 20 }
                    ].map((con, idx) => (
                        <div key={idx} className="bg-[#121826]/60 border border-white/5 p-3 rounded-xl flex items-center justify-between text-xs hover:border-white/10 transition-all relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 bg-white/[0.02] rounded-l" style={{ width: `${con.width}%` }} />
                            <span className="text-slate-300 font-sans font-semibold z-10">{con.item}</span>
                            <div className="flex items-center gap-4 z-10">
                                <span className="text-slate-400">{con.level}</span>
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${con.color}`}>{con.alert}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-[10px] text-slate-500 flex justify-between border-t border-white/5 pt-3">
                    <span>AUTOMATIC REORDER SYSTEM: ON</span>
                    <span>PREFERRED VENDOR: DIGIKEY CORP</span>
                </div>
            </div>
        );
    };

    const renderLiveLeaderboard = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="border-b border-white/5 pb-3 flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">Live Leaderboard</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">FLOOR SLA: 98.2%</span>
                </div>
                <div className="bg-[#121826]/30 border border-white/5 rounded-xl overflow-hidden my-auto max-h-[300px] overflow-y-auto">
                    <table className="w-full text-left border-collapse text-xs">
                        <thead>
                            <tr className="bg-[#121826]/80 text-slate-400 border-b border-white/10">
                                <th className="p-3">Rank</th>
                                <th className="p-3">Team Campaign</th>
                                <th className="p-3">Team Lead</th>
                                <th className="p-3">Active Agents</th>
                                <th className="p-3">Quality Score</th>
                                <th className="p-3">Target Met %</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                { rank: '#1', campaign: 'Amazon Prime Support', lead: 'Sarah Connor', agents: 120, quality: '98.5%', target: '104.2%', color: 'text-emerald-400' },
                                { rank: '#2', campaign: 'Google Workspace Help', lead: 'Marcus Wright', agents: 80, quality: '97.8%', target: '100.8%', color: 'text-emerald-400' },
                                { rank: '#3', campaign: 'Apple Care Tier 1', lead: 'Ellen Ripley', agents: 110, quality: '96.4%', target: '98.5%', color: 'text-blue-400' },
                                { rank: '#4', campaign: 'Microsoft Azure Support', lead: 'John Doe', agents: 45, quality: '95.2%', target: '94.6%', color: 'text-amber-400' }
                            ].map((item, idx) => (
                                <tr key={idx} className="hover:bg-white/[0.02]">
                                    <td className="p-3 font-bold text-slate-300">{item.rank}</td>
                                    <td className="p-3 font-sans font-medium text-slate-200">{item.campaign}</td>
                                    <td className="p-3 text-slate-400">{item.lead}</td>
                                    <td className="p-3 text-slate-400">{item.agents}</td>
                                    <td className="p-3 text-slate-400">{item.quality}</td>
                                    <td className="p-3"><span className={`font-bold ${item.color}`}>{item.target}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="text-[10px] text-slate-500 text-center">
                    Refreshed every 5 minutes from campaign dialer APIs and call recorder logs.
                </div>
            </div>
        );
    };

    const renderHRUtilities = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="border-b border-white/5 pb-3 flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">HR Utilities</span>
                    <span className="text-[10px] text-slate-400 font-mono">admin@hris.local</span>
                </div>
                <div className="bg-[#121826]/30 border border-white/5 p-4 rounded-xl my-auto space-y-4">
                    <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-300 font-semibold font-sans">Active Sync Mode</span>
                        <span className="text-emerald-400 font-bold">AUTOMATIC PUNCHING ENABLED</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-300 font-semibold font-sans">Audit Logs Stream</span>
                        <button className="text-[10px] text-blue-400 bg-blue-600/10 border border-blue-500/20 px-2 py-0.5 rounded hover:bg-blue-600 hover:text-white transition-colors">Clear Console</button>
                    </div>
                    <div className="bg-black/60 p-3 rounded-lg border border-white/5 h-28 overflow-y-auto text-[10px] text-emerald-500 space-y-1 font-mono">
                        <div>hris_systemd[9932]: Initializing DB thread pool (max 100 connections)</div>
                        <div>hris_systemd[9932]: Redis connection pool established at redis://127.0.0.1:6379</div>
                        <div>hris_systemd[9932]: Active Directory polling sequence synced 14,820 accounts</div>
                        <div>hris_systemd[9932]: Ready for client operation callbacks...</div>
                    </div>
                </div>
                <div className="text-[10px] text-slate-500 text-center">
                    Unauthorized usage of admin utilities is recorded in auditing logs.
                </div>
            </div>
        );
    };

    const renderMyLeaves = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">Leave Tracking Sequence</span>
                    </div>
                    <button className="text-[10px] text-blue-400 bg-blue-600/10 border border-blue-500/20 px-2 py-0.5 rounded hover:bg-blue-600 hover:text-white transition-colors font-sans">+ Request Time Off</button>
                </div>

                <div className="space-y-2 my-auto">
                    {[
                        { name: 'Annual Paid Leave', dates: 'Jun 24 - Jun 28, 2026', days: '5 days', status: 'Approved', color: 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20' },
                        { name: 'Medical Emergency Leave', dates: 'May 12 - May 14, 2026', days: '2 days', status: 'Approved', color: 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20' },
                        { name: 'Personal Leave', dates: 'Jul 15 - Jul 18, 2026', days: '3 days', status: 'Pending', color: 'text-blue-400 bg-blue-500/10 border border-blue-500/20' }
                    ].map((leave, idx) => (
                        <div key={idx} className="bg-[#121826]/60 border border-white/5 p-3 rounded-xl flex items-center justify-between text-xs hover:border-white/10 transition-all">
                            <div className="flex items-center gap-3">
                                <span className="text-slate-400 font-sans font-semibold">{leave.name}</span>
                                <span className="text-slate-500 text-[10px]">{leave.dates}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-slate-400">{leave.days}</span>
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${leave.color}`}>{leave.status}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center text-xs border-t border-white/5 pt-3 text-slate-400">
                    <span>AVAILABLE BALANCE: 22 DAYS</span>
                    <span>PENDING LEAVES: 1 REQUEST</span>
                </div>
            </div>
        );
    };

    const renderMyPayslips = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">Payroll & Disbursements Ledger</span>
                    </div>
                    <span className="text-[10px] text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">TAX CODE: HR-ENTERPRISE-01</span>
                </div>

                <div className="space-y-2 my-auto">
                    {[
                        { month: 'June 2026 Payslip', net: '$8,450.00', date: 'Disbursed on Jun 20, 2026' },
                        { month: 'May 2026 Payslip', net: '$8,450.00', date: 'Disbursed on May 20, 2026' },
                        { month: 'April 2026 Payslip', net: '$8,200.00', date: 'Disbursed on Apr 20, 2026' }
                    ].map((slip, idx) => (
                        <div key={idx} className="bg-[#121826]/60 border border-white/5 p-3 rounded-xl flex items-center justify-between text-xs hover:border-white/10 transition-all">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-slate-500">receipt</span>
                                <div className="flex flex-col">
                                    <span className="text-slate-300 font-sans font-semibold">{slip.month}</span>
                                    <span className="text-slate-500 text-[9px]">{slip.date}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-emerald-400 font-bold">{slip.net}</span>
                                <button className="text-[10px] text-blue-400 bg-blue-600/10 border border-blue-500/20 px-2 py-1 rounded hover:bg-blue-600 hover:text-white transition-colors font-sans">Download PDF</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center text-xs border-t border-white/5 pt-3 text-slate-400">
                    <span>NEXT DISBURSEMENT: JUL 20, 2026</span>
                    <span>NET SALARY YTD: $50,300.00</span>
                </div>
            </div>
        );
    };

    const renderMyITTickets = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">Active IT Support Channels</span>
                    </div>
                    <button className="text-[10px] text-blue-400 bg-blue-600/10 border border-blue-500/20 px-2 py-0.5 rounded hover:bg-blue-600 hover:text-white transition-colors font-sans">+ Open New Ticket</button>
                </div>

                <div className="space-y-2 my-auto">
                    {[
                        { category: 'Hardware Request', desc: 'Request spare monitor charger replacement', id: 'TIC-88392', status: 'In Progress', color: 'text-blue-400 bg-blue-500/10 border border-blue-500/20' },
                        { category: 'Security Access', desc: 'VPN keys configuration request for staging', id: 'TIC-88120', status: 'Resolved', color: 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20' }
                    ].map((ticket, idx) => (
                        <div key={idx} className="bg-[#121826]/60 border border-white/5 p-3 rounded-xl flex items-center justify-between text-xs hover:border-white/10 transition-all">
                            <div className="flex items-center gap-3">
                                <span className="text-slate-500 font-mono font-bold">{ticket.id}</span>
                                <div className="flex flex-col">
                                    <span className="text-slate-300 font-sans font-semibold">{ticket.category}</span>
                                    <span className="text-slate-500 text-[9px] font-sans truncate max-w-xs">{ticket.desc}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${ticket.color}`}>{ticket.status}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center text-xs border-t border-white/5 pt-3 text-slate-400">
                    <span>RESOLVED TICKETS: 14</span>
                    <span>AVG RESPONSE TIME: 42 MINUTES</span>
                </div>
            </div>
        );
    };

    const renderMyProfileCV = () => {
        return (
            <div className="flex-grow flex flex-col justify-between font-mono select-none h-full min-h-0 text-white gap-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-bold font-sans">Curriculum Vitae & Qualifications</span>
                    </div>
                    <button className="text-[10px] text-blue-400 bg-blue-600/10 border border-blue-500/20 px-2 py-0.5 rounded hover:bg-blue-600 hover:text-white transition-colors font-sans">Edit Profile</button>
                </div>

                <div className="grid grid-cols-3 gap-4 my-auto">
                    <div className="bg-[#121826]/60 border border-white/5 p-4 rounded-xl">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Primary Role</span>
                        <div className="text-sm font-bold text-slate-200 font-sans">Lead Architect</div>
                        <div className="text-[9px] text-blue-400 mt-2 font-bold font-sans">Engineering Dept</div>
                    </div>
                    <div className="bg-[#121826]/60 border border-white/5 p-4 rounded-xl">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Stack Alignment</span>
                        <div className="text-sm font-bold text-slate-200 font-sans">Node, React, Postgres</div>
                        <div className="text-[9px] text-slate-500 mt-2">Verified Skillset</div>
                    </div>
                    <div className="bg-[#121826]/60 border border-white/5 p-4 rounded-xl">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Certifications</span>
                        <div className="text-sm font-bold text-slate-200 font-sans">AWS Architect Pro</div>
                        <div className="text-[9px] text-blue-400 mt-2 font-bold font-sans">AWS-2025</div>
                    </div>
                </div>

                <div className="border border-white/5 bg-[#121826]/30 p-4 rounded-xl flex flex-col gap-2">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">Professional Narrative</span>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        Full-stack engineering strategist with 7+ years of experience constructing high-availability cloud infrastructure and real-time database interfaces.
                    </p>
                </div>
            </div>
        );
    };

    return (
        <div className="font-sans text-[#151515] overflow-x-hidden selection:bg-black selection:text-white bg-[#FAF9F6] min-h-screen">

            <Navbar />

            <main className="pt-16">
                {/* Title & Showcase Section: Ivory Background with Aurora Glow */}
                <section className="relative px-8 md:px-16 pt-32 pb-32 border-b border-gray-200 bg-[#FAF9F6] overflow-hidden">
                    {/* Drifting radial gradients (Aurora effect) with cool corporate blue/indigo/slate tones */}
                    <motion.div
                        className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.45)_0%,transparent_70%)] pointer-events-none"
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
                        className="absolute bottom-[-15%] left-[-15%] w-[950px] h-[950px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.5)_0%,transparent_75%)] pointer-events-none"
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
                        className="absolute top-[20%] left-[20%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.4)_0%,transparent_70%)] pointer-events-none"
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
                            HR Information System
                        </motion.h1>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                            <motion.p
                                className="text-[13px] font-mono text-gray-600 max-w-2xl border-l border-gray-300 pl-8 uppercase tracking-[0.2em] leading-relaxed italic"
                                {...globalRevealProps}
                            >
                                A high-performance enterprise workforce management architecture prioritizing database consistency and seamless employee lifecycle synchronization.
                            </motion.p>
                            <motion.div
                                className="text-[11px] font-mono text-gray-500 flex gap-4 uppercase tracking-widest"
                                {...globalRevealProps}
                            >
                                <span>[ EST. 2025 ]</span>
                                <span>[ ARCHIVE REF: 043 ]</span>
                            </motion.div>
                        </div>

                        {/* Interactive Hero Showcase Block: HRIS Shell */}
                        <motion.div
                            className="mt-16 w-full bg-[#0b0f19] rounded-2xl border border-white/10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.8)] overflow-hidden relative z-10 flex flex-col md:flex-row h-[620px]"
                            {...globalRevealProps}
                        >
                            {/* Two-Tier Left Sidebar */}
                            <div className="flex flex-row flex-shrink-0 select-none h-full border-r border-white/10 w-full md:w-64">
                                {/* Tier 1 (Far Left): Narrow Icon Column */}
                                <div className="w-16 bg-[#0a0d16] border-r border-white/5 flex flex-col items-center py-4 justify-between h-full">
                                    <div className="flex flex-col gap-6 items-center w-full">
                                        {/* Blue Brand Logo */}
                                        <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-sm">
                                            <span className="material-symbols-outlined text-[20px]">shield</span>
                                        </div>
                                        <div className="flex flex-col gap-5 items-center w-full">
                                            {modules.map((mod) => {
                                                const isActive = activeModule === mod.id;
                                                return (
                                                    <button
                                                        key={mod.id}
                                                        onClick={() => handleModuleChange(mod.id)}
                                                        title={mod.label}
                                                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 relative group ${isActive
                                                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                                                                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                                                            }`}
                                                    >
                                                        <span className="material-symbols-outlined text-[20px]">{mod.icon}</span>
                                                        <span className="absolute left-14 bg-slate-950 border border-white/10 text-white text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 z-50 whitespace-nowrap">
                                                            {mod.label}
                                                        </span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer text-[18px]">help_outline</span>
                                    </div>
                                </div>

                                {/* Tier 2 (Inner Left): Menu List Column */}
                                <div className="flex-grow bg-[#0e1322] p-4 flex flex-col justify-between h-full">
                                    <div className="flex flex-col gap-5">
                                        {/* Workspace Title Selector */}
                                        <div className="flex items-center justify-between px-2 border-b border-white/5 pb-3">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                {modules.find(m => m.id === activeModule)?.header || 'My Workspace'}
                                            </span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                        </div>

                                        {/* Dynamic Sub-tab List */}
                                        <div className="flex flex-col gap-1.5">
                                            {moduleSubTabs[activeModule]?.map((subTab) => {
                                                const isActive = activeSubTab === subTab;
                                                return (
                                                    <button
                                                        key={subTab}
                                                        onClick={() => setActiveSubTab(subTab)}
                                                        className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-150 flex items-center gap-3 ${isActive
                                                                ? 'bg-blue-600 text-white font-semibold'
                                                                : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                                                            }`}
                                                    >
                                                        <span className="truncate">{subTab}</span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Active Terminal Footer */}
                                    <div className="border-t border-white/5 pt-4 px-2">
                                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-1">ACTIVE TERMINAL</span>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[10px] font-mono text-blue-400 font-semibold truncate">admin@hris.local</span>
                                            <span className="text-[9px] font-mono text-blue-500/70 truncate font-medium">Super Administrator</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Main Stage Area */}
                            <div className="flex-grow flex flex-col bg-[#0b0f19] h-full overflow-hidden">
                                {/* Header Row */}
                                <div className="h-14 border-b border-white/10 px-6 flex items-center justify-between select-none bg-[#0e1322]/80">
                                    {/* Breadcrumbs */}
                                    <div className="flex items-center gap-2 text-xs font-mono">
                                        <span className="text-slate-400 hover:text-slate-200 cursor-pointer">
                                            {modules.find(m => m.id === activeModule)?.label || 'Workspace'}
                                        </span>
                                        <span className="text-slate-600">/</span>
                                        <span className="text-white font-medium capitalize">
                                            {activeSubTab}
                                        </span>
                                    </div>

                                    {/* Search Input Bar */}
                                    <div className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 w-80 text-left">
                                        <span className="material-symbols-outlined text-slate-500 text-sm">search</span>
                                        <span className="text-xs text-slate-400 flex-grow font-sans">Search for employees or tasks...</span>
                                        <span className="text-[10px] font-mono text-slate-500 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">⌘K</span>
                                    </div>

                                    {/* Utilities & Avatar */}
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer text-[18px]">light_mode</span>
                                        <div className="relative">
                                            <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer text-[18px]">notifications</span>
                                            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-blue-600 text-[8px] text-white rounded-full flex items-center justify-center font-bold">3</span>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer text-[18px]">help</span>
                                        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-blue-100 font-bold border border-blue-500/30">
                                            AD
                                        </div>
                                    </div>
                                </div>

                                {/* Content Stage with Dynamic Views */}
                                <div className="flex-grow p-6 overflow-y-auto min-h-0 bg-[#0b0f19]">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`${activeModule}-${activeSubTab}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="h-full flex flex-col justify-between"
                                        >
                                            {activeModule === 'workspace' && activeSubTab === 'Dashboard' && renderCommandCenter()}
                                            {activeModule === 'workspace' && activeSubTab === 'My Leaves' && renderMyLeaves()}
                                            {activeModule === 'workspace' && activeSubTab === 'My Payslips' && renderMyPayslips()}
                                            {activeModule === 'workspace' && activeSubTab === 'My IT Tickets' && renderMyITTickets()}
                                            {activeModule === 'workspace' && activeSubTab === 'My Profile (CV)' && renderMyProfileCV()}
                                            {activeModule === 'personnel' && activeSubTab === 'Staff Database' && renderStaffDatabase()}
                                            {activeModule === 'personnel' && activeSubTab === 'Hierarchy Blueprint' && renderHierarchyBlueprint()}
                                            {activeModule === 'personnel' && activeSubTab === 'Recruitment' && renderRecruitment()}
                                            {activeModule === 'personnel' && activeSubTab === 'Offboarding' && renderOffboarding()}
                                            {activeModule === 'finance' && activeSubTab === 'Time & Attendance' && renderTimeAttendance()}
                                            {activeModule === 'finance' && activeSubTab === 'Payroll Engine' && renderPayrollEngine()}
                                            {activeModule === 'finance' && activeSubTab === 'Finance & Ledger' && renderFinanceLedger()}
                                            {activeModule === 'it' && activeSubTab === 'Service Desk' && renderServiceDesk()}
                                            {activeModule === 'it' && activeSubTab === 'SLA Reports' && renderSLAReports()}
                                            {activeModule === 'inventory' && activeSubTab === 'Dashboard' && renderInventoryDashboard()}
                                            {activeModule === 'inventory' && activeSubTab === 'Active Assets' && renderActiveAssets()}
                                            {activeModule === 'inventory' && activeSubTab === 'Consumables' && renderConsumables()}
                                            {activeModule === 'bpo' && activeSubTab === 'Live Leaderboard' && renderLiveLeaderboard()}
                                            {activeModule === 'systems' && activeSubTab === 'HR Utilities' && renderHRUtilities()}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Technical Split Panel: Deep Midnight Blue Background */}
                <section className="bg-[#0b0f19] border-b border-white/10 bg-[radial-gradient(rgba(59,130,246,0.03)_1px,transparent_1px)] [background-size:32px_32px]">
                    <motion.div
                        className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[700px]"
                        {...globalRevealProps}
                    >
                        {/* Left Column: Narratives */}
                        <div className="md:col-span-8 p-8 md:p-16 border-r border-white/10 space-y-24">
                            <div className="space-y-6">
                                <span className="text-[11px] font-mono text-blue-200/60 font-bold uppercase tracking-[0.4em] block">[ 01 ] THE COMPLEX CHALLENGE</span>
                                <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl italic text-white">System Requirements: Database Consistency</h2>
                                <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl font-light">
                                    Enterprise employer portal architectures frequently experience race conditions, split-brain payroll processing locks, and latency spikes during high-volume end-of-month reconciliation events. We set out to achieve atomic database transitions and real-time personnel updates under heavy concurrent HR loads.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <span className="text-[11px] font-mono text-blue-200/60 font-bold uppercase tracking-[0.4em] block">[ 02 ] THE CUSTOM SOLUTION</span>
                                <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl italic text-white">Distributed Personnel Grid</h2>
                                <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl font-light">
                                    We engineered a modular personnel coordination application stack. By placing read-heavy profile metadata on a fast Redis caching engine and using isolated PostgreSQL read-replicas, employee dashboards compile in sub-100ms times while salary ledgers remain strictly transactional.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <span className="text-[11px] font-mono text-blue-200/60 font-bold uppercase tracking-[0.4em] block">[ 03 ] ENGINEERING RESULTS</span>
                                <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl italic text-white">Zero Ledger Failures</h2>
                                <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl font-light">
                                    The revamped distributed pipeline completely eliminated reconciliation collision errors. Database transaction queue latencies dropped by 45%, IT help-desk routing speeds increased by 30%, and personnel lifecycle synchronizations completed globally in under 1.5 seconds.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Metadata */}
                        <div className="md:col-span-4 bg-black/20 p-8 md:p-16 space-y-16">
                            <div className="border-b border-white/10 pb-10">
                                <span className="text-[11px] font-mono text-blue-200/60 uppercase block mb-4 tracking-[0.2em]">CLIENT</span>
                                <span className="font-['Cormorant_Garamond',serif] text-3xl text-white italic">Global Workforce Corp</span>
                            </div>

                            <div className="border-b border-white/10 pb-10">
                                <span className="text-[11px] font-mono text-blue-200/60 uppercase block mb-4 tracking-[0.2em]">ROLE</span>
                                <div className="space-y-2">
                                    <span className="font-['Cormorant_Garamond',serif] text-2xl text-white block italic">Enterprise Architecture</span>
                                    <span className="font-['Cormorant_Garamond',serif] text-2xl text-white block italic">Full-Stack Engineering</span>
                                    <span className="font-['Cormorant_Garamond',serif] text-2xl text-white block italic">Database Design</span>
                                </div>
                            </div>

                            <div>
                                <span className="text-[11px] font-mono text-blue-200/60 uppercase block mb-6 tracking-[0.2em]">TECH STACK</span>
                                <div className="flex flex-wrap gap-3">
                                    {['NODE.JS', 'POSTGRESQL', 'GRAPHQL', 'REDIS', 'DOCKER', 'KUBERNETES', 'TAILWIND CSS'].map((tech) => (
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
                            <h3 className="font-['Cormorant_Garamond',serif] text-5xl md:text-7xl italic text-white whitespace-nowrap">Workforce Operations</h3>
                            <div className="h-px bg-white/10 w-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {/* Feature 1 */}
                            <div className="group">
                                <div className="mb-10 overflow-hidden border border-white/10 relative">
                                    <img alt="Payroll Ledger" className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR_jXsHyQNEUqZ9B_u50oU5oviZqEYA7jv2exVBux546eDADEoFTwtyuHqHf2UIZQkB4g2C3up7x-g8YnB80QsKye8vKfDKyYjIDj7MM4x5VuApcRF4Y854iGZVfBPvwXSrc4_UV7wLrUsSxTOsgXohpc4r4elCSZDRKvyFYkeVKJpufzvZMoi8KtLZmLGIqtMKN1mIRUgomXQ7aeSeNwQFrxxLM4_h4J4u6O077TXebeeG7WzP2O3WY0Wn48ITm4OKyMjFkRWYrAW" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-l border-white/20 pl-6">
                                    <div>
                                        <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em] block mb-2">01 / FINANCE</span>
                                        <h4 className="font-['Cormorant_Garamond',serif] text-3xl italic text-white">Payroll Ledger</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="group">
                                <div className="mb-10 overflow-hidden border border-white/10 relative">
                                    <img alt="Workforce Mapping" className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6g4AP617N_r3pjPw2sE21ArNZNFdm1i6qTA9w_CxYSLHwCU9A0fmLs1-svz9ZoIc0k9iAO3HrG4C7aT4VNrr0Rkz_HRfVUfO4jIXxOPdeg15AAzKj6qiGyy7xGKrlenRkosp4I0mK67Ck9fpm2oCLJW_GHPjdpgWXaLvwwCwMOQBslDnshLf5o1EVMQga2NpTEEwVAc0Fms3-6ANKhdXroLNpo5QDxLY-GGtnc-muzYhnDEB7-D-0owNmr6X9BETkyPE9EAvS3h9J" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-l border-white/20 pl-6">
                                    <div>
                                        <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em] block mb-2">02 / WORKFORCE</span>
                                        <h4 className="font-['Cormorant_Garamond',serif] text-3xl italic text-white">Workforce Mapping</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="group">
                                <div className="mb-10 overflow-hidden border border-white/10 relative">
                                    <img alt="Ticketing Flow" className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Vlse04m9Cr_HHxbFMqSaKPkTVx3dpytRQLODuUJmtems15DVb4RVnZRYEyZ98kHDJX2qVd4qGEsougfeiDZA5jyx9nAR4NhWZqGhKg_JJQ9bQEEdrrkTuuzojrpBe-cP0vwN71NonSJPrTcFPiPQtxYSkYBrj8QoUxdImGUBhFR0DO4XN4alkgu6ZQtwPGXm4qZGLDwMCDK1O4siz95yUWXJTCjpFHujzpfuXFMTFCqUSM5cOwjU34sBOjtM1yfr6f09AZxbZxoE" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-l border-white/20 pl-6">
                                    <div>
                                        <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em] block mb-2">03 / OPERATIONS</span>
                                        <h4 className="font-['Cormorant_Garamond',serif] text-3xl italic text-white">Ticketing Flow</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="group">
                                <div className="mb-10 overflow-hidden border border-white/10 relative">
                                    <img alt="CV Indexing Engine" className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFFMV2Ot1qu1wEYHc0gGAQajdlDX_SSE6ySfTVdWPswhEwz7dx2ajEFtz9q6Xa2nOC_mYpMN9Teaisp4rMcu64iNrcw9CA8hX0ceFLPtkjstNB6e-PcVf2o0WJ3niDpdzc1EhSfv2uVYOKJwVfKvobdjr9yKlF9dAUAuFSVrHlXeEcGRkfNViVLGNku0Jhqm0Vf145sIyFsO_eFfnCVDcjJlg_UWfULv0VQ9f79AGaqyOcZQXdC584gB1Hk5eqyGUdKwmBPw2dS2fx" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-l border-white/20 pl-6">
                                    <div>
                                        <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em] block mb-2">04 / TALENT</span>
                                        <h4 className="font-['Cormorant_Garamond',serif] text-3xl italic text-white">CV Indexing Engine</h4>
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
