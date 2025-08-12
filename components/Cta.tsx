import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-16 px-2 md:px-0">
      <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-display lg:text-5xl">
            Create Your First Batch
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our all-in-one tool cuts guesswork out of the production process, so
            you can focus on craft, not chaos.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/sign-up">
                <span className="font-display">Get Started Free</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/contact-us">
                <span className="font-display">Contact Us</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
