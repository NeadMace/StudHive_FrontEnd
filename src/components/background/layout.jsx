import ParticlesBackground from "./ParticlesBackground";

export default function Layout({ children }) {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
    
      <ParticlesBackground />

      {/* Контент страниц */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}