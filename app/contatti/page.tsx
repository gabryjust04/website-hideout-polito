"use client";

import { FormEvent, useState } from "react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  message: ""
};

export default function ContactsPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (values: FormState) => {
    const nextErrors: Partial<FormState> = {};
    if (!values.name.trim()) {
      nextErrors.name = "Inserisci il tuo nome";
    }
    if (!values.email.trim()) {
      nextErrors.email = "Inserisci una email valida";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "L'indirizzo email non è valido";
    }
    if (values.message.trim().length < 20) {
      nextErrors.message = "Il messaggio deve contenere almeno 20 caratteri";
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    }
  };

  const handleChange = (field: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setSubmitted(false);
  };

  return (
    <div className="container flex flex-col gap-16 py-16">
      <SectionHeading
        eyebrow="Parliamone"
        title="Scrivici per collaborazioni o informazioni"
        description="Che tu voglia proporre un workshop, chiedere supporto per un progetto o entrare nel club, raccontaci la tua idea."
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <Card className="h-full border-primary/20 bg-card/80">
          <CardHeader>
            <CardTitle className="font-outfit text-2xl">Info e contatti</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              📍 <span className="font-medium text-foreground">Politecnico di Torino</span> – Via Boggio 61, Torino
            </p>
            <p>
              ✉️ <a className="text-primary hover:underline" href="mailto:contatti@hideout.polito.it">contatti@hideout.polito.it</a>
            </p>
            <p>
              💬 Unisciti al nostro server <a className="text-primary hover:underline" href="https://discord.gg/" target="_blank" rel="noreferrer">Discord</a>
            </p>
            <p>Segui gli aggiornamenti su Instagram e LinkedIn per scoprire i prossimi eventi.</p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="font-outfit text-2xl">Mandaci un messaggio</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-5" noValidate onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground" htmlFor="name">
                  Nome e cognome
                </label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(event) => handleChange("name")(event.target.value)}
                  placeholder="Es. Giulia Ricci"
                  required
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby="name-error"
                />
                {errors.name ? (
                  <p id="name-error" className="text-sm text-destructive">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground" htmlFor="email">
                  Email istituzionale
                </label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => handleChange("email")(event.target.value)}
                  placeholder="nome.cognome@studenti.polito.it"
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby="email-error"
                />
                {errors.email ? (
                  <p id="email-error" className="text-sm text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground" htmlFor="message">
                  Come possiamo aiutarti?
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(event) => handleChange("message")(event.target.value)}
                  placeholder="Raccontaci la tua richiesta o l'idea che vorresti sviluppare con Hideout."
                  rows={6}
                  className="w-full rounded-md border border-input bg-background px-3 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby="message-error"
                  required
                />
                {errors.message ? (
                  <p id="message-error" className="text-sm text-destructive">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <Button type="submit" className="w-full">
                Invia richiesta
              </Button>

              {submitted ? (
                <p className="text-sm text-primary">
                  Grazie! Ti risponderemo appena possibile.
                </p>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
