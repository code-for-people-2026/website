import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

type DocumentContent = {
  title: string;
  eyebrow: string;
  body: string[];
};

export function DocumentPage({ document }: { document: DocumentContent }) {
  return (
    <main className="min-h-screen bg-[var(--paper)]">
      <article className="mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-12">
        <Button asChild variant="ghost" size="sm" className="-ml-3 mb-10">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            回到首页
          </Link>
        </Button>

        <p className="text-sm font-semibold tracking-[0.18em] text-[var(--accent)]">
          {document.eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{document.title}</h1>

        <div className="mt-10 space-y-6 border-t border-[var(--border)] pt-8 text-lg leading-9 text-[var(--ink)]">
          {document.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}

