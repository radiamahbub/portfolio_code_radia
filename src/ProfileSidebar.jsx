
import { useEffect, useState } from "react";

export default function ProfileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the sidebar when Escape is pressed
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent background scrolling while the sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navigationLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Circular profile button — top-right corner */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open profile sidebar"
        aria-expanded={isOpen}
        className="fixed right-6 top-24 z-40 h-12 w-12 overflow-hidden rounded-full border-2 border-[#C794A9] bg-[#211D23] shadow-lg shadow-[#A75D85]/20 transition duration-300 hover:scale-110 hover:border-[#D9C9E8] focus:outline-none focus:ring-2 focus:ring-[#D9C9E8]"
      >
        <img
          src="/images/radia.png"
          alt="Open Radia's profile"
          className="h-full w-full object-cover"
        />
      </button>

      {/* Dark background overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close profile sidebar"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 cursor-default bg-black/60 backdrop-blur-sm"
        />
      )}

      {/* Sliding sidebar */}
      <aside
        id="profile-sidebar"
        aria-label="Profile and navigation"
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[min(88vw,380px)] flex-col overflow-y-auto border-l border-white/10 bg-[#17151A] p-7 shadow-2xl shadow-black/40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        inert={!isOpen}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold tracking-[0.2em] text-[#D7A5B8]">
            CODE RADIA
          </span>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close sidebar"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-2xl text-[#F0E8DF] transition hover:border-[#C794A9] hover:bg-white/5 hover:text-[#D7A5B8]"
          >
            &times;
          </button>
        </div>

        {/* Profile photo */}
        <div className="mt-12 flex flex-col items-center text-center">
          <div className="rounded-full bg-gradient-to-br from-[#D7A5B8] via-[#A998D8] to-[#D8A98C] p-[3px] shadow-xl shadow-[#A75D85]/20">
            <img
              src="/images/radia.png"
              alt="Radia Mahbub"
              className="h-32 w-32 rounded-full border-4 border-[#17151A] object-cover"
            />
          </div>

          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[#F0E8DF]">
            Radia Mahbub
          </h2>

          <p className="mt-2 text-sm text-[#B9AFB6]">
            Full-Stack Developer
          </p>

          <div className="mt-6 max-w-xs rounded-2xl border border-white/10 bg-gradient-to-br from-[#302432] via-[#211D23] to-[#33232D] p-5">
            <p className="text-base font-medium leading-relaxed text-[#F0E8DF]">
              Code the frontend,
              <br />
              <span className="bg-gradient-to-r from-[#D7A5B8] to-[#D9C9E8] bg-clip-text text-transparent">
                backend &amp; brains.
              </span>
              <span> 💻✧</span>
            </p>
          </div>
        </div>

        {/* Navigation links */}
        <nav aria-label="Main navigation" className="mt-10">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8F8490]">
            Explore
          </p>

          <div className="space-y-2">
            {navigationLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between rounded-xl border border-transparent px-4 py-4 text-[#F0E8DF] transition duration-200 hover:border-white/10 hover:bg-white/5 hover:text-[#D7A5B8]"
              >
                <span>{link.label}</span>
                <span className="text-[#8F8490] transition group-hover:translate-x-1 group-hover:text-[#D7A5B8]">
                  →
                </span>
              </a>
            ))}
          </div>
        </nav>

        {/* Sidebar footer */}
        <div className="mt-auto pt-10">
          <div className="mb-5 h-px bg-gradient-to-r from-[#C794A9]/50 via-[#A998D8]/30 to-transparent" />

          <a
            href="https://github.com/radiamahbub"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#B9AFB6] transition hover:text-[#D7A5B8]"
          >
            <span>GitHub</span>
            <span>↗</span>
          </a>

          <p className="mt-4 text-xs text-[#756C77]">
            Built with curiosity &amp; code.
          </p>
        </div>
      </aside>
    </>
  );
}
