const links = [
  { href: "#about", label: "About" },
  { href: "#updates", label: "Updates" },
  { href: "#research", label: "Publications" },
  { href: "#projects", label: "Projects" },
  { href: "#notes", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 -mx-6 mb-10 border-b border-[var(--line)] bg-[rgba(246,244,239,0.86)] backdrop-blur md:-mx-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]"
        >
          Yanjun Chen
        </a>

        <nav className="flex items-center gap-5 text-sm text-[var(--muted)]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--foreground)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
