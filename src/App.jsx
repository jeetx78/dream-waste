import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Factory,
  Landmark,
  Mail,
  MapPin,
  Target,
  Globe,
  Laptop,
  Server,
  Printer,
  Smartphone,
  HardDrive,
  CircuitBoard,
  FileCheck,
  Menu,
  X,
  Lock,
  Recycle,
  Award,
  Users
} from 'lucide-react';

// Official Dream Waste Solutions Logo SVG Component
const CompanyLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 400 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer Shield Frame (Blue) */}
    <path d="M130 30 H270 V150 C270 200 200 240 200 240 C200 240 130 200 130 150 Z" stroke="#1E293B" strokeWidth="12" fill="none" strokeLinejoin="round" />

    {/* Circuit Board Network */}
    <path d="M150 70 H250 M160 55 V85 M240 55 V85 M200 40 V85" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
    <circle cx="160" cy="55" r="5" fill="#1E293B" />
    <circle cx="200" cy="40" r="5" fill="#1E293B" />
    <circle cx="240" cy="55" r="5" fill="#1E293B" />
    <path d="M170 125 V155 L200 170 L230 155 V125" stroke="#1E293B" strokeWidth="6" fill="none" />
    <circle cx="200" cy="170" r="5" fill="#1E293B" />

    {/* Inner Box for DWS */}
    <rect x="155" y="85" width="90" height="40" stroke="#00A859" strokeWidth="6" fill="white" />

    {/* DWS Text */}
    <text x="200" y="114" fill="#00A859" fontSize="28" fontFamily="sans-serif" fontWeight="900" textAnchor="middle" letterSpacing="1">DWS</text>

    {/* Supporting Green Hands */}
    <path d="M130 135 C130 185 185 205 195 208 C190 190 170 170 150 155 Z" fill="#00A859" />
    <path d="M270 135 C270 185 215 205 205 208 C210 190 230 170 250 155 Z" fill="#00A859" />

    {/* Brand Name Text */}
    <text x="200" y="255" fill="#00A859" fontSize="30" fontFamily="sans-serif" fontWeight="900" textAnchor="middle" letterSpacing="2">DREAM WASTE</text>
    <text x="200" y="285" fill="#1E293B" fontSize="20" fontFamily="sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="3">Solutions Pvt Ltd</text>

    {/* Underlines */}
    <line x1="80" y1="280" x2="115" y2="280" stroke="#1E293B" strokeWidth="3" />
    <line x1="285" y1="280" x2="320" y2="280" stroke="#1E293B" strokeWidth="3" />
  </svg>
);

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

// Navigation Bar
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0b132b]/95 backdrop-blur-md fixed top-0 w-full z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white flex items-center gap-3 hover:opacity-90 transition-opacity">
          <CompanyLogo className="w-25 h-20" />
        </Link>

        <nav className="hidden lg:flex items-center space-x-7 text-sm text-slate-300 font-medium">
          <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link>
          <Link to="/e-waste-recycling" className="hover:text-emerald-400 transition-colors">Recycling</Link>
          <Link to="/it-asset-disposal" className="hover:text-emerald-400 transition-colors">Data Destruction</Link>
          <Link to="/epr-compliance" className="hover:text-emerald-400 transition-colors">EPR Compliance</Link>
          <Link to="/industries" className="hover:text-emerald-400 transition-colors">Industries Served</Link>
          <Link to="/goals" className="hover:text-emerald-400 transition-colors">Goals</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all hover:scale-105 flex items-center gap-2 shadow-md shadow-emerald-500/20">
            Schedule Pickup
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-300 hover:text-white p-2"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4"
        >
          <div className="flex flex-col space-y-3 text-sm text-slate-300 font-medium">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">About Us</Link>
            <Link to="/e-waste-recycling" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">E-Waste Recycling</Link>
            <Link to="/it-asset-disposal" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">Data Destruction & ITAD</Link>
            <Link to="/epr-compliance" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">EPR Compliance</Link>
            <Link to="/industries" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">Industries Served</Link>
            <Link to="/goals" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">Goals & Roadmap</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">Contact & Pickup</Link>
          </div>
          <div className="pt-4 border-t border-slate-800">
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full text-center bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider py-3 rounded-lg block">
              Schedule a Pickup
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-[#050b18] text-slate-400 pt-16 pb-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <CompanyLogo className="w-12 h-10" />
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Authorized B2B e-waste management, secure data destruction, and Extended Producer Responsibility (EPR) execution services across India.
          </p>
          <div className="flex gap-2 pt-2">
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs rounded-full font-medium">CPCB & SPCB Aligned</span>
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs rounded-full font-medium">ISO Certified Process</span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services & Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/e-waste-recycling" className="hover:text-emerald-400 transition-colors">Bulk E-Waste Collection</Link></li>
            <li><Link to="/it-asset-disposal" className="hover:text-emerald-400 transition-colors">ITAD & Data Destruction</Link></li>
            <li><Link to="/epr-compliance" className="hover:text-emerald-400 transition-colors">EPR Target Fulfillment</Link></li>
            <li><Link to="/industries" className="hover:text-emerald-400 transition-colors">Corporate & Government Solutions</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Schedule B2B Pickup</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Corporate Office</h4>
          <p className="text-sm leading-relaxed text-slate-400">
            Office No. 1812, 18th Floor, Tower C, Bhutani Alphathum, Sector 90, Noida, Gautam Buddha Nagar, Uttar Pradesh, India<br />
            <a href="mailto:Usman@dreamwastesolutions.com" className="text-emerald-400 hover:underline font-medium inline-flex items-center gap-1.5 mt-3">
              <Mail className="w-4 h-4" /> Usman@dreamwastesolutions.com
            </a>
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Processing Facility</h4>
          <p className="text-sm leading-relaxed text-slate-400">
            Khasra No. 575, Village Panwari, Tehsil Sardhana, Meerut, Uttar Pradesh – 250342
          </p>
          <div className="mt-4 p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-400">
            Equipped for mechanical sorting, de-manufacturing, and zero-landfill material recovery.
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <p>© 2026 Dream Waste Solutions Pvt. Ltd. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="http://www.dreamwastesolutions.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
            www.dreamwastesolutions.com
          </a>
        </div>
      </div>
    </footer>
  );
}

// 1. HOME PAGE
function HomePage() {
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
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b132b] via-[#1c2541] to-[#0b132b] text-white pt-36 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
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
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/25">
                  Schedule a Pickup <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/epr-compliance" className="border border-slate-700 hover:border-slate-500 bg-slate-900/50 text-slate-200 font-semibold px-7 py-3.5 rounded-lg transition-all inline-block">
                  Request EPR Support
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
            <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
                alt="Electronic waste management"
                className="w-full object-cover h-[460px] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
                <p className="text-emerald-400 font-bold text-sm">Industrial Processing Standard</p>
                <p className="text-xs text-slate-300 mt-1">100% Traceable Chain-of-Custody with On-Site Data Wiping Support.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Verified Metrics */}
      <section className="bg-slate-900 border-y border-slate-800 py-12 px-6">
        <motion.div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-1">12,000+ MT</h3>
            <p className="text-xs md:text-sm text-slate-400 font-medium">Annual Facility Capacity Target</p>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-1">500+</h3>
            <p className="text-xs md:text-sm text-slate-400 font-medium">Target Corporate Partners</p>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-1">100%</h3>
            <p className="text-xs md:text-sm text-slate-400 font-medium">Traceable Documentation</p>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-1">Pan-India</h3>
            <p className="text-xs md:text-sm text-slate-400 font-medium">Reverse Logistics Network</p>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section Preview - UPDATED WITH LOGO DISPLAY */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-800 bg-[#0b132b] h-[420px] flex flex-col items-center justify-center p-8 text-center group">
              <CompanyLogo className="w-64 h-56 transform group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Official Brand Identity</span>
                <h4 className="text-lg font-bold text-white">Dream Waste Solutions Pvt Ltd</h4>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">Driving Sustainable Corporate E-Waste Management Across India</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Founded to simplify regulatory environmental compliance, we operate with a sharp focus on transparency, sustainable material extraction, and zero-landfill goals for Indian businesses.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600 mt-1">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Mission-Driven Recycling</h3>
                  <p className="text-slate-600 text-sm">Targeting high recovery rates through advanced mechanical processing and automated sorting.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600 mt-1">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Tailored Corporate Support</h3>
                  <p className="text-slate-600 text-sm">Dedicated compliance officers handling everything from physical pickup to EPR portal submissions.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* "What We Handle" Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold text-xs uppercase tracking-wider">Accepted Categories</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">What We Handle</h2>
          <p className="text-slate-600 mt-3 text-base">We accept and process all categories of commercial, IT, industrial, and consumer electrical assets.</p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {categories.map((cat, idx) => (
            <motion.div key={idx} variants={itemVariants} whileHover={{ y: -6 }} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-emerald-50 rounded-xl flex-shrink-0">{cat.icon}</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">{cat.title}</h3>
                <p className="text-slate-500 text-sm mt-1">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Corporate Process Lifecycle */}
      <section className="bg-slate-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-400 font-semibold text-xs uppercase tracking-wider">End-to-End Workflow</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Corporate E-Waste Lifecycle</h2>
            <p className="text-slate-400 mt-3 text-base">Clear, audit-ready operational process designed for enterprise compliance managers.</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-4 gap-6 relative" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {processSteps.map((step, idx) => (
              <motion.div key={idx} variants={itemVariants} whileHover={{ y: -5 }} className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-emerald-400 block mb-3">{step.num}</span>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-emerald-400 flex items-center gap-1 font-semibold">
                  Verified Audit Trail <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dedicated EPR Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-wider">Producer Responsibility</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">EPR Compliance Made Simple</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Under India's E-Waste (Management) Rules, electrical equipment manufacturers, brand owners, and importers are mandated to fulfill strict recycling obligations. We manage your end-to-end target fulfillment.
            </p>
            <div className="space-y-4">
              {eprSteps.map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.4 }} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-slate-200">
                  <div className="bg-emerald-500 text-white font-bold text-xs px-2.5 py-1 rounded">{item.step}</div>
                  <p className="text-slate-700 text-sm font-medium">{item.detail}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link to="/epr-compliance" className="bg-slate-900 hover:bg-slate-950 text-white font-bold px-6 py-3.5 rounded-lg inline-flex items-center gap-2 text-sm">
                  Get EPR Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
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
          </motion.div>
        </div>
      </section>

      {/* Main Conversion CTA */}
      <section className="bg-emerald-600 text-white py-16 px-6 overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-extrabold mb-2">Need an Authorized E-Waste Pickup?</h3>
            <p className="text-emerald-100 max-w-xl text-base">Schedule reverse logistics or speak to our compliance managers for immediate assistance.</p>
          </div>
          <div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="bg-slate-900 hover:bg-slate-950 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl text-sm inline-block">
                Schedule a Pickup
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </PageWrapper>
  );
}

// 2. ABOUT US PAGE - UPDATED WITH INDIAN MAN WORKING PHOTO
function AboutPage() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold text-xs uppercase tracking-wider">Corporate Profile</span>
          <h1 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">About Dream Waste Solutions</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Dream Waste Solutions Pvt. Ltd. is an authorized e-waste recycling and environmental compliance company based in Noida, Uttar Pradesh.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"
              alt="Indian professional working"
              className="rounded-2xl shadow-xl w-full object-cover h-[420px]"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Our Profile & Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              We specialize in the collection, safe disposal, data sanitization, and material recovery of electronic waste, providing eco-friendly and legally compliant solutions to commercial corporations, manufacturers, and public sector institutions across India.
            </p>
            <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800">
              <h3 className="text-emerald-400 font-bold text-xl mb-2 flex items-center gap-2">
                <Target className="w-5 h-5" /> Our Core Vision
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To revolutionize electronic waste management in India by delivering secure, sustainable, and tech-enabled recycling solutions that safeguard corporate data security while preventing environmental degradation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

// 3. E-WASTE RECYCLING PAGE
function EWasteRecyclingPage() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="text-emerald-600 font-semibold text-xs uppercase tracking-wider">Core Solutions</span>
          <h1 className="text-4xl font-black text-slate-900 mt-2 mb-4">Commercial E-Waste Recycling</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Industrial material recovery and reverse logistics for enterprise assets, consumer electronics, and manufacturing scrap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit">
              <Recycle className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Bulk Asset Pickup</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our reverse logistics network provides scheduled on-site packing, weighment, and transport for corporate office decommissioning and technology refreshes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit">
              <Factory className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Mechanical Recovery</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              At our Meerut facility, electronic scrap undergoes systematic disassembly, mechanical shredding, and material segregation into metals, copper, plastics, and circuit components.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Have e-waste ready for disposal?</h3>
            <p className="text-slate-400 text-sm mt-1">Book a certified pickup with full documentation.</p>
          </div>
          <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg text-sm flex-shrink-0">
            Schedule Pickup
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}

// 4. IT ASSET DISPOSITION PAGE
function ITAssetDisposalPage() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="text-emerald-600 font-semibold text-xs uppercase tracking-wider">ITAD Services</span>
          <h1 className="text-4xl font-black text-slate-900 mt-2 mb-4">IT Asset Disposal & Data Destruction</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Protecting sensitive corporate intelligence through certified magnetic degaussing and physical media shredding.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <Lock className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-xl mb-2">On-Site Degaussing</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              High-field magnetic wiping directly at your data center or office before hard drives leave your premises.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <HardDrive className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-xl mb-2">Physical Drive Shredding</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Industrial shredding of hard drives, solid-state drives (SSDs), and tape backup media into non-recoverable fragments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <FileCheck className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-xl mb-2">Destruction Certificates</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Serialized drive destruction certificates provided post-process for compliance audits and legal protection.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

// 5. EPR COMPLIANCE PAGE
function EPRCompliancePage() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="text-emerald-600 font-semibold text-xs uppercase tracking-wider">Regulatory Compliance</span>
          <h1 className="text-4xl font-black text-slate-900 mt-2 mb-4">Extended Producer Responsibility (EPR)</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Turnkey target fulfillment, credit generation, and portal filings for Producers, Importers, and Brand Owners (PIBOs).
          </p>
        </div>

        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl mb-16 space-y-8">
          <h2 className="text-2xl font-bold text-emerald-400">Our Comprehensive EPR Framework</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
              <h3 className="font-bold text-lg mb-2">1. Target Assessment</h3>
              <p className="text-slate-400 text-sm">Evaluating historical sales data to determine exact annual statutory EPR recycling targets.</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
              <h3 className="font-bold text-lg mb-2">2. Physical Collection</h3>
              <p className="text-slate-400 text-sm">Aggregating required scrap tonnage through certified reverse logistics networks.</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
              <h3 className="font-bold text-lg mb-2">3. Portal Filings</h3>
              <p className="text-slate-400 text-sm">Uploading mandatory certificates and compliance filings directly to CPCB portals.</p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

// 6. INDUSTRIES SERVED PAGE
function IndustriesPage() {
  const industries = [
    { icon: <Building2 className="w-8 h-8 text-emerald-600" />, name: "IT & Software Enterprise", detail: "Corporate desktop refreshes, data center decommissionings, and server disposal." },
    { icon: <Factory className="w-8 h-8 text-emerald-600" />, name: "Electronics Manufacturers", detail: "EPR obligation fulfillment, manufacturing reject recycling, and PCB processing." },
    { icon: <Landmark className="w-8 h-8 text-emerald-600" />, name: "Government & Banking", detail: "Tender-based asset recycling with strict chain-of-custody and data wiping." },
    { icon: <Globe className="w-8 h-8 text-emerald-600" />, name: "Telecom Infrastructure", detail: "Telecom tower hardware, exchange switches, and heavy battery systems." }
  ];

  return (
    <PageWrapper>
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold text-xs uppercase tracking-wider">Market Sectors</span>
          <h1 className="text-4xl font-black text-slate-900 mt-2 mb-4">Industries We Serve</h1>
          <p className="text-slate-600 text-base">Dedicated disposal and compliance workflows designed for specific business operations.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-5">
              <div className="p-4 bg-emerald-50 rounded-xl flex-shrink-0">{ind.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{ind.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{ind.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

// 7. GOALS PAGE
function GoalsPage() {
  const goals = [
    "Onboard 500+ corporate clients for structured e-waste programs.",
    "Achieve 100% target fulfillment for all partnered EPR brand accounts.",
    "Execute educational e-waste awareness programs across 100+ institutions.",
    "Expand operational reverse logistics across all Tier-1 and Tier-2 Indian hubs.",
    "Scale facility processing capacity to 25,000+ MT annually."
  ];

  return (
    <PageWrapper>
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold text-xs uppercase tracking-wider">Company Roadmap</span>
          <h1 className="text-4xl font-black text-slate-900 mt-2 mb-4">Goals & Opportunities</h1>
          <p className="text-slate-600 text-base">Strategic objectives driving our infrastructure growth across India.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {goals.map((goal, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4 items-start">
              <span className="text-2xl font-black text-emerald-500 bg-emerald-50 px-3 py-1 rounded-lg">
                0{idx + 1}
              </span>
              <p className="text-slate-700 text-sm font-medium mt-1 leading-relaxed">{goal}</p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}


// 8. CONTACT / REQUEST PICKUP PAGE
function ContactPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    city: '',
    wasteType: 'IT Hardware & Laptops',
    approxQuantity: '',
    requirement: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitMessage('');
    setIsSuccess(false);

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: '6cc4433c-8a46-4077-b4e5-c57644168ff4',
            subject: `New Business Inquiry - ${formData.companyName}`,
            from_name: 'Dream Waste Solutions Website',
            replyto: formData.email,
            ...formData
          })
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        setSubmitMessage(
          'Thank you! Your business inquiry has been sent successfully.'
        );

        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          city: '',
          wasteType: 'IT Hardware & Laptops',
          approxQuantity: '',
          requirement: ''
        });
      } else {
        setSubmitMessage(
          result.message ||
          'Unable to send your inquiry. Please try again.'
        );
      }
    } catch (error) {
      setSubmitMessage(
        'A network error occurred. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold text-xs uppercase tracking-wider">
            Inquiry & Scheduling
          </span>
          <h1 className="text-4xl font-black text-slate-900 mt-2 mb-4">
            Request a Pickup / Business Inquiry
          </h1>
          <p className="text-slate-600">
            Fill out your organizational requirements below to receive a
            formal commercial quote or schedule reverse logistics.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Lead Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        companyName: e.target.value
                      })
                    }
                    placeholder="Enterprise Pvt Ltd"
                    className="w-full mt-1.5 bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contactPerson: e.target.value
                      })
                    }
                    placeholder="John Doe"
                    className="w-full mt-1.5 bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value
                      })
                    }
                    placeholder="john@company.com"
                    className="w-full mt-1.5 bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        city: e.target.value
                      })
                    }
                    placeholder="Noida / Gurgaon / Mumbai"
                    className="w-full mt-1.5 bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase">
                    Primary E-Waste Category
                  </label>
                  <select
                    value={formData.wasteType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        wasteType: e.target.value
                      })
                    }
                    className="w-full mt-1.5 bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                  >
                    <option>IT Hardware & Laptops</option>
                    <option>Servers & Data Center Racks</option>
                    <option>Telecom & Networking Scrap</option>
                    <option>EPR Target Filing / Compliance</option>
                    <option>Mixed Electronics Scrap</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase">
                    Approximate Quantity / Weight
                  </label>
                  <input
                    type="text"
                    value={formData.approxQuantity}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        approxQuantity: e.target.value
                      })
                    }
                    placeholder="e.g. 50 Laptops, 500 kg, or 2 Tons"
                    className="w-full mt-1.5 bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase">
                  Detailed Requirement
                </label>
                <textarea
                  rows="4"
                  value={formData.requirement}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      requirement: e.target.value
                    })
                  }
                  placeholder="Provide any specific requirements such as on-site data wiping or EPR credit needs..."
                  className="w-full mt-1.5 bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                />
              </div>

              {/* Submission status */}
              {submitMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`text-sm font-medium rounded-xl border p-4 ${isSuccess
                      ? 'text-emerald-800 bg-emerald-50 border-emerald-200'
                      : 'text-red-700 bg-red-50 border-red-200'
                    }`}
                >
                  {submitMessage}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-extrabold py-4 rounded-xl shadow-lg shadow-emerald-500/25 transition-all text-sm uppercase tracking-wider"
              >
                {isSubmitting
                  ? 'Sending Inquiry...'
                  : 'Submit Business Inquiry'}
              </button>
            </form>
          </div>

          {/* Location Sidebar */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 space-y-6 shadow-lg">
              <h3 className="text-xl font-bold text-emerald-400">
                Official Communications
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-200">
                      Corporate Office
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                      Office No. 1812, 18th Floor, Tower C, Bhutani
                      Alphathum, Sector 90, Noida, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                  <Factory className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-200">
                      Factory Facility
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                      Khasra No. 575, Village Panwari, Tehsil Sardhana,
                      Meerut, Uttar Pradesh – 250342
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                  <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-200">
                      Official Email
                    </p>
                    <a
                      href="mailto:Usman@dreamwastesolutions.com"
                      className="text-emerald-400 text-xs hover:underline font-medium"
                    >
                      Usman@dreamwastesolutions.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-64">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.748135850937!2d77.4103133!3d28.517235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8a958b4ba15%3A0x6b7440e11894a86!2sBhutani%20Alphathum!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}


// Router Container
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/e-waste-recycling" element={<EWasteRecyclingPage />} />
        <Route path="/it-asset-disposal" element={<ITAssetDisposalPage />} />
        <Route path="/epr-compliance" element={<EPRCompliancePage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-slate-50 text-slate-800 min-h-screen flex flex-col justify-between font-sans antialiased">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}