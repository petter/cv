import { RESUME_DATA } from "@/data/resume-data";

export function WorkHistory() {
  return (
    <section className="print:break-inside-avoid">
      <h2 className="mb-4 text-xl font-bold">Work Experience</h2>
      <ul className="flex flex-col gap-8 sm:gap-6">
        {RESUME_DATA.workHistory.map((work, i) => (
          <li key={i} className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-bold">{work.company}</h3>
              <p className="text-pretty">
                {work.from} - {work.to || "Present"}
              </p>
            </div>
            <p className="text-pretty text-sm text-slate-600">{work.title}</p>
            <p className="max-w-lg text-pretty">{work.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
