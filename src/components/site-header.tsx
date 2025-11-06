import { navItems } from "../data/site";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { Button } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-semibold tracking-[0.3em] uppercase text-primary">
          JD
        </a>
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-primary" href={item.href}>
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Button variant="ghost" className="hidden text-sm font-medium text-muted-foreground hover:text-primary sm:inline-flex" asChild>
          <a href="/resume.pdf">Résumé</a>
        </Button>
      </div>
    </header>
  );
}
