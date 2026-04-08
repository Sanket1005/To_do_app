import { useState } from "react";

const colors = [
  { bg: "#4F46E5", name: "Indigo" },
  { bg: "#0F766E", name: "Teal" },
  { bg: "#B45309", name: "Amber" },
  { bg: "#BE185D", name: "Pink" },
  { bg: "#15803D", name: "Green" },
  { bg: "#C2410C", name: "Coral" },
  { bg: "#1D4ED8", name: "Blue" },
  { bg: "#7C3AED", name: "Violet" },
];

export default function Task() {
  const [current, setCurrent] = useState(-1);

  const changeColor = () => {
    setCurrent((prev) => (prev + 1) % colors.length);
  };

  const activeBg = current >= 0 ? colors[current].bg : "#e5e7eb";
  const activeName = current >= 0 ? colors[current].name : "Click the button!";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: activeBg,
        transition: "background-color 0.5s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
      }}
    >
      <p style={{ color: "#fff", fontSize: "20px", fontWeight: 500 }}>
        {activeName}
      </p>

      <button
        onClick={changeColor}
        style={{
          padding: "10px 32px",
          fontSize: "16px",
          fontWeight: 500,
          border: "2px solid rgba(255,255,255,0.5)",
          borderRadius: "8px",
          background: "rgba(255,255,255,0.2)",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Change Color
      </button>

      <div style={{ display: "flex", gap: "8px" }}>
        {colors.map((c, i) => (
          <div
            key={i}
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: c.bg,
              border: "2px solid rgba(255,255,255,0.5)",
              transform: i === current ? "scale(1.5)" : "scale(1)",
              transition: "transform 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}