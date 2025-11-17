import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Sparkles } from "lucide-react";
import Header from '../../components/header/Header.jsx'
import Footer from '../../components/footer/Footer.jsx'
import { useNavigate } from "react-router-dom";

// Данные проектов
const projectsData = [
  {
    id: 1,
    title: "Разработка мобильного приложения",
    field: "Программирование",
    type: "Курсовая работа",
    desc: "Создание приложения для отслеживания привычек студентов.",
  },
  {
    id: 2,
    title: "Исследование органических соединений",
    field: "Химия",
    type: "Научный проект",
    desc: "Работа в лаборатории по исследованию катализаторов.",
  },
  {
    id: 3,
    title: "Моделирование экосистемы",
    field: "Биология",
    type: "Дипломная работа",
    desc: "Проект по созданию модели биоценоза.",
  },
  {
    id: 4,
    title: "AI-анализ текстов",
    field: "Программирование",
    type: "Научный проект",
    desc: "Анализ текстов с помощью моделей ИИ.",
  },
];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [field, setField] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();

  const filtered = projectsData.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (field ? p.field === field : true) &&
      (type ? p.type === type : true)
  );

  return (
    <div
      className="auth-bg min-vh-100 position-relative text-white" 
    >
      <div style={{ position: "relative" }}>

      {/* -----------------------------------
          ⭐ ВЕСЬ САЙТ ВЕРХНЕГО УРОВНЯ
      ------------------------------------ */}
      <div style={{ position: "relative", zIndex: 5 }}>
        <Header/>

        {/* MAIN */}
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
            Проекты
          </motion.h1>

          {/* ФИЛЬТРЫ */}
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

              {/* поиск */}
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

              {/* направление */}
              <div className="col-md-3">
                <select
                  className="form-select text-white"
                  onChange={(e) => setField(e.target.value)}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <option className="text-dark" value="">Направление</option>
                  <option className="text-dark" value="Программирование">Программирование</option>
                  <option className="text-dark" value="Химия">Химия</option>
                  <option className="text-dark" value="Биология">Биология</option>
                </select>
              </div>
                
              {/* тип работы */}
              <div className="col-md-3">
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
             
              {/* Кнопка создания проекта */}
              <div className="col-md-2">
                <button
                  className="btn w-100"
                    style={{
                      background: "linear-gradient(to right, #d900ff, #7f1aff)",
                      color: "white",
                      borderRadius: "14px",
                      boxShadow: "0 0 12px rgba(200,0,255,0.4)",
                    }}
                  onClick={() => navigate("/create-project")}
                >
                  + Создать проект
                </button>
              </div>
            </div>      
          </motion.div>
          
          {/* ПРОЕКТЫ */}
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
                    background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(12px)",
                    transition: "border-radius 0.075s, transform 0.075s, box-shadow 0.075s",
                    cursor: "pointer",
                    }}
                    whileHover={{
                    scale: 1.05,
                    y: -5,
                    borderRadius: "30px",
                    boxShadow: "0 0 20px 4px rgba(255, 128, 255, 0.6)",
                    }}
                    whileTap={{
                    scale: 0.97,
                    y: 0,
                    boxShadow: "0 0 10px 2px rgba(255, 128, 255, 0.3)",
                    }}
                    onClick={() => navigate(`/project/${proj.id}`)}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <h4
                    style={{
                        background: "linear-gradient(to right, #f48bff, #e1c2ff)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                    }}
                    >
                    {proj.title}
                    </h4>

                    <p className="text-white-50 small">{proj.desc}</p>

                    <div className="d-flex justify-content-between small opacity-75">
                    <span>📘 {proj.field}</span>
                    <span>🎓 {proj.type}</span>
                    </div>
                </motion.div>
                </motion.div>
            ))}
            </div>

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-white-50 mt-4"
            >
              Ничего не найдено 😕
            </motion.p>
          )}
        </main>

        {/* FOOTER */}
        <Footer/>
      </div>
      </div>
    </div>
  );
}