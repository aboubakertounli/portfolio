import { Link } from "react-router-dom";
import { Title, useApp } from "../context";

export function About() {
  const { text } = useApp();
  return (
    <article>
      <Title>{text.aboutTitle}</Title>
      <div className="about-grid">
        <dl className="profile">
          <dt>{text.profile}</dt>
          {text.fields.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <div className="prose">
          {text.about.map((paragraph) => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
          <Link className="more" to="/portfolio">{text.seeWork} →</Link>
        </div>
      </div>
      <section>
        <h2>{text.track}</h2>
        <div className="stats">
          {text.stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>{text.areasTitle}</h2>
        <div className="areas">
          {text.areas.map(([index, title, kicker, body]) => (
            <article key={index}>
              <span>{index}</span>
              <h3>{title}</h3>
              <small>{kicker}</small>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
