export type Ruolo =
  | "Presidente"
  | "Vicepresidente"
  | "Lead Sviluppo"
  | "Lead Design"
  | "Responsabile Eventi"
  | "Community Manager"
  | "Coordinatore Progetti"
  | "Responsabile Comunicazione"
  | "Mentor"
  | "Tesoriere";

export interface Membro {
  id: string;
  name: string;
  role: Ruolo;
  year: string;
  bio: string;
  skills: string[];
  image?: string;
  blurDataURL?: string;
}

export const teamMembers: Membro[] = [
  {
    id: "giulia-ricci",
    name: "Giulia Ricci",
    role: "Presidente",
    year: "2024/2025",
    bio: "Ingegnere informatica appassionata di prototipazione rapida e comunità inclusive. Coordina la visione strategica del club.",
    skills: ["leadership", "product", "ai"]
  },
  {
    id: "marco-bianchi",
    name: "Marco Bianchi",
    role: "Vicepresidente",
    year: "2024/2025",
    bio: "Si occupa delle partnership con aziende e startup locali per creare opportunità concrete per gli studenti.",
    skills: ["partnership", "public speaking", "strategy"]
  },
  {
    id: "sara-conti",
    name: "Sara Conti",
    role: "Lead Design",
    year: "2024/2025",
    bio: "UX/UI designer con background in comunicazione visiva. Facilita workshop creativi e definisce il design system del club.",
    skills: ["ux", "facilitation", "design system"],
    image: "/team/sara-conti.jpg"
  },
  {
    id: "luca-moretto",
    name: "Luca Moretto",
    role: "Lead Sviluppo",
    year: "2024/2025",
    bio: "Full-stack developer interessato a web performance e infrastrutture cloud. Guida i progetti tecnici interni.",
    skills: ["next.js", "cloud", "devops"],
    image: "/team/luca-moretto.jpg"
  },
  {
    id: "elena-romani",
    name: "Elena Romani",
    role: "Responsabile Eventi",
    year: "2024/2025",
    bio: "Progetta format formativi e hackathon tematici coinvolgendo speaker internazionali e community locali.",
    skills: ["event design", "logistica", "moderazione"]
  },
  {
    id: "federico-piras",
    name: "Federico Piras",
    role: "Tesoriere",
    year: "2024/2025",
    bio: "Gestisce il budget del club, cura i rapporti amministrativi con l'università e supporta le richieste di finanziamento.",
    skills: ["budget", "reporting", "project finance"]
  },
  {
    id: "noemi-ferrari",
    name: "Noemi Ferrari",
    role: "Community Manager",
    year: "2023/2024",
    bio: "Accoglie i nuovi membri, coordina il mentoring e mantiene vivo il dialogo sul nostro server Discord.",
    skills: ["community", "mentoring", "communication"],
    image: "/team/noemi-ferrari.jpg"
  },
  {
    id: "andrea-lorusso",
    name: "Andrea Lorusso",
    role: "Coordinatore Progetti",
    year: "2023/2024",
    bio: "Supporta i team nella definizione degli obiettivi e nella pianificazione agile delle attività settimanali.",
    skills: ["scrum", "coaching", "roadmapping"]
  },
  {
    id: "chiara-bellini",
    name: "Chiara Bellini",
    role: "Responsabile Comunicazione",
    year: "2023/2024",
    bio: "Gestisce storytelling, newsletter e contenuti social valorizzando i progetti sviluppati dagli studenti.",
    skills: ["copywriting", "social media", "storytelling"],
    image: "/team/chiara-bellini.jpg"
  },
  {
    id: "matteo-rossi",
    name: "Matteo Rossi",
    role: "Mentor",
    year: "2022/2023",
    bio: "Alumnus ora software engineer. Continua a seguire la community con mentorship tecnica e mock interview.",
    skills: ["backend", "career", "mentorship"]
  },
  {
    id: "ilaria-mancini",
    name: "Ilaria Mancini",
    role: "Lead Design",
    year: "2022/2023",
    bio: "Ha introdotto processi di design critico e user research nelle attività del club, ora lavora in una digital agency.",
    skills: ["research", "design ops", "workshops"]
  },
  {
    id: "giacomo-leone",
    name: "Giacomo Leone",
    role: "Lead Sviluppo",
    year: "2022/2023",
    bio: "Ha guidato la migrazione ai progetti Next.js e introdotto pratiche di testing automatico per i team di sviluppo.",
    skills: ["typescript", "testing", "architecture"]
  },
  {
    id: "valentina-gallo",
    name: "Valentina Gallo",
    role: "Responsabile Eventi",
    year: "2022/2023",
    bio: "Ha lanciato il format mensile \"Aperitech\" che oggi coinvolge oltre 150 studenti a incontro.",
    skills: ["partnership", "event production", "sponsorship"]
  },
  {
    id: "emanuele-costa",
    name: "Emanuele Costa",
    role: "Presidente",
    year: "2021/2022",
    bio: "Ha consolidato la struttura organizzativa di Hideout e avviato collaborazioni con laboratori del Politecnico.",
    skills: ["leadership", "operations", "fundraising"]
  }
];

export const availableYears = Array.from(new Set(teamMembers.map((member) => member.year))).sort((a, b) =>
  a < b ? 1 : -1
);
export const roles = Array.from(new Set(teamMembers.map((member) => member.role))).sort();
