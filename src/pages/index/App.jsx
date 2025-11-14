import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, UserPlus, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import Logo from "../../components/logo/logo.jsx"

export default function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  function LoginOrCreate(){
    navigate("/project");
  }

  return (
    <div className="auth-bg d-flex align-items-center justify-content-center">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="auth-card-wrapper"
      >
        <div className="card auth-card shadow-lg">
          <div className="card-header text-center py-4 bg-transparent border-0">
            <h2 className="auth-title d-flex justify-content-center gap-2">
              <Logo />StudHive
            </h2>
            <p className="auth-subtitle mt-2">
              {isLogin ? "Вход в аккаунт" : "Регистрация нового пользователя"}
            </p>
          </div>

          <div className="card-body px-5 pb-5">
            {!isLogin && (
              <div className="mb-3">
                <label className="auth-label">Имя</label>
                <input className="form-control auth-input" placeholder="Введите имя" />
              </div>
            )}

            <div className="mb-3">
              <label className="auth-label">Email</label>
              <input className="form-control auth-input" placeholder="Введите email" />
            </div>

            <div className="mb-3">
              <label className="auth-label">Пароль</label>
              <input
                type="password"
                className="form-control auth-input"
                placeholder="Введите пароль"
              />
            </div>

            <button className="btn auth-btn w-100 mt-3"
            onClick={() => LoginOrCreate()}>
              {isLogin ? <LogIn /> : <UserPlus />}
              <span className="ms-2">{isLogin ? "Войти" : "Создать аккаунт"}</span>
            </button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center auth-switch mt-3"
            >
              {isLogin ? "Нет аккаунта?" : "Уже есть аккаунт?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="auth-switch-btn ms-2"
              >
                {isLogin ? "Создать" : "Войти"}
              </button>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}