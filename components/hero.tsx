import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWMY2Nj4DwAB7QG0l7xPGwAAAABJRU5ErkJggg==";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-20">
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[length:32px_32px] opacity-40" aria-hidden />
      <div className="container flex flex-col items-start gap-12 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <Badge className="rounded-full bg-secondary/60 text-secondary-foreground">Community studentesca dal 2015</Badge>
          <h1 className="max-w-2xl font-outfit text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Costruiamo esperienze digitali e connessioni tra studenti del Politecnico di Torino.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Hideout è il luogo dove designer, developer e maker si incontrano per creare progetti concreti, condividere
            conoscenze e organizzare eventi tecnologici aperti a tutta la community universitaria.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/contatti">Partecipa a un incontro</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/team">Conosci il team</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border bg-card shadow-xl">
            <Image
              alt="Membri di Hideout Polito che collaborano in uno spazio di coworking"
              src="/fotodigruppo.jpg"
              fill
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
