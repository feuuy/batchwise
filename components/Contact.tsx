import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-display lg:text-5xl">
            We're Here to Help
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a question or need help getting started? Drop us a message
            below and we’ll get back to you.
          </p>
        </div>

        <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
          <form
            action=""
            className="**:[&>label]:block mt-6 space-y-6 *:space-y-3"
          >
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input type="text" id="name" required />
            </div>

            <div>
              <Label htmlFor="email">Work Email</Label>
              <Input type="email" id="email" required />
            </div>

            <div>
              <Label htmlFor="website">Company Website</Label>
              <Input type="url" id="website" />
              <span className="text-muted-foreground inline-block text-sm">
                Must start with 'https'
              </span>
            </div>

            <div>
              <Label htmlFor="msg">How can we help?</Label>
              <Textarea id="msg" rows={3} />
            </div>

            <Button>Send Message</Button>
          </form>
        </Card>

        <p className="text-muted-foreground mt-6 px-8 text-center">
          Check to see if your question has already been answered at our{" "}
          <Link
            href="/faq"
            className="text-primary font-medium hover:underline"
          >
            FAQ
          </Link>
        </p>
      </div>
    </section>
  );
}
