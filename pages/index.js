export default function Home() {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh",
      backgroundColor: "#0E1116",
      color: "#E5F2F4",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "2.5rem", color: "#4F46E5" }}>
        Subventech
      </h1>
      <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
        Vos subventions en un clic 🚀
      </p>
    </div>
  )
}
