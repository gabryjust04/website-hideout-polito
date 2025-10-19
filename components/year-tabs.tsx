"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function YearTabs({
  years,
  value,
  onChange
}: {
  years: string[];
  value: string;
  onChange: (year: string) => void;
}) {
  return (
    <Tabs value={value} onValueChange={onChange} className="w-full">
      <TabsList className="mx-auto flex max-w-full flex-wrap justify-center gap-2 bg-muted/60 p-2">
        {years.map((year) => (
          <TabsTrigger key={year} value={year} className="px-6 py-2">
            {year}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
