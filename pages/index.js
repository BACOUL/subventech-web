// ping deploy
export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      background: "#0E1116",
      color: "#E5F2F4",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "24px"
    }}>
      <div>
        <div style={{
          display: "inline-block",
          padding: "6px 10px",
          borderRadius: "999px",
          background: "#111827",
          border: "1px solid #1F2937",
          marginBottom: "12px",
          fontSize: 12,
          letterSpacing: 0.3
        }}>Subventech</div>
        <h1 style={{ fontSize: 36, margin: 0, color: "#4F46E5" }}>
          Vos subventions en un clic
        </h1>
        <p style={{ opacity: 0.9, marginTop: 8 }}>
          Déploiement minimal opérationnel ✅
        </p>
      </div>
    </div>
  );
}
