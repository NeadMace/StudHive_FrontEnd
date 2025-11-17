import { motion } from "framer-motion";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ParticlesBackground from "../../components/background/ParticlesBackground.jsx";
import { useNavigate } from "react-router-dom";

export default function MyMemberProjects() {
  const navigate = useNavigate();

  // ====== ВРЕМЕННЫЕ ДАННЫЕ ======
  const joinedProjects = [
    {
      id: 12,
      title: "Исследование нейросетей",
      field: "Программирование",
      type: "Научный проект",
      status: "Вы участник",
      role: "Frontend разработчик",
      desc: "Проект по изучению архитектур современных ИИ.",
    },
    {
      id: 44,
      title: "Генетическая модель растений",
      field: "Биология",
      type: "Курсовая работа",
      status: "Заявка отправлена",
      role: "—",
      desc: "Работа с анализом генетических маркеров.",
    },
  ];

  return (
    <div className="auth-bg min-vh-100 position-relative text-white">
      <ParticlesBackground />

      <div style={{ position: "relative", zIndex: 5 }}>
        <Header />

        <main className="container py-5" style={{ paddingTop: "120px" }}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center fw-bold mb-5"
            style={{
              fontSize: "44px",
              background: "linear-gradient(to right, #f48bff, #e1c2ff)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Мои проекты
          </motion.h1>

          {/* Если проектов нет */}
          {joinedProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-white-50 mt-4"
            >
              Вы ещё не участвуете в проектах 😕
              <br />
              <button
                className="btn mt-3 px-4"
                style={{
                  background: "linear-gradient(to right, #d900ff, #7f1aff)",
                  color: "white",
                  borderRadius: "12px",
                }}
                onClick={() => navigate("/projects")}
              >
                Найти проект
              </button>
            </motion.p>
          )}

          {/* СПИСОК ПРОЕКТОВ */}
          <div className="row g-4">
            {joinedProjects.map((proj) => (
              <motion.div
                key={proj.id}
                className="col-sm-6 col-lg-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <motion.div
                  className="p-4 rounded-4 h-100"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(12px)",
                    transition:
                      "border-radius 0.1s, transform 0.1s, box-shadow 0.1s",
                    cursor: "pointer",
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    borderRadius: "30px",
                    boxShadow: "0 0 20px 4px rgba(255, 128, 255, 0.6)",
                  }}
                  whileTap={{
                    scale: 0.96,
                    y: 0,
                    boxShadow: "0 0 10px 2px rgba(255, 128, 255, 0.3)",
                  }}
                  onClick={() => navigate(`/project/${proj.id}`)}
                >
                  <h4
                    style={{
                      background:
                        "linear-gradient(to right, #f48bff, #e1c2ff)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {proj.title}
                  </h4>

                  <p className="text-white-50 small">{proj.desc}</p>

                  <div className="small opacity-75 mb-2">
                    📘 {proj.field} <br />
                    🎓 {proj.type}
                  </div>

                  <div
                    className="p-2 rounded-3 text-center mt-3"
                    style={{
                      background:
                        proj.status === "Вы участник"
                          ? "rgba(0,255,120,0.2)"
                          : "rgba(255,255,0,0.2)",
                      border:
                        proj.status === "Вы участник"
                          ? "1px solid rgba(0,255,120,0.4)"
                          : "1px solid rgba(255,255,0,0.4)",
                    }}
                  >
                    {proj.status}
                  </div>

                  {proj.role !== "—" && (
                    <div className="text-white-50 small mt-2">
                      Ваша роль: <span className="text-white">{proj.role}</span>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
