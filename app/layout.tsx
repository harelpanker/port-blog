import { dm_sans, spack_grotesk } from "@/app/lib/fonts";
import { Children } from "@/app/types/children";
import PageWrapper from "@/app/ui/page-wrapper";
import Section from "@/app/ui/section";
import Footer from "@/app/components/layout/footer";
import Navber from "@/app/components/layout/navbar";
import { ThemeProvider } from "@/app/lib/theme-toggle";
import PaddingBottom from "@/app/ui/PaddingBottom";
import { siteMetadata } from "@/app/lib/metadata";
import "./globals.css";

export const metadata = siteMetadata;

export default function RootLayout({ children }: Readonly<Children>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${dm_sans.variable} ${spack_grotesk.variable} scroll-smooth`}
    >
      <body className={`font-dm-sans antialiased`}>
        <ThemeProvider>
          <PageWrapper>
            <div className="flex grow flex-col">
              <Navber />
              <Section element="main">{children}</Section>
            </div>
            <PaddingBottom />
            <Footer />
          </PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
