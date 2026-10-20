import { useMemo, useState } from "react";
import { Title, useApp } from "../context";

export function Terminal() {
  const { text } = useApp();
  const [lines, setLines] = useState([]);
  const [value, setValue] = useState("");
  const names = useMemo(() => text.commands.map(([name]) => name), [text]);

  function run(raw) {
    const command = raw.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") {
      setLines([]);
      return;
    }
    const found = text.commands.find(([name]) => name === command);
    setLines((current) => [...current, { command, reply: found ? found[1] : text.unknown }]);
  }

  function onKeyDown(event) {
    if (event.key !== "Tab") return;
    const next = names.find((name) => name.startsWith(value.trim().toLowerCase()));
    if (!next) return;
    event.preventDefault();
    setValue(next);
  }

  return (
    <article>
      <Title>{text.terminalTitle}</Title>
      <div className="term">
        <div className="term-log">
          {lines.map((line, index) => (
            <div key={`${line.command}-${index}`}>
              <p className="echo"><span>{text.prompt}</span> {line.command}</p>
              <p>{line.reply}</p>
            </div>
          ))}
        </div>
        <form onSubmit={(event) => { event.preventDefault(); run(value); setValue(""); }}>
          <label htmlFor="cmd">{text.prompt}</label>
          <input id="cmd" value={value} onChange={(event) => setValue(event.target.value)} onKeyDown={onKeyDown} placeholder={text.placeholder} autoComplete="off" spellCheck="false" />
        </form>
        <p className="hint">{text.hint}</p>
      </div>
    </article>
  );
}
