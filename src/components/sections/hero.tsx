import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import type { LucideIcon } from "lucide-react";

const socialLinks: { href: string; icon: LucideIcon; label: string }[] = [
  {
    href: "mailto:hello@example.com",
    icon: Mail,
    label: "Email"
  },
  {
    href: "https://github.com/example",
    icon: Github,
    label: "GitHub"
  },
  {
    href: "https://linkedin.com/in/example",
    icon: Linkedin,
    label: "LinkedIn"
  }
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 text-center">
        <Badge className="border border-primary/20 bg-primary/10 text-primary">
          Available for new opportunities in Q4 2024
        </Badge>
        <Avatar className="h-28 w-28 shadow-glow">
          <AvatarImage src="https://avatars.githubusercontent.com/u/000000?v=4" alt="Profile" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Product engineer crafting human-friendly experiences with delightful details.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            I design, build, and scale modern web products. From playful interactions to resilient
            architecture, I help teams ship quickly without sacrificing craft.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" className="gap-2">
            View case studies
            <ArrowUpRight className="size-4" aria-hidden />
          </Button>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="#projects">Explore projects</a>
          </Button>
        </div>
        <TooltipProvider>
          <div className="flex items-center gap-4 text-muted-foreground">
            {socialLinks.map((item) => (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    className="rounded-full border border-border/70 p-2.5 transition hover:border-primary/50 hover:text-primary"
                    aria-label={item.label}
                  >
                    <item.icon className="size-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>{item.label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
