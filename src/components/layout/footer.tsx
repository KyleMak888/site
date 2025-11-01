import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

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
    href: "https://weixin.qq.com/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.5 3C4.4 3 1 6 1 9.7c0 2.4 1.5 4.6 3.8 6l-.9 2.8 3.2-1.6c.9.2 1.9.4 2.9.4.4 0 .8 0 1.2-.1-.3-.9-.4-1.8-.4-2.8C10.8 9.9 14.3 6.5 19 6.5c.3 0 .6 0 .9.1C18.7 4.3 13.9 3 8.5 3zm-1.9 4.9c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm5.8 0c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1-1.4.6-1.4 1.4-1.4zM19 8c-3.5 0-6.4 2.5-6.4 5.5s2.9 5.5 6.4 5.5c.9 0 1.8-.2 2.6-.5l2.5 1.3-.7-2.2c1.8-1.1 3-3 3-5.1 0-3-2.9-5.5-6.4-5.5zm-2.5 3.6c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1zm5 0c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/linkend-tech",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:contact@linkend.cn",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8l8 7 8-7v10H4Z" />
      </svg>
    ),
  },
];

const icpRecordNumber = "粤ICP备2024012345号-1";
const policeRecordNumber = "粤公网安备 44010602012345 号";

function FooterLink({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("http");
  const isSpecialProtocol = href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal || isSpecialProtocol) {
    return (
      <a
        href={href}
        className="text-sm text-gray-300 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="text-sm text-gray-300 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
    >
      {label}
    </Link>
  );
}

export async function Footer() {
  const t = await getTranslations("common");
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
                L
              </span>
              <div className="flex flex-col leading-tight">
                <span>Linkend Tech</span>
                <span className="text-xs text-gray-300">{t("footer.tagline")}</span>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm text-gray-300">
              {t("meta.description")}
            </p>
            <div className="mt-6 flex gap-4" aria-label={t("footer.socialLinks")}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 text-gray-300 transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div aria-labelledby="footer-services-heading">
            <h3
              id="footer-services-heading"
              className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-200"
            >
              {t("footer.services")}
            </h3>
            <ul className="space-y-3">
              <li><FooterLink href="/services/brand-marketing" label={t("footer.brandMarketing")} /></li>
              <li><FooterLink href="/services/digital-product" label={t("footer.digitalProduct")} /></li>
              <li><FooterLink href="/services/data-martech" label={t("footer.dataMartech")} /></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div aria-labelledby="footer-resources-heading">
            <h3
              id="footer-resources-heading"
              className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-200"
            >
              {t("footer.resources")}
            </h3>
            <ul className="space-y-3">
              <li><FooterLink href="/work" label={t("footer.caseStudies")} /></li>
              <li><FooterLink href="/insights" label={t("footer.insights")} /></li>
              <li><FooterLink href="/about" label={t("footer.aboutUs")} /></li>
            </ul>
          </div>

          {/* Company Section */}
          <div aria-labelledby="footer-company-heading">
            <h3
              id="footer-company-heading"
              className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-200"
            >
              {t("footer.company")}
            </h3>
            <ul className="space-y-3">
              <li><FooterLink href="/contact" label={t("footer.contact")} /></li>
              <li><FooterLink href="mailto:contact@linkend.cn" label="contact@linkend.cn" /></li>
              <li><FooterLink href="tel:+8602012345678" label="+86 020 1234 5678" /></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-300 md:flex-row">
            <p>{t("footer.copyright", { year: currentYear })}</p>
            <div className="flex flex-wrap items-center gap-6 text-center md:text-left">
              <FooterLink href="/privacy" label={t("footer.privacy")} />
              <FooterLink href="/terms" label={t("footer.terms")} />
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label={`备案信息 ${icpRecordNumber}`}
              >
                {icpRecordNumber}
              </a>
              <span className="text-sm text-gray-400" aria-label="备案警察编号">
                {policeRecordNumber}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
