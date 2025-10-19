import { MemberCard } from "@/components/member-card";
import type { Membro } from "@/data/team";

export function RoleSection({ title, members }: { title: string; members: Membro[] }) {
  if (!members.length) return null;

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-outfit text-2xl font-semibold text-foreground">{title}</h3>
        <span className="text-sm text-muted-foreground">{members.length} membri</span>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
