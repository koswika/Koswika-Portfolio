"use client";

export default function Hero() {
  return (
    <div className="container py-5 my-3">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1 className="display-3 fw-bold mb-4" style={{ background: "linear-gradient(135deg, #ffffff, #5865f2)", backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}>
            Koswikaa
          </h1>
          <p className="fs-4 text-muted mb-4">
            <i className="fas fa-code me-2"></i> Full‑stack developer & Minecraft modding specialist
          </p>
          <p className="lead">
            I've been coding for years, building everything from backend APIs to Minecraft plugins. 
            I love solving problems with clean, efficient code. When I'm not in front of a screen, 
            I'm probably exploring game mechanics or contributing to open source. 
            I believe in writing software that's both powerful and easy to use.
          </p>
        </div>
      </div>
    </div>
  );
}