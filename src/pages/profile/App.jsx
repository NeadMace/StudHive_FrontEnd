import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { Pencil, Check } from "lucide-react";

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Андрей Иванов",
    avatar: "https://i.pravatar.cc/200?img=15",
    rating: 4.9,
    about: "Студент 3 курса, фронтенд-разработчик, специализация — веб-интерфейсы.",
    course: "3 курс",
    field: "Программирование",
    institute: "Институт информационных технологий",
    group: "ПИ-31",
    description:
      "Участвую в научных и учебных проектах, занимаюсь веб-разработкой и созданием интерфейсов. Готов выполнять индивидуальные задания и участвовать в командных проектах.",
    reviews: [
      {
        id: 1,
        project: "Разработка мобильного приложения",
        text: "Отличная работа, выполнено в срок и качественно.",
        rating: 5,
      },
      {
        id: 2,
        project: "AI-анализ текстов",
        text: "Грамотно реализовал модель анализа, рекомендую!",
        rating: 4.8,
      },
    ],
  });

  const handleChange = (field, value) => {
    setUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="auth-bg min-vh-100 position-relative text-white">

      <div style={{ position: "relative", zIndex: 5 }}>
        <Header />

        <main className="container py-5" style={{ paddingTop: "120px" }}>
          
          {/* Заголовок */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fw-bold mb-5 text-center"
            style={{
              fontSize: "44px",
              background: "linear-gradient(to right, #f48bff, #e1c2ff)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Личный кабинет
          </motion.h1>

          <div className="row g-5">

            {/* ЛЕВАЯ КОЛОНКА */}
            <div className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-4 text-center h-100"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="rounded-circle mb-3"
                  style={{
                    width: "140px",
                    height: "140px",
                    border: "3px solid rgba(255,255,255,0.4)",
                  }}
                />

                <h3>{user.name}</h3>

                {editing ? (
                  <textarea
                    className="form-control text-white mt-2"
                    value={user.about}
                    onChange={(e) => handleChange("about", e.target.value)}
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  />
                ) : (
                  <p className="text-white-50">{user.about}</p>
                )}

                <div
                  className="mt-3"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#ffdb73",
                  }}
                >
                  ⭐ {user.rating}
                </div>
              </motion.div>
            </div>

            {/* ПРАВАЯ КОЛОНКА — УЧЕБНАЯ ИНФОРМАЦИЯ */}
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-4 position-relative"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(16px)",
                }}
              >

                {/* Кнопка редактирования */}
                <button
                  onClick={() => setEditing(!editing)}
                  className="btn p-2"
                  style={{
                    position: "absolute",
                    top: 15,
                    right: 15,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  {editing ? <Check size={18} /> : <Pencil size={18} />}
                </button>

                <h4 className="mb-3">Учебная информация</h4>

                {/* КУРС */}
                <p>
                  <b>Курс:</b>{" "}
                  {editing ? (
                    <input
                      className="form-control text-white mt-1"
                      value={user.course}
                      onChange={(e) => handleChange("course", e.target.value)}
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    />
                  ) : (
                    user.course
                  )}
                </p>

                {/* НАПРАВЛЕНИЕ */}
                <p>
                  <b>Направление:</b>{" "}
                  {editing ? (
                    <input
                      className="form-control text-white mt-1"
                      value={user.field}
                      onChange={(e) => handleChange("field", e.target.value)}
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    />
                  ) : (
                    user.field
                  )}
                </p>

                {/* ИНСТИТУТ */}
                <p>
                  <b>Институт:</b>{" "}
                  {editing ? (
                    <input
                      className="form-control text-white mt-1"
                      value={user.institute}
                      onChange={(e) =>
                        handleChange("institute", e.target.value)
                      }
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    />
                  ) : (
                    user.institute
                  )}
                </p>

                {/* ГРУППА */}
                <p>
                  <b>Группа:</b>{" "}
                  {editing ? (
                    <input
                      className="form-control text-white mt-1"
                      value={user.group}
                      onChange={(e) => handleChange("group", e.target.value)}
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    />
                  ) : (
                    user.group
                  )}
                </p>

                <h4 className="mt-4">Описание</h4>

                {editing ? (
                  <textarea
                    className="form-control text-white"
                    value={user.description}
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    rows={4}
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  />
                ) : (
                  <p className="text-white-50">{user.description}</p>
                )}
              </motion.div>
            </div>
          </div>

          {/* ОТЗЫВЫ */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-5 mb-4"
          >
            Отзывы
          </motion.h2>

          <div className="row g-4 mb-5">
            {user.reviews.map((rev) => (
              <div className="col-md-6" key={rev.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-4"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <h5>{rev.project}</h5>
                  <p className="text-white-50">{rev.text}</p>
                  <p style={{ color: "#ffdb73", fontWeight: "bold" }}>
                    ⭐ {rev.rating}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
