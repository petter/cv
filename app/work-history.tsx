import { RESUME_DATA } from "@/data/resume-data";

export function WorkHistory() {
  return (
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
  );
}
