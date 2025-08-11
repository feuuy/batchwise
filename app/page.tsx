import { Feature } from "@/components/Feature";
import { Casestudies } from "@/components/Casestudies";
import { Cta } from "@/components/Cta";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Casestudies />
      <Cta
        heading="Create Your First Batch"
        description="Our all-in-one tool cuts guesswork out of the production process, so you can focus on craft, not chaos."
        buttons={{
          primary: {
            text: "Get Started Free",
            url: "#",
          },
          secondary: {
            text: "Contact Us",
            url: "#",
          },
        }}
      />
    </>
  );
}
