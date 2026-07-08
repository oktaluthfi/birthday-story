import { useEffect } from "react";

export default function SuccessScene({ onNext }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="success-scene">
      <div className="stars"></div>

      <h1 className="success-text">
        Wow kalau begitu ini surat
        <br />
        untukmu...
      </h1>
    </div>
  );
}