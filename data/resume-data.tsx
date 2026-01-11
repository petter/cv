import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Petter Sæther Moen",
  initials: "PSM",
  title: "Software Engineer",
  location: "Toronto, Canada",
  about:
    "Full-stack Software Developer with a passion for creating stuff that people want to use.",
  avatarUrl: "https://avatars.githubusercontent.com/u/25374940",
  personalWebsiteUrl: "https://pmoen.me",
  contact: {
    email: "pettersmoen@gmail.com",
    tel: "+4745200167",
    social: [
      {
        name: "GitHub",
        handle: "petter",
        url: "https://github.com/petter",
        icon: <GitHubIcon />,
      },
      {
        name: "LinkedIn",
        handle: "Petter Sæther Moen",
        url: "https://linkedin.com/in/pettersmoen",
        icon: <LinkedInIcon />,
      },
      {
        name: "X",
        handle: "@pettersmoen",
        url: "https://x.com/pettersmoen",
        icon: <XIcon />,
      },
    ],
  },
  education: [
    {
      school: "University of Oslo",
      program: "Informatics: Programming and System Architecture",
      from: "Aug 2016",
      to: "June 2021",
      description:
        "M.Sc. in Informatics with a specialization in programming languages/compiler technique. As part of the work on my masters' thesis I extended TypeScript with Package Templates, a language feature that enables class merging, enabling a form of aspect-oriented programming.",
    },
  ],
  workHistory: [
    {
      company: "Bekk Consulting AS",
      from: "Aug 2021",
      to: "Dec 2025",
      title: "Consultant/Senior Consultant",
      description:
        "Consulted at Entur and the Norwegian Court administration, mainly developing and architecting large scale web applications.",
    },
    {
      company: "Bekk Consulting AS",
      from: "Jun 2020",
      to: "Jul 2020",
      title: "Summer Intern",
      description:
        "Created an informational website showing EV sales statistics for the Norwegian Public Roads Administration (Statens Vegvesen).",
    },
    {
      company: "Bekk Consulting AS",
      from: "Jun 2019",
      to: "Aug 2019",
      title: "Summer Intern",
      description:
        "Modernized a resident verification system for the student welfare organization in Oslo.",
    },
    {
      company: "Fylkesmannen i Møre og Romsdal",
      from: "Jun 2018",
      to: "Jul 2018",
      title: "Summer Intern",
      description:
        "Finished the tourism website for Trollheimen Protected Landscape from the year prior.",
    },
    {
      company: "Fylkesmannen i Møre og Romsdal",
      from: "Jun 2017",
      to: "Jul 2017",
      title: "Summer Intern",
      description:
        "Started working on a tourism website for Trollheimen Protected Landscape. It was developed as a WordPress site with a custom PHP theme.",
    },
  ],
  projects: [
    {
      name: "LettVet",
      href: "https://lett.vet",
      type: "Side project",
      description:
        "Founded a SaaS business offering a journaling system for veterinary clinics.",
      tags: ["Next.js", "Tailwind CSS", "Drizzle", "tRPC"],
    },
    {
      name: "Lovisa frontend architecture",
      href: "https://domstol.no",
      type: "Work project",
      description:
        "Designed the frontend architecture for the Norwegian Courts' new case mangement system.",
      tags: ["Micro frontend", "Architecture"],
    },
    {
      name: "Elsa",
      href: "https://design.domstol.no",
      type: "Work project",
      description: "Lead developer on the Norwegian Courts' design system.",
      tags: ["npm publishing", "Turborepo", "Storybook"],
    },
    {
      name: "Custody processing app",
      href: "https://domstol.no",
      type: "Work project",
      description: "A new custody processing app for the Norwegian Courts.",
      tags: ["React", "Kotlin", "Ktor", "RabbitMQ"],
    },
    {
      name: "Entur Partner",
      href: "https://entur.no",
      type: "Work project",
      description:
        "Developed a micro-frontend framework at Entur, streamlining collaboration for building large-scale web applications.",
      tags: ["React", "Micro frontend", "Java", "Spring"],
    },
  ],
};
