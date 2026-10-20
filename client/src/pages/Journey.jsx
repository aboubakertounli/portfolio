import { Title, useApp } from "../context";

export function Journey() {
  const { text } = useApp();
  return (
    <article>
      <Title>{text.journeyTitle}</Title>
      <ol className="timeline">
        {text.journey.map(([when, title, body]) => (
          <li key={when}>
            <time>{when}</time>
            <h2>{title}</h2>
            <p>{body}</p>
          </li>
        ))}
      </ol>
    </article>
  );
}
