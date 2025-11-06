import { SectionHeader } from "../section-header";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { skillGroups } from "../../data/site";

export function SkillsSection() {
  return (
    <section id="skills" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Skills"
          title="Stacks I rely on"
          description="A snapshot of the tools and technologies I reach for when building resilient products."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title} className="border-none bg-background/80 shadow-sm">
              <CardHeader className="flex items-center gap-3">
                <group.icon className="size-6 text-primary" aria-hidden />
                <CardTitle>{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
