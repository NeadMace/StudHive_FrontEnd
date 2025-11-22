import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/footer/Footer.jsx";
import Header from "../../components/header/Header.jsx";
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

const tasksData = [
  {
    id: 1,
    title: "Сделать UI макет",
    deadline: "2025-01-10",
    assignee: "Иван Иванов",
    description: "Полностью сверстать экран авторизации и профиль.",
    completed: false
  },
  {
    id: 2,
    title: "Подключить API",
    deadline: "2025-01-05",
    assignee: "Мария Смирнова",
    description: "Реализовать отправку данных на сервер и авторизацию пользователей.",
    completed: true
  },
  {
    id: 3,
    title: "Написать документацию",
    deadline: "2024-12-25",
    assignee: "Андрей П.",
    description: "Описать структуру проекта и основные модули.",
    completed: false
  }
];


export default function ProjectPage() {
  const { id } = useParams();
  const project = projectsFullData.find((p) => p.id === Number(id));

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const [tab, setTab] = useState("info");

  const [selectedTask, setSelectedTask] = useState(null);
  const [taskList, setTaskList] = useState(tasksData);

  const navigate = useNavigate();
 
  const [showCreateTask, setShowCreateTask] = useState(false);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    deadline: "",
    assignees: [""], // максимум два
  });

  if (!project)
    return <div className="text-white text-center mt-5">Проект не найден</div>;

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
            {project.title}
          </motion.h1>
          
          <div className="d-flex gap-3 mb-4">
            <button
              className={`btn px-4 py-2 ${tab === "info" ? "btn-light" : "btn-outline-light"}`}
              onClick={() => setTab("info")}
            >
              Информация
            </button>

            <button
              className={`btn px-4 py-2 ${tab === "tasks" ? "btn-light" : "btn-outline-light"}`}
              onClick={() => setTab("tasks")}
            >
              Задачи
            </button>
          </div>
          
          {tab === "info" && (
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
                    onClick={() => navigate("/chats")}        
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
          )}
          {tab === "tasks" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-4"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(16px)",
                minHeight: "550px",
              }}
            >

              <h3 className="mb-4">Задачи проекта</h3>

              <div className="d-flex flex-column gap-3">
                {taskList.map((task) => {
                  const expired = new Date(task.deadline) < new Date() && !task.completed;

                  return (
                    <div
                      key={task.id}
                      className="p-3 rounded-4"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        cursor: "pointer",
                      }}
                      onClick={() => setSelectedTask(task)}
                    >
                      <h5 style={{ color: expired ? "#ff6b6b" : "white" }}>
                        {task.title}
                      </h5>

                      <div className="text-white-50 small mt-1">
                        Дедлайн: {task.deadline}
                      </div>

                      <div className="text-white-50 small">
                        Исполнитель: {task.assignee}
                      </div>
                    </div>
                  );
                })}
                <button
                  className="btn mt-4 py-2 w-100"
                  style={{
                    background: "linear-gradient(to right, #d900ff, #7f1aff)",
                    borderRadius: "14px",
                    color: "white",
                    fontSize: "18px",
                    boxShadow: "0 0 16px rgba(200,0,255,0.4)",
                  }}
                  onClick={() => setShowCreateTask(true)}
                >
                  Создать задачу
                </button>
              </div>
            </motion.div>
          )}
        </main>

        <Footer />
      </div>

      {/* МОДАЛКА СОЗДАНИЯ ЗАДАЧИ */}
      {showCreateTask && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            background: "rgba(0,0,0,0.6)",
            zIndex: 10000,
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setShowCreateTask(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 rounded-4"
            style={{
              width: "520px",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(12px)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-3">Создание задачи</h3>

            {/* НАЗВАНИЕ */}
            <label className="form-label">Название задачи</label>
            <input
              className="form-control text-white"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
            />

            {/* ОПИСАНИЕ */}
            <label className="form-label mt-3">Описание</label>
            <textarea
              className="form-control text-white"
              style={{
                minHeight: "120px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
            />

            {/* ДЕДЛАЙН */}
            <label className="form-label mt-3">Дедлайн</label>
            <input
              type="date"
              className="form-control text-white"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
              value={newTask.deadline}
              onChange={(e) =>
                setNewTask({ ...newTask, deadline: e.target.value })
              }
            />

            {/* ИСПОЛНИТЕЛИ */}
            <label className="form-label mt-3">Исполнитель(и)</label>

            {newTask.assignees.map((assignee, index) => (
              <div className="d-flex align-items-center gap-2 mb-2" key={index}>
                <select
                  className="form-select text-white"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                  value={assignee}
                  onChange={(e) => {
                    const arr = [...newTask.assignees];
                    arr[index] = e.target.value;
                    setNewTask({ ...newTask, assignees: arr });
                  }}
                >
                  <option className="text-dark" value="">Выберите исполнителя</option>
                  <option className="text-dark" value="Иван Иванов">Иван Иванов</option>
                  <option className="text-dark" value="Мария Смирнова">Мария Смирнова</option>
                  <option className="text-dark" value="Андрей П.">Андрей П.</option>
                </select>

                {/* КНОПКА ДОБАВЛЕНИЯ 2-го */}
                {index === newTask.assignees.length - 1 &&
                  newTask.assignees.length < 2 && (
                    <button
                      className="btn btn-sm btn-light"
                      onClick={() =>
                        setNewTask({
                          ...newTask,
                          assignees: [...newTask.assignees, ""],
                        })
                      }
                    >
                      +
                    </button>
                  )}
              </div>
            ))}

            {/* КНОПКИ */}
            <div className="d-flex gap-3 mt-4">
              <button
                className="btn w-50 py-2"
                style={{
                  background: "linear-gradient(to right, #d900ff, #7f1aff)",
                  borderRadius: "14px",
                  color: "white",
                  fontSize: "18px",
                }}
                onClick={() => {
                  const newT = {
                    id: Date.now(),
                    title: newTask.title,
                    description: newTask.description,
                    deadline: newTask.deadline,
                    assignee: newTask.assignees.join(", "),
                    completed: false,
                  };

                  setTaskList((prev) => [...prev, newT]);
                  setShowCreateTask(false);
                }}
              >
                Создать
              </button>

              <button
                className="btn btn-outline-light w-50 py-2"
                style={{ borderRadius: "14px", fontSize: "18px" }}
                onClick={() => setShowCreateTask(false)}
              >
                Отмена
              </button>
            </div>
          </motion.div>
        </div>
      )}

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

      {selectedTask && (
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25 }}
            className="position-fixed top-0 end-0 h-100 p-4"
            style={{
              width: "33vw",
              background: "rgba(0,0,0,0.65)",
              backdropFilter: "blur(14px)",
              borderLeft: "1px solid rgba(255,255,255,0.2)",
              zIndex: 9000,
            }}
          >
            <h3>{selectedTask.title}</h3>

            <p className="text-white-50 mt-3">{selectedTask.description}</p>

            <div className="mt-3">
              <strong>Дедлайн:</strong> {selectedTask.deadline}
            </div>

            <div className="mt-1">
              <strong>Исполнитель:</strong> {selectedTask.assignee}
            </div>

            {selectedTask.completed &&
              new Date(selectedTask.deadline) < new Date() && (
                <p className="mt-3 text-warning">Выполнено не в срок</p>
              )}

            {/* Чекбокс */}
            <div className="mt-4 d-flex align-items-center gap-3">
              <input
                type="checkbox"
                checked={selectedTask.completed}
                onChange={() => {
                  setTaskList((prev) =>
                    prev.map((t) =>
                      t.id === selectedTask.id
                        ? { ...t, completed: !t.completed }
                        : t
                    )
                  );
                  setSelectedTask({
                    ...selectedTask,
                    completed: !selectedTask.completed,
                  });
                }}
                style={{ width: "22px", height: "22px", cursor: "pointer" }}
              />
              <span style={{ fontSize: "18px" }}>Отметить как выполнено</span>
            </div>

            <button
              className="btn btn-light mt-4"
              onClick={() => setSelectedTask(null)}
            >
              Закрыть
            </button>
          </motion.div>
        )}
    </div>
  );
}
