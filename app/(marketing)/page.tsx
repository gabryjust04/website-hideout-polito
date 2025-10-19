import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const activities = [
  {
    title: "Workshop pratici",
    description:
      "Sessioni pratiche su design, sviluppo e innovazione condotte da studenti e professionisti dell'ecosistema torinese.",
    icon: "🎓"
  },
  {
    title: "Progetti collaborativi",
    description:
      "Team multidisciplinari lavorano su sfide reali proposte da aziende partner o nate da idee dei nostri membri.",
    icon: "🛠️"
  },
  {
    title: "Eventi e networking",
    description:
      "Aperitech, talk e momenti sociali per connettere studenti, alumni e realtà locali in un clima informale.",
    icon: "🤝"
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      <Hero />

      <section className="container">
        <SectionHeading
          eyebrow="Cosa facciamo"
          title="Una community, molte opportunità"
          description="Sosteniamo la crescita personale e professionale degli studenti attraverso percorsi concreti e collaborativi."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {activities.map((activity) => (
            <Card key={activity.title} className="border-primary/20 bg-card/80 shadow-lg">
              <CardHeader>
                <span className="text-4xl" aria-hidden>
                  {activity.icon}
                </span>
                <CardTitle className="mt-4 font-outfit text-2xl">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{activity.description}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-gradient">
        <div className="container grid gap-12 py-16 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Perché Hideout"
              title="Uno spazio sicuro per sperimentare"
              description="Mettiamo a disposizione mentor, strumenti e una rete di alumni per trasformare le idee in progetti. Ogni semestre organizziamo cicli di attività su misura per i bisogni della community."
            />
          </div>
          <div className="grid gap-4">
            {["Mentorship tra pari", "Connessione con aziende", "Laboratori pratici", "Supporto alla carriera"].map((item) => (
              <div
                key={item}
                className={cn("flex items-center justify-between rounded-2xl border bg-card/90 px-6 py-4 shadow-sm")}
              >
                <p className="font-medium text-foreground">{item}</p>
                <span aria-hidden className="text-2xl text-primary">
                  •
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
