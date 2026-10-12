import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "./components/WorkExperience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";
import { Hackathons } from "./components/Hackathons";

const SITE_URL = "https://krlberg.dev";
const TITLE = "Kirill Rybkov CV";

// The on-page bio is intentionally blank right now; link previews still need
// something, so fall back rather than shipping an empty description.
const DESCRIPTION =
  RESUME_DATA.about ||
  "Engineering, hardware, and software projects by Kirill Rybkov.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Kirill Rybkov",
  authors: [{ name: "Kirill Rybkov", url: SITE_URL }],
  creator: "Kirill Rybkov",
  keywords: [
    "Kirill Rybkov",
    "Advanced Technology",
    "University of Twente",
    "Embedded systems",
    "Control systems",
    "FMEA",
    "Reliability engineering",
    "Hardware prototyping",
    "TypeScript",
    "Next.js",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: TITLE,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@krlberg",
  },
};

// Person schema so search engines can associate the profiles with the name.
const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kirill Rybkov",
  url: SITE_URL,
  description: DESCRIPTION,
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Twente" },
    { "@type": "HighSchool", name: "The British School of Barcelona" },
  ],
  knowsAbout: [
    "Embedded electronics",
    "Control systems",
    "CAD",
    "Reliability engineering",
    "FMEA",
    "Full-stack web development",
  ],
  sameAs: RESUME_DATA.contact.social.map((s) => s.url),
};

function getCommandMenuLinks() {
  return RESUME_DATA.contact.social.map((socialMediaLink) => ({
    url: socialMediaLink.url,
    title: socialMediaLink.name,
  }));
}

export default function ResumePage() {
  const { university, secondary } = RESUME_DATA.education;

  return (
    <main
      className="print:max-w-letter container relative mx-auto scroll-my-12 overflow-auto p-4 print:!px-6 print:!py-3 md:p-16"
      id="main-content"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
      />

      <section
        className="mx-auto w-full max-w-3xl space-y-8 bg-white print:space-y-1.5"
        aria-label="Resume content"
      >
        <Header />

        <div className="space-y-8 print:space-y-1.5">
          <Skills
            categories={RESUME_DATA.skillCategories}
            sectionTitle="Tech stack"
          />

          <WorkExperience work={RESUME_DATA.work} title="Experience" />

          <WorkExperience
            work={RESUME_DATA.engineeringProjects}
            title="Engineering projects"
          />

          <Education
            institutions={[
              university,
              secondary,
            ]}
          />

          <Hackathons />
        </div>
      </section>

      <nav className="print:hidden" aria-label="quick navigation">
        <CommandMenu links={getCommandMenuLinks()} />
      </nav>
    </main>
  );
}
