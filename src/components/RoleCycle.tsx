"use client";

import { useEffect, useState } from "react";

const ROLE_INTERVAL_MS = 2200;
const FADE_MS = 400;

export default function RoleCycle({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, FADE_MS);
    }, ROLE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <p className="role">
      <span className={visible ? "role-word" : "role-word hidden"}>{roles[index]}</span>
    </p>
  );
}
