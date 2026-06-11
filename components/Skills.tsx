export default function Skills() {
  const skills = [
    { name: "Java", icon: "devicon-java-plain-wordmark colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-original-wordmark colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name: "Spring Boot", icon: "devicon-spring-plain colored" },
    { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
    { name: "Express.js", icon: "devicon-express-original colored" },
    { name: "NestJS", icon: "devicon-nestjs-plain colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">
        <i className="fas fa-cogs me-2"></i> Tech Stack
      </h2>
      <div className="row g-4 justify-content-center">
        {skills.map((skill) => (
          <div key={skill.name} className="col-6 col-md-4 col-lg-3">
            <div className="card p-3 text-center h-100 shadow-sm">
              <i className={`${skill.icon} fs-1`}></i>
              <span className="mt-2 fw-semibold">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-muted mt-5">
        <i className="fas fa-plus-circle me-1"></i> Plus Redis, WebSockets, Kubernetes (learning), CI/CD pipelines
      </p>
    </div>
  );
}