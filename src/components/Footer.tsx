export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-8 text-center text-sm text-[var(--muted)]">
      <p>&copy; {new Date().getFullYear()} Yanjun Chen.</p>
      <p className="mt-2">
        Built with Next.js and synchronized with a public Google Scholar
        profile.
      </p>
    </footer>
  );
}
