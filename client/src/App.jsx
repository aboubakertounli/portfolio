import { useEffect, useMemo, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { copy, links } from "./content";
import { AppContext, useApp } from "./context";
import { Icon } from "./components/Icons";
import { Search } from "./components/Search";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Resume } from "./pages/Resume";
import { Journey } from "./pages/Journey";
import { Contact } from "./pages/Contact";
import { Terminal } from "./pages/Terminal";

function initialLang() {
  const saved = localStorage.getItem("portfolio-lang");
  if (saved === "fr" || saved === "en") return saved;
  return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
}

export default function App() {
  const [lang, setLang] = useState(initialLang);
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const [searchOpen, setSearchOpen] = useState(false);
  const text = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.theme = theme;
    document.title = text.metaTitle;
    localStorage.setItem("portfolio-lang", lang);
    localStorage.setItem("portfolio-theme", theme);
  }, [lang, theme, text.metaTitle]);

  useEffect(() => {
    const onKey = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, theme, setTheme, text, openSearch: () => setSearchOpen(true) }),
    [lang, theme, text],
  );

  return (
    <AppContext.Provider value={value}>
      <Backdrop />
      <div className="frame">
        <Header />
        <div className="workspace">
          <Sidebar />
          <main className="panel" id="content">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terminal" element={<Terminal />} />
            </Routes>
            <footer className="panel-foot">
              <span>{text.footer}</span>
              <NavLink to="/contact">{text.nav[4][1]}</NavLink>
            </footer>
          </main>
        </div>
      </div>
      <MobileNav />
      {searchOpen ? <Search onClose={() => setSearchOpen(false)} /> : null}
    </AppContext.Provider>
  );
}

function Backdrop() {
  return (
    <svg className="backdrop" viewBox="0 0 1440 900" aria-hidden="true">
      <g opacity="0.85">
        <path d="M40 120 L150 60 L180 170 Z" fill="#c4501e" />
        <path d="M150 60 L260 110 L180 170 Z" fill="#5b8def" />
        <path d="M180 170 L260 110 L300 210 Z" fill="#3b6dcf" />
        <path d="M40 120 L180 170 L90 240 Z" fill="#3b6dcf" />
        <path d="M90 240 L180 170 L210 280 Z" fill="#e08a4f" />
        <path d="M1280 40 L1360 90 L1310 160 Z" fill="#c4501e" />
        <path d="M1180 760 L1280 820 L1210 880 Z" fill="#5b8def" />
        <path d="M1280 820 L1380 780 L1340 900 Z" fill="#c4501e" />
      </g>
    </svg>
  );
}

function Header() {
  const { text } = useApp();
  return (
    <header className="topbar">
      <div className="identity">
        <img src="/photo.jpg" alt="" width="64" height="64" />
        <div>
          <strong>{text.name}</strong>
          <span>{text.role}</span>
        </div>
      </div>
      <div className="availability">
        <p>{text.availabilityLabel}</p>
        <p><i />{text.availability}</p>
        <small>{text.availabilityNote}</small>
      </div>
      <div className="top-actions">
        <NavLink className="ghost" to="/resume">{text.resume}</NavLink>
        <a className="mail" href={`mailto:${links.email}`}>{links.email}</a>
        <div className="socials">
          <a href={links.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Icon name="linkedin" /></a>
          <a href={links.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Icon name="github" /></a>
        </div>
      </div>
    </header>
  );
}

function Sidebar() {
  const { text, lang, setLang, theme, setTheme, openSearch } = useApp();
  return (
    <aside className="side">
      <nav aria-label="Main">
        {text.nav.map(([to, label, end]) => (
          <NavLink key={to} to={to} end={Boolean(end)}>
            <Icon name={to === "/" ? "user" : to.slice(1)} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="side-tools">
        <button type="button" className="search-btn" onClick={openSearch}>
          <Icon name="search" />
          <span>{text.search}</span>
          <kbd>Ctrl K</kbd>
        </button>
        <div className="lang" role="group" aria-label={text.langLabel}>
          <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
          <button type="button" aria-pressed={lang === "fr"} onClick={() => setLang("fr")}>FR</button>
        </div>
        <button type="button" className="theme-btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <Icon name={theme === "dark" ? "moon" : "sun"} />
          <span>{theme === "dark" ? text.themeDark : text.themeLight}</span>
        </button>
      </div>
    </aside>
  );
}

function MobileNav() {
  const { text } = useApp();
  return (
    <nav className="dock" aria-label="Main">
      {text.nav.map(([to, label, end]) => (
        <NavLink key={to} to={to} end={Boolean(end)}>
          <Icon name={to === "/" ? "user" : to.slice(1)} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
