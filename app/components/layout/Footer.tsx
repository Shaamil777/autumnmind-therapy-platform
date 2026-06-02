import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--background)] py-10 md:py-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold tracking-tight text-[var(--primary)] mr-2" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Rida By Rahma
            </span>
            <p className="text-xs text-[var(--text-muted-color)] mt-1.5 md:mt-2">
              &copy; {currentYear}. All Rights Reserved.
            </p>
          </div>

          {/* Center: Minimal Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 lg:gap-10 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--primary)] opacity-80">
            <Link href="#about" className="hover:text-[var(--accent)] transition-colors">About</Link>
            <Link href="#services" className="hover:text-[var(--accent)] transition-colors">Services</Link>
            <Link href="#team" className="hover:text-[var(--accent)] transition-colors">Team</Link>
            <Link href="#contact" className="hover:text-[var(--accent)] transition-colors">Contact</Link>
          </nav>

          {/* Right: Developer Credit */}
          <div className="text-center md:text-right text-xs text-[var(--text-muted-color)]">
            <p>
              Developed by{" "}
              <a 
                href="https://www.linkedin.com/in/your_linkedin_url_here/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Developer LinkedIn Profile"
                className="font-semibold text-[var(--accent)] hover:text-[var(--primary)] transition-colors underline-offset-4 hover:underline"
              >
                Shaamil
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
