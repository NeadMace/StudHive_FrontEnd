import { motion } from "framer-motion";
import Logo from "../logo/logo.jsx"
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header
      className="position-fixed top-0 start-0 w-100 py-3 px-4 d-flex justify-content-between align-items-center"
      style={{
        backdropFilter: "blur(16px)",
        background: "rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.2)",
        zIndex: 10,
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="fw-bold"
        style={{
          fontSize: "26px",
          background: "linear-gradient(to right, #f48bff, #e1c2ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          cursor: "pointer"
        }}
        onClick={() => navigate("/")}
      >
        <Logo /> StudHive
      </motion.h2>

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
      </nav>

      <button
        className="btn"
        style={{
          background: "linear-gradient(to right, #d900ff, #7f1aff)",
          borderRadius: "14px",
          color: "white",
          padding: "8px 18px",
          boxShadow: "0 0 12px rgba(200,0,255,0.4)",
        }}
        onClick={() => navigate("/profile")}
      >
        Профиль
      </button>
    </header>
  );
}
