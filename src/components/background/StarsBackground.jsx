import { useEffect, useRef } from "react";

export default function StarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Установка размера
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const stars = [];
    const count = 150;

    // Создаем звезды
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        o: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        s.o += s.speed;
        const opacity = (Math.sin(s.o) + 1) / 2;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    // очистка при размонтировании
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none", // ⭐ важно, чтобы не мешал кликам
      }}
    />
  );
}