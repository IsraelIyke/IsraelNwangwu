"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";

export default function Contact() {
  // Replace 'YOUR_FORM_ID' with the ID given by Formspree
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  );

  return (
    <section
      id="contact"
      className="relative py-24 bg-slate-50 overflow-hidden"
    >
      {/* Background Element */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <Image
          src="/assets/semi-circle3.png"
          alt="decoration"
          width={600}
          height={600}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side: Text & Socials */}
          <div className="space-y-10">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[#fc462a] font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
              >
                Let&apos;s Build Something
              </motion.span>
              <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                Get in <br /> <span className="text-blue-600">Touch.</span>
              </h2>
              <p className="mt-6 text-gray-500 text-md md:text-lg font-light max-w-md leading-relaxed">
                Have a project in mind or just want to discuss the latest in Web
                or Mobile Development? Drop a message
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <BiSolidPhoneCall size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Phone
                  </p>
                  <p className="text-sm md:text-md font-bold text-slate-900">
                    +234 806 8430 268
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MdEmail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Email
                  </p>
                  <p className="text-sm md:text-md font-bold text-slate-900">
                    nwangwuisrael@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              {[
                {
                  icon: <FaYoutube />,
                  link: "https://youtube.com/@autorookiepiano",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/israel-ikechukwu-nwangwu",
                },
                { icon: <FaGithub />, link: "https://github.com/IsraelIyke" },
              ].map((social, i) => (
                <Link key={i} href={social.link} target="_blank">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-colors bg-white"
                  >
                    {social.icon}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: Formspree Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-slate-50"
          >
            {state.succeeded ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-black text-slate-900">
                  Message Received!
                </h3>
                <p className="text-gray-500 mt-2">
                  Thanks Israel, I&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-6 text-blue-600 font-bold"
                >
                  Send another?
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 ml-2">
                      Your Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-600 focus:ring-0 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 ml-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-600 focus:ring-0 transition-all outline-none"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-600 focus:ring-0 transition-all outline-none resize-none"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-600 transition-all transform active:scale-95 disabled:opacity-50 text-xs md:text-md"
                >
                  {state.submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <FiSend size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
