import Container from "@/app/ui/container";
import { ButtonLink } from "@/app/ui/link";
import Section from "@/app/ui/section";

export default function SectionHero() {
  return (
    <Section>
      <Container>
        <ButtonLink href="/" className="btn-wide">
          Default
        </ButtonLink>
      </Container>
    </Section>
  );
}
