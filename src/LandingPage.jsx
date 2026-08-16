import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    ShieldCheck,
    CheckCircle2,
    Laptop,
    Server,
    Printer,
    Smartphone,
    CircuitBoard,
    HardDrive,
    Award,
    Phone
} from 'lucide-react';

export default function LandingPage() {
    const categories = [
        { icon: <Laptop className="w-6 h-6 text-emerald-400" />, title: "Computers & Laptops", desc: "Desktops, Workstations, Monitors, Notebooks" },
        { icon: <Server className="w-6 h-6 text-emerald-400" />, title: "Servers & Networking", desc: "Racks, Switches, Routers, Telecom Hardware" },
        { icon: <Printer className="w-6 h-6 text-emerald-400" />, title: "Printers & Peripherals", desc: "Copiers, Scanners, Keyboards, Power Units" },
        { icon: <Smartphone className="w-6 h-6 text-emerald-400" />, title: "Mobile & Handhelds", desc: "Enterprise Smart Devices, Tablets, Scanners" },
        { icon: <CircuitBoard className="w-6 h-6 text-emerald-400" />, title: "Industrial Electronics", desc: "Control Panels, PCBs, Heavy Lab Hardware" },
        { icon: <HardDrive className="w-6 h-6 text-emerald-400" />, title: "Storage & Drives", desc: "HDDs, SSDs, Tape Drives, Storage Arrays" }
    ];

    const processSteps = [
        { num: "01", title: "Reverse Pickup", desc: "Scheduled logistics with full chain-of-custody documentation." },
        { num: "02", title: "Data Sanitization", desc: "Degaussing and physical shredding with destruction certificates." },
        { num: "03", title: "Material Recovery", desc: "Mechanical separation of precious metals and recyclable plastics." },
        { num: "04", title: "EPR Audit & Reports", desc: "Official CPCB/SPCB compliant certificates and ESG audit trails." }
    ];

    const eprSteps = [
        { step: "Assess", detail: "Calculate annual sales metrics and target EPR obligation tonnages." },
        { step: "Collect", detail: "Execute reverse logistics across authorized regional drop points." },
        { step: "Process", detail: "Recycle material in compliance with state environmental boards." },
        { step: "Certify", detail: "Generate official EPR credits and destruction documentation." },
        { step: "Report", detail: "Submit quarterly and annual compliance filings to government portals." }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#0b132b] via-[#1c2541] to-[#0b132b] text-white pt-36 pb-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-full mb-6">
                            <ShieldCheck className="w-4 h-4" /> Authorized B2B E-Waste Management & EPR Compliance
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                            Certified E-Waste Recycling & <span className="text-emerald-400">EPR Compliance</span> for Businesses
                        </h1>
                        <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                            We provide enterprise collection, military-grade data destruction, eco-friendly recycling, and official EPR compliance filings for corporations, IT companies, and electronics importers across India.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/25">
                                Schedule a Pickup <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/epr-compliance" className="border border-slate-700 hover:border-slate-500 bg-slate-900/50 text-slate-200 font-semibold px-7 py-3.5 rounded-lg transition-all">
                                Request EPR Support
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative">
                        <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
                                alt="Electronic waste management"
                                className="w-full object-cover h-[460px] hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
                                <p className="text-emerald-400 font-bold text-sm">Industrial Processing Standard</p>
                                <p className="text-xs text-slate-300 mt-1">100% Traceable Chain-of-Custody with On-Site Data Wiping Support.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Verified Operational Metrics */}
            <section className="bg-slate-900 border-y border-slate-800 py-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-1">12,000+ MT</h3>
                        <p className="text-xs md:text-sm text-slate-400 font-medium">Annual Facility Capacity Target</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-1">500+</h3>
                        <p className="text-xs md:text-sm text-slate-400 font-medium">Target Corporate Partners</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-1">100%</h3>
                        <p className="text-xs md:text-sm text-slate-400 font-medium">Traceable Documentation</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-1">Pan-India</h3>
                        <p className="text-xs md:text-sm text-slate-400 font-medium">Reverse Logistics Network</p>
                    </div>
                </div>
            </section>

            {/* Accepted Categories Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-emerald-600 font-semibold text-xs uppercase tracking-wider">Accepted Categories</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">What We Handle</h2>
                    <p className="text-slate-600 mt-3 text-base">
                        We accept and process all categories of commercial, IT, industrial, and consumer electrical assets.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, idx) => (
                        <motion.div key={idx} whileHover={{ y: -4 }} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                            <div className="p-3 bg-emerald-50 rounded-xl flex-shrink-0">
                                {cat.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg">{cat.title}</h3>
                                <p className="text-slate-500 text-sm mt-1">{cat.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Corporate Process Lifecycle */}
            <section className="bg-slate-950 text-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-emerald-400 font-semibold text-xs uppercase tracking-wider">End-to-End Workflow</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Corporate E-Waste Lifecycle</h2>
                        <p className="text-slate-400 mt-3 text-base">Clear, audit-ready operational process designed for enterprise compliance managers.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 relative">
                        {processSteps.map((step, idx) => (
                            <div key={idx} className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                                <div>
                                    <span className="text-3xl font-black text-emerald-400 block mb-3">{step.num}</span>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                                <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-emerald-400 flex items-center gap-1 font-semibold">
                                    Verified Audit Trail <CheckCircle2 className="w-3.5 h-3.5" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dedicated EPR Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-emerald-600 font-semibold text-xs uppercase tracking-wider">Producer Responsibility</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">EPR Compliance Made Simple</h2>
                        <p className="text-slate-600 text-base leading-relaxed mb-6">
                            Under India's E-Waste (Management) Rules, electrical equipment manufacturers, brand owners, and importers are mandated to fulfill strict recycling obligations. We manage your end-to-end target fulfillment.
                        </p>
                        <div className="space-y-4">
                            {eprSteps.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-slate-200">
                                    <div className="bg-emerald-500 text-white font-bold text-xs px-2.5 py-1 rounded">
                                        {item.step}
                                    </div>
                                    <p className="text-slate-700 text-sm font-medium">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <Link to="/epr-compliance" className="bg-slate-900 hover:bg-slate-950 text-white font-bold px-6 py-3.5 rounded-lg inline-flex items-center gap-2 text-sm">
                                Get EPR Consultation <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2 text-emerald-400">
                            <Award className="w-6 h-6" /> Regulatory Trust & Credentials
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            We operate in full alignment with the Central Pollution Control Board (CPCB) and State Pollution Control Boards (SPCB) guidelines to ensure legal immunity and complete compliance for our clients.
                        </p>
                        <div className="space-y-3 pt-2">
                            <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/60">
                                <p className="text-xs text-slate-400 uppercase font-semibold">Corporate Headquarter</p>
                                <p className="text-sm font-bold text-slate-200 mt-0.5">Bhutani Alphathum, Sector 90, Noida, UP</p>
                            </div>
                            <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/60">
                                <p className="text-xs text-slate-400 uppercase font-semibold">Processing Facility</p>
                                <p className="text-sm font-bold text-slate-200 mt-0.5">Tehsil Sardhana, Meerut, UP</p>
                            </div>
                            <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/60">
                                <p className="text-xs text-slate-400 uppercase font-semibold">Compliance Assurance</p>
                                <p className="text-sm font-bold text-slate-200 mt-0.5">Form 6 Certificates & Weightment Slip Audits</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Conversion CTA */}
            <section className="bg-emerald-600 text-white py-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-3xl font-extrabold mb-2">Need an Authorized E-Waste Pickup?</h3>
                        <p className="text-emerald-100 max-w-xl text-base">Schedule reverse logistics or speak to our compliance managers for immediate assistance.</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/contact" className="bg-slate-900 hover:bg-slate-950 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-xl text-sm">
                            Schedule a Pickup
                        </Link>
                        <a href="tel:+919876543210" className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold px-7 py-3.5 rounded-xl transition-all text-sm flex items-center gap-2">
                            <Phone className="w-4 h-4" /> Call Direct
                        </a>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}