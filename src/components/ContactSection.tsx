"use client";

// ✅ 引入所需图标组件（lucide 图标库）
import { Mail, MessageSquare, Github, BookOpen, Copy, Check } from "lucide-react";
import { useState } from "react";

// ✅ ContactSection 主组件：联系入口区域
export default function ContactSection() {
  return (
    <section className="space-y-6" id="contact">
      {/* ✅ 标题 */}
      <h2 className="text-3xl font-semibold border-b pb-2">Contact</h2>

      {/* ✅ 简介段落 */}
      <p className="text-gray-700 max-w-xl leading-relaxed">
        I&apos;m always open to collaboration, interesting conversations, or just sharing ideas over coffee ☕.
        Whether it&apos;s about reinforcement learning, embodied AI, or something entirely unexpected —
        feel free to reach out!
      </p>

      {/* ✅ 联系方式区域 */}
      <div className="space-y-4">
        <ContactItem
          icon={<Mail size={20} />}
          label="Email"
          value="yan-jun.chen@connect.polyu.hk"
          href="mailto:yan-jun.chen@connect.polyu.hk"
          copyable
        />
        <ContactItem
          icon={<MessageSquare size={20} />}
          label="WeChat"
          value="xzqm13143609845"
          copyable
        />
      </div>

      {/* ✅ 社交平台链接区域（GitHub / Google Scholar） */}
      <div className="flex space-x-6 pt-6">
        <IconLink
          href="https://github.com/Battam1111"
          label="GitHub"
          icon={<Github size={24} />}
        />
        <IconLink
          href="https://scholar.google.com.hk/citations?user=Zg8cX0sAAAAJ&hl=zh-CN"
          label="Google Scholar"
          icon={<BookOpen size={24} />}
        />
      </div>
    </section>
  );
}

// ✅ ContactItem 组件：展示一条联系方式信息（可带复制功能）
function ContactItem({
  icon,
  label,
  value,
  href,
  copyable,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
}) {
  // ✅ 控制是否点击后“复制成功”
  const [copied, setCopied] = useState(false);

  // ✅ 复制动作处理函数
  const handleCopy = () => {
    navigator.clipboard.writeText(value); // 写入剪贴板
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // 2 秒后恢复按钮状态
  };

  // ✅ 联系信息主体内容（图标 + 标签 + 文本）
  const content = (
    <div className="flex items-center justify-between group">
      {/* ✅ 左侧信息结构：图标 + 标签 + 文本 */}
      <div className="flex items-center space-x-3 text-gray-700 group-hover:text-black transition-colors">
        {icon}
        <span className="font-medium">{label}:</span>
        <span className="text-sm">{value}</span>
      </div>

      {/* ✅ 右侧复制按钮 */}
      {copyable && (
        <button
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
          title="Copy"
          className="ml-4 text-gray-400 hover:text-black transition-colors"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      )}
    </div>
  );

  // ✅ 如果提供 href，则外包为链接（否则为纯文本）
  return href ? (
    <a href={href} className="block hover:underline">
      {content}
    </a>
  ) : (
    content
  );
}

// ✅ IconLink 组件：用于展示社交平台图标链接（带 hover 提示）
function IconLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="text-gray-600 hover:text-black transition-colors"
    >
      {icon}
    </a>
  );
}
