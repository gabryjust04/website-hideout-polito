"use client";

import { Input } from "@/components/ui/input";

export function SearchInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="relative w-full max-w-md">
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Cerca per nome, ruolo o competenze"
        aria-label="Cerca membri del team"
        className="pl-4 pr-4"
      />
    </div>
  );
}
