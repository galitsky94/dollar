"use client";

import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import MoneyRain from "@/components/MoneyRain";
import Image from "next/image";

export default function Page() {
  const [count, setCount] = useState<number | null>(null);
  const [hasPaid, setHasPaid] = useState(false);
  const [isPending, startTransition] = useTransition();

  async function handlePay() {
    startTransition(async () => {
      const res = await fetch("/api/pay", { method: "POST" });
      if (res.ok) {
        const data = (await res.json()) as { total: number };
        setCount(data.total);
        setHasPaid(true);
      }
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-4 text-center">
      <MoneyRain count={30} />

      {!hasPaid ? (
        <>
          <h1 className="text-3xl font-bold">
            Pay $1 to see how many people paid one dollar
          </h1>

          <Button size="lg" onClick={handlePay} disabled={isPending}>
            {isPending ? "Processing…" : "Shut up and take my money!!!"}
          </Button>
        </>
      ) : (
        <div className="flex flex-col items-center gap-5 transition-all duration-500 ease-in-out">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <Image src="/images/fry-money.png" alt="fry" fill style={{ objectFit: "contain" }} />
          </div>
          <p className="text-2xl font-bold bg-green-100 text-green-800 px-4 py-2 rounded-full border-2 border-green-200">
            {count} idiots have paid $1
          </p>
        </div>
      )}
    </main>
  );
}
