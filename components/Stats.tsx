export default function Stats() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-16 px-6 md:space-y-24">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center ">
          <h2 className="text-4xl font-display lg:text-5xl">
            Batchwise in Numbers
          </h2>
          <p className="text-muted-foreground font-text">
            Used by dozens of small-batch bakers, crafters, and distillers.
          </p>
        </div>
        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4 pb-6 md:pb-0">
            <div className="text-5xl font-bold">+1200</div>
            <p>Stars on GitHub</p>
          </div>
          <div className="space-y-4 pb-6 md:pb-0">
            <div className="text-5xl font-bold">22 Million</div>
            <p>Active Users</p>
          </div>
          <div className="space-y-4 pb-6 md:pb-0">
            <div className="text-5xl font-bold">+500</div>
            <p>Powered Apps</p>
          </div>
        </div>
      </div>
    </section>
  );
}
