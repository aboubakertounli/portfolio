import { Title, useApp } from "../context";

export function Portfolio() {
  const { text } = useApp();
  return (
    <article>
      <Title>{text.workTitle}</Title>
      <p className="lead">{text.workLead}</p>
      <div className="projects">
        {text.projects.map((project, index) => (
          <article key={project.slug} id={project.slug}>
            <span>0{index + 1}</span>
            <h2>{project.title}</h2>
            <p>{project.body}</p>
            <ul>
              {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            {project.href ? <a href={project.href} target="_blank" rel="noreferrer">{text.repo} →</a> : null}
          </article>
        ))}
      </div>
    </article>
  );
}
