import React, { useEffect, memo } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin, FiTwitter as Twitter, FiInstagram as Instagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Orb from './Orb';

const ContactSection = memo(function ContactSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    { Icon: Mail, title: "Email", info: "safvann000@gmail.com", href: "mailto:safvann000@gmail.com" },
    { Icon: Phone, title: "Phone", info: "+91 8590872362", href: "tel:+918590872362" },
    { Icon: MapPin, title: "Location", info: "Palakkad, Kerala, India", href: "#" },
  ];

  const socialLinks = [
    { Icon: Github, href: "https://github.com/safuhh", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/safvan-p-/", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="min-h-screen relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Orb
          hoverIntensity={2}
          rotateOnHover
          hue={0}
          forceHoverState={false}
          backgroundColor="#000000"
        />
      </div>
      <div className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-20 xl:px-20 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16 reveal">
          <p className="text-neutral-500 tracking-[0.3em] text-sm uppercase mb-6">— GET IN TOUCH —</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-100 leading-tight">
            Let's Work
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-100 italic mt-2">
            Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8 reveal reveal-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-100 mb-4">Have a project in mind?</h3>
              <p className="text-neutral-400 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            {/* CONTACT CARDS */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.Icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start space-x-4 p-5 bg-neutral-800/40 backdrop-blur-md border border-neutral-700/50 hover:bg-neutral-800/60 
                      rounded-xl hover:border-white hover:scale-105 transition-all duration-300 group reveal reveal-left"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-neutral-700/50 flex items-center justify-center group-hover:bg-neutral-600/50 transition-colors">
                      <Icon className="w-6 h-6 text-neutral-300" />
                    </div>
                    <div>
                      <h4 className="text-neutral-100 font-semibold mb-1">{item.title}</h4>
                      <p className="text-neutral-400 group-hover:text-neutral-200 transition-colors">
                        {item.info}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* SOCIAL ICONS */}
            <div>
              <h4 className="text-neutral-100 font-semibold mb-4 flex items-center space-x-2">
                <span className="w-1 h-6 bg-neutral-500 rounded"></span>
                <span>Follow Me</span>
              </h4>

              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.Icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow on ${social.label}`}
                      className="w-12 h-12 rounded-full bg-neutral-800/40 backdrop-blur-md 
                        flex items-center justify-center border border-neutral-700/50 
                        text-neutral-400 hover:text-neutral-100 hover:border-neutral-500 
                        hover:scale-110 transition-all duration-300 reveal"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — DIRECT CONTACT BUTTONS */}
          <div className="reveal reveal-right flex flex-col justify-center space-y-6">
            
            <a
              href="mailto:rihenww@gmail.com"
              className="group flex items-center justify-between p-5 sm:p-6 bg-neutral-800/40 backdrop-blur-xl border border-neutral-700/50 rounded-3xl hover:bg-neutral-800/80 hover:border-white transition-all duration-500 shadow-xl"
            >
              <div className="flex items-center space-x-4 sm:space-x-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-100" />
                </div>
                <div className="text-left">
                  <p className="text-neutral-400 text-xs sm:text-sm font-medium tracking-wider uppercase mb-1">Direct Message</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-100">Email Me</h3>
                </div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-600 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 group-hover:text-black transform group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>

            <a
              href="https://wa.me/918075608994"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 sm:p-6 bg-neutral-800/40 backdrop-blur-xl border border-neutral-700/50 rounded-3xl hover:bg-neutral-800/80 hover:border-[#25D366] transition-all duration-500 shadow-xl"
            >
              <div className="flex items-center space-x-4 sm:space-x-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#25D366]/20 to-[#128C7E]/20 border border-[#25D366]/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-[#25D366]" />
                </div>
                <div className="text-left">
                  <p className="text-neutral-400 text-xs sm:text-sm font-medium tracking-wider uppercase mb-1">Instant Chat</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-100">WhatsApp</h3>
                </div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-600 flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all duration-500">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;