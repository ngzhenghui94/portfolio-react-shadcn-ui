import { BriefcaseBusiness } from "lucide-react";
import { SectionHeader } from "../section-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { experiences } from "../../data/site";

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Leadership grounded in craft"
          description="I love building healthy engineering cultures and coaching teams to deliver exceptional results."
        />
        <div className="mt-12 space-y-6">
          {experiences.map((experience) => (
            <Card key={experience.company} className="border border-border/60 bg-background/70">
              <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BriefcaseBusiness className="size-5" aria-hidden />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{experience.company}</CardTitle>
                    <CardDescription className="text-sm font-medium text-foreground">
                      {experience.role}
                    </CardDescription>
                  </div>
                </div>
                <span className="text-sm font-medium text-muted-foreground">{experience.period}</span>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-primary/70" />
                      <span>{achievement}</span>
                    </li>
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
