import person from "../assets/images/person.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="w-full px-4 py-10 pt-32"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 rounded-3xl border border-slate-800 bg-slate-950/95 p-8 shadow-2xl backdrop-blur-lg md:flex-row md:items-center md:justify-between md:p-12">
        
        {/* Left Side - Profile Image */}
        <div className="flex w-full justify-center md:w-[40%]">
          <div className="group relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/30"></div>

            <img
              src={person}
              alt="Profile"
              className="relative h-64 w-64 rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_60px_rgba(34,211,238,0.45)]"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full text-center md:w-[60%] md:text-left">
          
          {/* Small Tag */}
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Frontend Developer
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-100 md:text-5xl">
            Welcome to My
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Portfolio Website
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            I am a passionate developer specializing in modern web
            applications using React, Tailwind CSS, and scalable frontend
            technologies. I enjoy building clean, responsive, and interactive
            user experiences with professional UI design.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}