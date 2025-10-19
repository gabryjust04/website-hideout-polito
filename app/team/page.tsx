"use client";

import { useMemo, useState } from "react";

import { RoleSection } from "@/components/role-section";
import { SearchInput } from "@/components/search-input";
import { SectionHeading } from "@/components/section-heading";
import { YearTabs } from "@/components/year-tabs";
import { teamMembers, availableYears } from "@/data/team";

const roleLabels: Record<string, string> = {
  Presidente: "Direzione",
  Vicepresidente: "Direzione",
  "Lead Sviluppo": "Sviluppo",
  "Lead Design": "Design",
  "Responsabile Eventi": "Eventi",
  "Community Manager": "Community",
  "Coordinatore Progetti": "Progetti",
  "Responsabile Comunicazione": "Comunicazione",
  Mentor: "Mentorship",
  Tesoriere: "Gestione"
};

export default function TeamPage() {
  const [selectedYear, setSelectedYear] = useState(availableYears[0] ?? "");
  const [query, setQuery] = useState("");

  const filteredMembers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return teamMembers.filter((member) => {
      if (selectedYear && member.year !== selectedYear) return false;
      if (!normalizedQuery) return true;

      return (
        member.name.toLowerCase().includes(normalizedQuery) ||
        member.role.toLowerCase().includes(normalizedQuery) ||
        member.skills.some((skill) => skill.toLowerCase().includes(normalizedQuery))
      );
    });
  }, [selectedYear, query]);

  const groupedByRole = useMemo(() => {
    const groups = new Map<string, typeof filteredMembers>();
    for (const member of filteredMembers) {
      const groupKey = roleLabels[member.role] ?? member.role;
      if (!groups.has(groupKey)) {
        groups.set(groupKey, []);
      }
      groups.get(groupKey)!.push(member);
    }

    return Array.from(groups.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredMembers]);

  return (
    <div className="container flex flex-col gap-16 py-16">
      <SectionHeading
        eyebrow="Il nostro team"
        title="Studenti che rendono possibile Hideout"
        description="Ogni anno una nuova generazione di membri guida attività, progetti e percorsi di mentorship. Scopri chi c'è dietro la community."
      />

      <div className="flex flex-col items-center gap-6">
        <YearTabs years={availableYears} value={selectedYear} onChange={setSelectedYear} />
        <SearchInput value={query} onChange={setQuery} />
      </div>

      <div className="space-y-12">
        {groupedByRole.length ? (
          groupedByRole.map(([label, members]) => (
            <RoleSection key={label} title={label} members={members} />
          ))
        ) : (
          <p className="text-center text-muted-foreground">
            Nessun membro trovato per la ricerca selezionata. Prova a modificare i filtri.
          </p>
        )}
      </div>
    </div>
  );
}
