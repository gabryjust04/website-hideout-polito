import Image from "next/image";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Membro } from "@/data/team";

const blurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWMY2Nj4DwAB7QG0l7xPGwAAAABJRU5ErkJggg==";

export function MemberCard({ member }: { member: Membro }) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-14 w-14">
          {member.image ? (
            <Image
              alt={member.name}
              src={member.image}
              fill
              sizes="56px"
              className="rounded-full object-cover"
              placeholder="blur"
              blurDataURL={member.blurDataURL ?? blurDataURL}
            />
          ) : (
            <AvatarFallback>{initials}</AvatarFallback>
          )}
        </Avatar>
        <div>
          <CardTitle className="text-lg">{member.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{member.role}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p>{member.bio}</p>
        <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-primary">
          {member.skills.map((skill) => (
            <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-primary">
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
