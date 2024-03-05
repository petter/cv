import { RESUME_DATA } from "@/data/resume-data";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Intro() {
  return (
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
  );
}