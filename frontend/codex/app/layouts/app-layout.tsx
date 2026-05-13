import type { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <body className="min-h-full flex flex-col bg-background text-foreground">
      {children}
    </body>
  );
}