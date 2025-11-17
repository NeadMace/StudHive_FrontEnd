import { useState } from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import PatrickBackground from "../../components/background/ParticlesBackground.jsx";
import { motion } from "framer-motion";

// Компонент сообщения
function Message({ msg, isOwn }) {
  return (
    <div
      className={`d-flex mb-3 ${isOwn ? "justify-content-end" : "justify-content-start"}`}
    >
      {!isOwn && (
        <img
          src={msg.avatar}
          alt="avatar"
          className="rounded-circle me-2"
          style={{ width: "40px", height: "40px" }}
        />
      )}

      <div>
        {!isOwn && (
          <div className="small text-white-50 mb-1">{msg.name}</div>
        )}

        <div
          className="p-3 rounded-4"
          style={{
            maxWidth: "380px",
            background: isOwn
              ? "linear-gradient(to right, #d900ff, #7f1aff)"
              : "rgba(255,255,255,0.15)",
            color: "white",
          }}
        >
          {msg.text}
        </div>

        <div
          className={`small text-white-50 mt-1 ${isOwn ? "text-end" : ""}`}
          style={{ fontSize: "12px" }}
        >
          {msg.time}
        </div>
      </div>
    </div>
  );
}

// Данные
const chatsProjects = [
  {
    id: 1,
    title: "Проект: Мобильное приложение",
    lastMessage: "Хорошо, отправлю вечером.",
    partner: "Иван Петров",
    avatar: "https://i.pravatar.cc/200?img=12",
    messages: [
      { id: 1, name: "Иван", avatar: "https://i.pravatar.cc/200?img=12", text: "Привет! Как продвигается?", time: "12:40" },
      { id: 2, name: "Олег", avatar: "https://i.pravatar.cc/200?img=22", text: "Я залил обновление на GitHub.", time: "12:41" },
      { id: 3, name: "Я", own: true, text: "Скоро всё доделаю!", time: "12:42" },
      { id: 4, name: "Иван", avatar: "https://i.pravatar.cc/200?img=12", text: "Хорошо, отправлю вечером.", time: "12:45" },
    ]
  },

  {
    id: 2,
    title: "Проект: Исследование органических соединений",
    lastMessage: "Отлично, жду результаты.",
    partner: "Лаборатория ХимАналит",
    avatar: "https://i.pravatar.cc/200?img=34",
    messages: [
      { id: 1, name: "Катя", avatar: "https://i.pravatar.cc/200?img=17", text: "Обновила таблицу с катализаторами.", time: "10:15" },
      { id: 2, name: "Лаборатория", avatar: "https://i.pravatar.cc/200?img=34", text: "Проверьте новые спектры.", time: "10:17" },
      { id: 3, name: "Я", own: true, text: "Проверяю!", time: "10:20" },
      { id: 4, name: "Лаборатория", avatar: "https://i.pravatar.cc/200?img=34", text: "Отлично, жду результаты.", time: "10:22" },
    ]
  },

  {
    id: 3,
    title: "Проект: Моделирование экосистемы",
    lastMessage: "Модель выглядит корректно.",
    partner: "Анна Кротова",
    avatar: "https://i.pravatar.cc/200?img=8",
    messages: [
      { id: 1, name: "Анна", avatar: "https://i.pravatar.cc/200?img=8", text: "Добавила графики популяций.", time: "09:02" },
      { id: 2, name: "Сергей", avatar: "https://i.pravatar.cc/200?img=15", text: "Я пересчитал коэффициенты.", time: "09:06" },
      { id: 3, name: "Я", own: true, text: "Супер! Я обновил визуализацию.", time: "09:10" },
      { id: 4, name: "Анна", avatar: "https://i.pravatar.cc/200?img=8", text: "Модель выглядит корректно.", time: "09:12" },
    ]
  }
];

const chatsPersonal = [
  {
    id: 101,
    title: "Анна",
    lastMessage: "Спасибо!",
    partner: "Анна",
    avatar: "https://i.pravatar.cc/200?img=8",
    messages: [
      { id: 1, name: "Анна", avatar: "https://i.pravatar.cc/200?img=8", text: "Спасибо!", time: "15:02" },
      { id: 2, name: "Я", own: true, text: "Обращайся 😊", time: "15:03" },
    ]
  },

  {
    id: 102,
    title: "Сергей",
    lastMessage: "Напишу позже!",
    partner: "Сергей",
    avatar: "https://i.pravatar.cc/200?img=20",
    messages: [
      { id: 1, name: "Сергей", avatar: "https://i.pravatar.cc/200?img=20", text: "Скинь, пожалуйста, шаблон отчёта.", time: "11:22" },
      { id: 2, name: "Я", own: true, text: "Отправил тебе на почту.", time: "11:23" },
      { id: 3, name: "Сергей", avatar: "https://i.pravatar.cc/200?img=20", text: "Напишу позже!", time: "11:25" },
    ]
  },

  {
    id: 103,
    title: "Марина",
    lastMessage: "Хорошо 😊",
    partner: "Марина",
    avatar: "https://i.pravatar.cc/200?img=31",
    messages: [
      { id: 1, name: "Марина", avatar: "https://i.pravatar.cc/200?img=31", text: "Ты сможешь помочь с презентацией?", time: "18:02" },
      { id: 2, name: "Я", own: true, text: "Без проблем!", time: "18:03" },
      { id: 3, name: "Марина", avatar: "https://i.pravatar.cc/200?img=31", text: "Хорошо 😊", time: "18:04" },
    ]
  }
];



export default function ChatPage() {
  const [tab, setTab] = useState("projects");
  const chatList = tab === "projects" ? chatsProjects : chatsPersonal;

  const [activeChat, setActiveChat] = useState(chatList[0]);

  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMsg = {
      id: Date.now(),
      name: "Я",
      own: true,
      text: message,
      time: new Date().toLocaleTimeString().slice(0, 5),
    };

    activeChat.messages.push(newMsg);
    setMessage("");
    setActiveChat({ ...activeChat });
  };

  return (
    <div className="auth-bg min-vh-100 position-relative text-white">
      <PatrickBackground />

      <div style={{ position: "relative", zIndex: 5 }}>
        <Header />

        <main className="container py-5" style={{ paddingTop: "120px" }}>

          {/* Вкладки */}
          <div className="d-flex gap-3 mb-4">
            <button
              className={`btn px-4 py-2 ${tab === "projects" ? "btn-light" : "btn-outline-light"}`}
              onClick={() => {
                setTab("projects");
                setActiveChat(chatsProjects[0]);
              }}
            >
              Чаты проектов
            </button>

            <button
              className={`btn px-4 py-2 ${tab === "personal" ? "btn-light" : "btn-outline-light"}`}
              onClick={() => {
                setTab("personal");
                setActiveChat(chatsPersonal[0]);
              }}
            >
              Личные чаты
            </button>
          </div>

          <div
            className="row"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(16px)",
              borderRadius: "20px",
              height: "70vh",
              overflow: "hidden",
            }}
          >
            {/* Список чатов */}
            <div
              className="col-4 p-0 border-end"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              <div className="list-group border-0" style={{ height: "100%", overflowY: "auto" }}>
                {chatList.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => setActiveChat(chat)}
                    className={`list-group-item list-group-item-action bg-transparent text-white border-0 d-flex align-items-center gap-3 py-3 ${
                      activeChat?.id === chat.id ? "active" : ""
                    }`}
                    style={{
                      background:
                        activeChat?.id === chat.id
                          ? "rgba(255,255,255,0.2)"
                          : "transparent",
                    }}
                  >
                    <img
                      src={chat.avatar}
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div>
                      <div className="fw-bold">{chat.title}</div>
                      <small className="text-white-50">{chat.lastMessage}</small>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Окно чата */}
            <div className="col-8 d-flex flex-column p-0">

              {/* Заголовок чата */}
              <div
                className="p-3 border-bottom"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                <h5 className="mb-0">{activeChat?.title}</h5>
              </div>

              {/* Сообщения */}
              <div
                className="flex-grow-1 p-3"
                style={{
                  overflowY: "auto",
                  height: "100%",
                }}
              >
                {activeChat?.messages?.map((msg) => (
                  <Message key={msg.id} msg={msg} isOwn={msg.own} />
                ))}
              </div>

              {/* Поле ввода */}
              <div className="p-3 border-top" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-light">📎</button>
                  <input
                    type="text"
                    className="form-control bg-transparent text-white"
                    placeholder="Введите сообщение..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button className="btn btn-light" onClick={sendMessage}>
                    ➤
                  </button>
                </div>
              </div>

            </div>
          </div>

        </main>

        <Footer />
      </div>
    </div>
  );
}
