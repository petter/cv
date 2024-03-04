import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { RESUME_DATA } from "@/data/resume-data";

export default function Home() {
  return (
    <main className="container relative max-w-4xl rounded-sm bg-white px-16 py-10 shadow-xl print:p-2 print:shadow-none">
      <div className="space-y-8">
        <header className="flex items-center justify-between gap-8">
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="mb-4 text-2xl font-bold">{RESUME_DATA.name}</h1>
              <p className="max-w-lg text-pretty text-lg text-gray-600">
                {RESUME_DATA.about}
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              {RESUME_DATA.contact.social.map((some) => (
                <li key={some.url}>
                  <a
                    href={some.url}
                    className="group flex items-center gap-2 text-gray-700"
                  >
                    <div className="h-5 w-5" aria-label={some.name}>
                      {some.icon}
                    </div>
                    <span className="group-hover:underline">{some.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Avatar className="size-32">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <Separator />

        <section className="print:break-inside-avoid">
          <h2 className="mb-4 text-xl font-bold">Work Experience</h2>
          <ul className="flex flex-col gap-4">
            {RESUME_DATA.workHistory.map((work, i) => (
              <li key={i} className="flex flex-col">
                <h3 className="font-bold">{work.company}</h3>
                <div className="flex gap-2 text-sm text-slate-600">
                  <p className="text-pretty">{work.title}</p>
                  <span>·</span>
                  <p className="text-pretty">
                    {work.from} - {work.to || "Present"}
                  </p>
                </div>
                <p className="max-w-lg text-pretty">{work.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <Separator />

        <section className="space-y-4 print:break-inside-avoid">
          <h2 className="mb-4 text-xl font-bold">Projects</h2>
          <p className="max-w-lg text-pretty text-lg">
            This is a list of all the projects I&apos;ve been involved in,
            either through work or as a side project.
          </p>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
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
      </div>
    </main>
  );
}
