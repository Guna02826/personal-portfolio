import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { profileLinks, contactConfig } from "../../data/portfolio";
import { fadeInUp } from "../../utils/animations";
import { submitContactForm } from "../../utils/contact";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");

  const copyEmail = () => {
    navigator.clipboard.writeText(contactConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    setFormStatus("submitting");
    const success = await submitContactForm(e, contactConfig.accessKey);
    
    if (success) {
      setFormStatus("success");
      e.target.reset();
      setTimeout(() => setFormStatus("idle"), 5000);
    } else {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="I'm currently looking for new opportunities. My inbox is always open!"
          icon={Send}
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <Motion.div {...fadeInUp} className="space-y-6">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
              <button
                onClick={copyEmail}
                className="group relative flex w-full items-center gap-3 rounded-2xl bg-slate-800 px-6 py-4 text-left text-sm font-medium text-white transition hover:bg-slate-700"
              >
                <Mail className="text-sky-400 flex-shrink-0" size={20} />
                <span className="truncate">{contactConfig.email}</span>
                <AnimatePresence>
                  {copied && (
                    <Motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-sky-500 px-3 py-1 text-xs font-bold"
                    >
                      Copied!
                    </Motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Socials</h3>
              <div className="flex gap-4">
                {profileLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-2xl glass text-slate-400 transition hover:-translate-y-1 hover:bg-slate-800 hover:text-white"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </Motion.div>

          {/* Contact Form */}
          <Motion.div {...fadeInUp} className="glass rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl bg-slate-800/50 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-xl bg-slate-800/50 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Your message..."
                  className="w-full rounded-xl bg-slate-800/50 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 font-semibold text-white transition hover:bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? (
                  "Sending..."
                ) : formStatus === "success" ? (
                  <><CheckCircle2 size={18} /> Message Sent!</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </button>
              {formStatus === "error" && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or email directly.</p>
              )}
            </form>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
