import { Separator } from "@/components/ui/separator";
import { WorkHistory } from "./work-history";
import { Projects } from "./projects";
import { Intro } from "./intro";
import { Education } from "./education";

export default function Home() {
  return (
    <main className="container relative max-w-4xl rounded-sm bg-white px-6 py-10 shadow-xl sm:px-16 print:p-2 print:shadow-none">
      <div className="space-y-8">
        <Intro />
        <Separator />
        <WorkHistory />
        <Separator />
        <Education />
        <Separator />
        <Projects />
      </div>
    </main>
  );
}
