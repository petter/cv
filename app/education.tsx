import { RESUME_DATA } from "@/data/resume-data";

export function Education() {
  return (
    <section className="print:break-inside-avoid">
      <h2 className="mb-4 text-xl font-bold">Education</h2>
      <ul className="flex flex-col gap-4">
        {RESUME_DATA.education.map((edu, i) => (
          <li key={i} className="flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">{edu.school}</h3>
              <p className="text-pretty">
                {edu.from} - {edu.to || "Present"}
              </p>
            </div>
            <p className="text-pretty text-sm text-slate-600">{edu.program}</p>
            <p className="max-w-lg text-pretty">{edu.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
