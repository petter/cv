import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { RESUME_DATA } from "@/data/resume-data";

export default function Home() {
  return (
    <main className="container relative max-w-4xl rounded-sm bg-white p-8 shadow-xl">
      <div className="space-y-8">
        <header className="flex items-center justify-between gap-4">
          <div className="flex-1 space-y-1.5">
            <h1 className="mb-4 text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="text-pretty text-lg text-gray-600">
              {RESUME_DATA.about}
            </p>
          </div>
          <div>
            <Avatar className="size-32">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </header>
      </div>
    </main>
  );
}
