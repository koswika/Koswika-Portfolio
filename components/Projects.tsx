"use client";

import { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const username = "koswika";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="container py-5 text-center">
        <i className="fas fa-code-branch fs-1 text-muted"></i>
        <p className="mt-3">No public repositories yet.</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">
        <i className="fas fa-laptop-code me-2"></i> Featured Projects
      </h2>
      <div className="row g-4">
        {repos.map((repo) => (
          <div key={repo.id} className="col-md-6 col-lg-4">
            <div className="card h-100 p-3">
              <i className="fab fa-github-alt fs-2 mb-2 text-light"></i>
              <h5 className="card-title fw-bold">{repo.name}</h5>
              <p className="card-text small text-muted">
                {repo.description?.substring(0, 100) || "No description"}
              </p>
              <div className="mt-auto d-flex justify-content-between align-items-center">
                {repo.language && (
                  <span className="badge bg-secondary">{repo.language}</span>
                )}
                <a href={repo.html_url} target="_blank" className="btn btn-sm btn-outline-light">
                  View <i className="fas fa-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}