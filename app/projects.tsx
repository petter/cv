import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { RESUME_DATA } from "@/data/resume-data";

export function Projects() {
  return (
    <section className="space-y-4 print:break-inside-avoid">
      <h2 className="mb-4 text-xl font-bold">Projects</h2>
      <p className="max-w-lg text-pretty">
        Here are some of the projects I&apos;ve been involved in, either through
        work or as a side project.
      </p>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 print:grid-cols-3">
        {RESUME_DATA.projects.map((project) => (
          <li key={project.name}>
            <a href={project.href} className="group">
              <Card>
                <CardHeader>
                  <CardTitle className="group-hover:underline">
                    {project.name}
                  </CardTitle>
                  <CardDescription>{project.type}</CardDescription>
                </CardHeader>
                <CardContent>{project.description}</CardContent>
                <CardFooter>
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <Badge variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardFooter>
              </Card>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
