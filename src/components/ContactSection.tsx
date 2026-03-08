import { BookOpen, Github, Mail, MessageSquare } from "lucide-react";

interface ContactSectionProps {
  scholarProfileUrl: string;
}

export default function ContactSection({
  scholarProfileUrl,
}: ContactSectionProps) {
  const contactItems = [
    {
      label: "Email",
      value: "yan-jun.chen@connect.polyu.hk",
      href: "mailto:yan-jun.chen@connect.polyu.hk",
      icon: <Mail size={18} />,
    },
    {
      label: "WeChat",
      value: "xzqm13143609845",
      icon: <MessageSquare size={18} />,
    },
  ];

  const links = [
    {
      label: "GitHub",
      href: "https://github.com/Battam1111",
      icon: <Github size={18} />,
    },
    {
      label: "Google Scholar",
      href: scholarProfileUrl,
      icon: <BookOpen size={18} />,
    },
  ];

  return (
    <section className="section-shell space-y-8" id="contact">
      <div className="max-w-2xl space-y-4">
        <p className="eyebrow">Contact</p>
        <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
          Open to collaboration and research conversations.
        </h2>
        <p className="text-base leading-7 text-[var(--muted)]">
          I welcome academic collaboration, visiting opportunities, and
          research-oriented industry discussions related to RLHF, LLM reasoning,
          reward modeling, and embodied AI. Email is the best first contact.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card-surface rounded-3xl p-6">
          <p className="eyebrow">Direct</p>
          <div className="mt-5 space-y-4">
            {contactItems.map((item) => {
              const content = (
                <div className="flex items-start gap-3 rounded-2xl border border-[rgba(18,22,27,0.08)] px-4 py-4 text-sm">
                  <span className="mt-0.5 text-[var(--muted)]">{item.icon}</span>
                  <div>
                    <p className="mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                      {item.label}
                    </p>
                    <p className="mt-2 font-medium text-[var(--foreground)]">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="block transition hover:translate-x-1"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </div>

        <div className="card-surface rounded-3xl p-6">
          <p className="eyebrow">Profiles</p>
          <div className="mt-5 space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[rgba(18,22,27,0.08)] px-4 py-4 text-sm text-[var(--foreground)] transition hover:border-[var(--foreground)]"
              >
                <span className="flex items-center gap-3">
                  <span className="text-[var(--muted)]">{link.icon}</span>
                  <span>{link.label}</span>
                </span>
                <span className="mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                  Open
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
