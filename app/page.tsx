import SectionHero from "@/app/components/home-page/section-hero";
import PageWrapper from "@/app/ui/page-wrapper";
import Section from "@/app/ui/section";
import Footer from "@/app/components/layout/footer";
import Navber from "@/app/components/layout/navbar";

export default function Home() {
  return (
    <PageWrapper>
      <div>
        <Navber />
        <Section element="main">
          <SectionHero />
        </Section>
      </div>
      <Footer />
    </PageWrapper>
  );
}
