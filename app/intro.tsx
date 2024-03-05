import { RESUME_DATA } from "@/data/resume-data";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ReactNode } from "react";
import { EmailIcon, TelephoneIcon, WebsiteIcon } from "@/components/icons";

export function Intro() {
  return (
    <header className="flex items-center justify-between gap-8">
      <div className="flex-1 space-y-4">
        <div>
          <h1 className="mb-2 text-2xl font-bold">{RESUME_DATA.name}</h1>
          <p className="max-w-lg text-pretty text-gray-600">
            {RESUME_DATA.about}
          </p>
        </div>
        <ul className="grid grid-flow-col grid-rows-3 gap-2">
          <SoMeItem
            href={`tel:${RESUME_DATA.contact.tel}`}
            icon={<TelephoneIcon />}
            name="Telephone"
          >
            {RESUME_DATA.contact.tel}
          </SoMeItem>
          <SoMeItem
            href={`mailto:${RESUME_DATA.contact.email}`}
            icon={<EmailIcon />}
            name="Email"
          >
            {RESUME_DATA.contact.email}
          </SoMeItem>
          <SoMeItem
            href={RESUME_DATA.personalWebsiteUrl}
            icon={<WebsiteIcon />}
            name="Website"
          >
            {RESUME_DATA.personalWebsiteUrl}
          </SoMeItem>
          {RESUME_DATA.contact.social.map((some) => (
            <SoMeItem
              key={some.name}
              href={some.url}
              icon={some.icon}
              name={some.name}
            >
              {some.handle}
            </SoMeItem>
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

interface SoMeItemProps {
  icon: ReactNode;
  name: string;
  href: string;
  children: ReactNode;
}

function SoMeItem({ icon, name, children, href }: SoMeItemProps) {
  return (
    <li>
      <a href={href} className="group flex items-center gap-2 text-gray-700">
        <div className="h-5 w-5" aria-label={name}>
          {icon}
        </div>
        <span className="group-hover:underline">{children}</span>
      </a>
    </li>
  );
}
