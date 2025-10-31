import Link from "next/link";

const footerSections = [
  {
    title: "服务",
    titleEn: "Services",
    links: [
      { href: "/services/brand-marketing", label: "品牌与活动营销" },
      { href: "/services/digital-product", label: "数字产品研发" },
      { href: "/services/data-martech", label: "数据与营销技术" },
    ],
  },
  {
    title: "资源",
    titleEn: "Resources",
    links: [
      { href: "/work", label: "案例研究" },
      { href: "/insights", label: "洞察" },
      { href: "/about", label: "关于我们" },
    ],
  },
  {
    title: "联系",
    titleEn: "Contact",
    links: [
      { href: "/contact", label: "联系我们" },
      { href: "mailto:contact@linkend.cn", label: "contact@linkend.cn" },
      { href: "tel:+8602012345678", label: "+86 020 1234 5678" },
    ],
  },
];

const socialLinks = [
  {
    name: "WeChat",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.5 3C4.4 3 1 6 1 9.7c0 2.4 1.5 4.6 3.8 6l-.9 2.8 3.2-1.6c.9.2 1.9.4 2.9.4.4 0 .8 0 1.2-.1-.3-.9-.4-1.8-.4-2.8C10.8 9.9 14.3 6.5 19 6.5c.3 0 .6 0 .9.1C18.7 4.3 13.9 3 8.5 3zm-1.9 4.9c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm5.8 0c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zM19 8c-3.5 0-6.4 2.5-6.4 5.5s2.9 5.5 6.4 5.5c.9 0 1.8-.2 2.6-.5l2.5 1.3-.7-2.2c1.8-1.1 3-3 3-5.1 0-3-2.9-5.5-6.4-5.5zm-2.5 3.6c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1zm5 0c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
                L
              </span>
              <div className="flex flex-col leading-tight">
                <span>Linkend Tech</span>
                <span className="text-xs text-gray-400">内容 × 技术 × 数据</span>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm text-gray-400">
              技术驱动的品牌营销与数字产品。我们通过内容、技术与数据的深度整合，为客户创造可量化的业务增长。
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 text-gray-400 transition-colors hover:border-primary hover:text-primary"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
            <p>© 2024 广州联恩科技有限公司 版权所有</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary">
                隐私政策
              </Link>
              <Link href="/terms" className="hover:text-primary">
                服务条款
              </Link>
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                粤ICP备XXXXXXXX号
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
