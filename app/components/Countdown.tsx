"use client";

import { useSyncExternalStore } from "react";

const OPENING = new Date("2027-10-21T13:00:00-03:00").getTime();

function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}

const secondsLeft = () => Math.max(0, Math.floor((OPENING - Date.now()) / 1000));

export default function Countdown() {
  // -1 on the server so the first client paint matches the SSR markup
  const total = useSyncExternalStore(subscribe, secondsLeft, () => -1);

  const units = [
    ["Días", Math.floor(total / 86_400)],
    ["Horas", Math.floor(total / 3_600) % 24],
    ["Min", Math.floor(total / 60) % 60],
    ["Seg", total % 60],
  ] as const;

  return (
    <div className="flex gap-3 sm:gap-4">
      {units.map(([label, value]) => (
        <div
          key={label}
          className="flex w-18 flex-col items-center rounded-xl border border-line bg-surface/80 px-2 py-3 sm:w-22 sm:py-4"
        >
          <span className="font-display text-2xl tabular-nums text-foreground sm:text-3xl">
            {total < 0 ? "—" : String(value).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[11px] uppercase tracking-widest text-muted">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
