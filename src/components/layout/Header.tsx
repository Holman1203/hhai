'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Mail, Search } from 'lucide-react';

/* ── Navigation data ────────────────────────────────────── */

const whoWeAre = [
  { name: 'About Us',        href: '/about',  desc: 'Our story, history & organisational profile' },
  { name: 'Mission & Vision',href: '/team',   desc: 'The purpose and goals that drive HHAI' },
  { name: 'Our Team',        href: '/team',   desc: 'Meet the leadership behind HHAI' },
];

const whatWeDo = [
  { name: 'Health',                    href: '/programs/health',        icon: '🏥' },
  { name: 'Nutrition',                 href: '/programs/nutrition',     icon: '🌱' },
  { name: 'WASH',                      href: '/programs/wash',          icon: '💧' },
  { name: 'Protection',                href: '/programs/protection',    icon: '🛡️' },
  { name: 'Education',                 href: '/programs/education',     icon: '📚' },
  { name: 'Food Security & Livelihoods', href: '/programs/food-security', icon: '🌾' },
];

const blog = [
  { name: 'Projects',        href: '/projects',      icon: '📋' },
  { name: 'Newsletter',      href: '/media#news',    icon: '📰' },
  { name: 'Press Release',   href: '/media#press',   icon: '📄' },
  { name: 'Success Stories', href: '/media',         icon: '⭐' },
  { name: 'Media Gallery',   href: '/media#gallery', icon: '🖼️' },
];

const joinUs = [
  { name: 'Volunteer',       href: '/get-involved#volunteer' },
  { name: 'Partner With Us', href: '/get-involved#partners'  },
  { name: 'Careers',         href: '/get-involved#careers'   },
  { name: 'Internships',     href: '/get-involved#internships'},
  { name: 'Donate',          href: '/get-involved#donate'    },
  { name: 'Contact Us',      href: '/contact'                },
];

/* ── Component ──────────────────────────────────────────── */

export default function Header() {
  const [isMenuOpen,      setIsMenuOpen     ] = useState(false);
  const [isWhoWeAreOpen,  setIsWhoWeAreOpen ] = useState(false);
  const [isWhatWeDoOpen,  setIsWhatWeDoOpen ] = useState(false);
  const [isBlogOpen,      setIsBlogOpen     ] = useState(false);
  const [isJoinUsOpen,    setIsJoinUsOpen   ] = useState(false);
  const [isScrolled,      setIsScrolled     ] = useState(false);
  const [searchOpen,      setSearchOpen     ] = useState(false);

  /* Mobile accordion states */
  const [mWhoWeAre,  setMWhoWeAre ] = useState(false);
  const [mWhatWeDo,  setMWhatWeDo ] = useState(false);
  const [mBlog,      setMBlog     ] = useState(false);
  const [mJoinUs,    setMJoinUs   ] = useState(false);

  const pathname = usePathname();
  const isHomePage   = pathname === '/';
  const isTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 40);
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsWhoWeAreOpen(false);
    setIsWhatWeDoOpen(false);
    setIsBlogOpen(false);
    setIsJoinUsOpen(false);
  };

  /* Active link class helper */
  const navCls = (href: string, exact = false) => {
    const active = exact ? pathname === href : pathname.startsWith(href);
    const base = 'px-3 py-2 text-sm font-medium transition-colors rounded-md';
    if (isTransparent) {
      return `${base} ${active ? 'bg-white/25 text-white font-semibold' : 'text-white hover:bg-white/15'}`;
    }
    return `${base} ${active
      ? 'text-[#0B4422] bg-[#EBF8F1] font-bold'
      : 'text-[#0F1720] hover:text-[#0B4422] hover:bg-[#EBF8F1]'}`;
  };

  /* Dropdown menu base style */
  const dropdownCls = 'absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 min-w-[220px]';
  const dropLinkCls = 'flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-[#EBF8F1] hover:text-[#0B4422] transition-colors rounded-lg mx-1';

  return (
    <>
      {/* ── Top bar ─────────────────────────────── */}
      <div className={`text-xs py-2 hidden md:block transition-all duration-300 ${
        isTransparent
          ? 'opacity-0 pointer-events-none h-0 py-0 overflow-hidden'
          : 'bg-[#0B4422] text-white opacity-100'
      }`}>
        <div className="container-site flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+2347067604582" className="flex items-center gap-1.5 hover:text-green-300 transition-colors">
              <Phone size={12} /> +234 706 760 4582
            </a>
            <a href="mailto:haskehumanitarianaidinitiative@gmail.com" className="flex items-center gap-1.5 hover:text-green-300 transition-colors">
              <Mail size={12} /> haskehumanitarianaidinitiative@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-green-300/70 text-xs">Community Health &amp; Rural Development · Nigeria</span>
            <Link
              href="/get-involved#donate"
              className="text-white px-4 py-1.5 rounded-full font-semibold transition-colors inline-flex items-center gap-1.5 text-xs tracking-wide"
              style={{ backgroundColor: '#7848A8' }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#562E8F')}
              onMouseOut={e  => (e.currentTarget.style.backgroundColor = '#7848A8')}
            >
              ♥ Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main header ─────────────────────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent shadow-none'
          : isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white shadow-sm'
      }`}>
        <div className="container-site">
          <div className="flex items-center justify-between h-20 lg:h-28">

            {/* Logo */}
            <Link href="/" onClick={closeAll} className="flex items-center group">
              <div className={`w-16 h-16 lg:w-24 lg:h-24 relative flex-shrink-0 transition-all duration-300 ${isTransparent ? 'drop-shadow-2xl' : 'drop-shadow-sm'}`}>
                <Image
                  src="/images/hhai-logo.png"
                  alt="Haske Humanitarian Aid Initiative"
                  fill className="object-contain"
                  sizes="(max-width: 1024px) 64px, 96px"
                  priority
                />
              </div>
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">

              {/* Home */}
              <Link href="/" className={navCls('/', true)}>Home</Link>

              {/* Who We Are */}
              <div className="relative" onMouseLeave={() => setIsWhoWeAreOpen(false)}>
                <button
                  onMouseEnter={() => setIsWhoWeAreOpen(true)}
                  onClick={() => setIsWhoWeAreOpen(!isWhoWeAreOpen)}
                  className={`flex items-center gap-1 ${navCls('/about')}`}
                  aria-expanded={isWhoWeAreOpen}
                >
                  Who We Are <ChevronDown size={13} className={`transition-transform ${isWhoWeAreOpen ? 'rotate-180' : ''}`} />
                </button>
                {isWhoWeAreOpen && (
                  <div className={dropdownCls}>
                    {whoWeAre.map(item => (
                      <Link key={item.name} href={item.href} onClick={() => setIsWhoWeAreOpen(false)} className={dropLinkCls}>
                        <div>
                          <div className="font-semibold text-[#0F1720] text-sm">{item.name}</div>
                          <div className="text-gray-400 text-xs mt-0.5">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* What We Do */}
              <div className="relative" onMouseLeave={() => setIsWhatWeDoOpen(false)}>
                <button
                  onMouseEnter={() => setIsWhatWeDoOpen(true)}
                  onClick={() => setIsWhatWeDoOpen(!isWhatWeDoOpen)}
                  className={`flex items-center gap-1 ${navCls('/programs')}`}
                  aria-expanded={isWhatWeDoOpen}
                >
                  What We Do <ChevronDown size={13} className={`transition-transform ${isWhatWeDoOpen ? 'rotate-180' : ''}`} />
                </button>
                {isWhatWeDoOpen && (
                  <div className={`${dropdownCls} w-64`}>
                    {whatWeDo.map(p => (
                      <Link key={p.href} href={p.href} onClick={() => setIsWhatWeDoOpen(false)} className={dropLinkCls}>
                        <span className="text-base">{p.icon}</span>
                        <span className="font-medium">{p.name}</span>
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <Link href="/programs" onClick={() => setIsWhatWeDoOpen(false)} className={`${dropLinkCls} font-semibold text-[#0B4422]`}>
                        View All Programs →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Blog */}
              <div className="relative" onMouseLeave={() => setIsBlogOpen(false)}>
                <button
                  onMouseEnter={() => setIsBlogOpen(true)}
                  onClick={() => setIsBlogOpen(!isBlogOpen)}
                  className={`flex items-center gap-1 ${navCls('/media')}`}
                  aria-expanded={isBlogOpen}
                >
                  Blog <ChevronDown size={13} className={`transition-transform ${isBlogOpen ? 'rotate-180' : ''}`} />
                </button>
                {isBlogOpen && (
                  <div className={dropdownCls}>
                    {blog.map(item => (
                      <Link key={item.name} href={item.href} onClick={() => setIsBlogOpen(false)} className={dropLinkCls}>
                        <span className="text-base">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Join Us */}
              <div className="relative" onMouseLeave={() => setIsJoinUsOpen(false)}>
                <button
                  onMouseEnter={() => setIsJoinUsOpen(true)}
                  onClick={() => setIsJoinUsOpen(!isJoinUsOpen)}
                  className={`flex items-center gap-1 ${navCls('/get-involved')}`}
                  aria-expanded={isJoinUsOpen}
                >
                  Join Us <ChevronDown size={13} className={`transition-transform ${isJoinUsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isJoinUsOpen && (
                  <div className={dropdownCls}>
                    {joinUs.map(item => (
                      <Link key={item.name} href={item.href} onClick={() => setIsJoinUsOpen(false)} className={dropLinkCls}>
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

            </nav>

            {/* ── Right actions ── */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2 rounded-md transition-colors ${isTransparent ? 'text-white hover:bg-white/15' : 'text-gray-600 hover:text-[#0B4422] hover:bg-[#EBF8F1]'}`}
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <Link
                href="/get-involved#donate"
                className={`hidden lg:inline-flex items-center gap-1.5 text-sm py-2.5 font-semibold px-6 rounded-full transition-all duration-200 tracking-wide ${
                  isTransparent
                    ? 'border-2 border-white/70 text-white hover:bg-white/15'
                    : 'text-white hover:-translate-y-px'
                }`}
                style={!isTransparent ? { backgroundColor: '#7848A8', boxShadow: '0 4px 16px rgba(120,72,168,0.3)' } : {}}
                onMouseOver={e => { if (!isTransparent) e.currentTarget.style.backgroundColor = '#562E8F'; }}
                onMouseOut={e  => { if (!isTransparent) e.currentTarget.style.backgroundColor = '#7848A8'; }}
              >
                ♥ Donate Now
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-md transition-colors ${isTransparent ? 'text-white hover:bg-white/15' : 'text-gray-600 hover:text-[#0B4422] hover:bg-[#EBF8F1]'}`}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="pb-3 border-t border-gray-100 pt-3">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search programs, projects, news..."
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4422]"
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>

        {/* ── Mobile menu ─────────────────────────── */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg max-h-[80vh] overflow-y-auto">
            <nav className="container-site py-4 space-y-1" aria-label="Mobile navigation">

              <Link href="/" onClick={closeAll} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#EBF8F1] hover:text-[#0B4422] rounded-lg transition-colors">
                Home
              </Link>

              {/* Who We Are */}
              <div>
                <button onClick={() => setMWhoWeAre(!mWhoWeAre)} className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#EBF8F1] hover:text-[#0B4422] rounded-lg transition-colors">
                  Who We Are <ChevronDown size={14} className={`transition-transform ${mWhoWeAre ? 'rotate-180' : ''}`} />
                </button>
                {mWhoWeAre && (
                  <div className="ml-4 mt-1 space-y-1 pb-1">
                    {whoWeAre.map(item => (
                      <Link key={item.name} href={item.href} onClick={closeAll} className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#0B4422] hover:bg-[#EBF8F1] transition-colors rounded-lg">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-gray-400 text-xs block">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* What We Do */}
              <div>
                <button onClick={() => setMWhatWeDo(!mWhatWeDo)} className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#EBF8F1] hover:text-[#0B4422] rounded-lg transition-colors">
                  What We Do <ChevronDown size={14} className={`transition-transform ${mWhatWeDo ? 'rotate-180' : ''}`} />
                </button>
                {mWhatWeDo && (
                  <div className="ml-4 mt-1 space-y-1 pb-1">
                    {whatWeDo.map(p => (
                      <Link key={p.href} href={p.href} onClick={closeAll} className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:text-[#0B4422] hover:bg-[#EBF8F1] transition-colors rounded-lg">
                        <span>{p.icon}</span> <span className="font-medium">{p.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Blog */}
              <div>
                <button onClick={() => setMBlog(!mBlog)} className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#EBF8F1] hover:text-[#0B4422] rounded-lg transition-colors">
                  Blog <ChevronDown size={14} className={`transition-transform ${mBlog ? 'rotate-180' : ''}`} />
                </button>
                {mBlog && (
                  <div className="ml-4 mt-1 space-y-1 pb-1">
                    {blog.map(item => (
                      <Link key={item.name} href={item.href} onClick={closeAll} className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:text-[#0B4422] hover:bg-[#EBF8F1] transition-colors rounded-lg">
                        <span>{item.icon}</span> <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Join Us */}
              <div>
                <button onClick={() => setMJoinUs(!mJoinUs)} className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#EBF8F1] hover:text-[#0B4422] rounded-lg transition-colors">
                  Join Us <ChevronDown size={14} className={`transition-transform ${mJoinUs ? 'rotate-180' : ''}`} />
                </button>
                {mJoinUs && (
                  <div className="ml-4 mt-1 space-y-1 pb-1">
                    {joinUs.map(item => (
                      <Link key={item.name} href={item.href} onClick={closeAll} className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-[#0B4422] hover:bg-[#EBF8F1] transition-colors rounded-lg">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 px-4">
                <Link
                  href="/get-involved#donate"
                  onClick={closeAll}
                  className="w-full justify-center inline-flex items-center gap-2 text-white font-semibold py-3.5 rounded-full text-sm tracking-wide transition-all"
                  style={{ backgroundColor: '#7848A8' }}
                >
                  ♥ Donate Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
