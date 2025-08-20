export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-surface/70 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary" />
            <span className="font-display text-sm">SubvenTech</span>
          </div>
          <nav className="flex items-center gap-2">
            <a href="/brand" className="text-sm text-muted hover:text-text">Brand Kit</a>
            <a href="#" className="text-sm text-muted hover:text-text">Se connecter</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center space-y-6">
        <h1 className="font-display text-4xl md:text-5xl tracking-tight">
          Vos subventions. <span className="text-primary">En un clic.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-muted">
          Assistant IA focalisé subventions/aides/financements — preuve-first, anticipation,
          simplicité, rigueur RGPD.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium bg-primary text-white hover:opacity-95 active:opacity-90 shadow-focus"
             href="#">
            Tester vos aides
          </a>
          <a className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium border border-border hover:bg-surface"
             href="/brand">
            Voir le Brand Kit
          </a>
        </div>

        {/* 3 piliers */}
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          <div className="rounded-2xl bg-surface border border-border p-6">
            <h3 className="font-display mb-2">Preuve-first</h3>
            <p className="text-sm text-muted">Chaque action génère une preuve vérifiable (PDF/JSON/EML/ICS).</p>
          </div>
          <div className="rounded-2xl bg-surface border border-border p-6">
            <h3 className="font-display mb-2">Simple & rapide</h3>
            <p className="text-sm text-muted">Parcours en 3 étapes, 60 s pour la première preuve.</p>
          </div>
          <div className="rounded-2xl bg-surface border border-border p-6">
            <h3 className="font-display mb-2">RGPD by design</h3>
            <p className="text-sm text-muted">Données minimisées, stockage UE, audit & rollback.</p>
          </div>
        </div>
      </section>
    </main>
  );
    }
