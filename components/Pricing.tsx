"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { usePlans } from "@clerk/nextjs/experimental";

export default function Pricing() {
  const { data: plans } = usePlans({
    for: "user",
    pageSize: 10,
  });

  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-display lg:text-5xl">
            Choose the Plan That Fits Your Needs
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you&apos;re just starting out or scaling your operations,
            Batchwise offers plans designed to support your growth.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
          <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
            <div className="space-y-4">
              <div>
                <h2 className="font-medium">Free Plan</h2>
                <span className="my-3 block text-2xl font-semibold">
                  &euro;{`${plans[0]?.amountFormatted} / month`}
                </span>
              </div>

              <Button asChild variant="outline" className="w-full">
                <Link href="">Get Started</Link>
              </Button>

              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {plans[0]?.features.map((feature) => (
                  <li key={feature.id} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {feature.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h2 className="font-medium">Pro Plan</h2>
                  <span className="my-3 block text-2xl font-semibold">
                    &euro;{`${plans[1]?.amountFormatted} / month`}
                  </span>
                </div>

                <Button asChild className="w-full">
                  <Link href="">Get Started</Link>
                </Button>
              </div>

              <div>
                <ul className="list-outside space-y-3 text-sm">
                  {plans[1]?.features.map((feature) => (
                    <li key={feature.id} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
