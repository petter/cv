import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Petter Sæther Moen",
  initials: "PSM",
  title: "Software Engineer",
  location: "Trondheim, Norway, CET",
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
  workHistory: [
    {
      company: "Bekk Consulting AS",
      from: "Aug 2021",
      title: "Consultant/Senior Consultant",
      description: "",
    },
    {
      company: "Bekk Consulting AS",
      from: "Jun 2020",
      to: "Jul 2020",
      title: "Summer Intern",
      description: "",
    },
    {
      company: "Bekk Consulting AS",
      from: "Jun 2019",
      to: "Aug 2019",
      title: "Summer Intern",
      description: "",
    },
    {
      company: "Fylkesmannen i Møre og Romsdal",
      from: "Jun 2018",
      to: "Jul 2018",
      title: "Summer Intern",
      description: "",
    },
    {
      company: "Fylkesmannen i Møre og Romsdal",
      from: "Jun 2017",
      to: "Jul 2017",
      title: "Summer Intern",
      description: "",
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
