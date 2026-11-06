import { businessHours, hoursLabel } from "@/data/business";

export function HoursPanel() {
  return (
    <div>
      {businessHours.workingDays ? (
        <p>Çalışma günleri: {businessHours.workingDays}</p>
      ) : null}
      <p>{hoursLabel()}</p>
      {businessHours.workingDays ? null : (
        <p className="mt-3 text-sm leading-6 text-ink-soft">
          Çalışma günleri telefonla öğrenilebilir.
        </p>
      )}
    </div>
  );
}
