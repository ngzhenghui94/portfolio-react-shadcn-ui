import { SectionHeader } from "../section-header";
import { Card, CardContent } from "../ui/card";

const highlights = [
  "Strategic partner from ideation through launch.",
  "Strong advocate for accessibility and inclusive design.",
  "Thrives in cross-functional teams that value curiosity."
];

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="About"
          title="Making ambitious ideas feel effortless"
          description="I translate complex requirements into experiences people love. I lead with empathy, measure what matters, and ship polish at scale."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((highlight) => (
            <Card key={highlight} className="border-none bg-secondary/40 shadow-none">
              <CardContent className="space-y-3 text-left">
                <div className="h-1 w-12 rounded-full bg-primary/60" />
                <p className="text-sm text-muted-foreground">{highlight}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
