import { useState } from "react";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSent(true);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="w-full px-4 py-10 pt-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          Contact Me
        </h2>

        <div className="max-w-2xl mx-auto rounded-2xl border border-slate-800 bg-slate-950/95 p-8 shadow-xl backdrop-blur-lg">
          {isSent && (
            <div className="mb-6 rounded-2xl border border-cyan-500/40 bg-cyan-500/10 px-5 py-4 text-sm text-cyan-200 shadow-inner shadow-cyan-500/10">
              <p className="font-medium">Message sent successfully!</p>
              <p className="text-slate-300 mt-1">
                Thanks for reaching out. I will get back to you shortly.
              </p>
            </div>
          )}

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-2xl bg-slate-800 text-slate-300 placeholder:text-slate-500 border border-slate-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-2xl bg-slate-800 text-slate-300 placeholder:text-slate-500 border border-slate-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-2xl bg-slate-800 text-slate-300 placeholder:text-slate-500 border border-slate-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            ></textarea>
            <button
              type="submit"
              className="rounded-2xl px-6 py-3 bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}