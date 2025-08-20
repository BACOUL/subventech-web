export default function Brand() {
  const Box = ({ name, varName, hex }) => (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg border border-border" style={{ background: hex }} />
      <div className="text-sm">
        <strong>{name}</strong>
        <div className="text-muted">{hex}</div>
      </div>
    </div>
  );

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <h1 className="font-display text-3xl">Brand Kit — SubvenTech</h1>

      <section className="space-y-3">
        <h2 className="font-display text-xl">Slogan</h2>
        <p><strong>Vos subventions. En un clic.</strong></p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl">Couleurs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Box name="Background" hex="#0E1116" />
          <Box name="Surface" hex="#111827" />
          <Box name="Text" hex="#E5F2F4" />
          <Box name="Primary" hex="#4F46E5" />
          <Box name="Muted" hex="#94A3B8" />
          <Box name="Border" hex="#1F2937" />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl">Typographies</h2>
        <p>Titres : <em>Sora</em> — Texte : <em>Inter</em> (intégration via Google Fonts plus tard).</p>
      </section>
    </main>
  );
    }
