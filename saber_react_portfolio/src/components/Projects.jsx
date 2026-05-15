export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js, featuring product catalog, shopping cart, secure checkout, and payment integration with Stripe.",
      image: "/src/assets/images/project1.jpg",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, user authentication, drag-and-drop functionality, and team workspace organization using React and Firebase.",
      image: "/src/assets/images/project2.png",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "An interactive weather dashboard displaying real-time weather data, forecasts, and historical analytics. Built with React, integrating OpenWeather API with beautiful data visualizations.",
      image: "/src/assets/images/project3.png",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "A data analytics dashboard for social media metrics including engagement tracking, performance reports, and audience insights. Features interactive charts and customizable dashboards.",
      image: "/src/assets/images/project4.png",
    },
  ];

  return (
    <section id="projects" className="w-full px-4 py-10 pt-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          My Projects
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-slate-800 bg-slate-950/95 overflow-hidden shadow-xl backdrop-blur-lg transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-200 mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 text-sm font-medium hover:bg-cyan-500/30 transition-colors duration-300"
                  >
                    View Project
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 rounded-lg border border-slate-700 text-slate-300 text-sm font-medium hover:border-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}