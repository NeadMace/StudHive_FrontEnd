import { motion } from "framer-motion";
export default function Header() {
return(
<footer
          className="py-4 text-center"
          style={{
            background: "rgba(255,255,255,0.05)",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(16px)",
          }}
        >
          <p className="text-white-50 small mb-2">
            © 2025 StudHive. Все права защищены.
          </p>
          <div className="d-flex justify-content-center gap-4 small">
            <a href="#" className="text-white-50 text-decoration-none">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-white-50 text-decoration-none">
              Условия использования
            </a>
          </div>
        </footer>
);
}