import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { useNavigate } from "react-router-dom";

export default function CreateProjectPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    type: "",
    field: "",
    short: "",
    full: "",
    deadline: "",
    requirements: "",
    people: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendProject = () => {
    console.log("Проект отправлен на модерацию:", form);

    navigate("/project");
  };

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
            Создание проекта
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-4"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* НАЗВАНИЕ */}
            <label className="form-label mt-3">Название проекта</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="form-control text-white"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            />

            {/* ТИП + НАПРАВЛЕНИЕ */}
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="form-label">Тип работы</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="form-select text-white"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <option className="text-dark" value="">
                    Выберите тип
                  </option>
                  <option className="text-dark" value="Курсовая работа">
                    Курсовая работа
                  </option>
                  <option className="text-dark" value="Дипломная работа">
                    Дипломная работа
                  </option>
                  <option className="text-dark" value="Научный проект">
                    Научный проект
                  </option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Направление</label>
                <select
                  name="field"
                  value={form.field}
                  onChange={handleChange}
                  className="form-select text-white"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <option className="text-dark" value="">
                    Выберите направление
                  </option>
                  <option className="text-dark" value="Программирование">
                    Программирование
                  </option>
                  <option className="text-dark" value="Химия">
                    Химия
                  </option>
                  <option className="text-dark" value="Биология">
                    Биология
                  </option>
                </select>
              </div>
            </div>

            {/* КРАТКОЕ ОПИСАНИЕ */}
            <label className="form-label mt-3">Краткое описание</label>
            <textarea
              name="short"
              value={form.short}
              onChange={handleChange}
              className="form-control text-white"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            />

            {/* ПОЛНОЕ ОПИСАНИЕ */}
            <label className="form-label mt-3">Полное описание</label>
            <textarea
              name="full"
              value={form.full}
              onChange={handleChange}
              className="form-control text-white"
              style={{
                minHeight: "150px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            />

            {/* ДАТЫ: СТАРТ + ФИНИШ */}
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="form-label">Дата старта</label>
                  <input
                    type="date"
                    name="start"
                    value={form.start}
                    onChange={handleChange}
                    className="form-control text-white"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.25)",
                    }}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Дата финиша</label>
                  <input
                    type="date"
                    name="end"
                    value={form.end}
                    onChange={handleChange}
                    className="form-control text-white"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.25)",
                    }}
                  />
                </div>
              </div>


            {/* Требования */}
            <label className="form-label mt-3">Требования к участникам</label>
            <textarea
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              className="form-control text-white"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            />

            {/* Количество участников */}
            <label className="form-label mt-3">Количество участников</label>
            <input
              name="people"
              value={form.people}
              onChange={handleChange}
              type="number"
              className="form-control text-white"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            />

            {/* КНОПКА */}
            <button
              className="btn w-100 mt-4 py-2"
              style={{
                background: "linear-gradient(to right, #d900ff, #7f1aff)",
                borderRadius: "14px",
                color: "white",
                fontSize: "18px",
                boxShadow: "0 0 16px rgba(200,0,255,0.4)",
              }}
              onClick={sendProject}
            >
              Отправить на модерацию
            </button>
          </motion.div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
