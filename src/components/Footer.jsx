import React from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', Icon: Github, href: 'https://github.com/riihennn', color: 'hover:text-white' },
    { name: 'LinkedIn', Icon: Linkedin, href: 'https://www.linkedin.com/in/rihenkrishna/', color: 'hover:text-white' },
    { name: 'Twitter', Icon: Twitter, href: 'https://x.com/riihennn', color: 'hover:text-white' },
    { name: 'Instagram', Icon: Instagram, href: 'https://www.instagram.com/riihennn/', color: 'hover:text-white' },
    { name: 'Email', Icon: Mail, href: 'mailto:rihenww@gmail.com', color: 'hover:text-white' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-[#0a0a0a] to-[#111] relative overflow-hidden border-t border-neutral-800/50">
      {/* Global gradient orbs - Black & White */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-white/5 via-neutral-400/3 to-transparent rounded-full blur-3xl"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-neutral-300/5 via-white/3 to-transparent rounded-full blur-3xl"></div>
      
      {/* Global background pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.03) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-24 xl:px-24 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div>
                  <h3 className="text-neutral-100 font-bold text-xl">RIHEN KRISHNA</h3>
                  <p className="text-neutral-400 text-sm">MERN Stack Developer</p>
                </div>
              </div>
              <p className="text-neutral-400 leading-relaxed mb-6 max-w-md">
                Building scalable web applications with modern technologies. 
                Passionate about clean code and exceptional user experiences.
              </p>
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.Icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 rounded-full bg-neutral-800/50 backdrop-blur-md flex items-center justify-center border border-neutral-700/50 text-neutral-400 ${social.color} hover:scale-110 hover:border-white transition-all duration-300`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-neutral-100 font-bold text-lg mb-6 flex items-center space-x-2">
                <span className="w-1 h-6  bg-neutral-500 rounded"></span>
                <span>Quick Links</span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-neutral-100 font-bold text-lg mb-6 flex items-center space-x-2">
                <span className="w-1 h-6  bg-neutral-500 rounded"></span>
                <span>Get In Touch</span>
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:rihen@example.com"
                    className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-start space-x-3"
                  >
                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>rihenww@gmail.com</span>
                  </a>
                </li>
                <li className="text-neutral-400 flex items-start space-x-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Malappuram, Kerala, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800/50 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-400 text-sm text-center md:text-left">
              © 2025 Rihen Krishna. All rights reserved. Made with and React
            </p>
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-5 py-2 bg-neutral-800/50 hover:bg-neutral-500/20 border border-neutral-700/50 hover:border-neutral-500/50 rounded-full text-neutral-300 hover:text-neutral-400 transition-all duration-300 hover:scale-105"
              aria-label="Scroll to top"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}