import { Mail, MessageSquare, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="space-y-6" id="contact">
      <h2 className="text-3xl font-semibold border-b pb-2">Contact</h2>

      <p className="text-gray-700 max-w-xl">
        I&apos;m always open to collaboration, interesting conversations, or just sharing ideas over coffee ☕.
        Whether it&apos;s about reinforcement learning, embodied AI, or something entirely unexpected — feel free to reach out!
      </p>

      <div className="space-y-4">
        <ContactItem
          icon={<Mail size={20} />}
          label="Email"
          value="yan-jun.chen@connect.polyu.hk"
          href="mailto:yan-jun.chen@connect.polyu.hk"
        />
        <ContactItem
          icon={<MessageSquare size={20} />}
          label="WeChat"
          value="xzqm13143609845"
        />
      </div>

      <div className="flex space-x-4 pt-4">
        <a
          href="https://github.com/Battam1111"
          target="_blank"
          className="text-gray-600 hover:text-black transition"
        >
          <Github size={24} />
        </a>
        {/* 可选添加其他社交平台 */}
        {/* <a href="#" target="_blank"><Linkedin size={24} /></a> */}
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center space-x-3 text-gray-700">
      {icon}
      <span className="font-medium">{label}:</span>
      <span className="text-sm">{value}</span>
    </div>
  );

  return href ? (
    <a href={href} className="hover:underline">
      {content}
    </a>
  ) : (
    content
  );
}
