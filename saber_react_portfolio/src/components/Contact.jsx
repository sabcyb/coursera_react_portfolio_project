export default function Contact() {
  return (
    <section id="contact" className="w-full px-4 py-10 pt-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          Contact Me
        </h2>
        <div className="max-w-2xl mx-auto rounded-2xl border border-slate-800 bg-slate-950/95 p-8 shadow-xl backdrop-blur-lg">
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-slate-800 text-slate-300 placeholder:text-slate-500 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-slate-800 text-slate-300 placeholder:text-slate-500 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="bg-slate-800 text-slate-300 placeholder:text-slate-500 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-cyan-500 text-white font-medium rounded-lg hover:bg-cyan-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}