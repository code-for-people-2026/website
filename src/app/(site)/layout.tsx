import type { Metadata, Viewport } from "next";
import "../globals.css";

const siteTitle = "工友敲键盘｜软件也是一种服务";
const siteDescription =
  "一个面向普通劳动者的软件项目：先听见跑单、做工、看店、摆摊、找活、照顾家里的真实问题，再把 AI 做成能帮上忙的工具。";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "工友敲键盘",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbfaf6",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
