import { motion } from "framer-motion";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react";

export default function MyMemberProjects() {
  const navigate = useNavigate();

  // ====== ФИЛЬТРЫ ======
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  // ====== ДАННЫЕ ======
  const joinedProjects = [
    {
      id: 12,
      title: "Исследование нейросетей",
      field: "Программирование",
      type: "Научный проект",
      status: "В работе",
      role: "Frontend разработчик",
      desc: "Проект по изучению архитектур современных ИИ.",
    },
    {
      id: 44,
      title: "Генетическая модель растений",
      field: "Биология",
      type: "Курсовая работа",
      status: "Заявка отправлена",
      role: "Разработчик",
      desc: "Работа с анализом генетических маркеров.",
    },
    {
      id: 73,
      title: "Анализ химических соединений",
      field: "Химия",
      type: "Научный проект",
      status: "Архивный",
      role: "Лаборант",
      desc: "Исследование связей органических веществ.",
    },
    {
      id: 91,
      title: "Разработка ИИ-модели для диагностики",
      field: "Программирование",
      type: "Дипломная работа",
      status: "Отклонен модерацией",
      role: "Заказчик",
      desc: "Модель для распознавания патологий по снимкам.",
    },
  ];

  // ====== ФИЛЬТРАЦИЯ ======
  const filtered = joinedProjects.filter((p) => {
    const matchName = p.title.toLowerCase().includes(search.toLowerCase());
    const matchType = type ? p.type === type : true;
    const matchStatus = status ? p.status === status : true;
    return matchName && matchType && matchStatus;
  });

  return (
    <div className="auth-bg min-vh-100 position-relative text-white">
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

          {/* ====== ФИЛЬТРЫ ====== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-4 mb-5"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <div className="row g-3 align-items-center">

              {/* Поиск по названию */}
              <div className="col-md-4 position-relative">
                <Search
                  size={20}
                  style={{
                    position: "absolute",
                    left: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    opacity: 0.6,
                  }}
                />

                <input
                  className="form-control text-white"
                  placeholder="Найти проект..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    paddingLeft: "40px",
                  }}
                />
              </div>

              {/* Фильтр по типу */}
              <div className="col-md-4">
                <select
                  className="form-select text-white"
                  onChange={(e) => setType(e.target.value)}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <option className="text-dark" value="">Тип работы</option>
                  <option className="text-dark" value="Курсовая работа">Курсовая работа</option>
                  <option className="text-dark" value="Дипломная работа">Дипломная работа</option>
                  <option className="text-dark" value="Научный проект">Научный проект</option>
                </select>
              </div>

              {/* Фильтр по статусу */}
              <div className="col-md-4">
                <select
                  className="form-select text-white"
                  onChange={(e) => setStatus(e.target.value)}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <option className="text-dark" value="">Статус</option>
                  <option className="text-dark" value="Заявка отправлена">Заявка отправлена</option>
                  <option className="text-dark" value="В работе">В работе</option>
                  <option className="text-dark" value="Архивный">Архивный</option>
                  <option className="text-dark" value="Заявка отклонена">Заявка отклонена</option>
                  <option className="text-dark" value="На модерации">На модерации</option>
                  <option className="text-dark" value="Отклонен модерацией">Отклонен модерацией</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* ====== НЕТ ПРОЕКТОВ ====== */}
          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-white-50 mt-4"
            >
              Проекты не найдены 🤔
            </motion.p>
          )}

          {/* ====== СПИСОК КАРТОЧЕК ====== */}
          <div className="row g-4">
            {filtered.map((proj) => (
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
                        proj.status === "В работе"
                          ? "rgba(0,255,120,0.2)"
                          : proj.status === "Архивный"
                          ? "rgba(180,180,180,0.2)"
                          : proj.status.includes("откл")
                          ? "rgba(255,0,0,0.2)"
                          : "rgba(255,255,0,0.2)",
                      border:
                        proj.status === "В работе"
                          ? "1px solid rgba(0,255,120,0.4)"
                          : proj.status === "Архивный"
                          ? "1px solid rgba(180,180,180,0.4)"
                          : proj.status.includes("откл")
                          ? "1px solid rgba(255,0,0,0.4)"
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
