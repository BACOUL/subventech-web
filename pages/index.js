export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      gap: "8px",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "24px"
    }}>
      <h1>SubvenTech</h1>
      <h2>Vos subventions. En un clic.</h2>
      <p>Site en construction — on branche le branding et les pages très vite.</p>
      <a href="/brand" style={{textDecoration:"underline"}}>Voir le Brand Kit</a>
    </div>
  );
}
