import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ClipboardClock, Database, DollarSign } from "lucide-react";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section className="py-16 md:py-32">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-display lg:text-5xl">
            Built to Cover Your Needs
          </h2>
          <p className="mt-4 text-muted-foreground">
            Batchwise automates tracking batch logging and profit insights so
            you spend less time guessing and more time creating.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 [--color-background:var(--color-background)] [--color-card:var(--color-background)] *:text-center md:mt-16 dark:[--color-muted:var(--color-background)]">
          <Card className="group border-0 shadow-none">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Database className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Real-time Stock Tracking</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Know what ingredients you have and what is running low.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-none">
            <CardHeader className="pb-3">
              <CardDecorator>
                <ClipboardClock className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Batch Logging Made Easy</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Record each production run in seconds and automatically
                calculate yields and costs.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-none">
            <CardHeader className="pb-3">
              <CardDecorator>
                <DollarSign className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Profit Dashboards</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                See your most and least profitable products at a glance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="dark:bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t bg-white">
      {children}
    </div>
  </div>
);
