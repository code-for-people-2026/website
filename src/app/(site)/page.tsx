import Link from "next/link";
import { ArrowRight, FileText, Map, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  deepReads,
  directions,
  formFallbackHref,
  hero,
  participationEntrances,
} from "@/content/site";

function getTencentFormHref() {
  return process.env.NEXT_PUBLIC_TENCENT_FORM_URL || formFallbackHref;
}

export default function HomePage() {
  const formHref = getTencentFormHref();

  return (
    <main>
      <section className="border-b border-[var(--border)] bg-[var(--paper)]">
        <div className="mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-between px-5 py-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-4 text-sm text-[var(--muted)]">
            <Link href="/" className="font-semibold text-[var(--accent)]">
              工友敲键盘
            </Link>
            <nav className="flex gap-4">
              <Link href="/manifesto">宣言</Link>
              <Link href="/license">协议</Link>
              <Link href="/map">方向地图</Link>
            </nav>
          </header>

          <div className="max-w-4xl py-14 sm:py-20">
            <p className="mb-5 text-sm font-semibold tracking-[0.22em] text-[var(--accent)]">
              {hero.kicker}
            </p>
            <h1
              aria-label={hero.title}
              className="max-w-4xl text-5xl font-black leading-[1.08] tracking-normal sm:text-6xl lg:text-7xl"
            >
              <span aria-hidden="true" className="block sm:hidden">
                软件也是
                <br />
                一种服务，
                <br />
                为何不还给人民
              </span>
              <span aria-hidden="true" className="hidden sm:block">
                <span className="block">软件也是一种服务，</span>
                <span className="block">为何不还给人民</span>
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
              {hero.body}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={formHref}>我想一起做事</a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={formHref}>我有真实需求</a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href={formHref}>提出批评</a>
              </Button>
            </div>

            {formHref === formFallbackHref ? (
              <p id="tencent-form-pending" className="mt-4 text-sm text-[var(--dim)]">
                腾讯表单待接入。第一版先确定入口和问题，不伪装成已经上线的收集通道。
              </p>
            ) : null}
          </div>

          <p className="max-w-2xl border-l-4 border-[var(--accent)] bg-[rgba(139,30,45,0.06)] px-4 py-3 text-sm leading-6 text-[var(--muted)]">
            第一版官网先给服务对象看懂：这不是卖课，不是 SaaS 营销，也不是把理论文档堆出来。先听见真实问题，再把 AI 做成能帮上忙的软件。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[var(--accent)]">你可以怎么参与</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">先说清楚你是哪一种来意。</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {participationEntrances.map((item) => (
            <Card key={item.label}>
              <CardHeader>
                <CardTitle>{item.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-[var(--muted)]">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--soft)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold text-[var(--accent)]">方向地图摘要</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">不先猜产品，先看哪些生活还没人认真服务。</h2>
            <p className="mt-5 text-base leading-7 text-[var(--muted)]">
              完整 7×7 方向地图把“服务谁”和“从哪些能力剥夺入手”放在一起。首页只放几个生活入口，避免一上来把人压进表格里。
            </p>
            <Button asChild className="mt-7" variant="secondary">
              <Link href="/map">
                看完整方向地图 <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-3">
            {directions.map((direction) => (
              <div
                key={direction}
                className="rounded-md border border-[var(--border)] bg-[var(--paper)] px-4 py-3 text-sm leading-6"
              >
                {direction}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[var(--accent)]">继续阅读</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">先放三件套，不做档案馆。</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {deepReads.map((item, index) => {
            const Icon = index === 2 ? Map : index === 1 ? MessageSquareText : FileText;
            return (
              <Link key={item.href} href={item.href} className="block text-[var(--ink)] no-underline">
                <Card className="h-full transition-colors hover:border-[var(--accent)]">
                  <CardHeader>
                    <Icon className="h-6 w-6 text-[var(--accent)]" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-[var(--muted)]">{item.summary}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
