import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactInfo } from "../data/contact";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({ first: "", last: "", email: "", phone: "", msg: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      return;
    }

    console.log("SERVICE_ID:", JSON.stringify(SERVICE_ID));
    console.log("TEMPLATE_ID:", JSON.stringify(TEMPLATE_ID));
    console.log("PUBLIC_KEY:", JSON.stringify(PUBLIC_KEY));

    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          first_name: form.first,
          last_name: form.last,
          email: form.email,
          phone: form.phone,
          message: form.msg,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setForm({ first: "", last: "", email: "", phone: "", msg: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-wine-900/30 via-[#120a10] to-wine-950/20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-wine-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-wine-400 tracking-widest uppercase mb-3 block">
            Say Hello
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get In Touch</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-wine-500 to-gold-400 mx-auto mb-4" />
          <p className="text-white/50 text-sm max-w-md mx-auto">
            Open to freelance projects, internships, and full-time opportunities. Let&apos;s build
            something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-wine-600/20 to-wine-700/10 rounded-3xl p-8 border border-wine-500/15">
              <div className="text-5xl mb-4">{contactInfo.avatar}</div>
              <h3 className="text-xl font-bold text-white mb-3">{contactInfo.name}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6">{contactInfo.bio}</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-base">📍</span>
                  <div>
                    <span className="text-white/40 text-xs block">Location</span>
                    <span className="text-white/80">{contactInfo.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-base">📧</span>
                  <div>
                    <span className="text-white/40 text-xs block">Email</span>
                    <span className="text-white/80">{contactInfo.email}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-base">💼</span>
                  <div>
                    <span className="text-white/40 text-xs block">Focus</span>
                    <span className="text-white/80">{contactInfo.focus}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#170d11] border border-white/8 rounded-3xl p-8">
            <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="first"
                  required
                  type="text"
                  placeholder="First Name"
                  value={form.first}
                  onChange={onChange}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none focus:border-wine-400/60 transition-colors w-full"
                />
                <input
                  name="last"
                  required
                  type="text"
                  placeholder="Last Name"
                  value={form.last}
                  onChange={onChange}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none focus:border-wine-400/60 transition-colors w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={onChange}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none focus:border-wine-400/60 transition-colors w-full"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone No. (optional)"
                  value={form.phone}
                  onChange={onChange}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none focus:border-wine-400/60 transition-colors w-full"
                />
              </div>
              <textarea
                name="msg"
                required
                placeholder="Your message..."
                rows={5}
                value={form.msg}
                onChange={onChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none focus:border-wine-400/60 transition-colors resize-none"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-wine-500 to-wine-600 text-white font-semibold hover:from-wine-400 hover:to-gold-500 transition-all shadow-lg shadow-wine-500/25 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm text-center">
                  تم الإرسال بنجاح! هترد عليكي قريب.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  حصل خطأ في الإرسال — تأكدي إن بيانات EmailJS متظبطة في ملف .env
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
