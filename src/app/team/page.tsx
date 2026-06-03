import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Target, Eye, Heart, Shield, Users, Globe, CheckCircle,
  ArrowRight, Phone, Mail,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Team, Mission & Vision',
  description:
    'Meet the dedicated leadership team behind Haske Humanitarian Aid Initiative and learn about our mission, vision, and core values driving community health across Nigeria.',
};

/* ── Data ──────────────────────────────────────────────── */

const team = [
  {
    name: 'Emelda Jummai Musa',
    role: 'Founder & Executive Director',
    bio: 'Founding leader of HHAI with a deep passion for community health and rural development. Drives the organisation\'s vision of ensuring women and children\'s health needs are prioritised across underserved communities in Nigeria.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&fit=crop&q=85',
    phone: '+234 809 225 5840',
    email: 'haskehumanitarianaidinitiative@gmail.com',
    tag: 'Leadership',
    tagColor: 'bg-[#EBF8F1] text-[#0B4422]',
  },
  {
    name: 'Jerry Mike',
    role: 'Program Manager',
    bio: 'Experienced program manager overseeing HHAI\'s health and nutrition interventions. Specialises in community engagement, stakeholder coordination, and program implementation at state, LGA, and community levels.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=85',
    phone: '+234 703 723 4399',
    email: '',
    tag: 'Programs',
    tagColor: 'bg-[#EEE6F8] text-[#562E8F]',
  },
  {
    name: 'Mary Adikwu',
    role: 'Program Manager',
    bio: 'Dedicated program manager with expertise in maternal and child health, nutritional programming, and gender empowerment. Coordinates capacity-building initiatives across target communities.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&auto=format&fit=crop&q=85',
    phone: '+234 813 383 1835',
    email: '',
    tag: 'Programs',
    tagColor: 'bg-[#EEE6F8] text-[#562E8F]',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Honesty',
    desc: 'We uphold truthfulness and sincerity in all our engagements with communities, partners, and stakeholders.',
    color: 'bg-[#EBF8F1]',
    iconColor: 'text-[#0B4422]',
  },
  {
    icon: Shield,
    title: 'Transparency & Accountability',
    desc: 'We are open and accountable to the communities we serve, our donors, and the general public.',
    color: 'bg-[#EEE6F8]',
    iconColor: 'text-[#7848A8]',
  },
  {
    icon: Users,
    title: 'Mutual Respect',
    desc: 'We treat every individual with dignity and respect, valuing the contributions of community members and partners alike.',
    color: 'bg-[#EBF8F1]',
    iconColor: 'text-[#0B4422]',
  },
  {
    icon: Globe,
    title: 'Gender Sensitivity',
    desc: 'We mainstream gender equity across all our programs, ensuring women and girls are at the forefront of community development.',
    color: 'bg-[#EEE6F8]',
    iconColor: 'text-[#7848A8]',
  },
  {
    icon: Target,
    title: 'Good Interpersonal Relationship',
    desc: 'We foster positive, collaborative relationships within our team and with the communities and partners we engage.',
    color: 'bg-[#EBF8F1]',
    iconColor: 'text-[#0B4422]',
  },
  {
    icon: Eye,
    title: 'Innovation',
    desc: 'We accept challenges and build new innovations from each experience, continually improving how we serve communities.',
    color: 'bg-[#EEE6F8]',
    iconColor: 'text-[#7848A8]',
  },
];

const objectives = [
  'Create awareness among community members about positive health-seeking behaviour and the importance of maternal and child health services.',
  'Promote capacity building among community members towards solving their identified health needs through knowledge, skills, and local resources.',
  'Engage and interface with key stakeholders at state, LGA, and community levels to leverage existing structures for sustained health and development outcomes.',
  'Empower women economically — providing skills, knowledge, and confidence to support their families and contribute meaningfully to their communities.',
];

/* ── Page ──────────────────────────────────────────────── */

export default function TeamPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative bg-[#0B4422] py-28 overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=600&auto=format&fit=crop&q=85"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        {/* Subtle purple accent */}
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#7848A8]/15 to-transparent pointer-events-none" />

        <div className="relative z-10 container-site text-center max-w-3xl mx-auto">
          <p className="text-[#86efac] font-semibold text-xs uppercase tracking-[0.2em] mb-4">
            Haske Humanitarian Aid Initiative
          </p>
          <h1
            className="font-bold text-white mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
          >
            Our Team, Mission<br />
            <em style={{ fontStyle: 'italic', color: '#86efac' }}>&amp; Vision</em>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
            The people, purpose, and principles that guide every programme HHAI delivers across Nigeria.
          </p>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container-site">

          {/* Label + heading */}
          <div className="text-center mb-20">
            <p className="section-subheading">Why We Exist</p>
            <h2 className="section-heading">
              Driven by <em>Purpose</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

            {/* Mission */}
            <div className="group relative rounded-3xl p-10 bg-[#0B4422] text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#1B6B38]/40 rounded-full -translate-y-16 translate-x-16 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <Target size={22} className="text-white" />
                </div>
                <p className="font-semibold text-[#86efac] text-xs uppercase tracking-[0.2em] mb-3">Our Mission</p>
                <h3 className="font-bold text-2xl text-white mb-4 leading-snug" style={{ letterSpacing: '-0.015em' }}>
                  Building Healthier <em style={{ fontStyle: 'italic', color: '#86efac' }}>Communities</em>
                </h3>
                <div className="w-10 h-[2px] bg-[#7848A8] rounded-full mb-6" />
                <p className="text-white/80 leading-relaxed">
                  To build an enabling environment where women and children under-5&apos;s health are being taken into cognizance — through community awareness, capacity building, and sustained stakeholder engagement across underserved communities in Nigeria.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative rounded-3xl p-10 bg-[#7848A8] text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#562E8F]/40 rounded-full -translate-y-16 translate-x-16 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <Eye size={22} className="text-white" />
                </div>
                <p className="font-semibold text-purple-200 text-xs uppercase tracking-[0.2em] mb-3">Our Vision</p>
                <h3 className="font-bold text-2xl text-white mb-4 leading-snug" style={{ letterSpacing: '-0.015em' }}>
                  A Nigeria of <em style={{ fontStyle: 'italic', color: '#d9baf7' }}>Dignity & Opportunity</em>
                </h3>
                <div className="w-10 h-[2px] bg-white/40 rounded-full mb-6" />
                <p className="text-white/80 leading-relaxed">
                  A Nigeria where every woman and child — regardless of location, economic status, or background — has access to quality healthcare, adequate nutrition, and economic opportunities to live a life of dignity and self-reliance.
                </p>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-gray-100">
            <div>
              <p className="section-subheading">Aims & Objectives</p>
              <h2 className="section-heading mb-8">
                What We Set Out <em>to Achieve</em>
              </h2>
              <div className="space-y-5">
                {objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs text-white"
                      style={{ backgroundColor: i % 2 === 0 ? '#0B4422' : '#7848A8' }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{obj}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-96 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&h=500&auto=format&fit=crop&q=85"
                alt="HHAI community program"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B4422]/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#00A850] flex-shrink-0" />
                    <p className="text-[#0B4422] font-semibold text-sm">
                      CAC Registered NGO · No. 182258 · Est. 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────── */}
      <section className="py-28 bg-[#F8F6F3]">
        <div className="container-site">
          <div className="text-center mb-20">
            <p className="section-subheading">What Guides Us</p>
            <h2 className="section-heading">
              Our Core <em>Values</em>
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">
              Six principles that shape every decision, every programme, and every relationship at HHAI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="group bg-white rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(15,23,32,0.1)]"
              >
                <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mb-5`}>
                  <v.icon size={22} className={v.iconColor} />
                </div>
                <h3 className="font-bold text-[#0F1720] text-base mb-3" style={{ letterSpacing: '-0.01em' }}>
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP TEAM ──────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container-site">
          <div className="text-center mb-20">
            <p className="section-subheading">The People Behind HHAI</p>
            <h2 className="section-heading">
              Meet the <em>Leadership</em>
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">
              Passionate individuals committed to improving health outcomes and building resilient communities across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(15,23,32,0.10)]"
              >
                {/* Photo */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Green-to-transparent bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B4422]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="p-7">
                  <span className={`tag-pill ${member.tagColor} text-[10px] mb-3`}>{member.tag}</span>
                  <h3 className="font-bold text-[#0F1720] text-lg mt-2 mb-1" style={{ letterSpacing: '-0.015em' }}>
                    {member.name}
                  </h3>
                  <p className="text-[#7848A8] text-xs font-semibold uppercase tracking-wider mb-4">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{member.bio}</p>

                  {/* Contact */}
                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    <a
                      href={`tel:${member.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-[#0B4422] transition-colors"
                    >
                      <Phone size={14} className="text-[#00A850] flex-shrink-0" />
                      {member.phone}
                    </a>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-[#0B4422] transition-colors"
                      >
                        <Mail size={14} className="text-[#00A850] flex-shrink-0" />
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-24 bg-[#0B4422] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#7848A8]/20 pointer-events-none" />
        <div className="relative z-10 container-site text-center max-w-2xl mx-auto">
          <h2
            className="font-bold text-white mb-5"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}
          >
            Join Us in <em style={{ fontStyle: 'italic', color: '#86efac' }}>Building Change</em>
          </h2>
          <p className="text-white/70 mb-10 leading-relaxed text-lg">
            HHAI is always looking for passionate individuals, organisations, and donors who share our vision for sustainable community health across Nigeria.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/get-involved#donate"
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-200 hover:-translate-y-px"
              style={{ backgroundColor: '#7848A8', boxShadow: '0 4px 20px rgba(120,72,168,0.4)' }}
            >
              ♥ Donate Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wide hover:bg-white/10 transition-all duration-200"
            >
              Get in Touch <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
