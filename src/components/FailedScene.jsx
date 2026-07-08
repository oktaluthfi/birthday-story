export default function FailedScene({ onRetry }) {
  return (
    <div className="success-scene">
      <div className="stars"></div>

      <div className="failed-content">
        <h1 className="success-text">
          Wah... sepertinya
          <br />
          surat ini bukan
          <br />
          untukmu.
        </h1>

        <button
          className="retry-button"
          onClick={onRetry}
        >
          Ulangi Lagi
        </button>
      </div>
    </div>
  );
}