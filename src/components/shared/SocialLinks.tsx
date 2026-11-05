import { business } from "@/data/business";

const profiles = [
  { label: "Instagram", href: business.instagramUrl },
  { label: "Google", href: business.googleProfileUrl },
] as const;

type SocialLinksProps = {
  className?: string;
  linkClassName?: string;
};

export function SocialLinks({ className, linkClassName }: SocialLinksProps) {
  return (
    <ul className={className}>
      {profiles.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
