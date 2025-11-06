import { Mail } from "lucide-react";
import { SectionHeader } from "../section-header";
import { Button } from "../ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeader
          eyebrow="Contact"
          title="Let's collaborate"
          description="Tell me about your product, the problem you're solving, or the team you want to empower."
        />
        <div className="mt-8 flex flex-col items-center gap-3 text-muted-foreground">
          <p className="text-sm">
            Send me a note and I'll respond within two business days.
          </p>
          <Button size="lg" className="gap-2" asChild>
            <a href="mailto:hello@example.com">
              <Mail className="size-5" aria-hidden />
              hello@example.com
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
