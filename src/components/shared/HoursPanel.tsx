import { businessHours } from "@/data/business";

export function HoursPanel() {
  const missing: string[] = [];
  if (!businessHours.openingTime) {
    missing.push("açılış saati");
  }
  if (!businessHours.workingDays) {
    missing.push("çalışma günleri");
  }

  return (
    <div>
      {businessHours.workingDays ? (
        <p>Çalışma günleri: {businessHours.workingDays}</p>
      ) : null}
      {businessHours.openingTime ? <p>Açılış: {businessHours.openingTime}</p> : null}
      <p>Kapanış: {businessHours.closingTime}</p>
      {missing.length > 0 ? (
        <p className="mt-3 text-sm leading-6 text-ink-soft">
          {`${missing.join(" ve ").replace(/^./, (letter) => letter.toUpperCase())} telefonla öğrenilebilir.`}
        </p>
      ) : null}
    </div>
  );
}
