"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [scripts, setScripts] = useState([]);

  useEffect(() => {
    fetch("/api/scripts")
      .then((res) => res.json())
      .then((data) => setScripts(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Lua Script Library</h1>

      {scripts.length === 0 && <p>Belum ada script.</p>}

      {scripts.map((s, i) => (
        <div key={i} style={{ marginBottom: 15 }}>
          <h3>{s.name}</h3>
          <button
            onClick={() => navigator.clipboard.writeText(s.code)}
          >
            Click to Copy Script
          </button>
        </div>
      ))}
    </div>
  );
}