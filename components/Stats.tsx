export default function Stats() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-16 px-6 md:space-y-24">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-display lg:text-5xl">
            Empowering Makers Worldwide
          </h2>
          <p className="text-muted-foreground font-text">
            Trusted by artisans in baking, crafting, and distilling to
            streamline production and boost efficiency.
          </p>
        </div>
        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4 pb-6 md:pb-0">
            <div className="text-5xl font-bold">2,577+</div>
            <p>Small Craft Producers</p>
          </div>
          <div className="space-y-4 pb-6 md:pb-0">
            <div className="text-5xl font-bold">7.4M+</div>
            <p>9L Cases Produced Annually</p>
          </div>
          <div className="space-y-4 pb-6 md:pb-0">
            <div className="text-5xl font-bold">185,000</div>
            <p>Average Cases per Large Producer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
