import { Title, useApp } from "../context";

export function Resume() {
  const { text } = useApp();
  return (
    <article>
      <Title>{text.resumeTitle}</Title>
      <p className="lead">{text.resumeLead}</p>
      {text.resumeBlocks.map(([heading, items]) => (
        <section key={heading} className="record">
          <h2>{heading}</h2>
          <ul>
            {items.map((item) => <li key={item.slice(0, 40)}>{item}</li>)}
          </ul>
        </section>
      ))}
    </article>
  );
}
