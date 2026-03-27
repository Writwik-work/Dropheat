import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import PreferencesSelectors from "./PreferencesSelectors";
import { useTranslation } from "react-i18next";

// Assets
import logoImg from "../../assets/logos/main-logo.png";
import logoMobileImg from "../../assets/logos/mobile-logo.png";
import homeIcon from "../../assets/navbar/Home.png";
import boxesIcon from "../../assets/navbar/Boxes.png";
import battlesIcon from "../../assets/navbar/Battles.png";
import vipIcon from "../../assets/navbar/VIP-members.png";
import affiliatesIcon from "../../assets/navbar/Affiliates.png";
import chatIcon from "../../assets/navbar/chat.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  /* ✅ CHAT STATES */
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "coolalex",
      text: "Hello all friends",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      name: "baba",
      text: "I'm working and show now",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
  ]);

  const chatEndRef = useRef(null);

  const { t } = useTranslation();

  /* AUTO SCROLL */
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* SEND MESSAGE */
  const handleSend = () => {
    if (!message.trim()) return;

    const newMsg = {
      id: Date.now(),
      name: "You",
      text: message,
      avatar: "https://i.pravatar.cc/40?img=5",
    };

    setMessages((prev) => [...prev, newMsg]);
    setMessage("");
  };

  const navItems = [
    { name: "Home", icon: homeIcon },
    { name: "Boxes", icon: boxesIcon },
    { name: "Battles", icon: battlesIcon },
    { name: "VIP Members", icon: vipIcon },
    { name: "Affiliates", icon: affiliatesIcon },
  ];

  return (
    <>
      <header className="navbar">
        <div className="navbar__container">
          
          {/* LEFT */}
          <div className="navbar__left">
            <img src={logoImg} alt="Desktop Logo" className="navbar__logo desktop-only" />
            <img src={logoMobileImg} alt="Mobile Logo" className="navbar__logo mobile-only" />
          </div>

          {/* CENTER */}
          <nav className={`navbar__menu ${menuOpen ? "is-open" : ""}`}>
            {navItems.map((item) => (
              <button
                key={item.name}
                className={`navbar__link ${active === item.name ? "active" : ""}`}
                onClick={() => {
                  setActive(item.name);
                  setMenuOpen(false);
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className={`nav-icon-${item.name.toLowerCase().replace(/\s/g, "-")}`}
                />
              </button>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="navbar__right">
            <div className="navbar__controls">
              <PreferencesSelectors />
              <button className="navbar__auth-btn">{t("nav_auth")}</button>

              {/* CHAT BUTTON */}
              <div
                className="navbar__chat-trigger"
                onClick={() => setChatOpen(!chatOpen)}
              >
                <img src={chatIcon} alt="chat" />
              </div>
            </div>

            <button
              className="navbar__hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* ================= CHAT PANEL ================= */}
      {chatOpen && (
        <aside className="chat-panel">

          {/* HEADER */}
          <div className="chat-panel__header">
            <span className="chat-title">Chat</span>
            <div className="chat-status">
              <span className="online-dot"></span>
              <span>12,490</span>
            </div>
          </div>

          {/* MESSAGES */}
          <div className="chat-panel__messages">
            {messages.map((msg) => (
              <div className="chat-msg" key={msg.id}>
                <img src={msg.avatar} alt="" />
                <div>
                  <div className="chat-user">
                    <span className="name">{msg.name}</span>
                    <span className="badge">10%</span>
                  </div>
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}

            {/* AUTO SCROLL TARGET */}
            <div ref={chatEndRef}></div>
          </div>

          {/* INPUT */}
          <div className="chat-panel__input-area">
            <input
              type="text"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="send-btn" onClick={handleSend}>
              ➤
            </button>
          </div>

        </aside>
      )}
    </>
  );
};

export default Navbar;