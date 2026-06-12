export default function Donate() {
  const buyMeACoffeeUrl = "https://buymeacoffee.com/elysety";

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">
          <i className="fas fa-mug-hot me-2"></i> Support My Work
        </h2>
        <p className="text-muted">
          If you like what I do, consider buying me a coffee. It helps keep the
          code flowing and the ideas brewing.
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <a
            href={buyMeACoffeeUrl}
            className="btn btn-warning btn-lg px-5"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#FFDD00",
              color: "#000000",
              fontWeight: "bold",
              border: "none",
            }}
          >
            <i className="fas fa-mug-hot me-2"></i> Buy Me a Coffee
          </a>
        </div>
      </div>
    </div>
  );
}