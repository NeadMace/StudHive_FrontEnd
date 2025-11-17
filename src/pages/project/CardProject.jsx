import { useParams } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/footer/Footer.jsx";
import Header from "../../components/header/Header.jsx";
import PatrickBackground from "../../components/background/ParticlesBackground.jsx";
import { motion } from "framer-motion";

// Имитация базы данных — как твой список проектов, но с полным описанием + заказчик
const projectsFullData = [
  {
    id: 1,
    title: "Разработка мобильного приложения",
    field: "Программирование",
    type: "Курсовая работа",
    short: "Создание приложения для отслеживания привычек студентов.",
    full: "Полное техническое описание проекта по разработке мобильного приложения. Включает работу с API, создание frontend-интерфейса, дизайн архитектуры данных и системы отслеживания привычек.",
    customer: {
      name: "Иван Петров",
      company: "StudentLab",
      rating: 4.9,
      avatar: "https://i.pravatar.cc/200?img=12",
      about: "Заказчик и ментор проекта. Специалист по мобильным разработкам.",
    },
  },
  {
    id: 2,
    title: "Исследование органических соединений",
    field: "Химия",
    type: "Научный проект",
    short: "Работа в лаборатории по исследованию катализаторов.",
    full: "Подробное исследование каталитических процессов с применением методик симуляции и лабораторного анализа.",
    customer: {
      name: "Лаборатория ХимАналит",
      company: "ChemAnalyt",
      rating: 4.7,
      avatar: "https://i.pravatar.cc/200?img=34",
      about: "Научная лаборатория, специалист в органической химии.",
    },
  },
  {
    id: 3,
    title: "Моделирование экосистемы",
    field: "Биология",
    type: "Дипломная работа",
    short: "Проект по созданию модели биоценоза.",
    full: "Создание сложной модели экосистемы с расчётом связей видов, динамикой популяций и визуализацией биоцинологических процессов.",
    customer: {
      name: "Анна Кротова",
      company: "BioModel Lab",
      rating: 5.0,
      avatar: "https://i.pravatar.cc/200?img=8",
      about: "Руководитель дипломной работы, биолог-исследователь.",
    },
  },
  {
    id: 4,
    title: "AI-анализ текстов",
    field: "Программирование",
    type: "Научный проект",
    short: "Анализ текстов с помощью моделей ИИ.",
    full: "Детальный анализ текста с применением NLP, построение модели тематического анализа, разработка системы автоматического рефакторинга текста.",
    customer: {
      name: "Компания AI Trends",
      company: "AI Trends",
      rating: 4.8,
      avatar: "https://i.pravatar.cc/200?img=50",
      about: "Компания, занимающаяся анализом данных и NLP.",
    },
  },
];

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectsFullData.find((p) => p.id === Number(id));

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  if (!project)
    return <div className="text-white text-center mt-5">Проект не найден</div>;

  return (
    <div className="auth-bg min-vh-100 position-relative text-white">
      <PatrickBackground />

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
            {project.title}
          </motion.h1>

          <div className="row g-5">
            {/* Описание проекта */}
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-4 h-100"
                style={{
                  minHeight: "550px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <h3 className="mb-3">{project.type}</h3>
                <p className="text-white-50">{project.full}</p>
              </motion.div>
            </div>

            {/* Блок заказчика */}
            <div className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-4 text-center"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <img
                  src={project.customer.avatar}
                  alt="avatar"
                  className="rounded-circle mb-3"
                  style={{
                    width: "120px",
                    height: "120px",
                    border: "3px solid rgba(255,255,255,0.4)",
                  }}
                />

                <h4>{project.customer.name}</h4>
                <p className="text-white-50 mb-1">{project.customer.company}</p>
                <p className="small text-white-50">{project.customer.about}</p>

                <div
                  className="mt-3"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#ffdb73",
                  }}
                >
                  ⭐ {project.customer.rating}
                </div>

                {/* Кнопка "Написать" */}
                <button
                  className="btn mt-4 w-100 py-2"
                  style={{
                    background: "linear-gradient(to right, #d900ff, #7f1aff)",
                    borderRadius: "14px",
                    color: "white",
                    fontSize: "18px",
                    boxShadow: "0 0 16px rgba(200,0,255,0.4)",
                  }}
                >
                  Написать
                </button>

                {/* Кнопка отклика */}
                <button
                  className="btn mt-4 w-100 py-2"
                  style={{
                    background: "linear-gradient(to right, #d900ff, #7f1aff)",
                    borderRadius: "14px",
                    color: "white",
                    fontSize: "18px",
                    boxShadow: "0 0 16px rgba(200,0,255,0.4)",
                  }}
                  onClick={() => setShowModal(true)}
                >
                  Откликнуться на проект
                </button>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {/* ---------- МОДАЛЬНОЕ ОКНО ---------- */}
      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            background: "rgba(0,0,0,0.6)",
            zIndex: 9999,
            backdropFilter: "blur(3px)",
          }}
          onClick={() => setShowModal(false)} // Закрытие по фону
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 rounded-4"
            style={{
              width: "480px",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              backdropFilter: "blur(12px)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Заголовок */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="mb-0">
                Отклик на проект:{" "}
                <span className="text-white-50">{project.title}</span>
              </h4>

              <button
                className="btn btn-sm"
                style={{ color: "white", fontSize: "22px" }}
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>

            {/* Поле ввода */}
            <textarea
              className="form-control text-white"
              placeholder="Напишите сопроводительное письмо (необязательно)"
              style={{
                minHeight: "140px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(6px)",
              }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            {/* Кнопка отправки */}
            <button
              className="btn w-100 mt-4 py-2"
              style={{
                background: "linear-gradient(to right, #d900ff, #7f1aff)",
                borderRadius: "14px",
                color: "white",
                fontSize: "18px",
                boxShadow: "0 0 16px rgba(200,0,255,0.4)",
              }}
              onClick={() => {
                console.log("Отклик отправлен:", message);
                setShowModal(false);
              }}
            >
              Отправить отклик
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
