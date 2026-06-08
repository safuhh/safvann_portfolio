import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import Orb from './Orb';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    // Validate fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all fields.'
      });
      setTimeout(() => setSubmitStatus({ type: '', message: '' }), 3000);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      setTimeout(() => setSubmitStatus({ type: '', message: '' }), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch(
        'https://api.emailjs.com/api/v1.0/email/send',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: 'service_8il2sh1',
            template_id: 'template_v8pvmmh',
            user_id: '2KJkN5doDMaB1qXi8',
            template_params: {
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message
            }
          })
        }
      );

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please email me directly at rihenww@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus({ type: '', message: '' }), 5000);
    }
  };

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
  }, [submitStatus.message]); // Re-observe if elements change (like status box)

  const contactInfo = [
    { Icon: Mail, title: "Email", info: "rihenww@gmail.com", href: "mailto:rihenww@gmail.com" },
    { Icon: Phone, title: "Phone", info: "+91 80756 08994", href: "tel:+918075608994" },
    { Icon: MapPin, title: "Location", info: "Kozhikode, Kerala, India", href: "#" },
  ];

  const socialLinks = [
    { Icon: Github, href: "https://github.com/riihennn", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/rihenkrishna/", label: "LinkedIn" },
    { Icon: Twitter, href: "https://x.com/riihennn", label: "Twitter" },
    { Icon: Instagram, href: "https://www.instagram.com/riihennn/", label: "Instagram" },
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

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

          {/* RIGHT SIDE — FORM */}
          <div className="reveal reveal-right">
            <div className="bg-neutral-800/40 backdrop-blur-xl border border-neutral-700/50 rounded-2xl p-8 space-y-6">

              {/* Status Message */}
              {submitStatus.message && (
                <div 
                  className={`p-4 rounded-lg transition-all duration-300 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/20 border border-green-500/50 text-green-200' 
                      : 'bg-red-500/20 border border-red-500/50 text-red-200'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Name */}
              <div className="reveal" style={{ transitionDelay: '100ms' }}>
                <label className="block text-neutral-100 font-medium mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700/50 rounded-lg text-neutral-100 focus:ring-2 focus:ring-neutral-500/20 focus:outline-none"
                  placeholder="Enter Your Name"
                />
              </div>

              {/* Email */}
              <div className="reveal" style={{ transitionDelay: '200ms' }}>
                <label className="block text-neutral-100 font-medium mb-2">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700/50 rounded-lg text-neutral-100 focus:ring-2 focus:ring-neutral-500/20 focus:outline-none"
                  placeholder="Enter Your Email"
                />
              </div>

              {/* Subject */}
              <div className="reveal" style={{ transitionDelay: '300ms' }}>
                <label className="block text-neutral-100 font-medium mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700/50 rounded-lg text-neutral-100 focus:ring-2 focus:ring-neutral-500/20 focus:outline-none"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div className="reveal" style={{ transitionDelay: '400ms' }}>
                <label className="block text-neutral-100 font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700/50 rounded-lg text-neutral-100 resize-none focus:ring-2 focus:ring-neutral-500/20 focus:outline-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit */}
              <div className="reveal" style={{ transitionDelay: '500ms' }}>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-neutral-100 hover:bg-white text-black font-semibold rounded-lg flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <Send className="w-5 h-5" />}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}