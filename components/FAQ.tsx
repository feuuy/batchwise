"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQ() {
  const faqItems = [
    {
      id: "item-1",
      question: "How do I sign up?",
      answer:
        "Signing up takes seconds. Just enter your email and create a password. You’ll immediately access your Starter plan and begin tracking your first batch.",
    },
    {
      id: "item-2",
      question: "What is included in the Free plan?",
      answer:
        "The Starter plan includes three active batches per month, real-time stock tracking, batch logging, and basic profit dashboards. No credit card required.",
    },
    {
      id: "item-3",
      question: "How does billing work?",
      answer:
        "Plans are billed monthly. You can upgrade at any time. Changes take effect immediately and you only pay the difference. Annual billing is also available with a discount.",
    },
    {
      id: "item-4",
      question: "Can I switch plans later?",
      answer:
        "Yes, you can upgrade your plan at any time to unlock unlimited batches, advanced forecasting, and customizable reports.",
    },
    {
      id: "item-5",
      question: "How secure is my data?",
      answer:
        "We use industry-standard encryption and secure hosting to protect your data. Your information is safe, private, and only accessible by you.",
    },
    {
      id: "item-6",
      question: "What if I need help?",
      answer:
        "We’re here to help. Reach out via email for guides, tutorials, and answers.",
    },
  ];

  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-display lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Find clear and concise answers to common questions about Batchwise
            features, accounts, pricing, and getting started.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1"
          >
            {faqItems.map((item) => (
              <div className="group" key={item.id}>
                <AccordionItem
                  value={item.id}
                  className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
              </div>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8 text-center">
            Still have questions? Reach out to our{" "}
            <Link
              href="/contact-us"
              className="text-primary font-medium hover:underline"
            >
              support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
