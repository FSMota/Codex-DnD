import { CustomArticle } from "@/app/components/home/article";
import { colorPalette } from "@/app/config/colors";
      
const structureCards = [
  {
    title: "components/",
    description: "Elementos reutilizáveis, sem lógica de rota.",
    accent: colorPalette.brand[600],
  },
  {
    title: "layouts/",
    description: "Casas e molduras visuais compartilhadas.",
    accent: colorPalette.accent[600],
  },
  {
    title: "config/colors.ts",
    description: "Paleta central para tema, tokens e variações.",
    accent: colorPalette.support[600],
  },
] as const;

export function HomePage() {
  return (
    <main className="flex min-h-full flex-1">
          <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-10 sm:px-10 lg:px-12 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-8">
                <span className="inline-flex w-fit items-center rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium shadow-sm shadow-black/5">
                  Estrutura modular do sistema
                </span>
      
                <div className="space-y-4">
                  <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Organize o App Router por responsabilidade, não por volume.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-foreground/70 sm:text-xl">
                    Separe páginas, componentes, layouts e tokens visuais em pastas
                    próprias para reduzir acoplamento e facilitar a evolução do
                    frontend.
                  </p>
                </div>
      
                <div className="flex flex-wrap gap-3 text-sm font-medium text-foreground/80">
                  <span className="rounded-full border border-border bg-surface px-4 py-2">
                    app/page.tsx
                  </span>
                  <span className="rounded-full border border-border bg-surface px-4 py-2">
                    app/components/
                  </span>
                  <span className="rounded-full border border-border bg-surface px-4 py-2">
                    app/layouts/
                  </span>
                  <span className="rounded-full border border-border bg-surface px-4 py-2">
                    app/config/colors.ts
                  </span>
                </div>
              </div>
      
              <div className="grid gap-4 rounded-4xl border border-border bg-surface p-4 shadow-[0_30px_80px_rgba(23,19,18,0.12)] sm:p-6">
                <div className="rounded-3xl border border-border bg-[linear-gradient(135deg,var(--surface),var(--surface-muted))] p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.28em] text-foreground/50">
                    Blueprint
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-foreground">
                    Base pronta para crescer em módulos.
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-6 text-foreground/70">
                    A paleta fica centralizada em um único arquivo, enquanto a rota
                    principal apenas renderiza a página interna.
                  </p>
                </div>
      
                <div className="grid gap-3 sm:grid-cols-3">
                  {structureCards.map((card) => (
                    <CustomArticle key={card.title} {...card} />
                  ))}
                </div>
              </div>
            </div>
          </section>
    </main>
  );
}