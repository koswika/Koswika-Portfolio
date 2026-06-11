"use client";

export default function Contact() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">
          <i className="fas fa-paper-plane me-2"></i> Let's Connect
        </h2>
        <p className="text-muted">Reach out for collaborations or just a chat about code and Minecraft.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a href="https://github.com/koswika" className="btn btn-dark btn-lg" target="_blank">
              <i className="fab fa-github me-2"></i> GitHub
            </a>
            <a href="https://twitter.com/elysety_java" className="btn btn-dark btn-lg" target="_blank">
              <i className="fab fa-x-twitter me-2"></i> X
            </a>
            <a href="mailto:contact.fairytale.ig@gmail.com" className="btn btn-dark btn-lg">
              <i className="fas fa-envelope me-2"></i> Email
            </a>
            <button
              className="btn btn-outline-secondary btn-lg"
              onClick={() => navigator.clipboard.writeText("@elysety")}
            >
              <i className="fab fa-discord me-2"></i> Discord: @elysety
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}