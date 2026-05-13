export type CustomInfo = {
  title: string;
  description: string;
  accent: string;
}

export function CustomArticle(info:CustomInfo) {
  return (
    <article
      key={info.title}
      className="rounded-[1.25rem] border border-border bg-background p-4"
    >
      <div
        className="h-2 w-10 rounded-full"
        style={{ backgroundColor: info.accent }}
      />
      <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/90">
        {info.title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-foreground/65">
        {info.description}
      </p>
    </article>
  );
}