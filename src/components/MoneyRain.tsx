"use client";

import { useEffect, useState } from "react";

interface DollarProps {
  id: number;
  left: number;
  duration: number;
  delay: number;
}

export default function MoneyRain({ count = 20 }: { count?: number }) {
  const [dollars, setDollars] = useState<DollarProps[]>([]);

  useEffect(() => {
    // Generate random dollar bills
    const newDollars = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      duration: 5 + Math.random() * 10, // Random animation duration (5-15s)
      delay: Math.random() * 5, // Random delay (0-5s)
    }));

    setDollars(newDollars);
  }, [count]);

  return (
    <div className="dollar-container">
      {dollars.map((dollar) => (
        <div
          key={dollar.id}
          className="dollar"
          style={{
            left: `${dollar.left}%`,
            animationDuration: `${dollar.duration}s`,
            animationDelay: `${dollar.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
