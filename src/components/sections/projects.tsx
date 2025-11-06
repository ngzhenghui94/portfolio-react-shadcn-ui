import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SectionHeader } from "../section-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { projects } from "../../data/site";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          description="Products and systems I've helped teams bring to life."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="group border border-border/60 bg-card/70">
              <CardHeader>
                <CardTitle className="flex items-start justify-between gap-4 text-2xl">
                  {project.title}
                  <ExternalLink className="size-5 text-muted-foreground transition group-hover:text-primary" />
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/70 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.link ? (
                  <Button variant="ghost" className="w-fit gap-2 px-0 text-primary" asChild>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      View project
                      <ArrowUpRight className="size-4" aria-hidden />
                    </a>
                  </Button>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
