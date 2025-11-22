import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../logo/logo.jsx";
import { useNavigate } from "react-router-dom";
import { Bell, User } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const [openNotifications, setOpenNotifications] = useState(false);

  // Пример уведомлений
  const notifications = [
    { id: 1, text: "Вам ответили в чате проекта «Мобильное приложение»", type: "chat" },
    { id: 2, text: "Ваш отклик на проект «Сайт компании» был отклонён", type: "reject" },
    { id: 3, text: "Новое сообщение от Анны", type: "chat" },
  ];

  return (
    <header
      className="position-fixed top-0 start-0 w-100 py-3 px-4 d-flex justify-content-between align-items-center"
      style={{
        backdropFilter: "blur(16px)",
        background: "rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.2)",
        zIndex: 20,
      }}
    >
      {/* Логотип */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="fw-bold"
        style={{
          fontSize: "26px",
          background: "linear-gradient(to right, #f48bff, #e1c2ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <Logo /> StudHive
      </motion.h2>

      {/* Навигация */}
      <nav className="d-flex gap-4 text-white-50 small">
        <span
          className="text-decoration-none text-white-50"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/project")}
        >
          Проекты
        </span>

        <span
          className="text-decoration-none text-white-50"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/chats")}
        >
          Сообщения
        </span>

        <span
          className="text-decoration-none text-white-50"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/contact")}
        >
          Контакты
        </span>

        <span
          className="text-decoration-none text-white-50"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/my-project")}
        >
          Мои проекты
        </span>
      </nav>

      {/* Правая часть: уведомления + профиль */}
      <div className="d-flex align-items-center gap-3 position-relative">

        {/* Иконка уведомлений */}
        <div
          style={{ position: "relative", cursor: "pointer" }}
          onClick={() => setOpenNotifications(!openNotifications)}
        >
          <Bell size={24} color="white" />

          {/* Красная цифра уведомлений */}
          {notifications.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                background: "#ff005d",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "10px",
              }}
            >
              {notifications.length}
            </span>
          )}
        </div>

        {/* Выпадающий список уведомлений */}
        <AnimatePresence>
          {openNotifications && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "absolute",
                top: "50px",
                right: "10px",
                width: "280px",
                background: "rgba(30, 30, 30, 0.9)",
                backdropFilter: "blur(10px)",
                borderRadius: "12px",
                padding: "10px",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 20px rgba(0,0,0,0.4)",
                color: "white",
                zIndex: 50,
              }}
            >
              <h6 className="mb-2 text-white-50">Уведомления</h6>

              {notifications.map((n) => (
                <div
                  key={n.id}
                  className="p-2 mb-2 rounded"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    cursor: "pointer",
                  }}
                >
                  {n.text}
                </div>
              ))}

              {notifications.length === 0 && (
                <div className="text-center text-white-50 py-2">
                  Нет уведомлений
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Иконка профиля */}
        <div
          className="d-flex justify-content-center align-items-center"
          onClick={() => navigate("/profile")}
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "linear-gradient(to right, #d900ff, #7f1aff)",
            cursor: "pointer",
          }}
        >
          <User size={20} color="white" />
        </div>
      </div>
    </header>
  );
}
