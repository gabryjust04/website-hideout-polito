import { ReactNode } from "react";

export function SectionHeading({ title, eyebrow, description }: { title: string; eyebrow?: string; description?: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center rounded-full bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-outfit text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg text-muted-foreground">{description}</p> : null}
    </div>
  );
}
