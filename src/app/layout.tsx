import "./globals.css";
import { ReactNode } from "react";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Via Fidei",
  description: "Descubra igrejas e arte sacra com tecnologia.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />

            <main className="flex-1 flex flex-col overflow-y-auto">
              <Header />
              <div className="p-4">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
