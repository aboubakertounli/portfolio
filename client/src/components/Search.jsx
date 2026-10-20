import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context";

export function Search({ onClose }) {
  const { text } = useApp();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const items = useMemo(() => {
    const pages = text.nav.map(([to, label]) => ({ to, label, kind: "page" }));
    const projects = text.projects.map((project) => ({
      to: "/portfolio",
      label: project.title,
      kind: project.slug,
    }));
    return [...pages, ...projects];
  }, [text]);
  const shown = items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function go(to) {
    navigate(to);
    onClose();
  }

  return (
    <div className="search-layer" onClick={onClose}>
      <div className="search-box" role="dialog" aria-label={text.search} onClick={(event) => event.stopPropagation()}>
        <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder={text.search} />
        <ul>
          {shown.map((item) => (
            <li key={`${item.kind}-${item.label}`}>
              <button type="button" onClick={() => go(item.to)}>{item.label}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
