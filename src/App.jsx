import ProfileSidebar from "./ProfileSidebar";
import { useState } from "react";

const technologies = [
  "React",
  "Laravel",
  "PHP",
  "JavaScript",
  "Python",
  "Django",
];

const projects = [
  {
    number: "01",
    title: "Learning Management System",
    description:
      "A platform concept for organizing courses, learning resources, and student progress.",
    stack: "Laravel · PHP · MySQL",
  },
  {
    number: "02",
    title: "Real Estate Management",
    description:
      "A web application concept for property listings and real estate management.",
    stack: "React · Laravel · MySQL",
  },
  {
    number: "03",
    title: "Disease Prediction System",
    description:
      "A health-focused web project exploring structured data and interactive interfaces.",
    stack: "PHP · JavaScript · MySQL",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#17151A] text-[#F0E8DF] selection:bg-[#C794A9]/40 selection:text-white">
      <ProfileSidebar />
      {/* Navigation */}
      <header className="relative z-20 border-b border-white/[0.07] bg-[#17151A]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#home" className="text-xl font-semibold tracking-tight">
            <span>Ｃｏｄｅ </span>
            <span className="bg-gradient-to-r from-[#D7A5B8] to-[#D9C9E8] bg-clip-text text-transparent">
              Ｒａｄｉａ
            </span>
            <span className="text-[#D7A5B8]">.</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-[#C794A9]/60 md:hidden"
          >
            {menuOpen ? "Close ✕" : "Menu ☰"}
          </button>

          <div className="hidden items-center gap-8 text-sm text-[#B9AFB6] md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[#E3C5D0]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://github.com/radiamahbub"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#C794A9]/50 px-5 py-2.5 text-[#E3C5D0] transition hover:border-transparent hover:bg-gradient-to-r hover:from-[#C794A9] hover:to-[#D9C9E8] hover:text-[#211D23]"
            >
              GitHub ↗
            </a>
          </div>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-white/[0.07] px-6 py-5 text-sm text-[#B9AFB6] md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-[#E3C5D0]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/radiamahbub"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative isolate mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32"
        >
          {/* Atmospheric gradient layers */}
          <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-96 w-96 rounded-full bg-[#A75D85]/20 blur-[110px]" />
          <div className="pointer-events-none absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-[#A998D8]/15 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-48 w-72 rounded-full bg-[#D8A98C]/10 blur-[90px]" />

          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#C794A9]/30 bg-gradient-to-r from-[#A75D85]/15 to-[#A998D8]/10 px-4 py-2 text-xs tracking-[0.16em] text-[#E3C5D0]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D7A5B8]" />
              WEB DEVELOPMENT · SOFTWARE · AI
            </div>

            <p className="mb-4 text-sm tracking-wide text-[#C5B7C1]">
              Hello, I'm Radia.
            </p>

            <h1 className="max-w-xl text-5xl font-medium leading-[1.12] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
             Code the looks,
              <br />
              logic & {" "}
              <span className="bg-gradient-to-r from-[#D7A5B8] via-[#D9C9E8] to-[#E8BFA5] bg-clip-text font-serif italic text-transparent">
                brains.
              </span>
            </h1>
             <p className="mt-2 text-xs text-[#D7A5B8]">
        💻 ✧ Code Radia
      </p>


            <p className="mt-7 max-w-lg text-base leading-8 text-[#B9AFB6] md:text-lg">
              I build web experiences and explore how thoughtful software and
              AI can solve real-world problems. Ideas into digital reality.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group rounded-full bg-gradient-to-r from-[#C794A9] via-[#D4B0C8] to-[#D9C9E8] px-6 py-3.5 text-sm font-medium text-[#211D23] shadow-lg shadow-[#A75D85]/15 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#A75D85]/25"
              >
                Explore my work
                <span className="ml-2 inline-block transition group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/[0.02] px-6 py-3.5 text-sm text-[#F0E8DF] transition duration-300 hover:border-[#C794A9]/60 hover:bg-[#C794A9]/10"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className={`rounded-full border px-3.5 py-2 text-xs transition duration-300 hover:-translate-y-0.5 ${
                    index === 0
                      ? "border-[#C794A9]/40 bg-[#C794A9]/10 text-[#E3C5D0]"
                      : "border-white/[0.09] bg-white/[0.025] text-[#C7BDC5] hover:border-[#C794A9]/40"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Code preview */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-[#A75D85]/25 via-[#A998D8]/15 to-[#D8A98C]/20 blur-3xl" />

            <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full bg-[#D9C9E8]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-gradient-to-br from-[#29222D] via-[#211D23] to-[#2B2029] shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D7A5B8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E8C49E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#A7B99E]" />
                </div>
                <span className="text-xs text-[#B4A2B2]">radia.jsx</span>
              </div>

              <div className="overflow-x-auto p-6 font-mono text-sm leading-8 sm:p-8">
                <p className="text-[#D9C9E8]">
                  <span className="text-[#D7A5B8]">const</span> developer = {"{"}
                </p>

                <div className="pl-5">
                  <p>
                    <span className="text-[#E8BFA5]">name</span>:{" "}
                    <span className="text-[#B9D0AC]">"Radia"</span>,
                  </p>
                  <p>
                    <span className="text-[#E8BFA5]">role</span>:{" "}
                    <span className="text-[#B9D0AC]">"Full-Stack Dev"</span>,
                  </p>
                  <p>
                    <span className="text-[#E8BFA5]">focus</span>: [
                  </p>

                  <div className="pl-5 text-[#B9D0AC]">
                    <p>"Web Development",</p>
                    <p>"Software Design",</p>
                    <p>"Exploring AI"</p>
                  </div>

                  <p>],</p>
                  <p>
                    <span className="text-[#E8BFA5]">mindset</span>:{" "}
                    <span className="text-[#B9D0AC]">"Keep learning"</span>
                  </p>
                </div>

                <p className="text-[#D9C9E8]">{"};"}</p>

                <div className="mt-8 rounded-xl border border-[#C794A9]/25 bg-gradient-to-r from-[#A75D85]/15 via-[#A998D8]/10 to-[#D8A98C]/10 p-4">
                  <p className="font-sans text-sm text-[#E8C8D8]">
                    ✦ Learn. Build. Improve. Repeat.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-5 text-center text-xs tracking-[0.12em] text-[#B4A2B2]">
              BUILDING WITH CURIOSITY & PURPOSE
            </p>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="relative isolate overflow-hidden border-t border-white/[0.07] bg-[#1C191F] px-6 py-24 md:px-10 md:py-28"
        >
          <div className="pointer-events-none absolute -right-32 top-0 -z-10 h-80 w-80 rounded-full bg-[#A998D8]/10 blur-[100px]" />

          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div>
              <p className="mb-4 text-xs tracking-[0.2em] text-[#D7A5B8]">
                A LITTLE ABOUT ME
              </p>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                Curious by nature.
                <br />
                <span className="bg-gradient-to-r from-[#D7A5B8] to-[#D9C9E8] bg-clip-text font-serif italic text-transparent">
                  Developer by choice.
                </span>
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-base leading-8 text-[#B9AFB6]">
                I'm a full-stack developer interested in building useful,
                accessible, and thoughtfully designed digital products. I enjoy
                turning ideas into working applications and understanding how
                the pieces fit together, from the interface to the database.
              </p>

              <p className="mt-5 text-base leading-8 text-[#B9AFB6]">
                My current journey is focused on strengthening my software
                development skills while exploring how AI can complement
                practical web applications.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#D7B4C5]">
                <span>↗ Frontend & backend</span>
                <span>↗ Problem solving</span>
                <span>↗ Continuous learning</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="relative isolate mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-10 md:py-28"
        >
          <div className="pointer-events-none absolute right-0 top-10 -z-10 h-72 w-72 rounded-full bg-[#A75D85]/10 blur-[100px]" />

          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-xs tracking-[0.2em] text-[#D7A5B8]">
                SELECTED WORK
              </p>
              <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
                Things I'm{" "}
                <span className="bg-gradient-to-r from-[#D7A5B8] to-[#D9C9E8] bg-clip-text font-serif italic text-transparent">
                  building.
                </span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-7 text-[#A99FAA]">
              A growing collection of projects, experiments, and ideas.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.number}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C794A9]/50 ${
                  index === 1
                    ? "from-[#302432] via-[#211D23] to-[#211D23]"
                    : "from-[#28212A] via-[#211D23] to-[#211D23]"
                }`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#A998D8]/10 blur-2xl transition group-hover:bg-[#A998D8]/20" />

                <div className="relative">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="font-mono text-sm text-[#D7A5B8]">
                      /{project.number}
                    </span>
                    <span className="rounded-full border border-white/[0.09] px-3 py-1 text-[10px] tracking-wide text-[#B4A2B2]">
                      In progress
                    </span>
                  </div>

                  <h3 className="text-xl font-medium text-[#F0E8DF] transition group-hover:text-[#E8C8D8]">
                    {project.title}
                  </h3>

                  <p className="mt-3 min-h-20 text-sm leading-7 text-[#A99FAA]">
                    {project.description}
                  </p>

                  <div className="mt-6 border-t border-white/[0.07] pt-5">
                    <p className="text-xs leading-6 text-[#D7B4C5]">
                      {project.stack}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-[#91858F]">
            Update these cards with your actual project status, descriptions,
            live demos, and repository links.
          </p>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="relative isolate overflow-hidden border-t border-white/[0.07] bg-[#1C191F] px-6 py-24 md:px-10 md:py-28"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#A75D85]/20 via-[#A998D8]/10 to-[#D8A98C]/15 blur-[100px]" />

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-xs tracking-[0.2em] text-[#D7A5B8]">
              LET'S CONNECT
            </p>

            <h2 className="text-4xl font-medium tracking-tight sm:text-6xl">
              Have an idea?
              <br />
              <span className="bg-gradient-to-r from-[#D7A5B8] via-[#D9C9E8] to-[#E8BFA5] bg-clip-text font-serif italic text-transparent">
                Let's build it.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-[#B9AFB6]">
              I'm always interested in learning, collaborating, and creating
              something useful.
            </p>

            <a
              href="https://github.com/radiamahbub"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C794A9] via-[#D4B0C8] to-[#D9C9E8] px-7 py-3.5 text-sm font-medium text-[#211D23] shadow-lg shadow-[#A75D85]/15 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#A75D85]/25"
            >
              Find me on GitHub <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.05] px-6 py-6 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-[#91858F] sm:flex-row">
          <p>
            © {new Date().getFullYear()} Code Radia. Built with curiosity.
          </p>
          <a href="#home" className="transition hover:text-[#E3C5D0]">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;




















































// import { useState } from "react";

// const technologies = [
//   "React",
//   "Laravel",
//   "PHP",
//   "JavaScript",
//   "Python",
//   "Django",
// ];

// const projects = [
//   {
//     number: "01",
//     title: "Learning Management System",
//     description:
//       "A platform concept for organizing courses, learning resources, and student progress.",
//     stack: "Laravel · PHP · MySQL",
//     status: "Coming soon",
//   },
//   {
//     number: "02",
//     title: "Real Estate Management",
//     description:
//       "A web application concept for property listings and real estate management.",
//     stack: "React · Laravel · MySQL",
//     status: "Coming soon",
//   },
//   {
//     number: "03",
//     title: "Disease Prediction System",
//     description:
//       "A health-focused web project exploring structured data and interactive interfaces.",
//     stack: "PHP · JavaScript · MySQL",
//     status: "Coming soon",
//   },
// ];

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen overflow-hidden bg-[#17151A] text-[#F0E8DF]">
//       {/* Navigation */}
//       <header className="relative z-20 border-b border-white/[0.07]">
//         <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
//           <a
//             href="#home"
//             className="text-xl font-semibold tracking-tight"
//             aria-label="Code Radia home"
//           >
//             <span className="text-[#F0E8DF]">code</span>
//             <span className="text-[#B58A9B]">radia</span>
//             <span className="text-[#B58A9B]">.</span>
//           </a>

//           <button
//             type="button"
//             className="rounded-lg border border-white/10 px-3 py-2 text-sm md:hidden"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-expanded={menuOpen}
//             aria-label="Toggle navigation"
//           >
//             {menuOpen ? "Close" : "Menu"}
//           </button>

//           <div className="hidden items-center gap-8 text-sm text-[#B9AFB6] md:flex">
//             <a href="#about" className="transition hover:text-[#F0E8DF]">
//               About
//             </a>
//             <a href="#projects" className="transition hover:text-[#F0E8DF]">
//               Projects
//             </a>
//             <a href="#contact" className="transition hover:text-[#F0E8DF]">
//               Contact
//             </a>
//             <a
//               href="https://github.com/radiamahbub"
//               target="_blank"
//               rel="noreferrer"
//               className="rounded-full border border-[#B58A9B]/50 px-5 py-2.5 text-[#E3C5D0] transition hover:bg-[#B58A9B] hover:text-[#211D23]"
//             >
//               GitHub ↗
//             </a>
//           </div>
//         </nav>

//         {menuOpen && (
//           <div className="flex flex-col gap-4 border-t border-white/[0.07] px-6 py-5 text-sm text-[#B9AFB6] md:hidden">
//             <a href="#about" onClick={() => setMenuOpen(false)}>
//               About
//             </a>
//             <a href="#projects" onClick={() => setMenuOpen(false)}>
//               Projects
//             </a>
//             <a href="#contact" onClick={() => setMenuOpen(false)}>
//               Contact
//             </a>
//             <a
//               href="https://github.com/radiamahbub"
//               target="_blank"
//               rel="noreferrer"
//             >
//               GitHub ↗
//             </a>
//           </div>
//         )}
//       </header>

//       <main>
//         {/* Hero */}
//         <section
//           id="home"
//           className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32"
//         >
//           <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#B58A9B]/[0.09] blur-[100px]" />

//           <div className="relative z-10">
//             <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#B58A9B]/25 bg-[#B58A9B]/[0.07] px-4 py-2 text-xs tracking-[0.16em] text-[#D8B6C5]">
//               <span className="h-1.5 w-1.5 rounded-full bg-[#B58A9B]" />
//               WEB DEVELOPMENT · SOFTWARE · AI
//             </div>

//             <p className="mb-4 text-sm tracking-wide text-[#B9AFB6]">
//               Hello, I'm Radia.
//             </p>

//             <h1 className="max-w-xl text-5xl font-medium leading-[1.12] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
//               Ideas into
//               <br />
//               digital{" "}
//               <span className="font-serif italic text-[#C8A4B4]">
//                 reality.
//               </span>
//             </h1>

//             <p className="mt-7 max-w-lg text-base leading-8 text-[#B9AFB6] md:text-lg">
//               I build web experiences and explore how thoughtful software and
//               AI can solve real-world problems. Always learning, always
//               building.
//             </p>

//             <div className="mt-9 flex flex-wrap gap-4">
//               <a
//                 href="#projects"
//                 className="rounded-full bg-[#B58A9B] px-6 py-3.5 text-sm font-medium text-[#211D23] transition hover:bg-[#D0A9BA]"
//               >
//                 Explore my work <span className="ml-2">↗</span>
//               </a>

//               <a
//                 href="#contact"
//                 className="rounded-full border border-white/15 px-6 py-3.5 text-sm text-[#F0E8DF] transition hover:border-[#B58A9B]/70 hover:bg-white/[0.03]"
//               >
//                 Get in touch
//               </a>
//             </div>

//             <div className="mt-10 flex flex-wrap gap-2">
//               {technologies.map((tech) => (
//                 <span
//                   key={tech}
//                   className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3.5 py-2 text-xs text-[#C7BDC5]"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Decorative code card */}
//           <div className="relative mx-auto w-full max-w-md">
//             <div className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-[#B58A9B]/[0.06] blur-2xl" />

//             <div className="relative overflow-hidden rounded-2xl border border-white/[0.10] bg-[#211D23] shadow-2xl shadow-black/20">
//               <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
//                 <div className="flex items-center gap-2">
//                   <span className="h-2.5 w-2.5 rounded-full bg-[#B58A9B]/80" />
//                   <span className="h-2.5 w-2.5 rounded-full bg-[#D8C1A8]/80" />
//                   <span className="h-2.5 w-2.5 rounded-full bg-[#9DAE9C]/80" />
//                 </div>
//                 <span className="text-xs text-[#91858F]">radia.jsx</span>
//               </div>

//               <div className="overflow-x-auto p-6 font-mono text-sm leading-8 sm:p-8">
//                 <p className="text-[#A99BB8]">
//                   <span className="text-[#C8A4B4]">const</span> developer ={" "}
//                   {"{"}
//                 </p>
//                 <div className="pl-5">
//                   <p>
//                     <span className="text-[#D8C1A8]">name</span>:{" "}
//                     <span className="text-[#A7B99E]">"Radia"</span>,
//                   </p>
//                   <p>
//                     <span className="text-[#D8C1A8]">role</span>:{" "}
//                     <span className="text-[#A7B99E]">"Full-Stack Dev"</span>,
//                   </p>
//                   <p>
//                     <span className="text-[#D8C1A8]">focus</span>: [
//                   </p>
//                   <div className="pl-5 text-[#A7B99E]">
//                     <p>"Web Development",</p>
//                     <p>"Software Design",</p>
//                     <p>"Exploring AI"</p>
//                   </div>
//                   <p>],</p>
//                   <p>
//                     <span className="text-[#D8C1A8]">mindset</span>:{" "}
//                     <span className="text-[#A7B99E]">"Keep learning"</span>
//                   </p>
//                 </div>
//                 <p className="text-[#A99BB8]">{"};"}</p>

//                 <div className="mt-8 rounded-xl border border-[#B58A9B]/15 bg-[#B58A9B]/[0.06] p-4">
//                   <p className="font-sans text-sm text-[#E3C5D0]">
//                     ✦ Learn. Build. Improve. Repeat.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <p className="mt-5 text-center text-xs tracking-[0.12em] text-[#91858F]">
//               BUILDING WITH CURIOSITY & PURPOSE
//             </p>
//           </div>
//         </section>

//         {/* About */}
//         <section
//           id="about"
//           className="border-t border-white/[0.07] bg-[#1C191F] px-6 py-24 md:px-10 md:py-28"
//         >
//           <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
//             <div>
//               <p className="mb-4 text-xs tracking-[0.2em] text-[#C8A4B4]">
//                 A LITTLE ABOUT ME
//               </p>
//               <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
//                 Curious by nature.
//                 <br />
//                 <span className="font-serif italic text-[#C8A4B4]">
//                   Developer by choice.
//                 </span>
//               </h2>
//             </div>

//             <div className="max-w-2xl">
//               <p className="text-base leading-8 text-[#B9AFB6]">
//                 I'm a full-stack developer interested in building useful,
//                 accessible, and thoughtfully designed digital products. I enjoy
//                 turning ideas into working applications and understanding how
//                 the pieces fit together, from the interface to the database.
//               </p>
//               <p className="mt-5 text-base leading-8 text-[#B9AFB6]">
//                 My current journey is focused on strengthening my software
//                 development skills while exploring how AI can complement
//                 practical web applications.
//               </p>

//               <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#E3C5D0]">
//                 <span>↗ Frontend & backend</span>
//                 <span>↗ Problem solving</span>
//                 <span>↗ Continuous learning</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Projects */}
//         <section
//           id="projects"
//           className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28"
//         >
//           <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
//             <div>
//               <p className="mb-4 text-xs tracking-[0.2em] text-[#C8A4B4]">
//                 SELECTED WORK
//               </p>
//               <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
//                 Things I'm building.
//               </h2>
//             </div>
//             <p className="max-w-xs text-sm leading-7 text-[#91858F]">
//               A growing collection of projects, experiments, and ideas.
//             </p>
//           </div>

//           <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//             {projects.map((project) => (
//               <article
//                 key={project.number}
//                 className="group rounded-2xl border border-white/[0.08] bg-[#211D23] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B58A9B]/40"
//               >
//                 <div className="mb-10 flex items-center justify-between">
//                   <span className="font-mono text-sm text-[#C8A4B4]">
//                     /{project.number}
//                   </span>
//                   <span className="rounded-full border border-white/[0.09] px-3 py-1 text-[10px] tracking-wide text-[#91858F]">
//                     {project.status}
//                   </span>
//                 </div>

//                 <h3 className="text-xl font-medium text-[#F0E8DF]">
//                   {project.title}
//                 </h3>

//                 <p className="mt-3 min-h-20 text-sm leading-7 text-[#A99FAA]">
//                   {project.description}
//                 </p>

//                 <div className="mt-6 border-t border-white/[0.07] pt-5">
//                   <p className="text-xs leading-6 text-[#C8A4B4]">
//                     {project.stack}
//                   </p>
//                 </div>
//               </article>
//             ))}
//           </div>

//           <p className="mt-6 text-xs leading-6 text-[#91858F]">
//             Project cards are placeholders for now. Replace them with your
//             actual project details and repository links as you complete them.
//           </p>
//         </section>

//         {/* Contact */}
//         <section
//           id="contact"
//           className="border-t border-white/[0.07] bg-[#1C191F] px-6 py-24 md:px-10 md:py-28"
//         >
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="mb-5 text-xs tracking-[0.2em] text-[#C8A4B4]">
//               LET'S CONNECT
//             </p>

//             <h2 className="text-4xl font-medium tracking-tight sm:text-6xl">
//               Have an idea?
//               <br />
//               <span className="font-serif italic text-[#C8A4B4]">
//                 Let's build it.
//               </span>
//             </h2>

//             <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-[#B9AFB6]">
//               I'm always interested in learning, collaborating, and creating
//               something useful.
//             </p>

//             <a
//               href="https://github.com/radiamahbub"
//               target="_blank"
//               rel="noreferrer"
//               className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#B58A9B] px-7 py-3.5 text-sm font-medium text-[#211D23] transition hover:bg-[#D0A9BA]"
//             >
//               Find me on GitHub <span>↗</span>
//             </a>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="px-6 py-6 md:px-10">
//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-[#91858F] sm:flex-row">
//           <p>
//             © {new Date().getFullYear()} Code Radia. Built with curiosity.
//           </p>
//           <a
//             href="#home"
//             className="transition hover:text-[#E3C5D0]"
//           >
//             Back to top ↑
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;
